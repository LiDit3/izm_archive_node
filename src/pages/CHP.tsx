import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function CHP() {
  return (
    <>
      <div className="ftp-connect">
        <div><span className="ftp-prompt">ftp&gt;</span> <span className="ftp-cmd">get /IZMAILOVO/OBJECTS/chp_1890.dat</span></div>
        <div className="listing-info">200 PORT command successful.</div>
        <div className="listing-info">150 Opening BINARY mode data transfer.</div>
        <div className="listing-info">226 Transfer complete. <span style={{ color: 'var(--amber)' }}>8.7K bytes received.</span></div>
      </div>

      <div className="page-header cyan">
        <div className="stamp cyan">АНОМАЛИЯ</div>
        <div className="header-id" style={{ color: 'var(--cyan)' }}>ИЗМАЙЛОВО АРХИВ // ОБЪЕКТ № 12</div>
        <h1 className="header-title" style={{ color: 'var(--cyan)', textShadow: 'var(--cyan-glow)' }}>ТЭЦ 1890 ГОДА</h1>
        <div className="header-subtitle">Первая электростанция Симбирской губернии. Опережение на 24 года.</div>
        <div className="header-quote" style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)' }}>
          "Гул продолжается. Машины молчат, но здание помнит."
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto 20px', padding: '10px 20px', background: 'rgba(0, 229, 255, 0.03)', border: '1px solid rgba(0, 229, 255, 0.2)', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.95rem' }}>
        <span style={{ color: '#888' }}>-rw-r-----</span>
        <span style={{ color: 'var(--amber)', marginLeft: 15 }}>archivist</span>
        <span style={{ color: 'var(--cyan)', marginLeft: 15 }}>8.7K</span>
        <span style={{ color: '#666', marginLeft: 15 }}>chp_1890.dat</span>
      </div>

      <div className="anomaly-block" style={{ borderColor: 'var(--cyan)', background: 'rgba(0, 229, 255, 0.05)' }}>
        <div style={{ padding: '20px 0' }}>
          <p style={{ fontSize: '1.3rem', lineHeight: 1.7, marginBottom: 20 }}>
            В 1890 году, за <span style={{ color: 'var(--red)', fontWeight: 'bold' }}>24 года до электрификации Симбирска</span>, 
            в Измайлово заработала паровая электростанция. Она снабжала энергией фабрику и часть поселковых зданий.
          </p>
          <p style={{ fontSize: '1.3rem', lineHeight: 1.7 }}>
            Были привезены иностранные паровые котлы и локомобиль. Автоматизировано производство: ручные станки заменены на самоткацкие. 
            Николай Яковлевич понимал — без энергии никакого прогресса не будет.
          </p>
        </div>
      </div>

      <div className="stats-panel" style={{ borderColor: 'rgba(0, 229, 255, 0.2)', background: 'rgba(0, 229, 255, 0.03)' }}>
        <div className="stat-item">
          <div className="stat-label">Год запуска</div>
          <div className="stat-value" style={{ color: 'var(--cyan)' }}>1890</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Опережение</div>
          <div className="stat-value" style={{ color: 'var(--red)' }}>24 года</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Тип</div>
          <div className="stat-value">ПАРОВАЯ</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Статус</div>
          <div className="stat-value" style={{ color: 'var(--red)' }}>ГУЛ</div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
        <div className="channel-switcher">
          <button className="channel-btn active">📡 КАНАЛ "ОПЕРАТОР"</button>
          <button className="channel-btn amber">📼 КАНАЛ "ЧЕЛНОК"</button>
        </div>

        <div className="channel-content active">
          <div className="channel-label">📡 КАНАЛ "ОПЕРАТОР" // ТЕХНИЧЕСКИЕ ДАННЫЕ</div>
          <div className="channel-text">
            Здание электростанции расположено в северной части посёлка. Конструкция — кирпичное одноэтажное здание 
            с высокой трубой (частично разрушена). Внутри сохранились фундаменты паровых котлов и следы локомобиля.
            <br /><br />
            Электростанция работала до середины XX века, затем была переведена в резерв. 
            Окончательно выведена из эксплуатации в 1990-х годах.
            <br /><br />
            <span style={{ color: 'var(--red)' }}>⚠️ АНОМАЛИЯ:</span> С 2018 года местные жители сообщают о низкочастотном гуле, 
            исходящем из здания. Акустический анализ 2024 года зафиксировал вибрации на частоте 18.7 Гц, 
            не соответствующие никаким известным источникам в радиусе 5 км.
          </div>
        </div>
      </div>

      <div className="documents" style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
        <div className="doc-title">📄 ЧЕРТЕЖИ И ДОКУМЕНТЫ</div>
        <div className="doc-item" style={{ borderColor: 'var(--cyan)', background: 'rgba(0, 229, 255, 0.05)' }}>
          <span className="doc-icon">📐</span>
          <span className="doc-name" style={{ color: 'var(--cyan)' }}>chp_blueprints_1890_original.tiff</span>
          <span className="doc-size">12.3 MB</span>
        </div>
        <div className="doc-item">
          <span className="doc-icon">📋</span>
          <span className="doc-name">locomobile_specs_dorman_import.pdf</span>
          <span className="doc-size">2.1 MB</span>
        </div>
        <div className="doc-item" style={{ borderColor: 'var(--red)', background: 'rgba(255, 0, 64, 0.05)' }}>
          <span className="doc-icon">🔊</span>
          <span className="doc-name" style={{ color: 'var(--red)' }}>acoustic_analysis_18.7hz_2024.wav</span>
          <span className="doc-size">45.8 MB</span>
        </div>
      </div>

      <div className="nav-footer">
        <Link to="/" className="nav-btn">← В АРХИВ</Link>
        <Link to="/sector/12" className="nav-btn">К СЕКТОРУ 12 →</Link>
      </div>

      <Footer type="sector" id="12" subject="ТЭЦ 1890" status="ANOMALY" />
    </>
  );
}
