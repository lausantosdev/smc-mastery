// ══════════════════════════════════════════════
// TIPOS CENTRAIS — SMC/ICT Mastery
// ══════════════════════════════════════════════

export type Category =
  | 'foundation'
  | 'structure'
  | 'liquidity'
  | 'poi'
  | 'context'
  | 'setup';

export type MasteryLevel = 'none' | 'learning' | 'practicing' | 'mastered';

export type ConceptLevel = 1 | 2 | 3;

export interface Rule {
  text: string;
  valid: boolean; // true = regra válida, false = erro comum / invalida
}

export interface ConceptLevel1 {
  institutionalLogic: string;   // O "porquê" — comportamento institucional
  whatItIs: string;             // Definição clara
  keyInsight: string;           // A sacada principal
}

export interface ConceptLevel2 {
  identificationRules: Rule[];  // Regras de identificação (válido/inválido)
  commonMistakes: string[];     // O que traders erram
  invalidationRules: string[];  // O que invalida o conceito
}

export interface ConceptLevel3 {
  edgeCases: string[];          // Casos extremos / avançados
  confluences: string[];        // Como combinar com outros conceitos
  advancedNotes: string[];      // Notas do ICT / nuances
}

export interface ConceptData {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: Category;
  emoji: string;
  tagline: string;              // Uma frase impactante que resume o conceito
  level1: ConceptLevel1;
  level2: ConceptLevel2;
  level3: ConceptLevel3;
  diagramType: string;          // tipo de diagrama a renderizar no canvas
  relatedConcepts: string[];    // IDs de conceitos relacionados
  quizIds: string[];            // IDs dos quizzes para este conceito
  flashcardIds: string[];       // IDs dos flashcards para este conceito
}

// ══════════════════════════════════════════════
// QUIZ
// ══════════════════════════════════════════════

export type QuizType = 'conceptual' | 'visual' | 'application' | 'differentiation';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string; // por que esta opção está certa ou errada
}

export interface QuizQuestion {
  id: string;
  conceptId: string;
  type: QuizType;
  difficulty: Difficulty;
  level: ConceptLevel;
  question: string;
  context?: string;           // contexto adicional/cenário
  options: QuizOption[];
  explanation: string;        // explicação geral após responder
  institutionalNote?: string; // nota sobre comportamento institucional
}

// ══════════════════════════════════════════════
// FLASHCARDS
// ══════════════════════════════════════════════

export type SRSRating = 'mastered' | 'hesitated' | 'missed';

export interface Flashcard {
  id: string;
  conceptId: string;
  category: Category;
  front: string;              // pergunta / prompt
  back: string;               // resposta principal
  institutionalLogic?: string;// conexão com comportamento institucional
  relatedConcept?: string;    // conceito relacionado
}

// ══════════════════════════════════════════════
// SIMULADOR / CENÁRIOS
// ══════════════════════════════════════════════

export type ScenarioMode = 'study' | 'practice' | 'exam';
export type ScenarioDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface ScenarioAnnotation {
  id: string;
  label: string;
  type: 'ob' | 'fvg' | 'bos' | 'choch' | 'liquidity' | 'sweep' | 'fibonacci' | 'structure';
  // visual positioning é calculado pelo canvas renderer
  x: number;        // posição relativa 0-1
  y: number;        // posição relativa 0-1
  description: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: ScenarioDifficulty;
  conceptsCovered: string[];
  annotations: ScenarioAnnotation[];
  canvasScript: string;   // script que o canvas renderer executará
  challengePoints: number; // pontos no modo desafio
  targetAnnotations: ScenarioAnnotation[]; // O que o usuário deve identificar
}

// ══════════════════════════════════════════════
// DESAFIO (Challenge Mode)
// ══════════════════════════════════════════════

export interface ChallengeResult {
  scenarioId: string;
  score: number;
  maxScore: number;
  correctItems: string[];
  missedItems: string[];
  falsePositives: string[];
  timestamp: number;
}

// ══════════════════════════════════════════════
// PROGRESSO DO USUÁRIO
// ══════════════════════════════════════════════

export interface ConceptProgress {
  conceptId: string;
  unlockedLevels: ConceptLevel[];
  masteryLevel: MasteryLevel;
  masteryScore: number;       // 0-100
  quizzesCompleted: string[];
  quizzesCorrect: string[];
  lastStudied: number | null; // timestamp
  studySessions: number;
}

export interface FlashcardProgress {
  flashcardId: string;
  nextReviewDate: number;     // timestamp
  interval: number;           // dias até próxima revisão
  easeFactor: number;         // fator de facilidade SRS (SM-2)
  repetitions: number;
  lastRating: SRSRating | null;
}

export interface UserProgress {
  conceptProgress: Record<string, ConceptProgress>;
  flashcardProgress: Record<string, FlashcardProgress>;
  challengeResults: ChallengeResult[];
  totalXP: number;
  streak: number;             // dias consecutivos
  lastActivityDate: string;   // YYYY-MM-DD
  joinDate: string;
}
