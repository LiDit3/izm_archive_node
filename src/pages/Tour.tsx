import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import sectorsData from '../data/sectors.json';

function formatDate(daysAgo: number) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}`;
}

export default function Tour() {
  const [activeChannel, setActiveChannel] = useState<'operator' | 'shuttle'>('operator');
  const sectors = sectorsData.sectors;
  const totalSectors = sectors.length;

  return (
    <>
      <div className="container">
        <div className="ftp-listing">
          <div className="listing-header">
            <span className="ftp-prompt">ftp&gt;</span>
            <span className="ftp-command">get /IZMAILOVO/TOURS/echo_of_machines.gpx</span>
          </div>
          <div className="listing-output">
            <div className="listing-info">200 PORT command successful.</div>
            <div className="listing-info">150 Opening BINARY mode data transfer.</div>
            <div className="listing-info">226 Transfer complete. <span style={{ color: 'var(--amber)' }}>{totalSectors} sectors loaded.</span></div>
          </div>
        </div>

        <div className="route-header">
          <div className="stamp amber">МАРШРУТ</div>
          <h1 className="glitch" data-text="ЭХО МАШИН" style={{ color: 'var(--amber)', textShadow: 'var(--amber-glow)' }}>ЭХО МАШИН</h1>
          <div className="route-id">ИЗМАЙЛОВО АРХИВ // МАРШРУТ № 001</div>
          <div className="route-subtitle">Аудио-экскурсия по посёлку Измайлово // {totalSectors} секторов // ~2.5 часа</div>
          <div className="route-quote">
            "Жизнь человека, как полотно, и только от вас зависит, какого качества и красоты оно будет."
          </div>
        </div>

        <div className="stats-panel">
          <div className="stat-item">
            <div className="stat-label">Прогресс маршрута</div>
            <div className="stat-value">0%</div>
            <div className="stat-bar"><div className="stat-bar-fill" style={{ width: '0%' }}></div></div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Пройдено секторов</div>
            <div className="stat-value">0/{totalSectors}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Доступно секторов</div>
            <div className="stat-value">{totalSectors}/{totalSectors}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Расчётное время</div>
            <div className="stat-value">2.5 ЧАСА</div>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
          <div className="channel-switcher">
            <button className={`channel-btn ${activeChannel === 'operator' ? 'active' : ''}`} onClick={() => setActiveChannel('operator')}>📡 КАНАЛ "ОПЕРАТОР"</button>
            <button className={`channel-btn amber ${activeChannel === 'shuttle' ? 'active' : ''}`} onClick={() => setActiveChannel('shuttle')}>📼 КАНАЛ "ЧЕЛНОК"</button>
          </div>

          <div className={`channel-content ${activeChannel === 'operator' ? 'active' : ''}`}>
            <div className="channel-label">📡 КАНАЛ "ОПЕРАТОР" // ИНСТРУКТАЖ</div>
            <div className="channel-text">
              Добро пожаловать в посёлок Измайлово. Перед вами маршрут "Эхо машин" — аудио-экскурсия по историческим объектам бывшей суконной мануфактуры. Маршрут проходит через {totalSectors} ключевых точек, связанных с историей посёлка от основания в XVIII веке до наших дней. Рекомендуется начать с сектора 00 у здания Администрации.
              <br /><br />
              <span style={{ color: 'var(--amber)', fontSize: '1rem' }}>
                ℹ️ Все тексты секторов доступны бесплатно. Полное аудио-погружение с голосом Челнока и архивные документы — по ключу "Архивариус" (299 ₽).
              </span>
            </div>
          </div>

          <div className={`channel-content ${activeChannel === 'shuttle' ? 'active' : ''}`}>
            <div className="channel-label">📼 КАНАЛ "ЧЕЛНОК" // ПРИГЛАШЕНИЕ</div>
            <div className="channel-text amber">
              Ну вот и вы добрались до нас! Я так рад, что вы приехали. Вы только оглянитесь вокруг — какие у нас места красивые, живописные. Посёлок наш в низине стоит, в окружении сосновых лесов, у истока реки Мурки. А я ведь здесь родился, здесь и прожил всю свою жизнь — сначала в лесу деревом был, потом на фабрике челноком трудился, а теперь вот память храню и истории рассказываю. Пойдёмте со мной, я вам покажу всё самое интересное. Только не торопитесь, слушайте внимательно — я ведь многое повидал за свои почти двести лет.
            </div>
          </div>
        </div>

        <div className="ftp-listing">
          <div className="sectors-title">📍 ТОЧКИ МАРШРУТА</div>
          <div className="sectors-list">
            {sectors.map((sector) => {
              const sectorLink = sector.is_unique_page ? sector.unique_url : `/sector/${sector.id}`;
              const uniqueClass = sector.is_unique_page ? 'unique-sector' : '';
              const fileSize = (8 + parseInt(sector.id) * 1.3).toFixed(1) + 'K';
              const fileDate = formatDate(parseInt(sector.id));
              const filePerm = sector.is_unique_page ? '-rw-r-----' : '-rw-r--r--';

              return (
                <Link to={sectorLink} key={sector.id} className={`sector-item ${uniqueClass}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="sector-header-row">
                    {sector.is_unique_page && <span className="unique-badge" style={{ position: 'static', background: 'var(--cyan)', color: 'var(--bg-color)', fontSize: '0.8rem', padding: '3px 10px', borderRadius: 4, fontWeight: 'bold' }}>✨ УНИКАЛЬНЫЙ ОБЪЕКТ</span>}
                    <div className="sector-id" style={{ fontSize: '1.2rem', color: 'var(--amber)', fontWeight: 'bold' }}>СЕКТОР {sector.id}</div>
                    <div className="sector-status free">СВОБОДНЫЙ ДОСТУП</div>
                  </div>
                  <div className="sector-row">
                    <div className="sector-title">{sector.title}</div>
                    <div className="sector-location">📍 {sector.location}</div>
                    <div className="file-desc">{sector.operator.teaser}</div>
                    <div className="sector-audio-note">🎧 Аудио доступно по ключу</div>
                  </div>
                  <div className="file-meta">
                    <span className="item-permissions">{filePerm}</span>
                    <span className="item-owner">archivist</span>
                    <span className="item-size">{fileSize}</span>
                    <span className="item-date">{fileDate}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="listing-footer">
            <div className="listing-info">226 Transfer complete.</div>
            <div className="listing-summary">{totalSectors} files, 1 anomaly detected. Transfer complete.</div>
          </div>
        </div>

        <div className="ftp-manual">
          <div className="rec-title">📋 ИНСТРУКТАЖ ПЕРЕД МАРШРУТОМ</div>
          <div className="rec-grid">
            <div className="rec-item">
              <div className="rec-item-title">Что взять с собой</div>
              <div className="rec-item-text">
                <ul>
                  <li>Заряженный смартфон</li>
                  <li>Наушники (обязательно для аудио)</li>
                  <li>Удобная обувь</li>
                  <li>Вода</li>
                  <li>Хорошее настроение</li>
                </ul>
              </div>
            </div>
            <div className="rec-item">
              <div className="rec-item-title">Сложность маршрута</div>
              <div className="rec-item-text">
                <ul>
                  <li>Расстояние: ~3 км</li>
                  <li>Время: 2-2.5 часа</li>
                  <li>Рельеф: равнинный</li>
                  <li>Доступность: для всех возрастов</li>
                </ul>
              </div>
            </div>
            <div className="rec-item">
              <div className="rec-item-title">Правила маршрута</div>
              <div className="rec-item-text">
                <ul>
                  <li>Слушайте аудио на каждой точке</li>
                  <li>Не сходите с тропы</li>
                  <li>Уважайте частную собственность</li>
                  <li>Не мусорите</li>
                </ul>
              </div>
            </div>
            <div className="rec-item">
              <div className="rec-item-title">Монетизация</div>
              <div className="rec-item-text">
                <ul>
                  <li>✅ Все тексты секторов — бесплатно</li>
                  <li>🎧 Аудио-каналы — по ключу (299 ₽)</li>
                  <li>🔒 Архивные документы — по ключу</li>
                  <li>📊 Прогресс сохраняется автоматически</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="start-section">
          <Link to="/sector/00" className="start-btn">🎧 НАЧАТЬ МАРШРУТ</Link>
          <p style={{ marginTop: 20, fontSize: '1.2rem', color: '#888' }}>
            Рекомендуется начать с сектора 00 у здания Администрации
          </p>
        </div>

        <div className="nav-footer">
          <Link to="/" className="nav-btn">← В АРХИВ</Link>
          <Link to="/shatrov" className="nav-btn">ДОСЬЕ ШАТРОВА →</Link>
        </div>
      </div>

      <Footer type="route" id="001" subject="Эхо машин" status="ACTIVE" />
    </>
  );
}
