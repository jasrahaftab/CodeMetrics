import React from 'react';

export default function PlatformCard({ number, platform, value, label, badgeText, badgeColor, borderColor }) {
  return (
    <div style={{ ...styles.card, borderTop: `3px solid ${borderColor}` }}>
      <div style={styles.cardTag}>PLATFORM {number}</div>
      <h3 style={styles.cardTitle}>{platform}</h3>
      <div style={{ ...styles.cardValue, color: platform === 'Coding Ninjas' ? 'var(--accent-yellow)' : '#fff' }}>
        {value}
      </div>
      <div style={styles.cardSubtext}>{label}</div>
      <div style={{ ...styles.badge, color: badgeColor }}>{badgeText}</div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'var(--bg-card)',
    padding: '24px',
    borderRadius: '6px',
    border: '1px solid rgba(255,255,255,0.05)'
  },
  cardTag: { fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' },
  cardTitle: { fontSize: '20px', margin: '5px 0', fontWeight: 'bold' },
  cardValue: { fontSize: '36px', fontWeight: 'bold' },
  cardSubtext: { fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' },
  badge: { fontSize: '12px', fontFamily: 'var(--font-mono)' }
};
