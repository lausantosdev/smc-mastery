import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { ConceptsList, ConceptDetail } from './pages/Concepts';
import { Quiz } from './pages/Quiz';
import { Flashcards } from './pages/Flashcards';
import { Challenge } from './pages/Challenge';
import { Simulator } from './pages/Simulator';
import { Glossary } from './pages/Glossary';
import './styles/index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-wrapper">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/conceitos" element={<ConceptsList />} />
            <Route path="/conceitos/:id" element={<ConceptDetail />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/desafio" element={<Challenge />} />
            <Route path="/simulador" element={<Simulator />} />
            <Route path="/glossario" element={<Glossary />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
