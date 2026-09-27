import React, { useState, useEffect } from 'react';

/**
 * VaultLoader — Short, cinematic introductory sequence
 * 01: SYSTEM INITIALIZING
 * 02: ENERGY CORE ONLINE
 * 03: VAULT UNLOCKED
 * Automatically transitions to hero in ~2 seconds. Supports instant skip and respects reduced motion.
 */
export default function VaultLoader({ onComplete }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(12);

  const steps = [
    { num: '01', title: 'SYSTEM INITIALIZING', detail: 'SEC_NET // BENNETT_UNIV' },
    { num: '02', title: 'ENERGY CORE ONLINE', detail: 'VIBRANIUM MATRIX STABILIZED' },
    { num: '03', title: 'VAULT UNLOCKED', detail: 'ACCESS GRANTED // WELCOME' },
  ];

  useEffect(() => {
    // Check reduced motion - skip immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => {
      setStepIndex(1);
      setProgress(58);
    }, 650);

    const t2 = setTimeout(() => {
      setStepIndex(2);
      setProgress(100);
    }, 1300);

    const t3 = setTimeout(() => {
      onComplete();
    }, 2000);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <aside className="vault-loader-overlay" aria-label="Loading Vault Interface" role="status">
      <div className="vault-loader-content">
        {/* Top HUD Telemetry */}
        <div className="loader-hud-header">
          <span className="loader-hud-dot" />
          <span className="loader-hud-mono">INITIALIZING VAULT PROTOCOL // GFG-BU-2026</span>
        </div>

        {/* Center Geometric Glyph */}
        <div className="loader-glyph-box">
          <svg viewBox="0 0 120 120" className="loader-glyph-svg">
            <circle cx="60" cy="60" r="48" stroke="rgba(25, 230, 140, 0.2)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
            <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" stroke="#19E68C" strokeWidth="1.5" fill="none" className="loader-hex-anim" />
            <polygon points="60,32 84,60 60,88 36,60" stroke="#8B5CF6" strokeWidth="1.5" fill="none" />
            <circle cx="60" cy="60" r="5" fill="#19E68C" className="loader-core-pulse" />
          </svg>
        </div>

        {/* Current State Indicator */}
        <div className="loader-state-info">
          <div className="loader-phase-tag">
            PHASE {steps[stepIndex].num} / 03
          </div>
          <h2 className="loader-phase-title">{steps[stepIndex].title}</h2>
          <p className="loader-phase-detail">{steps[stepIndex].detail}</p>
        </div>

        {/* Segmented Progress Bar */}
        <div className="loader-progress-track">
          <div className="loader-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {/* Skip Action */}
        <button
          onClick={onComplete}
          className="loader-skip-btn"
          aria-label="Skip introduction sequence"
        >
          SKIP SEQUENCE [ESC]
        </button>
      </div>
    </aside>
  );
}
