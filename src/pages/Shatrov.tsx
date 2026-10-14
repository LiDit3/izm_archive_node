import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function formatDate(daysAgo: number) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}`;
}

export default function Shatrov() {
  const [activeChannel, setActiveChannel] = useState<'archive' | 'shuttle'>('archive');

  return (
    <>
      <div className="ftp-connect">
        <div><span className="ftp-prompt">ftp&gt;</span> <span className="ftp-cmd">get /IZMAILOVO/DOSSIERS/shatrov_1853.txt</span></div>
        <div className="listing-info">200 PORT command successful.</div>
        <div className="listing-info">150 Opening ASCII mode data transfer.</div>
        <div className="listing-info">226 Transfer complete. <span style={{ color: 'var(--amber)' }}>12.4K bytes received.</span></div>
      </div>

      <div className="page-header amber">
        <div className="stamp amber">РАССЕКРЕЧЕНО</div>
        <div className="header-id">АРХИВ ИЗМАЙЛОВО // ЛИЧНОЕ ДЕЛО № 1853-1932</div>
        <h1 className="header-title">ШАТРОВ Н.Я.</h1>
        <div className="header-subtitle">Крупнейший симбирский фабрикант, меценат, статский советник.</div>
        <div style={{ fontSize: '1.1rem', color: 'var(--cyan)' }}>
          РОЖДЕНИЕ: 17 (29) НОЯБРЯ 1853 <span style={{ color: 'var(--red)' }}>// СМЕРТЬ: [ЗАСЕКРЕЧЕНО В УЗЛЕ 0x666]</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto 20px', padding: '10px 20px', background: 'rgba(0, 255, 65, 0.03)', border: '1px solid rgba(0, 255, 65, 0.2)', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.95rem' }}>
        <span style={{ color: '#888' }}>-rw-r--r--</span>
        <span style={{ color: 'var(--amber)', marginLeft: 15 }}>archivist</span>
        <span style={{ color: 'var(--cyan)', marginLeft: 15 }}>12.4K</span>
        <span style={{ color: 'var(--amber)', marginLeft: 15 }}>{formatDate(1)}</span>
        <span style={{ color: '#666', marginLeft: 15 }}>shatrov_1853.txt</span>
      </div>

      <div className="person-card">
        <div className="person-photo">👤</div>
        <div className="person-info">
          <div className="info-row">
            <div className="info-label">Происхождение:</div>
            <div className="info-value">Податное сословие. Отец — Яков Шатров, унтер-офицер.</div>
          </div>
          <div className="info-row">
            <div className="info-label">Образование:</div>
            <div className="info-value">Домашнее. Всего добился сам.</div>
          </div>
          <div className="info-row">
            <div className="info-label">Семья:</div>
            <div className="info-value">Жена: Надежда Васильевна. Приемная дочь: Олимпиада (Липа).</div>
          </div>
          <div className="info-row">
            <div className="info-label">Должность:</div>
            <div className="info-value">Мануфактур-советник (с 1903), статский советник (с 1912).</div>
          </div>
          <div className="info-row">
            <div className="info-label">Активы (1918):</div>
            <div className="info-value" style={{ color: 'var(--red)' }}>{'>'} 65 000 000 царских рублей</div>
          </div>
          <div className="info-row">
            <div className="info-label">Статус:</div>
            <div className="info-value" style={{ color: 'var(--red)', fontStyle: 'italic' }}>
              Эмигрант. Следы теряются в 1932 году...{' '}
              <Link to="/secret" style={{ color: 'var(--cyan)', textDecoration: 'underline', textDecorationStyle: 'dashed' }}>[РАССЕКРЕТИТЬ →]</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="ftp-listing">
        <div className="listing-header">
          <span className="ftp-prompt">ftp&gt;</span>
          <span className="ftp-command">ls /IZMAILOVO/DOSSIERS/shatrov_1853/channels/</span>
        </div>
        <div className="listing-output">
          <div className="listing-info">200 PORT command successful.</div>
          <div className="listing-info">150 Opening ASCII mode data transfer.</div>
        </div>

        <div className="channels">
          <div className="channel-switcher">
            <button className={`channel-btn ${activeChannel === 'archive' ? 'active' : ''}`} onClick={() => setActiveChannel('archive')}>📡 АРХИВ</button>
            <button className={`channel-btn amber ${activeChannel === 'shuttle' ? 'active' : ''}`} onClick={() => setActiveChannel('shuttle')}>📼 ЧЕЛНОК</button>
          </div>

          <div className={`channel-content ${activeChannel === 'archive' ? 'active' : ''}`} id="channel-archive">
            <div className="channel-label">📡 КАНАЛ "АРХИВ" // ОФИЦИАЛЬНАЯ ХРОНИКА</div>
            <div className="channel-text">
              В 1885 году Н.Я. Шатров приобрел убыточную мануфактуру Прибыловского и превратил её в передовую фабрику. Ручные станки были заменены механическими фирмы «Добров и Набгольц». К началу ХХ века на фабрике работало свыше <span className="highlight-number">1 500 человек</span>, мощность увеличилась в 10 раз (до <span className="highlight-number">1,5 млн аршин</span> сукна в год).
              <br /><br />
              Шатров стал одним из крупнейших производителей сукна в губернии, поставляя продукцию в армию, Симбирск, Казань, Саратов и до Порт-Артура. На Нижегородской ярмарке он имел три каменные лавки. Помимо фабрики, ему принадлежали лесопильные и винокуренный заводы, 4200 десятин земли и дома в Симбирске.
            </div>
          </div>

          <div className={`channel-content ${activeChannel === 'shuttle' ? 'active' : ''}`} id="channel-shuttle">
            <div className="channel-label">📼 КАНАЛ "ЧЕЛНОК" // ЧЕЛОВЕК ПО ПРОЗВИЩУ "ЧУДАК"</div>
            <div className="channel-text amber">
              Если бы речь шла только о набивании кармана – это не стоило бы внимания. Но Николай Яковлевич поистине был «чудаком» среди фабрикантов. Он построил больницу, ясли, богадельню и церковно-приходскую школу, став её почетным попечителем.
              <br /><br />
              Зарплата у нас была выше, чем везде. Давали две недели отпуска до родов и пособие 1 рубль 50 копеек! В общественной столовой на 1000 мест рабочие бесплатно питались 3 раза в день. А еще при фабрике был конный двор: любому желающему можно было прийти за навозом и взять в аренду лошадь. Зачем за навозом? А вот это, мил человек, вы сами прогуглите, я интригу сохраню!
              <br /><br />
              А как пели наши хоры! Один из фабричной молодежи, другой из сельских. Как запоют разом – душа на волю просится!
            </div>
          </div>
        </div>

        <div className="listing-footer">
          <div className="listing-info">226 Transfer complete.</div>
          <div className="listing-summary">2 channels, 0 premium, 0 anomaly detected.</div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-year">1853</div>
          <div className="timeline-title">Рождение в военном сословии</div>
          <div className="timeline-text">Родился в семье унтер-офицера Якова Шатрова. Не имея богатых предков, всего добился сам.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">1885</div>
          <div className="timeline-title">Покупка мануфактуры</div>
          <div className="timeline-text">Приобретает сезонное предприятие Прибыловского. Начало модернизации и строительства поселка.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">1895</div>
          <div className="timeline-title">Дом на Венце</div>
          <div className="timeline-text">Приобретает городская усадьба в Симбирске, на Никольской улице. Реконструкция под руководством архитектора Август Шодэ</div>
          <Link to="/secret" style={{ color: 'var(--purple)', textDecoration: 'underline', textDecorationStyle: 'dashed', fontSize: '0.9rem' }}>
            [СЛУХ: Дверь, печатающая деньги →]
          </Link>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">1897</div>
          <div className="timeline-title">Храм и Орден</div>
          <div className="timeline-text">Освящение построенного на его средства храма Казанской иконы Божьей Матери. Пожалован орден св. Станислава 2-й степени.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">15.10.1918</div>
          <div className="timeline-title">Национализация</div>
          <div className="timeline-text">Добровольно передает государству все предприятия, запасы, дома и лавки. Сумма активов оценивается более чем в 65 миллионов рублей.</div>
        </div>
        <div className="timeline-item" style={{ borderLeftColor: 'var(--red)' }}>
          <div className="timeline-year" style={{ color: 'var(--red)', textShadow: 'var(--red-glow)' }}>АВГУСТ 1919</div>
          <div className="timeline-title">Исчезновение и начало легенды</div>
          <div className="timeline-text">
            После кратковременного ареста и освобождения Шатров покидает Измайлово. Официальные биографические источники обрываются.
            <br /><br />
            <span style={{ color: 'var(--amber)', fontStyle: 'italic' }}>"Дальнейшая судьба Н.Я. Шатрова неизвестна"</span> — так пишут большинство краеведческих справочников.
          </div>
        </div>
        <div className="timeline-item" style={{ borderLeftColor: 'var(--red)', opacity: 0.7 }}>
          <div className="timeline-year" style={{ color: 'var(--red)' }}>1925 – 1932</div>
          <div className="timeline-title">Архивная аномалия</div>
          <div className="timeline-text">
            В архивах зафиксированы противоречивые, засекреченные данные: слухи о побеге на Дальний Восток, перехваченные сообщения из Швейцарии и странные визиты в Измайлово людей из окружения Инессы Арманд.
            <br /><br />
            <span style={{ color: 'var(--red)', fontWeight: 'bold' }}>⚠️ ДОСТУП ОГРАНИЧЕН: Полная хроника событий 1919–1932 гг. находится в защищенном узле.</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
        <div style={{ border: '2px dashed var(--red)', background: 'rgba(255, 0, 64, 0.05)', padding: 30, textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', background: 'var(--bg-color)', padding: '0 15px', color: 'var(--red)', fontSize: '1.2rem', letterSpacing: 2, textShadow: 'var(--red-glow)' }}>
            ⚠️ ОБНАРУЖЕНО ПРОТИВОРЕЧИЕ В АРХИВАХ
          </div>
          <h3 style={{ color: 'var(--text-color)', fontSize: '1.8rem', marginBottom: 15 }}>КУДА ИСЧЕЗ ШАТРОВ НА САМОМ ДЕЛЕ?</h3>
          <p style={{ fontSize: '1.3rem', color: '#aaa', marginBottom: 25, lineHeight: 1.6 }}>
            Официальное досье обрывается на 1919 годе. Но в рассекреченных узлах архива хранятся иные данные:<br />
            протоколы допросов, телеграмма Варвары Арманд из Швейцарии (1925) и скан некролога из парижской газеты «Возрождение» (1932).
          </p>
          <Link to="/secret" style={{ display: 'inline-block', background: 'var(--red)', color: 'white', textDecoration: 'none', padding: '15px 40px', fontSize: '1.5rem', fontFamily: "'VT323', monospace", letterSpacing: 2, transition: 'all 0.3s', boxShadow: '0 0 15px var(--red)' }}>
            🔓 ПЕРЕЙТИ К РАССЕКРЕЧЕННЫМ МАТЕРИАЛАМ
          </Link>
        </div>
      </div>

      <div className="ftp-listing">
        <div className="listing-header">
          <span className="ftp-prompt">ftp&gt;</span>
          <span className="ftp-command">ls /IZMAILOVO/DOSSIERS/shatrov_1853/documents/</span>
        </div>
        <div className="listing-output">
          <div className="listing-info">200 PORT command successful.</div>
          <div className="listing-info">150 Opening ASCII mode data transfer.</div>
        </div>

        <div className="documents">
          <div className="doc-title">📄 РАССЕКРЕЧЕННЫЕ ДОКУМЕНТЫ</div>
          <div className="doc-item">
            <span className="doc-icon">📰</span>
            <span className="doc-name">simbirskie_vedomosti_1899_stanislav.jpg</span>
            <span className="doc-size">2.1 MB</span>
          </div>
          <div className="doc-item">
            <span className="doc-icon">📜</span>
            <span className="doc-name">nationalization_protocol_1918_65mln.pdf</span>
            <span className="doc-size">4.5 MB</span>
          </div>
          <div className="doc-item" style={{ borderColor: 'var(--cyan)', background: 'rgba(0, 229, 255, 0.05)' }}>
            <span className="doc-icon">📠</span>
            <span className="doc-name" style={{ color: 'var(--cyan)' }}>intercept_armand_switzerland_1925.txt</span>
            <span className="doc-size">12 KB</span>
          </div>
        </div>

        <div className="listing-footer">
          <div className="listing-info">226 Transfer complete.</div>
          <div className="listing-summary">3 files, 1 classified. Transfer complete.</div>
        </div>
      </div>

      <div className="nav-footer">
        <Link to="/" className="nav-btn">← В АРХИВ</Link>
        <Link to="/sector/02" className="nav-btn">К МАРШРУТУ (СЕКТОР 02) →</Link>
      </div>

      <Footer type="dossier" id="1853-..." subject="Шатров Н.Я." status="РАССЕКРЕЧЕНО" />
    </>
  );
}
