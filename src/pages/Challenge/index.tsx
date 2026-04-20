import { useState } from 'react';
import { Link } from 'react-router-dom';
import { QUIZ_QUESTIONS } from '../../data/quizzes';
import { ALL_CONCEPTS } from '../../data/concepts';
import { useLearningStore } from '../../store/learningStore';
import './Challenge.css';

const CHALLENGE_BLOCKS = [
  {
    id: 'block-1',
    title: 'Fundação & Estrutura',
    emoji: '🏦',
    conceptIds: ['institutional-logic', 'market-structure', 'bos', 'choch'],
    description: 'Domine a lógica institucional e a leitura de estrutura de mercado',
    unlockRequirement: 0,
  },
  {
    id: 'block-2',
    title: 'Liquidez & Manipulação',
    emoji: '💧',
    conceptIds: ['liquidity', 'stop-hunt', 'premium-discount', 'sessions'],
    description: 'Entenda como o algoritmo cria e coleta liquidez antes de mover',
    unlockRequirement: 60,
  },
  {
    id: 'block-3',
    title: 'Zonas Institucionais',
    emoji: '📦',
    conceptIds: ['order-block', 'fvg', 'breaker-block', 'daily-bias'],
    description: 'Identifique os pontos de interesse institucional com precisão',
    unlockRequirement: 70,
  },
  {
    id: 'block-4',
    title: 'Setup Completo (8 Passos)',
    emoji: '🏆',
    conceptIds: ['complete-setup', 'risk-management'],
    description: 'O desafio final — execução do setup SMC completo sob pressão',
    unlockRequirement: 80,
  },
];

export function Challenge() {
  const { getGlobalMasteryScore } = useLearningStore();
  const [activeBlock, setActiveBlock] = useState<string | null>(null);
  const [challengeState, setChallengeState] = useState<'idle' | 'active' | 'result'>('idle');
  const [questions, setQuestions] = useState<typeof QUIZ_QUESTIONS>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const globalScore = getGlobalMasteryScore(ALL_CONCEPTS.map((c) => c.id));

  const startChallenge = (blockId: string) => {
    const block = CHALLENGE_BLOCKS.find((b) => b.id === blockId);
    if (!block) return;

    const pool = QUIZ_QUESTIONS.filter((q) => block.conceptIds.includes(q.conceptId));
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 12);

    setActiveBlock(blockId);
    setQuestions(shuffled);
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setLives(3);
    setChallengeState('active');
  };

  const handleSelect = (optId: string) => {
    if (answered) return;
    setSelected(optId);
    setAnswered(true);
    const isCorrect = questions[current].options.find((o) => o.id === optId)?.isCorrect ?? false;
    if (isCorrect) {
      setScore((s) => s + 1);
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        setTimeout(() => setChallengeState('result'), 1200);
      }
    }
  };

  const handleNext = () => {
    if (current + 1 >= questions.length || lives <= 0) {
      setChallengeState('result');
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const block = CHALLENGE_BLOCKS.find((b) => b.id === activeBlock);
  const q = questions[current];
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  if (challengeState === 'active' && q && block) {
    return (
      <div className="challenge-active animate-fade-in">
        <div className="challenge-hud">
          <div className="hud-left">
            <span className="hud-label">🏆 {block.title}</span>
          </div>
          <div className="hud-center">
            <div className="progress-bar" style={{width: 200}}>
              <div className="progress-bar-fill red" style={{width:`${(current/questions.length)*100}%`}} />
            </div>
            <span className="hud-progress">{current + 1}/{questions.length}</span>
          </div>
          <div className="hud-right">
            <div className="hud-lives">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`hud-heart ${i < lives ? 'alive' : 'lost'}`}>❤️</span>
              ))}
            </div>
            <span className="hud-score">✅ {score}</span>
          </div>
        </div>

        <div className="challenge-question-card card">
          <div className="quiz-question-meta">
            <span className={`badge cat-${ALL_CONCEPTS.find(c => c.id === q.conceptId)?.category}`}>
              {ALL_CONCEPTS.find(c => c.id === q.conceptId)?.title}
            </span>
            <span className={`badge badge-${q.difficulty === 'beginner' ? 'green' : q.difficulty === 'intermediate' ? 'yellow' : 'red'}`}>
              {q.difficulty === 'beginner' ? 'Iniciante' : q.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
            </span>
          </div>

          <h2 className="quiz-question-text">{q.question}</h2>

          <div className="quiz-options">
            {q.options.map((opt) => {
              let cls = 'quiz-option';
              if (answered) {
                if (opt.isCorrect) cls += ' correct';
                else if (opt.id === selected && !opt.isCorrect) cls += ' wrong';
              } else if (opt.id === selected) cls += ' selected';
              return (
                <button key={opt.id} className={cls} onClick={() => handleSelect(opt.id)}>
                  <span className="opt-letter">{opt.id.toUpperCase()}</span>
                  <span className="opt-text">{opt.text}</span>
                  {answered && opt.isCorrect && <span className="opt-result">✅</span>}
                  {answered && opt.id === selected && !opt.isCorrect && <span className="opt-result">❌</span>}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={`quiz-feedback animate-slide-in highlight-box ${q.options.find(o=>o.id===selected)?.isCorrect ? 'highlight-green' : 'highlight-red'}`}>
              <p style={{fontSize:'0.9rem', lineHeight:1.7, marginBottom: 'var(--space-3)'}}>{q.explanation}</p>
              <button className="btn btn-primary" onClick={handleNext}>
                {(current + 1 >= questions.length || lives <= 0) ? 'Ver Resultado →' : 'Próxima →'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (challengeState === 'result' && block) {
    const passed = pct >= 75 && lives > 0;
    return (
      <div className="challenge-result animate-scale-in">
        <div className="result-emoji">{passed ? '🏆' : '💪'}</div>
        <h1>{passed ? 'Desafio Superado!' : 'Tente Novamente!'}</h1>
        <div className="result-score-card">
          <div className="result-score">
            <span className="result-score-num">{score}</span>
            <span className="result-score-max">/{questions.length}</span>
          </div>
          <div className="result-pct">{pct}% de acerto</div>
          {!passed && <p style={{marginTop: 8, color:'var(--text-muted)'}}>Precisava de 75% para passar</p>}
        </div>
        <div className="result-actions">
          <button className="btn btn-primary" onClick={() => startChallenge(activeBlock!)}>
            Repetir Desafio
          </button>
          <button className="btn btn-secondary" onClick={() => setChallengeState('idle')}>
            Voltar
          </button>
          {passed && (
            <Link to="/conceitos" className="btn btn-ghost">
              Estudar Mais →
            </Link>
          )}
        </div>
      </div>
    );
  }

  // Setup screen
  return (
    <div className="challenge-setup animate-fade-in">
      <div className="page-header">
        <h1>🏆 Modo Desafio</h1>
        <p>Prove que você domina SMC/ICT sob pressão. Você tem 3 vidas — perca-as e perde o desafio.</p>
      </div>

      <div className="challenge-blocks-grid">
        {CHALLENGE_BLOCKS.map((blk) => {
          const isLocked = globalScore < blk.unlockRequirement;
          const questionCount = QUIZ_QUESTIONS.filter((q) => blk.conceptIds.includes(q.conceptId)).length;

          return (
            <div
              key={blk.id}
              className={`challenge-block-card card ${isLocked ? 'locked' : ''}`}
            >
              <div className="cb-header">
                <span className="cb-emoji">{blk.emoji}</span>
                <div>
                  <h3>{blk.title}</h3>
                  <p style={{marginBottom:0, fontSize:'0.85rem', color:'var(--text-muted)'}}>
                    {blk.description}
                  </p>
                </div>
              </div>

              <div className="cb-concepts">
                {blk.conceptIds.map((cid) => {
                  const c = ALL_CONCEPTS.find((x) => x.id === cid);
                  return c ? (
                    <span key={cid} className={`badge cat-${c.category}`}>
                      {c.emoji} {c.title}
                    </span>
                  ) : null;
                })}
              </div>

              <div className="cb-stats">
                <span className="cb-stat">📝 {questionCount} questões</span>
                <span className="cb-stat">❤️ 3 vidas</span>
                <span className="cb-stat">🎯 75% para passar</span>
              </div>

              <div className="cb-footer">
                {isLocked ? (
                  <div className="cb-locked-msg">
                    🔒 Requer {blk.unlockRequirement}% de maestria global (atual: {globalScore}%)
                  </div>
                ) : (
                  <button
                    className="btn btn-primary"
                    style={{width:'100%'}}
                    onClick={() => startChallenge(blk.id)}
                  >
                    Iniciar Desafio →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
