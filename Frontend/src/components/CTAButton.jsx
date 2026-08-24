import React, { useState } from 'react';

export default function CTAButton({ children, variant = 'primary', onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isPrimary = variant === 'primary';

  const buttonStyle = {
    backgroundColor: isPrimary ? 'var(--accent-yellow)' : 'transparent',
    color: isPrimary ? '#000000' : 'var(--text-primary)',
    border: isPrimary ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
    padding: '12px 24px',
    fontWeight: '900',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '13px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isPressed
      ? 'scale(0.96)'
      : isHovered
        ? 'translateY(-2px) scale(1.02)'
        : 'none',
    boxShadow: isHovered
      ? isPrimary
        ? '0 0 20px rgba(255, 230, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)'
        : '0 0 15px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3)'
      : 'none',
    borderColor: !isPrimary && isHovered ? 'var(--accent-yellow)' : undefined
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {children}
    </button>
  );
}
