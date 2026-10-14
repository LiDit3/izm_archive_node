import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const mediaItems = [
  { type: 'video', title: 'ФАБРИКА // АРХИВНАЯ ХРОНИКА', desc: 'Кадры работы суконной фабрики. Начало XX века. Без звука.', icon: '🎬', locked: false },
  { type: 'video', title: 'ПОСЕЛОК ИЗМАЙЛОВО // 1960-Е', desc: 'Панорамная съёмка посёлка с высоты птичьего полёта.', icon: '🎥', locked: false },
  { type: 'audio', title: 'ГУЛ ТЭЦ // ЗАПИСЬ 2024', desc: 'Загадочный гул из здания электростанции. Записано ночью.', icon: '🎙️', locked: false },
  { type: 'video', title: 'СТЕКЛЯННАЯ ГОРА // ЭКСПЕДИЦИЯ', desc: 'Видеоматериалы экспедиции к месту бывшего стекольного завода.', icon: '📹', locked: true },
  { type: 'audio', title: 'ГОЛОС ЧЕЛНОКА // ФРАГМЕНТ', desc: 'Оцифрованная запись. Помехи, шорохи, обрывки фраз.', icon: '📻', locked: true },
  { type: 'video', title: 'ДОПРОС ШАТРОВА // РЕКОНСТРУКЦИЯ', desc: 'Художественная реконструкция по архивным данным.', icon: '🎞️', locked: true },
];

export default function Media() {
  const [filter, setFilter] = useState<'all' | 'video' | 'audio'>('all');

  const filtered = filter === 'all' ? mediaItems : mediaItems.filter(m => m.type === filter);

  return (
    <>
      <div className="ftp-connect">
        <div><span className="ftp-prompt">ftp&gt;</span> <span className="ftp-cmd">ls /IZMAILOVO/MEDIA/decoded/</span></div>
        <div className="listing-info">200 PORT command successful.</div>
        <div className="listing-info">150 Opening ASCII mode data transfer.</div>
        <div className="listing-info">226 Transfer complete. <span style={{ color: 'var(--amber)' }}>{mediaItems.length} files found.</span></div>
      </div>

      <div className="page-header">
        <div className="stamp" style={{ borderColor: 'var(--amber)', color: 'var(--amber)' }}>МЕДИА</div>
        <div className="header-id">ИЗМАЙЛОВО АРХИВ // ОЦИФРОВАННЫЕ МАТЕРИАЛЫ</div>
        <h1 className="header-title">ДЕКОДИРОВАННЫЕ</h1>
        <div className="header-subtitle">Оцифровка плёнок. Помехи, тени, прошлое.</div>
      </div>

      <div className="filters" style={{ maxWidth: 1000, margin: '30px auto', padding: '0 20px', display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>[ ВСЕ ]</button>
        <button className={`filter-btn ${filter === 'video' ? 'active' : ''}`} onClick={() => setFilter('video')}>[ ВИДЕО ]</button>
        <button className={`filter-btn amber ${filter === 'audio' ? 'active' : ''}`} onClick={() => setFilter('audio')}>[ АУДИО ]</button>
      </div>

      <div className="media-grid">
        {filtered.map((item, i) => (
          <div key={i} className={`media-card ${item.type} ${item.locked ? 'locked' : ''}`}>
            <div className="media-preview">
              {item.locked ? (
                <div className="lock-overlay">
                  <div className="lock-icon">🔒</div>
                  <div className="lock-text">ТРЕБУЕТСЯ КЛЮЧ</div>
                </div>
              ) : (
                <span style={{ fontSize: '4rem' }}>{item.icon}</span>
              )}
            </div>
            <div className="media-info">
              <div className="media-title">{item.title}</div>
              <div className="media-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {filter === 'audio' && (
        <div className="frequency-tuner" style={{ maxWidth: 900, width: '100%', margin: '40px auto', padding: 30, border: '2px dashed var(--amber)', background: 'rgba(255, 176, 0, 0.03)', textAlign: 'center', position: 'relative' }}>
          <div style={{ color: 'var(--amber)', fontSize: '1.5rem', marginBottom: 10, textShadow: 'var(--amber-glow)', letterSpacing: 2 }}>🎛️ ТЮНЕР ЧАСТОТЫ</div>
          <div style={{ color: '#888', fontSize: '1rem', marginBottom: 25 }}>Настройте частоту для перехвата сигнала</div>
          <div style={{ width: '100%', height: 80, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255, 176, 0, 0.3)', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="audio-waveform" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, height: 60, width: '100%', background: 'rgba(0,0,0,0.8)' }}>
              {[1,2,3,4,5,6,7,8].map(n => (
                <div key={n} className="wave-bar" style={{ width: 4, height: `${20 + n * 10}%`, background: 'var(--amber)', animation: `wave 1s infinite ease-in-out`, animationDelay: `${n * 0.1}s` }}></div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 25, padding: 20, background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255, 176, 0, 0.3)', minHeight: 80, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: 10, letterSpacing: 2 }}>ЧАСТОТА: 25%</div>
            <div style={{ fontSize: '1.5rem', color: 'var(--text-color)', textShadow: '0 0 10px currentColor' }}>
              1 signal intercepted. Source: pine tree.
            </div>
          </div>
        </div>
      )}

      <div className="nav-footer">
        <Link to="/" className="nav-btn">← В АРХИВ</Link>
        <Link to="/tour" className="nav-btn">К МАРШРУТУ →</Link>
      </div>

      <Footer type="media" id="MEDIA" subject="Decoded Files" status="ACTIVE" />
    </>
  );
}
