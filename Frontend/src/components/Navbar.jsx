import React from 'react';
import CTAButton from './CTAButton';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoGroup}>
        <span style={styles.logoSymbol}>&gt;_</span>
        <span style={styles.logoText}>CODEMATRIX</span>
        <div style={styles.statusPill}>
          <span style={styles.statusDot}></span>
          SYSTEM READY
        </div>
      </div>
      <div style={styles.navActions}>
        <CTAButton variant="secondary">LOGIN</CTAButton>
        <CTAButton variant="primary">CONNECT</CTAButton>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0 35px 0'
  },
  logoGroup: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoSymbol: { color: 'var(--accent-yellow)', fontWeight: 'bold', fontSize: '22px' },
  logoText: { color: 'var(--text-primary)', fontWeight: '900', fontSize: '20px', letterSpacing: '1px' },
  statusPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '4px 12px',
    fontSize: '11px',
    color: 'var(--accent-yellow)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-mono)'
  },
  statusDot: { width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-yellow)' },
  navActions: { display: 'flex', gap: '20px', alignItems: 'center' }
};
