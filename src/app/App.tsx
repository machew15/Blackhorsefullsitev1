import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { DefensePage } from './pages/DefensePage';
import { PublishingPage } from './pages/PublishingPage';
import { WhitePaperPage } from './pages/WhitePaperPage';
import { InstitutionalPage } from './pages/InstitutionalPage';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/defense" element={<DefensePage />} />
        <Route path="/publishing" element={<PublishingPage />} />
        <Route path="/whitepaper" element={<WhitePaperPage />} />
        <Route path="/institutional" element={<InstitutionalPage />} />
      </Routes>
    </Router>
  );
}
