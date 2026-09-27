import React, { useState } from 'react';
import { BrainCircuit, ShieldAlert, Cpu, Sparkles, Check, ArrowRight } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export default function TracksSection({ onSelectTrackForRegister }) {
  const [activeTrackId, setActiveTrackId] = useState(EVENT_DATA.tracks[0].id);

  const getTrackIcon = (id) => {
    switch (id) {
      case 'neural-matrices':
        return <BrainCircuit size={24} className="text-emerald" />;
      case 'cryptographic-vaults':
        return <ShieldAlert size={24} className="text-violet" />;
      case 'quantum-systems':
        return <Cpu size={24} className="text-cyan" />;
      default:
        return <Sparkles size={24} className="text-spark" />;
    }
  };

  const handleCardMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="tracks" className="section-spacing tracks-section" aria-label="Hackathon Tracks">
      <div className="vault-container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div>
            <div className="section-numeral">03 // DOMAINS</div>
            <h2 className="section-title">CHOOSE YOUR TRACK</h2>
          </div>
          <p className="section-subtitle">
            Compete across four specialized technical arenas. Build for grand prizes and track-specific bounties.
          </p>
        </div>

        {/* 4 Tracks Asymmetric Swiss Grid */}
        <div className="tracks-grid">
          {EVENT_DATA.tracks.map((track, idx) => {
            const isSelected = activeTrackId === track.id;

            return (
              <div
                key={track.id}
                className={`card-vault-3d track-card ${isSelected ? 'is-selected' : ''}`}
                onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                onClick={() => setActiveTrackId(track.id)}
              >
                {/* Header Row */}
                <div className="track-card-header">
                  <div className="track-icon-wrapper">
                    {getTrackIcon(track.id)}
                  </div>
                  <span className="track-index font-mono">TRACK // 0{idx + 1}</span>
                </div>

                {/* Title & Category */}
                <div className="track-category font-mono">{track.category}</div>
                <h3 className="track-title">{track.title}</h3>
                <p className="track-desc">{track.description}</p>

                {/* Topics Tags */}
                <div className="track-topics-cloud">
                  {track.topics.map((t, i) => (
                    <span key={i} className="topic-badge">
                      <span className="topic-dot" />
                      {t}
                    </span>
                  ))}
                </div>

                {/* Challenge Teaser Box */}
                <div className="track-challenge-box">
                  <span className="challenge-label font-mono">CLASSIFIED MISSION BRIEF</span>
                  <p className="challenge-text">{track.challengeTeaser}</p>
                </div>

                {/* Action CTA */}
                <div className="track-card-footer">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTrackForRegister(track.title);
                    }}
                    className="btn-vault btn-vault-secondary track-select-btn"
                  >
                    <span>ENLIST IN THIS TRACK</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
