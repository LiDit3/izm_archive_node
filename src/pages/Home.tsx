import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const easterEggs = [
  '1 signal intercepted on frequency 25%. Source: pine tree.',
  'Analog shift detected. Timeline unstable.',
  'Node 0x666 is watching. Decryption key required.',
  '9 million rubles unaccounted for. Where did they go?',
  'Kulikov exists in two houses simultaneously. Quantum state confirmed.',
  'The shuttle remembers. The pine remembers. Do you?',
  'Warning: 2 anomalies logged. Glass Mountain coordinates locked.',
  'Echo of 1890 detected. Origin: power plant.',
  'File "shatrov_death_1919.txt" conflicts with "vienna_necrology_1932.pdf".',
  'Dolphins and lotuses on brick walls. Ornament decoded.',
  'Signal "ДУМАЙ И БОГАТЕЙ" found in stone. Frequency: 55%.',
  'The loom is still running. Listen carefully.',
];

function formatDate(daysAgo: number) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}`;
}

export default function Home() {
  const [ftpCmd, setFtpCmd] = useState('');
  const [showList, setShowList] = useState(false);
  const [egg] = useState(easterEggs[Math.floor(Math.random() * easterEggs.length)]);
  
  const fullCmd = 'ls /IZMAILOVO/ARCHIVE/';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullCmd.length) {
        setFtpCmd(fullCmd.substring(0, i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowList(true), 300);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  const sectors = [
    { href: '/shatrov', tag: '[DIR]', tagClass: 'tag-dir', name: 'N.YA_SHATROV_ARCHIVE/', desc: 'Досье: купец Н.Я. Шатров (1853–[ЗАСЕКРЕЧЕНО В УЗЛЕ 0x666])', perm: '-rw-r--r--', size: '12.4K', daysAgo: 1, cls: 'premium', type: 'dir' },
    { href: '/chp', tag: '[DIR]', tagClass: 'tag-dir', name: 'POWER_PLANT_LOGS/', desc: 'Первая электростанция Симбирской губернии. Опережение на 24 года. Гул продолжается. [ЧЕРТЕЖИ/ВИДЕО]', perm: '-rw-r-----', size: '8.7K', daysAgo: 3, cls: 'anomaly', type: 'dir' },
    { href: '/tour', tag: '[EXEC]', tagClass: 'tag-exec', name: 'ROUTE_PROTOCOL.exe', desc: 'Маршрут: экскурсия "Эхо машин". Точки интереса. Рекомендуется для пеших исследований. [GPS-ТРЕК]', perm: '-rw-r--r--', size: '24.1K', daysAgo: 0, cls: '', type: 'exec' },
    { href: '/glass-mountain', tag: '[DIR]', tagClass: 'tag-dir', name: 'ANOMALY_GLASS_MOUNTAIN/', desc: 'Оптическое искажение. Графины с бегущими конями. [АРТЕФАКТЫ]', perm: '-rw-r-----', size: '5.2K', daysAgo: 5, cls: 'anomaly', type: 'dir' },
    { href: '/map', tag: '[BIN]', tagClass: 'tag-bin', name: 'TACTICAL_MAP.dat', desc: 'Интерактивная навигация. 16 секторов. MapLibre GL. [MAP]', perm: '-rw-r--r--', size: '24.1K', daysAgo: 0, cls: '', type: 'bin' },
    { href: '/media', tag: '[BIN]', tagClass: 'tag-bin', name: 'DECODED_MEDIA.dat', desc: 'Оцифровка плёнок. Помехи, тени, прошлое. [МЕДИА]', perm: '-rw-r--r--', size: '156.8K', daysAgo: 1, cls: '', type: 'bin' },
    { href: '/secret', tag: '[ENC]', tagClass: 'tag-enc', name: 'CLASSIFIED_NODE_0x666.enc', desc: 'Доступ ограничен протоколом. Ошибки в матрице посёлка. [ОШИБКА ЧТЕНИЯ]', perm: '-rw-------', size: '???', daysAgo: 7, cls: 'restricted secret', type: 'enc' },
  ];

  const counts = { dir: 0, bin: 0, exec: 0, enc: 0, anomaly: 0 };
  sectors.forEach(s => {
    if (s.type === 'dir') counts.dir++;
    if (s.type === 'bin') counts.bin++;
    if (s.type === 'exec') counts.exec++;
    if (s.type === 'enc') counts.enc++;
    if (s.cls.includes('anomaly')) counts.anomaly++;
  });

  return (
    <>
      <div className="container">
        <div id="main-hub" style={{ display: 'block', opacity: 1 }}>
          <header className="main-header">
            <h1 className="glitch" data-text="АРХИВ: ИЗМАЙЛОВО_1890">АРХИВ: ИЗМАЙЛОВО_1890</h1>
            <div className="subtitle">[ Узел памяти // Барышский район, Ульяновская область. ]</div>
            <div className="header-status">
              <span className="status-dot"></span>
              Статус: <span style={{ color: 'var(--text-color)' }}>Рассинхронизация времени обнаружена</span>
            </div>
          </header>

          <div className="ftp-listing">
            <div className="listing-header">
              <span className="ftp-prompt">ftp&gt;</span>
              <span className="ftp-command">{ftpCmd}</span>
              {ftpCmd.length < fullCmd.length && <span className="cursor-blink"></span>}
            </div>
            {showList && (
              <div className="listing-output">
                <div className="listing-info">200 PORT command successful.</div>
                <div className="listing-info">150 Opening ASCII mode data transfer.</div>
              </div>
            )}
          </div>

          {showList && (
            <div className="sectors-list" style={{ opacity: 1, transform: 'none' }}>
              {sectors.map((s, i) => (
                <Link to={s.href} key={i} className={`sector-item ${s.cls}`}>
                  <div className="sector-row">
                    <span className="file-name">
                      <span className={s.tagClass}>{s.tag}</span> {s.name}
                    </span>
                    <span className="file-desc">{s.desc}</span>
                  </div>
                  <div className="file-meta">
                    <span className="item-permissions">{s.perm}</span>
                    <span className="item-owner">archivist</span>
                    <span className="item-size">{s.size}</span>
                    <span className="item-date">{formatDate(s.daysAgo)}</span>
                  </div>
                </Link>
              ))}

              <div className="listing-footer">
                <div className="listing-info">226 Transfer complete.</div>
                <div className="listing-summary">
                  {counts.dir > 0 && `${counts.dir} directories, `}
                  {counts.bin > 0 && `${counts.bin} binaries, `}
                  {counts.exec > 0 && `${counts.exec} executable, `}
                  {counts.enc > 0 && `${counts.enc} encrypted, `}
                  {counts.anomaly > 0 && `${counts.anomaly} anomalies`}
                  .
                </div>
                <div className="listing-egg">
                  &gt; {egg}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer type="home" id="ROOT" subject="IZMAILOVO_LOCAL_NET" status="ONLINE" />
    </>
  );
}
