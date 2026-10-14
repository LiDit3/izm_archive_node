import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import sectorsData from '../data/sectors.json';

export default function Map() {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectors = sectorsData.sectors;
  const totalSectors = sectors.length;
  const uniqueCount = sectors.filter(s => s.is_unique_page).length;

  const filteredSectors = activeFilter === 'all' 
    ? sectors 
    : sectors.filter(s => s.tags.includes(activeFilter));

  return (
    <>
      <div className="ftp-connect">
        <div><span className="ftp-prompt">ftp&gt;</span> <span className="ftp-cmd">get /IZMAILOVO/MAP/tactical_1890.map</span></div>
        <div className="listing-info">200 PORT command successful.</div>
        <div className="listing-info">150 Opening BINARY mode data transfer.</div>
        <div className="listing-info">226 Transfer complete. <span style={{ color: 'var(--amber)' }}>{totalSectors} sectors loaded.</span></div>
      </div>

      <div className="page-header cyan">
        <div className="stamp cyan">ТАКТИЧЕСКАЯ</div>
        <div className="header-id" style={{ color: 'var(--cyan)' }}>ИЗМАЙЛОВО АРХИВ // УЗЕЛ 1890 // КАРТОГРАФИЯ</div>
        <h1 className="header-title" style={{ color: 'var(--cyan)', textShadow: 'var(--cyan-glow)' }}>ТАКТИЧЕСКАЯ КАРТА</h1>
        <div className="header-subtitle">Интерактивная карта маршрута "Эхо машин" // {totalSectors} секторов // ~3.2 км</div>
        <div className="header-quote" style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)' }}>
          "Все точки маршрута привязаны к реальным координатам. Используйте карту для навигации."
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto 20px', padding: '10px 20px', background: 'rgba(0, 229, 255, 0.03)', border: '1px solid rgba(0, 229, 255, 0.2)', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.95rem' }}>
        <span style={{ color: '#888' }}>-rw-r--r--</span>
        <span style={{ color: 'var(--amber)', marginLeft: 15 }}>archivist</span>
        <span style={{ color: 'var(--cyan)', marginLeft: 15 }}>24.1K</span>
        <span style={{ color: 'var(--amber)', marginLeft: 15 }}>Oct 14</span>
        <span style={{ color: '#666', marginLeft: 15 }}>tactical_1890.map</span>
      </div>

      <div className="map-filters">
        <div className="filters-header">
          <span className="ftp-prompt">ftp&gt;</span>
          <span className="ftp-cmd">ls /IZMAILOVO/MAP/DIRECTORY/</span>
        </div>
        <div className="filters-buttons">
          <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>[ ВСЕ ]</button>
          <button className={`filter-btn ${activeFilter === 'поселок' ? 'active' : ''}`} onClick={() => setActiveFilter('поселок')}>[ ПОСЕЛОК ]</button>
          <button className={`filter-btn ${activeFilter === 'фабрика' ? 'active' : ''}`} onClick={() => setActiveFilter('фабрика')}>[ ФАБРИКА ]</button>
          <button className={`filter-btn ${activeFilter === 'аномалия' ? 'active' : ''}`} onClick={() => setActiveFilter('аномалия')}>[ АНОМАЛИИ ]</button>
          <button className={`filter-btn amber ${activeFilter === 'экспедиция' ? 'active' : ''}`} onClick={() => setActiveFilter('экспедиция')}>[ ЭКСПЕДИЦИЯ ]</button>
        </div>
      </div>

      <div className="map-terminal">
        <div className="terminal-header">
          <div className="terminal-title">◈ ИЗМАЙЛОВО :: УЗЕЛ 1890 :: MAPLIBRE</div>
          <div className="terminal-status">
            NODE: <span style={{ color: 'var(--text-color)' }}>ONLINE</span> ● 
            ТОЧЕК: <span style={{ color: 'var(--amber)' }}>{filteredSectors.length}</span> | 
            МАРШРУТ: <span style={{ color: 'var(--cyan)' }}>3.2 КМ</span>
          </div>
        </div>
        <div className="map-placeholder">
          <div style={{ textAlign: 'center', zIndex: 1 }}>
            <div style={{ fontSize: '3rem', marginBottom: 15 }}>🗺️</div>
            <div style={{ color: 'var(--cyan)', fontSize: '1.2rem', marginBottom: 10 }}>TACTICAL MAP // IZMAILOVO</div>
            <div style={{ color: '#666', fontSize: '0.9rem' }}>53.7685°N, 47.1130°E</div>
            <div style={{ color: '#444', fontSize: '0.8rem', marginTop: 20 }}>
              {filteredSectors.map(s => (
                <div key={s.id} style={{ margin: '3px 0', color: s.is_unique_page ? 'var(--cyan)' : 'var(--text-color)' }}>
                  [{s.id}] {s.title} — {s.coords}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="stats-panel">
        <div className="stat-item">
          <div className="stat-label">Всего секторов</div>
          <div className="stat-value">{totalSectors}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Уникальных объектов</div>
          <div className="stat-value" style={{ color: 'var(--cyan)' }}>{uniqueCount}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Пройдено вами</div>
          <div className="stat-value">0</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Расчётное время</div>
          <div className="stat-value">2.5 Ч</div>
        </div>
      </div>

      <div className="rec-grid" style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
        <div className="rec-item">
          <div className="rec-item-title">Навигация</div>
          <div className="rec-item-text">Используйте мышь или пальцы для перемещения карты. Колёсико мыши для масштабирования.</div>
        </div>
        <div className="rec-item">
          <div className="rec-item-title">Маркеры</div>
          <div className="rec-item-text">🟢 Зелёный — свободный доступ<br />🔵 Циановый — уникальный объект<br />🔴 Красный — требуется ключ</div>
        </div>
        <div className="rec-item">
          <div className="rec-item-title">Попапы</div>
          <div className="rec-item-text">Кликните на маркер, чтобы увидеть информацию о секторе и перейти на его страницу.</div>
        </div>
        <div className="rec-item">
          <div className="rec-item-title">Фильтры</div>
          <div className="rec-item-text">Используйте кнопки сверху для фильтрации секторов по типу: фабрика, социальные объекты, аномалии.</div>
        </div>
      </div>

      <div className="ftp-footer" style={{ borderColor: 'rgba(0, 229, 255, 0.2)', background: 'rgba(0, 229, 255, 0.02)' }}>
        <div className="ftp-footer-line">
          <span className="ftp-prompt">ftp&gt;</span>
          <span className="ftp-cmd">status tactical_1890</span>
        </div>
        <div className="ftp-footer-output">
          Map Type: <span style={{ color: 'var(--cyan)' }}>TACTICAL</span><br />
          Engine: <span style={{ color: 'var(--text-color)' }}>MapLibre GL JS 3.6.2 + Stadia Maps</span><br />
          Sectors Loaded: <span style={{ color: 'var(--amber)' }}>{totalSectors}</span><br />
          Center: <span style={{ color: 'var(--text-color)' }}>53.7685°N, 47.1130°E</span><br />
          ⚠ <span style={{ color: 'var(--red)' }}>АНАЛОГОВЫЙ СДВИГ АКТИВЕН</span>
        </div>
      </div>

      <div className="nav-footer">
        <Link to="/" className="nav-btn">← В АРХИВ</Link>
        <Link to="/tour" className="nav-btn">К СПИСКУ МАРШРУТА →</Link>
      </div>

      <Footer type="map" id="1890" subject="Tactical Map" status="ONLINE" />
    </>
  );
}
