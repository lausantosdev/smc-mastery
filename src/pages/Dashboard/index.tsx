import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLearningStore } from '../../store/learningStore';
import { ALL_CONCEPTS, CATEGORY_LABELS } from '../../data/concepts';
import type { Category } from '../../types';
import './Dashboard.css';

const CATEGORY_EMOJIS: Record<Category, string> = {
  foundation: '🏦',
  structure: '📊',
  liquidity: '💧',
  poi: '📦',
  context: '🧭',
  setup: '🏆',
};

const CATEGORIES: Category[] = ['foundation', 'structure', 'liquidity', 'poi', 'context', 'setup'];

const STUDY_STEPS = [
  { time: '5 min',  icon: '🃏', label: 'Review',        desc: 'Abrir Flashcards → revisar os cartões vencidos (SM-2 seleciona automaticamente)' },
  { time: '15 min', icon: '📚', label: 'Conceito',      desc: 'Responder a pergunta de Active Recall ANTES de ler → depois ler os 3 níveis em ordem' },
  { time: '10 min', icon: '❓', label: 'Quiz',          desc: 'Fazer o Quiz filtrado para o conceito que acabou de estudar (acerto mínimo: 75%)' },
  { time: '5 min',  icon: '💡', label: 'Consolidação',  desc: 'O que eu não sabia? Qual foi meu erro principal? Anotar mentalmente.' },
  { time: '10 min', icon: '🏆', label: 'Desafio',       desc: 'Quando terminar um bloco (4+ conceitos) → fazer o Modo Desafio daquele bloco' },
];

export function Dashboard() {
  const [studyOpen, setStudyOpen] = useState(false);
  const { progress, getConceptProgress, getGlobalMasteryScore, getDueFlashcards } = useLearningStore();
  const conceptIds = ALL_CONCEPTS.map((c) => c.id);
  const globalScore = getGlobalMasteryScore(conceptIds);
  const dueCards = getDueFlashcards();
  const streak = progress.streak;
  const xp = progress.totalXP;

  const masteredCount = conceptIds.filter(
    (id) => getConceptProgress(id).masteryLevel === 'mastered'
  ).length;

  const categoryStats = CATEGORIES.map((cat) => {
    const catConcepts = ALL_CONCEPTS.filter((c) => c.category === cat);
    const catIds = catConcepts.map((c) => c.id);
    const score = getGlobalMasteryScore(catIds);
    return { cat, label: CATEGORY_LABELS[cat], score, emoji: CATEGORY_EMOJIS[cat], total: catConcepts.length };
  });

  const recentConcepts = ALL_CONCEPTS
    .map((c) => ({ c, p: getConceptProgress(c.id) }))
    .filter(({ p }) => p.lastStudied !== null)
    .sort((a, b) => (b.p.lastStudied ?? 0) - (a.p.lastStudied ?? 0))
    .slice(0, 3);

  return (
    <div className="dashboard animate-fade-in">
      {/* Header */}
      <div className="dash-header">
        <div>
          <h1>Seu Progresso</h1>
          <p>Domine o Smart Money Concepts passo a passo</p>
        </div>
        <div className="dash-header-actions">
          {dueCards.length > 0 && (
            <Link to="/flashcards" className="btn btn-primary">
              🃏 Revisar {dueCards.length} flashcard{dueCards.length > 1 ? 's' : ''}
            </Link>
          )}
          <Link to="/conceitos" className="btn btn-secondary">
            Continuar Estudando →
          </Link>
        </div>
      </div>

      {/* Study Guide */}
      <div className="study-guide-card">
        <button className="study-guide-toggle" onClick={() => setStudyOpen((o) => !o)}>
          <div className="sg-toggle-left">
            <span className="sg-icon">📋</span>
            <div>
              <span className="sg-title">Como Estudar com esta Academia</span>
              <span className="sg-subtitle">Sessão ideal · Ordem dos conceitos · Regras do método</span>
            </div>
          </div>
          <span className={`sg-chevron ${studyOpen ? 'open' : ''}`}>▼</span>
        </button>

        {studyOpen && (
          <div className="study-guide-body animate-fade-in">

            {/* Session flow */}
            <div className="sg-section">
              <h4>🕐 Estrutura de uma Sessão (30–45 min)</h4>
              <div className="sg-steps">
                {STUDY_STEPS.map((step, i) => (
                  <div key={i} className="sg-step">
                    <div className="sg-step-header">
                      <span className="sg-step-icon">{step.icon}</span>
                      <div>
                        <span className="sg-step-label">{step.label}</span>
                        <span className="sg-step-time">{step.time}</span>
                      </div>
                    </div>
                    <p className="sg-step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sg-divider" />

            {/* Concept order */}
            <div className="sg-section">
              <h4>📚 Ordem dos 15 Conceitos</h4>
              <div className="sg-order-grid">
                {[
                  { group: 'Fundação', items: ['1. Lógica Institucional'], color: 'var(--purple)' },
                  { group: 'Estrutura', items: ['2. Estrutura de Mercado', '3. BOS', '4. CHoCH'], color: 'var(--blue)' },
                  { group: 'Liquidez', items: ['5. Liquidez', '6. Stop Hunt'], color: 'var(--orange)' },
                  { group: 'POIs', items: ['7. Order Block', '8. FVG', '9. Breaker Block', '10. Mitigation Block'], color: 'var(--green)' },
                  { group: 'Contexto', items: ['11. Premium & Discount', '12. OTE', '13. Sessões', '14. Daily Bias'], color: 'var(--yellow)' },
                  { group: 'Setup', items: ['15. Setup 8 Passos 🏆'], color: 'var(--red)' },
                ].map((g) => (
                  <div key={g.group} className="sg-order-group" style={{ borderColor: g.color }}>
                    <span className="sg-group-label" style={{ color: g.color }}>{g.group}</span>
                    {g.items.map((item) => <span key={item} className="sg-group-item">{item}</span>)}
                  </div>
                ))}
              </div>
            </div>

            <div className="sg-divider" />

            {/* Rules */}
            <div className="sg-section">
              <h4>⚡ Regras do Método</h4>
              <div className="sg-rules">
                <div className="sg-rule sg-rule-green">
                  <span>✅</span>
                  <p><strong>Active Recall primeiro</strong> — sempre tente responder a pergunta do conceito ANTES de ler. Isso é o que fixa na memória de longo prazo.</p>
                </div>
                <div className="sg-rule sg-rule-green">
                  <span>✅</span>
                  <p><strong>Flashcards todo dia</strong> — mesmo 5 minutos. O SM-2 é cumulativo. Pular dias quebra o algoritmo.</p>
                </div>
                <div className="sg-rule sg-rule-yellow">
                  <span>⚠️</span>
                  <p><strong>Só avance com ≥75% no quiz</strong> — se errou muito, releia o nível 2 do conceito antes de continuar.</p>
                </div>
                <div className="sg-rule sg-rule-red">
                  <span>❌</span>
                  <p><strong>Não pule conceitos</strong> — cada conceito é base do próximo. OB sem entender Liquidez = buraco na lógica.</p>
                </div>
              </div>
            </div>

            <div className="sg-tip">
              💡 <strong>Sessão mínima (dias corridos):</strong> só flashcards. É o suficiente para manter o streak e não perder o que aprendeu.
            </div>
          </div>
        )}
      </div>

      {/* Stats Row */}
      <div className="dash-stats-row">
        <div className="stat-card">
          <div className="stat-card-icon">🎯</div>
          <div className="stat-card-value">{globalScore}%</div>
          <div className="stat-card-label">Maestria Global</div>
          <div className="progress-bar" style={{ marginTop: 8 }}>
            <div className="progress-bar-fill green" style={{ width: `${globalScore}%` }} />
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">📚</div>
          <div className="stat-card-value">{masteredCount}<span className="stat-card-total">/{ALL_CONCEPTS.length}</span></div>
          <div className="stat-card-label">Conceitos Dominados</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">🔥</div>
          <div className="stat-card-value">{streak}</div>
          <div className="stat-card-label">Dia{streak !== 1 ? 's' : ''} de Streak</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">⚡</div>
          <div className="stat-card-value">{xp.toLocaleString()}</div>
          <div className="stat-card-label">XP Total</div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="dash-main-grid">
        {/* Category Mastery */}
        <div className="card dash-categories">
          <h3>Progresso por Categoria</h3>
          <div className="category-list">
            {categoryStats.map(({ cat, label, score, emoji, total }) => (
              <div key={cat} className="category-row">
                <div className="category-row-left">
                  <span className="category-emoji">{emoji}</span>
                  <div>
                    <div className="category-name">{label}</div>
                    <div className="category-count">{total} conceitos</div>
                  </div>
                </div>
                <div className="category-row-right">
                  <div className="progress-bar" style={{ width: 120 }}>
                    <div
                      className={`progress-bar-fill ${score >= 80 ? 'green' : score >= 40 ? '' : 'yellow'}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <span className="category-score">{score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="dash-right-col">
          {/* Concept Map */}
          <div className="card dash-concept-map">
            <div className="card-header-row">
              <h3>Mapa de Conceitos</h3>
              <Link to="/conceitos" className="btn btn-ghost" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
                Ver todos →
              </Link>
            </div>
            <div className="concept-grid-mini">
              {ALL_CONCEPTS.map((concept) => {
                const p = getConceptProgress(concept.id);
                return (
                  <Link
                    key={concept.id}
                    to={`/conceitos/${concept.id}`}
                    className={`concept-dot-card ${p.masteryLevel}`}
                    data-tooltip={concept.title}
                  >
                    <span className="concept-dot-emoji">{concept.emoji}</span>
                    <span className="concept-dot-number">{concept.number}</span>
                    <div className={`mastery-dot ${p.masteryLevel}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dash-quick-actions">
            <h3>Ações Rápidas</h3>
            <div className="quick-actions-grid">
              <Link to="/quiz" className="quick-action-card">
                <span className="qa-emoji">❓</span>
                <span className="qa-label">Quiz Rápido</span>
              </Link>
              <Link to="/desafio" className="quick-action-card challenge">
                <span className="qa-emoji">🏆</span>
                <span className="qa-label">Modo Desafio</span>
              </Link>
              <Link to="/simulador" className="quick-action-card">
                <span className="qa-emoji">🖥️</span>
                <span className="qa-label">Simulador</span>
              </Link>
              <Link to="/glossario" className="quick-action-card">
                <span className="qa-emoji">📖</span>
                <span className="qa-label">Glossário</span>
              </Link>
            </div>
          </div>

          {/* Recently Studied */}
          {recentConcepts.length > 0 && (
            <div className="card dash-recent">
              <h3>Estudado Recentemente</h3>
              <div className="recent-list">
                {recentConcepts.map(({ c, p }) => (
                  <Link key={c.id} to={`/conceitos/${c.id}`} className="recent-item">
                    <span className="recent-emoji">{c.emoji}</span>
                    <div className="recent-info">
                      <span className="recent-title">{c.title}</span>
                      <span className="recent-score">{p.masteryScore}% maestria</span>
                    </div>
                    <div className="progress-bar" style={{ width: 60 }}>
                      <div className="progress-bar-fill green" style={{ width: `${p.masteryScore}%` }} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Concept Sequence */}
      <div className="card dash-sequence">
        <div className="card-header-row">
          <h3>Trilha de Aprendizado</h3>
          <span className="badge badge-blue">{ALL_CONCEPTS.length} conceitos · ordem pedagógica</span>
        </div>
        <div className="sequence-list">
          {ALL_CONCEPTS.map((concept, i) => {
            const p = getConceptProgress(concept.id);
            const isLocked = i > 0 && getConceptProgress(ALL_CONCEPTS[i-1].id).masteryScore < 30;
            return (
              <Link
                key={concept.id}
                to={isLocked ? '#' : `/conceitos/${concept.id}`}
                className={`sequence-item ${p.masteryLevel} ${isLocked ? 'locked' : ''}`}
                onClick={isLocked ? (e) => e.preventDefault() : undefined}
              >
                <div className="seq-number">{concept.number}</div>
                <div className="seq-info">
                  <span className="seq-emoji">{concept.emoji}</span>
                  <div>
                    <div className="seq-title">{concept.title}</div>
                    <div className="seq-cat">
                      <span className={`badge badge-sm cat-${concept.category}`}>{CATEGORY_LABELS[concept.category]}</span>
                    </div>
                  </div>
                </div>
                <div className="seq-right">
                  {isLocked ? (
                    <span className="seq-locked">🔒</span>
                  ) : (
                    <>
                      <div className={`mastery-dot ${p.masteryLevel}`} />
                      <span className="seq-score">{p.masteryScore}%</span>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
