import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_CONCEPTS, CATEGORY_LABELS, CONCEPT_MAP } from '../../data/concepts';
import { useLearningStore } from '../../store/learningStore';
import type { ConceptLevel } from '../../types';
import './Concepts.css';

// ── Lista de Conceitos ─────────────────────────────────────────

export function ConceptsList() {
  return (
    <div className="concepts-list animate-fade-in">
      <div className="page-header">
        <h1>📚 Biblioteca de Conceitos</h1>
        <p>15 conceitos SMC/ICT em ordem pedagógica — cada um constrói sobre o anterior</p>
      </div>

      <div className="concepts-grid">
        {ALL_CONCEPTS.map((concept, i) => {
          const prev = i > 0 ? ALL_CONCEPTS[i - 1] : null;

          return (
            <Link
              key={concept.id}
              to={`/conceitos/${concept.id}`}
              className={`concept-card cat-border-${concept.category}`}
            >
              <div className="concept-card-header">
                <div className="concept-number-badge">{String(concept.number).padStart(2,'0')}</div>
                <span className={`badge cat-${concept.category}`}>{CATEGORY_LABELS[concept.category]}</span>
              </div>
              <div className="concept-card-title">
                <span className="concept-big-emoji">{concept.emoji}</span>
                <div>
                  <h3>{concept.title}</h3>
                  <p className="concept-subtitle">{concept.subtitle}</p>
                </div>
              </div>
              <p className="concept-tagline">"{concept.tagline}"</p>
              {prev && (
                <div className="concept-prereq">
                  Requer: <span>{prev.emoji} {prev.title}</span>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── Detalhe do Conceito ────────────────────────────────────────

const LEVEL_LABELS: Record<ConceptLevel, string> = {
  1: '🟡 Nível 1 — Entender',
  2: '🟠 Nível 2 — Identificar',
  3: '🔴 Nível 3 — Dominar',
};

export function ConceptDetail() {
  const { id } = useParams<{ id: string }>();
  const concept = id ? CONCEPT_MAP[id] : null;
  const { getConceptProgress, markConceptStudied, unlockConceptLevel } = useLearningStore();

  const [activeLevel, setActiveLevel] = useState<ConceptLevel>(1);
  const [showRecallPrompt, setShowRecallPrompt] = useState(true);
  const [recallAnswer, setRecallAnswer] = useState('');
  const [recallSubmitted, setRecallSubmitted] = useState(false);

  if (!concept) {
    return (
      <div className="empty-state">
        <div className="icon">🔍</div>
        <h3>Conceito não encontrado</h3>
        <Link to="/conceitos" className="btn btn-primary" style={{marginTop:8}}>← Voltar à lista</Link>
      </div>
    );
  }

  const progress = getConceptProgress(concept.id);
  const idx = ALL_CONCEPTS.findIndex((c) => c.id === concept.id);
  const prev = idx > 0 ? ALL_CONCEPTS[idx - 1] : null;
  const next = idx < ALL_CONCEPTS.length - 1 ? ALL_CONCEPTS[idx + 1] : null;

  const handleMarkStudied = () => {
    markConceptStudied(concept.id);
  };

  const handleUnlockLevel = (lvl: ConceptLevel) => {
    unlockConceptLevel(concept.id, lvl);
    setActiveLevel(lvl);
  };

  const handleRecallSubmit = () => {
    setRecallSubmitted(true);
    setShowRecallPrompt(false);
    markConceptStudied(concept.id);
  };

  const isLevelUnlocked = (lvl: ConceptLevel) => progress.unlockedLevels.includes(lvl);

  return (
    <div className="concept-detail animate-fade-in">
      {/* Breadcrumb */}
      <div className="concept-breadcrumb">
        <Link to="/conceitos">📚 Conceitos</Link>
        <span>/</span>
        <span>{concept.title}</span>
      </div>

      {/* Header */}
      <div className={`concept-detail-header cat-bg-${concept.category}`}>
        <div className="concept-detail-header-left">
          <div className="concept-number-big">{String(concept.number).padStart(2,'0')}</div>
          <div>
            <div className="flex items-center gap-3" style={{marginBottom: 8}}>
              <span className={`badge cat-${concept.category}`}>{CATEGORY_LABELS[concept.category]}</span>
              <div className={`mastery-dot ${progress.masteryLevel}`} />
              <span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>
                {progress.masteryScore}% maestria
              </span>
            </div>
            <h1 style={{marginBottom:4}}>
              {concept.emoji} {concept.title}
            </h1>
            <p style={{color:'var(--text-secondary)', fontSize:'1rem', marginBottom:12}}>
              {concept.subtitle}
            </p>
            <blockquote className="concept-tagline-quote">
              "{concept.tagline}"
            </blockquote>
          </div>
        </div>
        <div className="concept-detail-header-right">
          <div className="mastery-score-display">
            <span className="mastery-score-number">{progress.masteryScore}</span>
            <span className="mastery-score-max">/100</span>
            <div className="mastery-score-label">Maestria</div>
          </div>
        </div>
      </div>

      {/* Active Recall (Nível 1 apenas) */}
      {showRecallPrompt && !recallSubmitted && (
        <div className="recall-box highlight-purple">
          <div className="recall-header">
            <span className="recall-icon">🧠</span>
            <div>
              <strong>Active Recall</strong>
              <p style={{marginBottom:0, fontSize:'0.85rem'}}>
                Antes de ler, responda com suas próprias palavras:
              </p>
            </div>
          </div>
          <p className="recall-question">
            O que você acha que é "{concept.title}"? Escreva o que sabe (ou chute!).
          </p>
          <textarea
            className="recall-textarea"
            placeholder="Escreva aqui... não precisa ser perfeito, o objetivo é ativar seu cérebro antes de ler."
            value={recallAnswer}
            onChange={(e) => setRecallAnswer(e.target.value)}
            rows={3}
          />
          <div className="recall-actions">
            <button
              className="btn btn-primary"
              onClick={handleRecallSubmit}
              disabled={recallAnswer.trim().length < 5}
            >
              Enviar & Ver Explicação →
            </button>
            <button className="btn btn-ghost" onClick={() => setShowRecallPrompt(false)}>
              Pular (já sei)
            </button>
          </div>
        </div>
      )}

      {/* Level Tabs */}
      <div className="level-tabs">
        {([1, 2, 3] as ConceptLevel[]).map((lvl) => {
          const unlocked = isLevelUnlocked(lvl);
          return (
            <button
              key={lvl}
              className={`level-tab ${activeLevel === lvl ? 'active' : ''} ${!unlocked ? 'locked' : ''}`}
              onClick={() => unlocked && setActiveLevel(lvl)}
            >
              {!unlocked && '🔒 '}
              {LEVEL_LABELS[lvl]}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="concept-content">
        {/* NÍVEL 1 */}
        {activeLevel === 1 && (
          <div className="level-content animate-slide-in">
            {/* A Lógica Institucional */}
            <section className="content-section">
              <div className="section-label">
                <span>🏦</span> A Lógica Institucional
              </div>
              <div className="highlight-box highlight-blue institutional-logic-box">
                <p style={{whiteSpace:'pre-line', color:'var(--text-primary)', lineHeight:1.8}}>
                  {concept.level1.institutionalLogic}
                </p>
              </div>
            </section>

            {/* O que é */}
            <section className="content-section">
              <div className="section-label">
                <span>📋</span> O que é
              </div>
              <p style={{whiteSpace:'pre-line', lineHeight:1.8}}>
                {concept.level1.whatItIs}
              </p>
            </section>

            {/* Key Insight */}
            <section className="content-section">
              <div className="section-label">
                <span>💡</span> A Sacada Principal
              </div>
              <div className="highlight-box highlight-green">
                <p style={{color:'var(--text-primary)', fontWeight:500}}>
                  {concept.level1.keyInsight}
                </p>
              </div>
            </section>

            {/* Unlock Level 2 */}
            {!isLevelUnlocked(2) && (
              <div className="unlock-card">
                <div className="unlock-info">
                  <span className="unlock-icon">🔒</span>
                  <div>
                    <strong>Nível 2 — Identificar</strong>
                    <p>Aprenda as regras de identificação, erros comuns e invalidação</p>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUnlockLevel(2)}
                >
                  Desbloquear Nível 2 (+25 XP)
                </button>
              </div>
            )}
          </div>
        )}

        {/* NÍVEL 2 */}
        {activeLevel === 2 && isLevelUnlocked(2) && (
          <div className="level-content animate-slide-in">
            {/* Regras de Identificação */}
            <section className="content-section">
              <div className="section-label"><span>✅</span> Regras de Identificação</div>
              <ul className="rule-list">
                {concept.level2.identificationRules.map((rule, i) => (
                  <li key={i}>
                    <span className="icon">{rule.valid ? '✅' : '❌'}</span>
                    <span style={{color: rule.valid ? 'var(--text-secondary)' : 'var(--red)'}}>
                      {rule.text}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Erros Comuns */}
            <section className="content-section">
              <div className="section-label"><span>⚠️</span> Erros Comuns</div>
              <div className="highlight-box highlight-yellow">
                <ul className="mistake-list">
                  {concept.level2.commonMistakes.map((m, i) => (
                    <li key={i}>⚠️ {m}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Invalidação */}
            <section className="content-section">
              <div className="section-label"><span>🚫</span> O que invalida</div>
              <ul className="rule-list">
                {concept.level2.invalidationRules.map((rule, i) => (
                  <li key={i}>
                    <span className="icon">🚫</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Unlock Level 3 */}
            {!isLevelUnlocked(3) && (
              <div className="unlock-card">
                <div className="unlock-info">
                  <span className="unlock-icon">🔒</span>
                  <div>
                    <strong>Nível 3 — Dominar</strong>
                    <p>Casos extremos, confluências avançadas e notas do ICT</p>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={() => handleUnlockLevel(3)}>
                  Desbloquear Nível 3 (+25 XP)
                </button>
              </div>
            )}
          </div>
        )}

        {/* NÍVEL 3 */}
        {activeLevel === 3 && isLevelUnlocked(3) && (
          <div className="level-content animate-slide-in">
            {/* Edge Cases */}
            <section className="content-section">
              <div className="section-label"><span>🧩</span> Casos Extremos</div>
              <ul className="rule-list">
                {concept.level3.edgeCases.map((ec, i) => (
                  <li key={i}><span className="icon">🔬</span><span>{ec}</span></li>
                ))}
              </ul>
            </section>

            {/* Confluences */}
            <section className="content-section">
              <div className="section-label"><span>🔗</span> Confluências</div>
              <div className="highlight-box highlight-green">
                <ul className="rule-list" style={{gap: 'var(--space-2)'}}>
                  {concept.level3.confluences.map((c, i) => (
                    <li key={i} style={{background:'transparent', padding: '4px 0'}}>
                      <span className="icon">✨</span>
                      <span style={{color:'var(--text-primary)'}}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Advanced Notes */}
            <section className="content-section">
              <div className="section-label"><span>🎓</span> Notas ICT Avançadas</div>
              <div className="highlight-box highlight-purple">
                <ul className="advanced-notes-list">
                  {concept.level3.advancedNotes.map((n, i) => (
                    <li key={i}>📌 {n}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* Locked level message */}
        {activeLevel === 2 && !isLevelUnlocked(2) && (
          <div className="locked-message">
            <span>🔒</span>
            <p>Complete o Nível 1 e clique em "Desbloquear Nível 2"</p>
          </div>
        )}
        {activeLevel === 3 && !isLevelUnlocked(3) && (
          <div className="locked-message">
            <span>🔒</span>
            <p>Complete o Nível 2 e clique em "Desbloquear Nível 3"</p>
          </div>
        )}
      </div>

      {/* Related & Actions */}
      <div className="concept-footer">
        <div className="concept-related">
          <span className="related-label">Conceitos relacionados:</span>
          {concept.relatedConcepts.map((rid) => {
            const rc = CONCEPT_MAP[rid];
            return rc ? (
              <Link key={rid} to={`/conceitos/${rid}`} className="related-tag">
                {rc.emoji} {rc.title}
              </Link>
            ) : null;
          })}
        </div>

        <div className="concept-nav-buttons">
          {prev && (
            <Link to={`/conceitos/${prev.id}`} className="btn btn-secondary">
              ← {prev.emoji} {prev.title}
            </Link>
          )}
          <button className="btn btn-ghost" onClick={handleMarkStudied}>
            ✓ Marcar como estudado (+10 XP)
          </button>
          <Link to={`/quiz?concept=${concept.id}`} className="btn btn-primary">
            Fazer Quiz →
          </Link>
          {next && (
            <Link to={`/conceitos/${next.id}`} className="btn btn-secondary">
              {next.emoji} {next.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
