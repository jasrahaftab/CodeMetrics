import React from 'react';
import CTAButton from './CTAButton';
import StatsCard from './StatsCard';
import PlatformCard from './PlatformCard';

export default function Hero() {
  return (
    <section>
      <div style={styles.heroGrid}>
        {/* Left Info Column */}
        <div>
          <div style={styles.tagline}>| LIVE DATA AGGREGATOR DETECTED</div>
          <h1 style={styles.mainTitle}>
            DOMINATE THE<br />
            <span style={styles.yellowGlowText}>CODE MATRIX</span>
          </h1>
          <p style={styles.description}>
            One screen to rule them all. Synchronize your stats, analyze real-time performance,
            and outrank college peers across LeetCode, GeeksforGeeks, and Coding Ninjas.
          </p>

          <div style={styles.buttonRow}>
            <CTAButton variant="primary">LAUNCH DASHBOARD</CTAButton>
            <CTAButton variant="secondary">VIEW LEADERBOARD</CTAButton>
          </div>

          <ul style={styles.featureList}>
            <li><span style={styles.bullet}>•</span> <strong>Analyze Your Progress</strong> — Deep difficulty breakdowns</li>
            <li><span style={styles.bullet}>•</span> <strong>Complete Overview at One Page</strong> — Zero tab switching</li>
            <li><span style={styles.bullet}>•</span> <strong>Compete With Friends</strong> — Branch & year leaderboards</li>
            <li><span style={styles.bullet}>•</span> <strong>Track Your Progress</strong> — Dynamic streaks & history</li>
          </ul>

          <div style={styles.bottomStatsBar}>
            <span>ACTIVE DEVELOPERS: <strong style={{ color: '#fff' }}>14,289</strong></span>
            <span>MATRIX ACCURACY: <strong style={{ color: 'var(--accent-yellow)' }}>98.4%</strong></span>
            <span>UNIVERSITY LEADERBOARDS: <strong style={{ color: 'var(--accent-green)' }}>ONLINE</strong></span>
          </div>
        </div>

        {/* Right Code Column */}
        <div>
          <StatsCard />
        </div>
      </div>

      {/* Lower Cards Section */}
      <div style={styles.cardGrid}>
        <PlatformCard
          number="01"
          platform="LeetCode"
          value="482"
          label="Solved Questions"
          badgeText="▲ Top 5.2% Global"
          badgeColor="var(--accent-green)"
          borderColor="#ffbd2e"
        />
        <PlatformCard
          number="02"
          platform="GeeksforGeeks"
          value="610"
          label="Overall Score"
          badgeText="★ Campus Rank #3"
          badgeColor="var(--accent-yellow)"
          borderColor="var(--accent-green)"
        />
        <PlatformCard
          number="03"
          platform="Coding Ninjas"
          value="Level 8"
          label="Ninja Master"
          badgeText="⚡ 18 Day Streak"
          badgeColor="var(--accent-cyan)"
          borderColor="var(--accent-red)"
        />
      </div>
    </section>
  );
}

const styles = {
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '40px',
    alignItems: 'center',
    marginBottom: '50px'
  },
  tagline: { color: 'var(--accent-yellow)', fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 'bold', marginBottom: '10px' },
  mainTitle: { fontSize: '84px', fontWeight: '900', lineHeight: '1.05', textTransform: 'uppercase' },
  yellowGlowText: { color: 'var(--accent-yellow)', textShadow: '0 0 20px rgba(255, 230, 0, 0.5)' },
  description: { color: 'var(--text-secondary)', fontSize: '14px', margin: '20px 0', maxWidth: '520px' },
  buttonRow: { display: 'flex', gap: '15px', marginBottom: '25px' },
  featureList: { listStyle: 'none', padding: 0, margin: '0 0 30px 0', color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '2' },
  bullet: { color: 'var(--accent-yellow)', marginRight: '8px' },
  bottomStatsBar: { display: 'flex', gap: '20px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' },
  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }
};
