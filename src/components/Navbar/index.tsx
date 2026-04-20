import { NavLink, useLocation } from 'react-router-dom';
import { useLearningStore } from '../../store/learningStore';
import { ALL_CONCEPTS } from '../../data/concepts';
import './Navbar.css';

const NAV_ITEMS = [
  { path: '/',           label: 'Dashboard',  emoji: '🎯' },
  { path: '/conceitos',  label: 'Conceitos',  emoji: '📚' },
  { path: '/simulador',  label: 'Simulador',  emoji: '🖥️'  },
  { path: '/quiz',       label: 'Quiz',       emoji: '❓'  },
  { path: '/flashcards', label: 'Flashcards', emoji: '🃏' },
  { path: '/desafio',    label: 'Desafio',    emoji: '🏆' },
  { path: '/glossario',  label: 'Glossário',  emoji: '📖' },
];

export function Navbar() {
  const location = useLocation();
  const { progress, getGlobalMasteryScore } = useLearningStore();
  const conceptIds = ALL_CONCEPTS.map((c) => c.id);
  const globalScore = getGlobalMasteryScore(conceptIds);
  const xp = progress.totalXP;
  const streak = progress.streak;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          <span className="logo-icon">📈</span>
          <div className="logo-text">
            <span className="logo-title">SMC/ICT</span>
            <span className="logo-sub">Mastery</span>
          </div>
        </NavLink>

        {/* Nav links */}
        <div className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <span className="nav-emoji">{item.emoji}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Stats */}
        <div className="navbar-stats">
          <div className="stat-pill" data-tooltip="Maestria Global">
            <div className="stat-progress-ring">
              <svg viewBox="0 0 36 36" className="ring-svg">
                <circle className="ring-bg" cx="18" cy="18" r="15.9" />
                <circle
                  className="ring-fill"
                  cx="18" cy="18" r="15.9"
                  strokeDasharray={`${globalScore} ${100 - globalScore}`}
                  strokeDashoffset="25"
                />
              </svg>
              <span className="ring-label">{globalScore}%</span>
            </div>
          </div>

          <div className="stat-pill" data-tooltip="XP Total">
            <span className="stat-icon">⚡</span>
            <span className="stat-value">{xp.toLocaleString()}</span>
          </div>

          <div className="stat-pill" data-tooltip={`Streak: ${streak} dia${streak !== 1 ? 's' : ''}`}>
            <span className="stat-icon">🔥</span>
            <span className="stat-value">{streak}</span>
          </div>
        </div>
      </div>

      {/* Mobile active indicator */}
      <div className="navbar-route-label">
        {NAV_ITEMS.find(i =>
          i.path === '/' ? location.pathname === '/' : location.pathname.startsWith(i.path)
        )?.label ?? ''}
      </div>
    </nav>
  );
}
