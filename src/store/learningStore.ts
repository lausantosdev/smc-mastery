import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  UserProgress,
  ConceptProgress,
  FlashcardProgress,
  SRSRating,
  MasteryLevel,
  ConceptLevel,
  ChallengeResult,
} from '../types';

// ══════════════════════════════════════════════
// Valores padrão
// ══════════════════════════════════════════════

const today = () => new Date().toISOString().split('T')[0];

const defaultConceptProgress = (conceptId: string): ConceptProgress => ({
  conceptId,
  unlockedLevels: [1],
  masteryLevel: 'none',
  masteryScore: 0,
  quizzesCompleted: [],
  quizzesCorrect: [],
  lastStudied: null,
  studySessions: 0,
});

const defaultFlashcardProgress = (flashcardId: string): FlashcardProgress => ({
  flashcardId,
  nextReviewDate: Date.now(),
  interval: 1,
  easeFactor: 2.5,
  repetitions: 0,
  lastRating: null,
});

// ══════════════════════════════════════════════
// SM-2 Spaced Repetition Algorithm
// ══════════════════════════════════════════════

function sm2Update(
  prog: FlashcardProgress,
  rating: SRSRating
): FlashcardProgress {
  // q: 0=missed, 3=hesitated, 5=mastered
  const q = rating === 'mastered' ? 5 : rating === 'hesitated' ? 3 : 0;

  let { easeFactor, interval, repetitions } = prog;

  if (q >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }

  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));

  const nextReviewDate = Date.now() + interval * 24 * 60 * 60 * 1000;

  return { ...prog, easeFactor, interval, repetitions, nextReviewDate, lastRating: rating };
}

// ══════════════════════════════════════════════
// Cálculo de Maestria
// ══════════════════════════════════════════════

function computeMastery(prog: ConceptProgress): { score: number; level: MasteryLevel } {
  const { unlockedLevels, quizzesCompleted, quizzesCorrect, studySessions } = prog;
  
  const levelScore = (unlockedLevels.length / 3) * 40; // 40 pontos por níveis desbloqueados
  const quizScore  = quizzesCompleted.length > 0
    ? (quizzesCorrect.length / quizzesCompleted.length) * 40 // 40 pontos por acertos
    : 0;
  const sessionScore = Math.min(studySessions * 5, 20); // até 20 pontos por sessões

  const score = Math.round(levelScore + quizScore + sessionScore);

  const level: MasteryLevel =
    score >= 85 ? 'mastered' :
    score >= 50 ? 'practicing' :
    score > 0   ? 'learning' : 'none';

  return { score, level };
}

// ══════════════════════════════════════════════
// STORE
// ══════════════════════════════════════════════

interface LearningStore {
  progress: UserProgress;

  // CONCEPT actions
  markConceptStudied: (conceptId: string) => void;
  unlockConceptLevel: (conceptId: string, level: ConceptLevel) => void;

  // QUIZ actions
  recordQuizAnswer: (conceptId: string, quizId: string, correct: boolean) => void;

  // FLASHCARD actions
  rateFlashcard: (flashcardId: string, rating: SRSRating) => void;
  getDueFlashcards: () => string[];

  // CHALLENGE actions
  recordChallenge: (result: ChallengeResult) => void;

  // XP & Streak
  addXP: (amount: number) => void;
  checkStreak: () => void;

  // Computed
  getConceptProgress: (conceptId: string) => ConceptProgress;
  getFlashcardProgress: (flashcardId: string) => FlashcardProgress;
  getGlobalMasteryScore: (conceptIds: string[]) => number;
  getCategoryMastery: (conceptIds: string[], category: string) => number;
  
  // Data Management
  exportData: () => string;
  importData: (dataStr: string) => boolean;
}

export const useLearningStore = create<LearningStore>()(
  persist(
    (set, get) => ({
      progress: {
        conceptProgress: {},
        flashcardProgress: {},
        challengeResults: [],
        totalXP: 0,
        streak: 0,
        lastActivityDate: today(),
        lastActivityDate: today(),
        joinDate: today(),
      },

      // ── Dados / Sincronização ────────────────────────

      exportData: () => {
        return JSON.stringify(get().progress);
      },

      importData: (dataStr) => {
        try {
          const parsed = JSON.parse(dataStr);
          if (parsed && typeof parsed === 'object' && 'totalXP' in parsed && 'conceptProgress' in parsed) {
            set({ progress: parsed });
            return true;
          }
        } catch (e) {
          // console.error("Invalid progress data", e);
        }
        return false;
      },

      // ── Conceitos ──────────────────────────────

      markConceptStudied: (conceptId) => {
        set((state) => {
          const existing = state.progress.conceptProgress[conceptId]
            ?? defaultConceptProgress(conceptId);

          const updated: ConceptProgress = {
            ...existing,
            studySessions: existing.studySessions + 1,
            lastStudied: Date.now(),
          };

          const { score, level } = computeMastery(updated);

          return {
            progress: {
              ...state.progress,
              conceptProgress: {
                ...state.progress.conceptProgress,
                [conceptId]: { ...updated, masteryScore: score, masteryLevel: level },
              },
            },
          };
        });
        get().addXP(10);
        get().checkStreak();
      },

      unlockConceptLevel: (conceptId, level) => {
        set((state) => {
          const existing = state.progress.conceptProgress[conceptId]
            ?? defaultConceptProgress(conceptId);

          if (existing.unlockedLevels.includes(level)) return state;

          const updated: ConceptProgress = {
            ...existing,
            unlockedLevels: [...existing.unlockedLevels, level].sort() as ConceptLevel[],
          };

          const { score, level: masteryLevel } = computeMastery(updated);

          return {
            progress: {
              ...state.progress,
              conceptProgress: {
                ...state.progress.conceptProgress,
                [conceptId]: { ...updated, masteryScore: score, masteryLevel },
              },
            },
          };
        });
        get().addXP(25);
      },

      // ── Quiz ───────────────────────────────────

      recordQuizAnswer: (conceptId, quizId, correct) => {
        set((state) => {
          const existing = state.progress.conceptProgress[conceptId]
            ?? defaultConceptProgress(conceptId);

          const alreadyCompleted = existing.quizzesCompleted.includes(quizId);
          const quizzesCompleted = alreadyCompleted
            ? existing.quizzesCompleted
            : [...existing.quizzesCompleted, quizId];

          const quizzesCorrect = correct && !existing.quizzesCorrect.includes(quizId)
            ? [...existing.quizzesCorrect, quizId]
            : existing.quizzesCorrect;

          const updated = { ...existing, quizzesCompleted, quizzesCorrect };
          const { score, level: masteryLevel } = computeMastery(updated);

          return {
            progress: {
              ...state.progress,
              conceptProgress: {
                ...state.progress.conceptProgress,
                [conceptId]: { ...updated, masteryScore: score, masteryLevel },
              },
            },
          };
        });
        if (correct) get().addXP(15);
        get().checkStreak();
      },

      // ── Flashcards ─────────────────────────────

      rateFlashcard: (flashcardId, rating) => {
        set((state) => {
          const existing = state.progress.flashcardProgress[flashcardId]
            ?? defaultFlashcardProgress(flashcardId);

          return {
            progress: {
              ...state.progress,
              flashcardProgress: {
                ...state.progress.flashcardProgress,
                [flashcardId]: sm2Update(existing, rating),
              },
            },
          };
        });
        const xp = rating === 'mastered' ? 10 : rating === 'hesitated' ? 5 : 2;
        get().addXP(xp);
        get().checkStreak();
      },

      getDueFlashcards: () => {
        const { flashcardProgress } = get().progress;
        const now = Date.now();
        return Object.values(flashcardProgress)
          .filter((fp) => fp.nextReviewDate <= now)
          .map((fp) => fp.flashcardId);
      },

      // ── Challenge ──────────────────────────────

      recordChallenge: (result) => {
        set((state) => ({
          progress: {
            ...state.progress,
            challengeResults: [...state.progress.challengeResults, result],
          },
        }));
        get().addXP(result.score * 2);
        get().checkStreak();
      },

      // ── XP & Streak ────────────────────────────

      addXP: (amount) => {
        set((state) => ({
          progress: { ...state.progress, totalXP: state.progress.totalXP + amount },
        }));
      },

      checkStreak: () => {
        set((state) => {
          const todayStr = today();
          const last = state.progress.lastActivityDate;
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];

          if (last === todayStr) return state; // já contabilizou hoje

          const newStreak = last === yesterdayStr
            ? state.progress.streak + 1
            : 1; // quebrou o streak

          return {
            progress: {
              ...state.progress,
              streak: newStreak,
              lastActivityDate: todayStr,
            },
          };
        });
      },

      // ── Computed ───────────────────────────────

      getConceptProgress: (conceptId) => {
        return get().progress.conceptProgress[conceptId]
          ?? defaultConceptProgress(conceptId);
      },

      getFlashcardProgress: (flashcardId) => {
        return get().progress.flashcardProgress[flashcardId]
          ?? defaultFlashcardProgress(flashcardId);
      },

      getGlobalMasteryScore: (conceptIds) => {
        const { conceptProgress } = get().progress;
        if (conceptIds.length === 0) return 0;
        const total = conceptIds.reduce((sum, id) => {
          return sum + (conceptProgress[id]?.masteryScore ?? 0);
        }, 0);
        return Math.round(total / conceptIds.length);
      },

      getCategoryMastery: (conceptIds, _category) => {
        return get().getGlobalMasteryScore(conceptIds);
      },
    }),
    {
      name: 'smc-mastery-v1',
      partialize: (state) => ({ progress: state.progress }),
    }
  )
);
