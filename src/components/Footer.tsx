import { Link } from 'react-router-dom';

interface FooterProps {
  type?: string;
  id?: string;
  subject?: string;
  status?: string;
}

export default function Footer({ type = 'archive', id = 'ROOT', subject = 'IZMAILOVO_LOCAL_NET', status = 'ONLINE' }: FooterProps) {
  const getStatusColor = (s: string) => {
    switch (s) {
      case 'РАССЕКРЕЧЕНО': case 'ACTIVE': case 'ONLINE': return 'var(--amber)';
      case 'RESTRICTED': case 'CLASSIFIED': return 'var(--red)';
      case 'ANOMALY': return 'var(--cyan)';
      default: return 'var(--text-color)';
    }
  };

  return (
    <>
      <div className="system-status-bar">
        <div className="status-item">
          <span className="status-label">TYPE:</span>
          <span className="status-value">{type.toUpperCase()}</span>
        </div>
        <div className="status-item">
          <span className="status-label">ID:</span>
          <span className="status-value">{id}</span>
        </div>
        <div className="status-item">
          <span className="status-label">SUBJECT:</span>
          <span className="status-value">{subject}</span>
        </div>
        <div className="status-item">
          <span className="status-label">STATUS:</span>
          <span className="status-value highlight" style={{ color: getStatusColor(status) }}>{status}</span>
        </div>
        <div className="status-item">
          <span className="status-label">UPDATED:</span>
          <span className="status-value">{new Date().toLocaleDateString('ru-RU')}</span>
        </div>
      </div>

      <div className="footer-quote">
        "No matter where you are, everyone is always connected."<br />
        <span>Даже через сто лет. Измайлово помнит.</span>
      </div>

      <div className="footer-links">
        <Link to="/privacy">Политика конфиденциальности</Link>
        <span>•</span>
        <Link to="/terms">Условия использования</Link>
      </div>
    </>
  );
}
