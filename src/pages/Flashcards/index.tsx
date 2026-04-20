import { useState } from 'react';
import { FLASHCARDS } from '../../data/flashcards';
import { ALL_CONCEPTS, CATEGORY_LABELS } from '../../data/concepts';
import { useLearningStore } from '../../store/learningStore';
import type { SRSRating, Category } from '../../types';
import './Flashcards.css';

export function Flashcards() {
  const { rateFlashcard, getFlashcardProgress, getDueFlashcards } = useLearningStore();
  const [flipped, setFlipped] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [sessionCards, setSessionCards] = useState<string[]>([]);
  const [mode, setMode] = useState<'setup' | 'session' | 'done'>('setup');
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [rated, setRated] = useState(0);

  const dueIds = getDueFlashcards();

  const startSession = (type: 'due' | 'all' | 'category') => {
    let pool: string[];
    if (type === 'due') {
      pool = dueIds;
    } else if (type === 'category' && filter !== 'all') {
      pool = FLASHCARDS.filter((f) => f.category === filter).map((f) => f.id);
    } else {
      pool = FLASHCARDS.map((f) => f.id);
    }

    if (pool.length === 0) return;

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setSessionCards(shuffled);
    setCurrentIdx(0);
    setFlipped(false);
    setRated(0);
    setMode('session');
  };

  const handleRate = (rating: SRSRating) => {
    const cardId = sessionCards[currentIdx];
    rateFlashcard(cardId, rating);
    setRated((r) => r + 1);

    if (currentIdx + 1 >= sessionCards.length) {
      setMode('done');
    } else {
      setCurrentIdx((i) => i + 1);
      setFlipped(false);
    }
  };

  const card = sessionCards[currentIdx] ? FLASHCARDS.find((f) => f.id === sessionCards[currentIdx]) : null;
  const concept = card ? ALL_CONCEPTS.find((c) => c.id === card.conceptId) : null;

  if (mode === 'setup') {
    const categories = Array.from(new Set(FLASHCARDS.map((f) => f.category))) as Category[];

    return (
      <div className="flashcards-setup animate-fade-in">
        <div className="page-header">
          <h1>🃏 Flashcards com Spaced Repetition</h1>
          <p>Revisão inteligente baseada no algoritmo SM-2 — estuda o que você mais precisa</p>
        </div>

        {dueIds.length > 0 && (
          <div className="due-alert highlight-box highlight-green">
            <span>🎯</span>
            <div>
              <strong>{dueIds.length} flashcard{dueIds.length > 1 ? 's' : ''} para revisar hoje</strong>
              <p style={{marginBottom:0, fontSize:'0.85rem'}}>O algoritmo SM-2 selecionou esses cartões para revisão baseado no seu histórico.</p>
            </div>
            <button className="btn btn-green" onClick={() => startSession('due')}>
              Revisar Agora →
            </button>
          </div>
        )}

        <div className="flashcard-options-grid">
          <div className="card fc-option-card">
            <h3>🃏 Todos os Flashcards</h3>
            <p>{FLASHCARDS.length} cartões · estuda tudo em ordem aleatória</p>
            <button className="btn btn-secondary" onClick={() => startSession('all')}>
              Iniciar Sessão Completa
            </button>
          </div>

          <div className="card fc-option-card">
            <h3>📁 Por Categoria</h3>
            <select
              className="quiz-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value as Category | 'all')}
            >
              <option value="all">Selecione uma categoria</option>
              {categories.map((cat) => {
                const count = FLASHCARDS.filter((f) => f.category === cat).length;
                return (
                  <option key={cat} value={cat}>
                    {CATEGORY_LABELS[cat]} ({count} cartões)
                  </option>
                );
              })}
            </select>
            <button
              className="btn btn-secondary"
              onClick={() => startSession('category')}
              disabled={filter === 'all'}
            >
              Estudar Categoria
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="card fc-stats">
          <h3>Progresso do Deck</h3>
          <div className="fc-stats-grid">
            {FLASHCARDS.slice(0, 12).map((fc) => {
              const p = getFlashcardProgress(fc.id);
              const isDue = p.nextReviewDate <= Date.now();
              return (
                <div
                  key={fc.id}
                  className={`fc-dot ${p.lastRating ?? 'new'} ${isDue ? 'due' : ''}`}
                  data-tooltip={fc.front.substring(0, 50) + '...'}
                />
              );
            })}
            {FLASHCARDS.length > 12 && (
              <div className="fc-dot-more">+{FLASHCARDS.length - 12}</div>
            )}
          </div>
          <div className="fc-legend">
            <span className="fc-dot mastered" /> Dominado
            <span className="fc-dot hesitated" style={{marginLeft:12}} /> Hesitou
            <span className="fc-dot missed" style={{marginLeft:12}} /> Errou
            <span className="fc-dot new" style={{marginLeft:12}} /> Novo
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'done') {
    return (
      <div className="fc-done animate-scale-in">
        <div className="result-emoji">🎉</div>
        <h1>Sessão Completa!</h1>
        <p>{rated} cartões revisados</p>
        <div className="result-actions">
          <button className="btn btn-primary" onClick={() => setMode('setup')}>
            Voltar ao Menu
          </button>
          <button className="btn btn-secondary" onClick={() => startSession('all')}>
            Nova Sessão
          </button>
        </div>
      </div>
    );
  }

  if (!card || !concept) return null;

  return (
    <div className="flashcard-session animate-fade-in">
      {/* Progress */}
      <div className="fc-session-header">
        <span className="fc-progress-text">
          {currentIdx + 1} / {sessionCards.length}
        </span>
        <div className="progress-bar" style={{flex:1}}>
          <div
            className="progress-bar-fill green"
            style={{width:`${(currentIdx/sessionCards.length)*100}%`}}
          />
        </div>
        <button className="btn btn-ghost" style={{fontSize:'0.8rem'}} onClick={() => setMode('setup')}>
          Encerrar
        </button>
      </div>

      {/* Card */}
      <div
        className={`flashcard-3d ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="flashcard-face flashcard-front">
          <div className="fc-face-meta">
            <span className={`badge cat-${card.category}`}>{CATEGORY_LABELS[card.category]}</span>
            <span className="fc-concept-name">{concept.emoji} {concept.title}</span>
          </div>
          <div className="fc-question">{card.front}</div>
          <div className="fc-hint">Clique para revelar →</div>
        </div>

        <div className="flashcard-face flashcard-back">
          <div className="fc-answer">
            <pre className="fc-answer-text">{card.back}</pre>
          </div>
          {card.institutionalLogic && (
            <div className="fc-institutional">
              <span className="fc-inst-label">🏦 Lógica Institucional</span>
              <p>{card.institutionalLogic}</p>
            </div>
          )}
        </div>
      </div>

      {/* Rating */}
      {flipped && (
        <div className="fc-rating animate-slide-in">
          <p className="fc-rating-label">Como foi?</p>
          <div className="fc-rating-buttons">
            <button className="fc-rate-btn missed" onClick={() => handleRate('missed')}>
              <span>❌</span>
              <span>Errei</span>
              <span className="rate-interval">+1 dia</span>
            </button>
            <button className="fc-rate-btn hesitated" onClick={() => handleRate('hesitated')}>
              <span>😅</span>
              <span>Hesitei</span>
              <span className="rate-interval">+2 dias</span>
            </button>
            <button className="fc-rate-btn mastered" onClick={() => handleRate('mastered')}>
              <span>✅</span>
              <span>Dominei</span>
              <span className="rate-interval">+7 dias</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
