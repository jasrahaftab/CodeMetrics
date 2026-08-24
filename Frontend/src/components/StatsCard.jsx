import React from 'react';

export default function StatsCard() {
  return (
    <div style={styles.terminalCard}>
      {/* Terminal Bar */}
      <div style={styles.terminalHeader}>
        <div style={styles.terminalDots}>
          <span style={{ ...styles.dot, backgroundColor: '#ff5f56' }}></span>
          <span style={{ ...styles.dot, backgroundColor: '#ffbd2e' }}></span>
          <span style={{ ...styles.dot, backgroundColor: '#27c93f' }}></span>
        </div>
        <div style={styles.terminalTitle}>metrics_stream.ts — LIVE FEED</div>
        <span style={styles.terminalStatus}>CONNECTED</span>
      </div>

      {/* Code / JSON Content */}
      <div style={styles.terminalBody}>
        <div style={styles.codeLine}><span style={styles.keyword}>const</span> <span style={styles.variable}>devMetrics</span> = &#123;</div>
        <div style={styles.indentLine}>
          <span style={styles.key}>handle:</span> <span style={styles.string}>"matrix_ninja"</span>,
        </div>
        <div style={styles.indentLine}>
          <span style={styles.key}>globalRank:</span> <span style={styles.number}>342</span>,
        </div>
        <div style={styles.indentLine}>
          <span style={styles.key}>totalSolved:</span> <span style={styles.number}>1092</span>,
        </div>
        <div style={styles.indentLine}>
          <span style={styles.key}>platforms:</span> [
        </div>
        <div style={styles.doubleIndentLine}>
          &#123; <span style={styles.key}>name:</span> <span style={styles.string}>"LeetCode"</span>, <span style={styles.key}>solved:</span> <span style={styles.number}>482</span>, <span style={styles.key}>tier:</span> <span style={styles.accentText}>"Guardian"</span> &#125;,
        </div>
        <div style={styles.doubleIndentLine}>
          &#123; <span style={styles.key}>name:</span> <span style={styles.string}>"GeeksforGeeks"</span>, <span style={styles.key}>score:</span> <span style={styles.number}>610</span> &#125;,
        </div>
        <div style={styles.doubleIndentLine}>
          &#123; <span style={styles.key}>name:</span> <span style={styles.string}>"CodingNinjas"</span>, <span style={styles.key}>level:</span> <span style={styles.accentText}>"Ninja Master"</span> &#125;
        </div>
        <div style={styles.indentLine}>],</div>
        <div style={styles.indentLine}>
          <span style={styles.key}>syncStatus:</span> <span style={styles.greenText}>"ACTIVE_STREAM"</span>,
        </div>
        <div style={styles.indentLine}>
          <span style={styles.key}>dailyStreak:</span> <span style={styles.yellowText}>"🔥 18 DAYS"</span>
        </div>
        <div style={styles.codeLine}>&#125;;</div>
        <div style={{ ...styles.codeLine, marginTop: '12px' }}>
          <span style={styles.comment}>// Real-time synchronization enabled</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  terminalCard: {
    backgroundColor: '#0d1117',
    border: '1px solid rgba(255, 230, 0, 0.2)',
    borderRadius: '10px',
    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(255, 230, 0, 0.05)',
    overflow: 'hidden',
    fontFamily: 'var(--font-mono, monospace)'
  },
  terminalHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  terminalDots: {
    display: 'flex',
    gap: '6px'
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    display: 'inline-block'
  },
  terminalTitle: {
    fontSize: '11px',
    color: 'var(--text-muted)',
    letterSpacing: '0.5px'
  },
  terminalStatus: {
    fontSize: '10px',
    color: 'var(--accent-green, #10b981)',
    fontWeight: 'bold',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    padding: '2px 8px',
    borderRadius: '4px'
  },
  terminalBody: {
    padding: '15px',
    fontSize: '13px',
    lineHeight: '1.7',
    color: '#e6edf3'
  },
  codeLine: { whiteSpace: 'pre' },
  indentLine: { paddingLeft: '18px', whiteSpace: 'pre' },
  doubleIndentLine: { paddingLeft: '32px', whiteSpace: 'pre' },
  keyword: { color: '#ff7b72', fontWeight: 'bold' },
  variable: { color: '#79c0ff' },
  key: { color: '#d2a8ff' },
  string: { color: '#a5d6ff' },
  number: { color: '#79c0ff' },
  accentText: { color: 'var(--accent-yellow, #ffe600)' },
  greenText: { color: 'var(--accent-green, #10b981)' },
  yellowText: { color: 'var(--accent-yellow, #ffe600)', fontWeight: 'bold' },
  comment: { color: '#6e7681', fontStyle: 'italic' }
};
