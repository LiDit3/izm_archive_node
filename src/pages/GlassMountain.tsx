import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function GlassMountain() {
  return (
    <>
      <div className="ftp-connect">
        <div><span className="ftp-prompt">ftp&gt;</span> <span className="ftp-cmd">get /IZMAILOVO/EXPEDITIONS/glass_mountain.dat</span></div>
        <div className="listing-info">200 PORT command successful.</div>
        <div className="listing-info">150 Opening BINARY mode data transfer.</div>
        <div className="listing-info">226 Transfer complete. <span style={{ color: 'var(--amber)' }}>5.2K bytes received.</span></div>
      </div>

      <div className="page-header red">
        <div className="stamp" style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)' }}>АРТЕФАКТ</div>
        <div className="header-id" style={{ color: 'var(--red)' }}>ИЗМАЙЛОВО АРХИВ // ЭКСПЕДИЦИЯ</div>
        <h1 className="header-title" style={{ color: 'var(--red)', textShadow: 'var(--red-glow)' }}>СТЕКЛЯННАЯ ГОРА</h1>
        <div className="header-subtitle" style={{ color: 'var(--cyan)' }}>Оптическое искажение. Графины с бегущими конями.</div>
      </div>

      <div className="anomaly-block">
        <div style={{ padding: '20px 0' }}>
          <p style={{ fontSize: '1.3rem', lineHeight: 1.7, marginBottom: 20 }}>
            Недалеко от улицы Пригородной в лесу находится возвышенность, известная как <strong style={{ color: 'var(--amber)' }}>Стеклянная гора</strong>. 
            Исторические данные указывают на наличие здесь стекольного завода, функционировавшего параллельно с суконной мануфактурой Прибыловского.
          </p>
          <p style={{ fontSize: '1.3rem', lineHeight: 1.7 }}>
            До сих пор у подножия горы находят разноцветные стеклянные слитки. Они словно светятся изнутри, 
            особенно когда солнце сквозь листву пробивается. Старожилы утверждают, что мастера-стеклодувы создавали 
            здесь уникальные изделия — графины, внутри которых при наливании воды «бегут кони».
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
        <div className="channel-switcher">
          <button className="channel-btn active">📡 КАНАЛ "ОПЕРАТОР"</button>
          <button className="channel-btn amber">📼 КАНАЛ "ЧЕЛНОК"</button>
        </div>

        <div className="channel-content active">
          <div className="channel-label">📡 КАНАЛ "ОПЕРАТОР" // НАУЧНЫЙ ПОДХОД</div>
          <div className="channel-text">
            Археологические исследования 2024 года подтвердили наличие культурного слоя XVII-XVIII веков на территории возвышенности. 
            Обнаружены фрагменты тиглей (форм для плавки стекла), куски шлака и остатки печных конструкций. 
            Радиоуглеродный анализ органических остатков датировал активность печи периодом 1720-1780 гг.
            <br /><br />
            Оптическое явление, описываемое местными жителями как «мерцание», может быть объяснено 
            преломлением света в кристаллических включениях кварца, содержащихся в породе горы.
          </div>
        </div>
      </div>

      <div className="documents" style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
        <div className="doc-title">📄 МАТЕРИАЛЫ ЭКСПЕДИЦИИ</div>
        <div className="doc-item">
          <span className="doc-icon">🗺️</span>
          <span className="doc-name">glass_mountain_topo_map_1850.jpg</span>
          <span className="doc-size">3.2 MB</span>
        </div>
        <div className="doc-item" style={{ borderColor: 'var(--cyan)', background: 'rgba(0, 229, 255, 0.05)' }}>
          <span className="doc-icon">🔬</span>
          <span className="doc-name" style={{ color: 'var(--cyan)' }}>spectral_analysis_samples_2024.pdf</span>
          <span className="doc-size">1.8 MB</span>
        </div>
        <div className="doc-item">
          <span className="doc-icon">📷</span>
          <span className="doc-name">expedition_photos_glass_fragments.zip</span>
          <span className="doc-size">24.5 MB</span>
        </div>
      </div>

      <div className="nav-footer">
        <Link to="/" className="nav-btn">← В АРХИВ</Link>
        <Link to="/map" className="nav-btn">К КАРТЕ →</Link>
      </div>

      <Footer type="expedition" id="GLASS" subject="Glass Mountain" status="ANOMALY" />
    </>
  );
}
