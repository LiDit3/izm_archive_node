import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="top-session-bar">
        <span>USER: <span className="highlight">anonymous</span></span>
        <span>NODE: IZMAILOVO_LOCAL_NET</span>
        <span>LAST LOGIN: {new Date().toLocaleDateString('ru-RU')} {new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</span>
      </div>

      <nav className={`site-nav ${isOpen ? 'open' : ''}`} id="site-nav">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>🏠 АРХИВ</NavLink>
        <NavLink to="/tour" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>МАРШРУТ</NavLink>
        <NavLink to="/map" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>КАРТА</NavLink>
        <NavLink to="/shatrov" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>ШАТРОВ</NavLink>
        <NavLink to="/media" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>МЕДИА</NavLink>
        <NavLink to="/secret" className={({ isActive }) => `nav-link nav-secret ${isActive ? 'active' : ''}`}>🔒 СЕКРЕТЫ</NavLink>

        <button 
          className={`nav-burger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Открыть меню"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </nav>
    </>
  );
}
