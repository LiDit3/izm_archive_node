import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import sectorsData from '../data/sectors.json';

export default function Sector() {
  const { id } = useParams();
  const [activeChannel, setActiveChannel] = useState<'operator' | 'shuttle'>('operator');
  
  const sector = sectorsData.sectors.find(s => s.id === id);

  if (!sector) {
    return (
      <>
        <div className="page-header red">
          <h1 className="header-title" style={{ color: 'var(--red)' }}>404</h1>
          <div className="header-subtitle">Сектор не найден в архиве.</div>
        </div>
        <div className="nav-footer">
          <Link to="/" className="nav-btn">← В АРХИВ</Link>
          <Link to="/tour" className="nav-btn">К МАРШРУТУ →</Link>
        </div>
        <Footer type="error" id="404" subject="NOT FOUND" status="ERROR" />
      </>
    );
  }

  const prevSector = sectorsData.sectors.find(s => parseInt(s.id) === parseInt(sector.id) - 1);
  const nextSector = sectorsData.sectors.find(s => parseInt(s.id) === parseInt(sector.id) + 1);

  return (
    <>
      <div className="ftp-connect">
        <div><span className="ftp-prompt">ftp&gt;</span> <span className="ftp-cmd">get /IZMAILOVO/SECTORS/sector_{sector.id}.dat</span></div>
        <div className="listing-info">200 PORT command successful.</div>
        <div className="listing-info">150 Opening ASCII mode data transfer.</div>
        <div className="listing-info">226 Transfer complete. <span style={{ color: 'var(--amber)' }}>Sector {sector.id} loaded.</span></div>
      </div>

      <div className="page-header amber">
        <div className="header-id">ИЗМАЙЛОВО АРХИВ // СЕКТОР {sector.id}</div>
        <h1 className="header-title" style={{ fontSize: '2.5rem' }}>{sector.title}</h1>
        <div className="header-subtitle">📍 {sector.location}</div>
        <div style={{ fontSize: '1rem', color: 'var(--cyan)', marginTop: 10 }}>КООРДИНАТЫ: {sector.coords}</div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto 20px', padding: '10px 20px', background: 'rgba(0, 255, 65, 0.03)', border: '1px solid rgba(0, 255, 65, 0.2)', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.95rem' }}>
        <span style={{ color: '#888' }}>-rw-r--r--</span>
        <span style={{ color: 'var(--amber)', marginLeft: 15 }}>archivist</span>
        <span style={{ color: 'var(--cyan)', marginLeft: 15 }}>{(8 + parseInt(sector.id) * 1.3).toFixed(1)}K</span>
        <span style={{ color: '#666', marginLeft: 15 }}>sector_{sector.id}.dat</span>
      </div>

      <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
        <div className="channel-switcher">
          <button className={`channel-btn ${activeChannel === 'operator' ? 'active' : ''}`} onClick={() => setActiveChannel('operator')}>📡 КАНАЛ "ОПЕРАТОР"</button>
          <button className={`channel-btn amber ${activeChannel === 'shuttle' ? 'active' : ''}`} onClick={() => setActiveChannel('shuttle')}>📼 КАНАЛ "ЧЕЛНОК"</button>
        </div>

        <div className={`channel-content ${activeChannel === 'operator' ? 'active' : ''}`}>
          <div className="channel-label">📡 КАНАЛ "ОПЕРАТОР" // ОФИЦИАЛЬНЫЙ ТЕКСТ</div>
          <div className="channel-text">
            {sector.operator.full}
          </div>
        </div>

        <div className={`channel-content ${activeChannel === 'shuttle' ? 'active' : ''}`}>
          <div className="channel-label">📼 КАНАЛ "ЧЕЛНОК" // АЛЬТЕРНАТИВНЫЙ ВЗГЛЯД</div>
          <div className="channel-text amber">
            {sector.shuttle.full}
          </div>
        </div>
      </div>

      <div className="interactive-prompt" style={{ maxWidth: 900, margin: '20px auto', padding: 20, border: '1px dashed var(--amber)', textAlign: 'center', background: 'rgba(0,0,0,0.5)' }}>
        <div style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginBottom: 15 }}>🎧 АУДИО-КАНАЛ ЗАБЛОКИРОВАН</div>
        <div style={{ fontSize: '1rem', color: '#888', marginBottom: 15 }}>Получите ключ "Архивариус" для прослушивания аудио-версии</div>
        <button className="audio-locked-btn" style={{ display: 'block', width: '100%', padding: 15, marginTop: 15, background: 'rgba(255, 176, 0, 0.05)', border: '2px dashed var(--amber)', color: 'var(--amber)', fontFamily: "'VT323', monospace", fontSize: '1.2rem', cursor: 'pointer' }}>
          🔓 КУПИТЬ КЛЮЧ (299 ₽)
        </button>
      </div>

      <div className="nav-footer">
        {prevSector ? (
          <Link to={`/sector/${prevSector.id}`} className="nav-btn">← СЕКТОР {prevSector.id}</Link>
        ) : (
          <Link to="/tour" className="nav-btn">← К МАРШРУТУ</Link>
        )}
        {nextSector ? (
          <Link to={`/sector/${nextSector.id}`} className="nav-btn">СЕКТОР {nextSector.id} →</Link>
        ) : (
          <Link to="/tour" className="nav-btn">К МАРШРУТУ →</Link>
        )}
      </div>

      <Footer type="sector" id={sector.id} subject={sector.title.split('//')[1]?.trim() || sector.title} status="ACTIVE" />
    </>
  );
}
