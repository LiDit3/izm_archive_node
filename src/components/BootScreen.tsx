import { useState, useEffect } from 'react';

const bootLines = [
  'BIOS v3.14 // IZMAILOVO_LOCAL_NET',
  'Memory check... 640K OK',
  'Detecting storage devices...',
  'HDD0: ARCHIVE_DRIVE [1890 MB]',
  'Loading kernel modules...',
  'Mounting /dev/memory ... OK',
  'Starting network daemon...',
  'Connecting to NODE: IZMAILOVO_LOCAL_NET',
  'Handshake complete.',
  'Decrypting archive index...',
  'Loading sector data... 16 sectors found',
  'Checking anomaly signatures... 2 detected',
  'WARNING: Timeline desynchronization detected',
  'Initializing FTP daemon... OK',
  '',
  '═══════════════════════════════════════',
  '  АРХИВ: ИЗМАЙЛОВО_1890',
  '  Узел памяти // Барышский район',
  '  Ульяновская область',
  '═══════════════════════════════════════',
  '',
  'System ready. Welcome, researcher.',
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= bootLines.length) {
      setTimeout(onComplete, 800);
      return;
    }

    const line = bootLines[currentLine];
    
    if (currentChar >= line.length) {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 50);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentChar(prev => prev + 1);
    }, 15);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, onComplete]);

  const currentText = bootLines[currentLine]?.substring(0, currentChar) || '';

  return (
    <div id="boot-screen">
      <div className="boot-text">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {currentLine < bootLines.length && (
          <>
            {currentText}
            <span className="cursor"></span>
          </>
        )}
      </div>
    </div>
  );
}
