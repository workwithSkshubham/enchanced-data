import React, { useRef, useState, useEffect } from 'react';
import { Layers, Terminal, Sparkles, Network, ArrowUpRight } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export default function HighlightsSection({ onOpenRegister }) {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Hulk-inspired punchy impact counter on scroll intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Read targets from the central event configuration (no duplication)
          const targets = EVENT_DATA.stats.map((stat) => stat.value);
          const duration = 1600;
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // Ease out cubic
            const factor = 1 - Math.pow(1 - progress, 3);

            setCounts(targets.map((val) => Math.round(val * factor)));

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(targets);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Card 3D Tilt & Spotlight Handler
  const handleCardMouseMove = (e, cardEl) => {
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardEl.style.setProperty('--mouse-x', `${x}px`);
    cardEl.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleCardMouseLeave = (cardEl) => {
    cardEl.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  const renderHighlightIcon = (index) => {
    switch (index) {
      case 0:
        return <Terminal size={22} className="text-emerald" />;
      case 1:
        return <Sparkles size={22} className="text-violet" />;
      case 2:
        return <Layers size={22} className="text-spark" />;
      case 3:
      default:
        return <Network size={22} className="text-cyan" />;
    }
  };

  return (
    <section id="highlights" className="section-spacing highlights-section" aria-label="Event Highlights">
      <div className="vault-container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div>
            <div className="section-numeral">02 // ARCHITECTURE</div>
            <h2 className="section-title">VAULT HIGHLIGHTS</h2>
          </div>
          <p className="section-subtitle">
            Four dimensions of creative engineering designed to push every developer to peak capability.
          </p>
        </div>

        {/* 4 Tactile 3D Cards */}
        <div className="highlights-cards-grid">
          {EVENT_DATA.highlights.map((item, idx) => (
            <div
              key={item.id}
              className="card-vault-3d highlight-interactive-card"
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
              onClick={() => {
                if (onOpenRegister) onOpenRegister({ track: item.title });
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (onOpenRegister) onOpenRegister({ track: item.title });
                }
              }}
              aria-label={`Highlight ${item.title} — click to register`}
            >
              <div className="card-top-row">
                <span className="card-numeral font-mono">{item.id}</span>
                <span className="card-icon-pill">{renderHighlightIcon(idx)}</span>
              </div>

              <div className="card-body">
                <span className="card-tag font-mono">{item.tag}</span>
                <h3 className="card-title">{item.title}</h3>
                <h4 className="card-subtitle">{item.subtitle}</h4>
                <p className="card-description">{item.description}</p>
              </div>

              <div className="card-bottom-row">
                <code className="card-code-preview font-mono">{item.codeSnippet}</code>
                <div className="card-arrow-pill">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hulk-inspired Impact Numeric Metric Counters */}
        <div className="vault-metrics-wrapper" ref={statsRef}>
          <div className="metrics-hud-header">
            <span className="hud-tag active">BENCHMARK METRICS // REAL-TIME ESTIMATES</span>
            <span className="mono-subtle">AUDITED BY GFG BU JURY</span>
          </div>

          <div className="metrics-grid">
            {EVENT_DATA.stats.map((stat, idx) => (
              <div key={idx} className={`metric-cell ${hasAnimated ? 'has-impacted' : ''}`}>
                <div className="metric-number-display font-display">
                  <span className="metric-prefix">{stat.prefix}</span>
                  <span className="metric-value">
                    {counts[idx].toLocaleString()}
                  </span>
                  <span className="metric-suffix">{stat.suffix}</span>
                </div>
                <div className="metric-label font-mono">{stat.label}</div>
                <div className="metric-caption">{stat.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
