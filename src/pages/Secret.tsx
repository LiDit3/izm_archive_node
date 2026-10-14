import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Secret() {
  const [decrypted, setDecrypted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [consoleLines, setConsoleLines] = useState<string[]>([]);

  const startDecryption = () => {
    setDecrypted(false);
    setProgress(0);
    setConsoleLines([]);
    
    const lines = [
      '> Initializing decryption protocol...',
      '> Loading key: "Архивариус"',
      '> Verifying hash: 0x666...',
      '> Bypassing firewall... OK',
      '> Decrypting node_0x666.enc...',
      '> WARNING: Timeline anomaly detected',
      '> Cross-referencing archives...',
      '> DECRYPTION COMPLETE',
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setConsoleLines(prev => [...prev, lines[i]]);
        setProgress(((i + 1) / lines.length) * 100);
        i++;
      } else {
        clearInterval(interval);
        setDecrypted(true);
      }
    }, 400);
  };

  return (
    <>
      <div className="ftp-connect">
        <div><span className="ftp-prompt">ftp&gt;</span> <span className="ftp-cmd">get /IZMAILOVO/SECRET/node_0x666.enc</span></div>
        <div className="listing-info">200 PORT command successful.</div>
        <div className="listing-info">150 Opening BINARY mode data transfer.</div>
        <div className="listing-info">226 Transfer complete. <span style={{ color: 'var(--red)' }}>ENCRYPTED FILE DETECTED.</span></div>
      </div>

      <div className="page-header red">
        <div className="header-id" style={{ color: 'var(--red)' }}>⚠ WARNING: UNAUTHORIZED ACCESS DETECTED</div>
        <h1 className="header-title" style={{ color: 'var(--red)', textShadow: 'var(--red-glow)' }}>УЗЕЛ 0x666</h1>
        <div className="header-subtitle" style={{ color: 'var(--purple)', textShadow: 'var(--purple-glow)' }}>СЕКРЕТНЫЕ МАТЕРИАЛЫ // ДОСТУП ОГРАНИЧЕН</div>
      </div>

      <div className="decrypt-console">
        <div className="console-line">{'> SYSTEM: Classified node detected.'}</div>
        <div className="console-line">{'> PROTOCOL: Decryption requires key "Архивариус"'}</div>
        <div className="console-line">{'> STATUS: Awaiting authorization...'}</div>
        
        <div style={{ marginTop: 20 }}>
          <button 
            onClick={startDecryption}
            style={{
              background: 'var(--red)',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              fontFamily: "'VT323', monospace",
              fontSize: '1.3rem',
              cursor: 'pointer',
              letterSpacing: 2,
              boxShadow: '0 0 15px var(--red)',
            }}
          >
            🔓 НАЧАТЬ ДЕШИФРАЦИЮ
          </button>
        </div>

        {consoleLines.length > 0 && (
          <div style={{ marginTop: 20 }}>
            {consoleLines.map((line, i) => (
              <div key={i} className={`console-line ${line.includes('COMPLETE') ? 'success' : line.includes('WARNING') ? 'error' : ''}`}>
                {line}
              </div>
            ))}
            <div className="progress-bar-container" style={{ width: '100%', height: 20, background: 'rgba(255, 0, 64, 0.1)', border: '1px solid var(--red)', marginTop: 15, position: 'relative', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'var(--red)', width: `${progress}%`, boxShadow: 'var(--red-glow)', transition: 'width 0.1s' }}></div>
            </div>
          </div>
        )}
      </div>

      {decrypted && (
        <>
          <div className="secret-file">
            <div className="file-header">
              <span className="file-id">FILE #0x666-A</span>
              <span className="file-status">РАССЕКРЕЧЕНО</span>
            </div>
            <h3 className="file-title">ПРОТОКОЛ ДОПРОСА // 1919</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
              Из показаний бывшего приказчика фабрики: "Николай Яковлевич вызвал меня вечером 15 августа. Сказал: <span className="redacted">«Завтра меня заберут, но я уйду по своей воле»</span>. 
              Передал мне ключ от сейфа и наказал сжечь некоторые бумаги. Но я не посмел... Ключ я спрятал в стене дома управляющего."
            </p>
            <div className="anomaly-note">
              ⚠️ АНОМАЛИЯ: Ключ до сих пор не найден. При обследовании стен дома на ул. Советская, 17 в 2023 году обнаружена полость, но она пуста.
            </div>
          </div>

          <div className="secret-file">
            <div className="file-header">
              <span className="file-id">FILE #0x666-B</span>
              <span className="file-status">РАССЕКРЕЧЕНО</span>
            </div>
            <h3 className="file-title">ТЕЛЕГРАММА ИЗ ШВЕЙЦАРИИ // 1925</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
              Перехваченное сообщение от <span className="redacted">В.С. Арманд</span> адресату в Москву:
              <br /><br />
              "Виделась с ним в <span className="redacted">Лозанне</span>. Состояние тяжёлое, но духом не падает. 
              Говорит о <span className="redacted">Измайлово</span> каждый день. Просил передать: 'Пусть помнят, что фабрика — это не стены, а люди.'"
            </p>
            <div className="anomaly-note">
              ⚠️ АНОМАЛИЯ: Адресат сообщения до сих пор не идентифицирован. Предположительно — связан с кругами Инессы Арманд.
            </div>
          </div>

          <div className="secret-file">
            <div className="file-header">
              <span className="file-id">FILE #0x666-C</span>
              <span className="file-status">РАССЕКРЕЧЕНО</span>
            </div>
            <h3 className="file-title">НЕКРОЛОГ // ГАЗЕТА «ВОЗРОЖДЕНИЕ» // 1932</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
              Парижская эмигрантская газета «Возрождение» опубликовала краткий некролог:
              <br /><br />
              "Скончался в <span className="redacted">Вене</span> Николай Яковлевич Ш., бывший симбирский фабрикант и меценат. 
              При жизни он был известен своей благотворительностью и странностями. 
              Говорили, что он мог <span className="redacted">предсказывать будущее по узору на тканях</span>."
            </p>
            <div className="anomaly-note">
              ⚠️ ПРОТИВОРЕЧИЕ: Дата смерти в некрологе не совпадает с датой в официальных российских архивах. Разница — 13 лет.
            </div>
          </div>

          <div className="anomaly-block">
            <div className="anomaly-grid">
              <div className="anomaly-item">
                <div className="anomaly-item-title">Квантовый Куликов</div>
                <p style={{ color: '#aaa' }}>Управляющий Куликов одновременно числится проживающим в двух домах. Квантовая суперпозиция?</p>
                <div className="anomaly-meter"><div className="anomaly-meter-fill"></div></div>
              </div>
              <div className="anomaly-item">
                <div className="anomaly-item-title">Гул ТЭЦ</div>
                <p style={{ color: '#aaa' }}>Жители слышат гул из здания электростанции, не работавшей с 1990-х годов.</p>
                <div className="anomaly-meter"><div className="anomaly-meter-fill"></div></div>
              </div>
              <div className="anomaly-item">
                <div className="anomaly-item-title">Дверь-генератор</div>
                <p style={{ color: '#aaa' }}>В доме Шатрова на Венце есть дверь, за которой, по слухам, обнаружены следы печати денег.</p>
                <div className="anomaly-meter"><div className="anomaly-meter-fill"></div></div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="nav-footer">
        <Link to="/" className="nav-btn">← В АРХИВ</Link>
        <Link to="/shatrov" className="nav-btn">ДОСЬЕ ШАТРОВА →</Link>
      </div>

      <Footer type="secret" id="0x666" subject="CLASSIFIED" status="RESTRICTED" />
    </>
  );
}
