import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QUIZ_QUESTIONS } from '../../data/quizzes';
import { ALL_CONCEPTS } from '../../data/concepts';
import { useLearningStore } from '../../store/learningStore';
import type { QuizQuestion as QQ } from '../../types';
import './Quiz.css';

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function Quiz() {
  const [params] = useSearchParams();
  const conceptId = params.get('concept');
  const { recordQuizAnswer } = useLearningStore();

  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<QQ[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [filterConcept, setFilterConcept] = useState(conceptId ?? 'all');

  const startQuiz = () => {
    const pool = filterConcept === 'all'
      ? QUIZ_QUESTIONS
      : QUIZ_QUESTIONS.filter((q) => q.conceptId === filterConcept);
    const picked = shuffle(pool).slice(0, Math.min(10, pool.length));
    setQuestions(picked);
    setStarted(true);
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  const q = questions[current];

  const handleSelect = (optId: string) => {
    if (answered) return;
    setSelected(optId);
    setAnswered(true);
    const isCorrect = q.options.find((o) => o.id === optId)?.isCorrect ?? false;
    if (isCorrect) setScore((s) => s + 1);
    recordQuizAnswer(q.conceptId, q.id, isCorrect);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const correctOpt = answered ? q?.options.find((o) => o.isCorrect) : null;
  const selectedOpt = answered && selected ? q?.options.find((o) => o.id === selected) : null;

  if (!started) {
    return (
      <div className="quiz-start animate-fade-in">
        <div className="page-header">
          <h1>❓ Quiz Adaptativo</h1>
          <p>Teste seu conhecimento e receba feedback detalhado em cada resposta</p>
        </div>

        <div className="card quiz-config">
          <h3>Configurar Quiz</h3>

          <div className="quiz-filter-group">
            <label className="filter-label">Filtrar por conceito:</label>
            <select
              className="quiz-select"
              value={filterConcept}
              onChange={(e) => setFilterConcept(e.target.value)}
            >
              <option value="all">Todos os conceitos ({QUIZ_QUESTIONS.length} perguntas)</option>
              {ALL_CONCEPTS.map((c) => {
                const count = QUIZ_QUESTIONS.filter((q) => q.conceptId === c.id).length;
                return count > 0 ? (
                  <option key={c.id} value={c.id}>
                    {c.emoji} {c.title} ({count} perguntas)
                  </option>
                ) : null;
              })}
            </select>
          </div>

          <div className="quiz-info-grid">
            <div className="quiz-info-item">
              <span className="qi-icon">📝</span>
              <span className="qi-label">10 perguntas por rodada</span>
            </div>
            <div className="quiz-info-item">
              <span className="qi-icon">🎯</span>
              <span className="qi-label">Feedback detalhado em cada resposta</span>
            </div>
            <div className="quiz-info-item">
              <span className="qi-icon">⚡</span>
              <span className="qi-label">+15 XP por resposta correta</span>
            </div>
            <div className="quiz-info-item">
              <span className="qi-icon">🏦</span>
              <span className="qi-label">Lógica institucional em cada explicação</span>
            </div>
          </div>

          <button className="btn btn-primary" style={{width:'100%', padding: 'var(--space-4)'}} onClick={startQuiz}>
            Começar Quiz →
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-result animate-scale-in">
        <div className="result-header">
          <div className="result-emoji">
            {pct >= 80 ? '🏆' : pct >= 60 ? '😊' : '💪'}
          </div>
          <h1>{pct >= 80 ? 'Excelente!' : pct >= 60 ? 'Bom trabalho!' : 'Continue praticando!'}</h1>
        </div>

        <div className="result-score-card">
          <div className="result-score">
            <span className="result-score-num">{score}</span>
            <span className="result-score-max">/{questions.length}</span>
          </div>
          <div className="result-pct">{pct}% de acerto</div>
          <div className="progress-bar" style={{marginTop: 'var(--space-4)'}}>
            <div className={`progress-bar-fill ${pct >= 70 ? 'green' : ''}`} style={{width:`${pct}%`}} />
          </div>
        </div>

        <div className="result-xp">
          ⚡ +{score * 15} XP ganhos
        </div>

        <div className="result-actions">
          <button className="btn btn-primary" onClick={startQuiz}>Novo Quiz</button>
          <button className="btn btn-secondary" onClick={() => setStarted(false)}>Configurar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-active animate-fade-in">
      {/* Progress */}
      <div className="quiz-progress-bar">
        <div className="quiz-progress-info">
          <span>Pergunta {current + 1} de {questions.length}</span>
          <span className="quiz-score-inline">✅ {score} corretas</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill green" style={{width:`${((current)/questions.length)*100}%`}} />
        </div>
      </div>

      {/* Question */}
      <div className="quiz-question-card card">
        <div className="quiz-question-meta">
          <span className={`badge cat-${ALL_CONCEPTS.find(c => c.id === q.conceptId)?.category}`}>
            {ALL_CONCEPTS.find(c => c.id === q.conceptId)?.title}
          </span>
          <span className={`badge badge-${q.difficulty === 'beginner' ? 'green' : q.difficulty === 'intermediate' ? 'yellow' : 'red'}`}>
            {q.difficulty === 'beginner' ? 'Iniciante' : q.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
          </span>
        </div>

        <h2 className="quiz-question-text">{q.question}</h2>

        {q.context && (
          <div className="quiz-context highlight-box highlight-blue">
            <p style={{color:'var(--text-secondary)', marginBottom:0}}>{q.context}</p>
          </div>
        )}

        <div className="quiz-options">
          {q.options.map((opt) => {
            let cls = 'quiz-option';
            if (answered) {
              if (opt.isCorrect) cls += ' correct';
              else if (opt.id === selected && !opt.isCorrect) cls += ' wrong';
            } else if (opt.id === selected) {
              cls += ' selected';
            }
            return (
              <button key={opt.id} className={cls} onClick={() => handleSelect(opt.id)}>
                <span className="opt-letter">{opt.id.toUpperCase()}</span>
                <span className="opt-text">{opt.text}</span>
                {answered && opt.id === selected && (
                  <span className="opt-result">{opt.isCorrect ? '✅' : '❌'}</span>
                )}
                {answered && opt.isCorrect && opt.id !== selected && (
                  <span className="opt-result">✅</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {answered && (
        <div className={`quiz-feedback animate-slide-in highlight-box ${selectedOpt?.isCorrect ? 'highlight-green' : 'highlight-red'}`}>
          <div className="feedback-header">
            <span className="feedback-icon">{selectedOpt?.isCorrect ? '✅' : '❌'}</span>
            <strong>{selectedOpt?.isCorrect ? 'Correto!' : 'Incorreto'}</strong>
          </div>

          {!selectedOpt?.isCorrect && selectedOpt && (
            <div className="feedback-wrong-explanation">
              <span className="feedback-sub">Por que você errou:</span>
              <p>{selectedOpt.explanation}</p>
            </div>
          )}

          <div className="feedback-correct-explanation">
            <span className="feedback-sub">Explicação:</span>
            <p>{correctOpt?.explanation}</p>
          </div>

          <div className="feedback-general">
            <span className="feedback-sub">📋 Contexto completo:</span>
            <p>{q.explanation}</p>
          </div>

          {q.institutionalNote && (
            <div className="feedback-institutional highlight-box highlight-blue" style={{marginTop:'var(--space-3)'}}>
              <span className="feedback-sub">🏦 Lógica Institucional:</span>
              <p style={{color:'var(--text-primary)'}}>{q.institutionalNote}</p>
            </div>
          )}

          <button className="btn btn-primary" style={{marginTop:'var(--space-4)', alignSelf:'flex-end'}} onClick={handleNext}>
            {current + 1 >= questions.length ? 'Ver Resultado →' : 'Próxima →'}
          </button>
        </div>
      )}
    </div>
  );
}
