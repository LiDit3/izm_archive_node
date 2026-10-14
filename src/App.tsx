import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import BootScreen from './components/BootScreen';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Shatrov from './pages/Shatrov';
import Tour from './pages/Tour';
import Map from './pages/Map';
import Media from './pages/Media';
import Secret from './pages/Secret';
import Sector from './pages/Sector';
import GlassMountain from './pages/GlassMountain';
import CHP from './pages/CHP';
import './styles/main.css';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <Router>
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}
      
      <div style={{ opacity: booted ? 1 : 0, transition: 'opacity 0.5s' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shatrov" element={<Shatrov />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/map" element={<Map />} />
          <Route path="/media" element={<Media />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="/sector/:id" element={<Sector />} />
          <Route path="/glass-mountain" element={<GlassMountain />} />
          <Route path="/chp" element={<CHP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 className="glitch" data-text="404" style={{ fontSize: '5rem', color: 'var(--red)', textShadow: 'var(--red-glow)' }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: '#888', marginTop: 20 }}>СЕКТОР НЕ НАЙДЕН В АРХИВЕ</p>
      <p style={{ fontSize: '1.2rem', color: '#666', marginTop: 10 }}>Возможно, он был стёрт из временной линии.</p>
      <a href="/" style={{ display: 'inline-block', marginTop: 30, padding: '12px 30px', border: '2px solid var(--text-color)', color: 'var(--text-color)', textDecoration: 'none', fontSize: '1.3rem' }}>
        ← ВЕРНУТЬСЯ В АРХИВ
      </a>
    </div>
  );
}

export default App;
