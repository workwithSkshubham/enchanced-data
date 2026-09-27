import React from 'react';
import { Cpu, Terminal, Zap, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export default function AboutSection({ onOpenRegister }) {
  const pillars = [
    {
      icon: <Terminal size={22} />,
      title: "GeeksForGeeks BU Chapter",
      description: "Bennett University's premier technical society, dedicated to cultivating top-tier developers, competitive programmers, and tech innovators.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Marvel × Web Engineering",
      description: "An extraordinary thematic convergence: blending Marvel's futuristic tech lore with real-world low-latency systems and spatial UI engineering.",
    },
    {
      icon: <Zap size={22} />,
      title: "High-Caliber 36-Hour Hackathon",
      description: "Push beyond theoretical boundaries. Build full-stack solutions, neural networks, and cryptographic protocols with direct mentorship.",
    },
    {
      icon: <Compass size={22} />,
      title: "Venture & Career Elevators",
      description: "Connect with venture capital scouts, FAANG engineers, and industry partners offering direct internship and grant opportunities.",
    },
  ];

  return (
    <section id="about" className="section-spacing about-section" aria-label="About Vibranium Vault">
      <div className="vault-container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div>
            <div className="section-numeral">01 // MANIFESTO</div>
            <h2 className="section-title">THE VAULT IS OPEN.</h2>
          </div>
          <p className="section-subtitle">
            Where futuristic Marvel-inspired technology, Swiss typography discipline, and high-intensity coding collide.
          </p>
        </div>

        {/* Main Editorial Grid */}
        <div className="about-editorial-grid">
          {/* Big Editorial Manifesto Statement */}
          <div className="about-manifesto-card">
            <div className="manifesto-hud-bar">
              <span className="hud-tag active">ENCRYPTED_TRANSMISSION // DECODED</span>
              <span className="mono-subtle">{EVENT_DATA.organizer.institution}</span>
            </div>

            <h3 className="manifesto-heroic-text">
              We engineered <span className="highlight-text-emerald">Vibranium Vault</span> as an antidote to cookie-cutter college hackathons.
            </h3>

            <p className="manifesto-paragraph">
              Conceived by the <strong className="text-white">GeeksForGeeks Student Chapter at Bennett University</strong>, 
              Vibranium Vault is designed for students who refuse to build ordinary web apps. It is a classified high-tech crucible 
              where raw curiosity transforms into battle-tested software.
            </p>

            <p className="manifesto-paragraph">
              Whether you are training autonomous neural agents, crafting zero-knowledge cryptographic vaults, 
              or rendering 60fps spatial web experiences—the Vault supplies the compute, mentorship, and 
              industrial validation to unlock your next leap.
            </p>

            {/* Quick Feature Checklist */}
            <div className="manifesto-perks-list">
              <div className="perk-item">
                <CheckCircle2 size={16} className="perk-icon" />
                <span>₹5,00,000+ Prize Grant Pool & Hardware Bounties</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={16} className="perk-icon" />
                <span>1-on-1 Mentorship from Leading Silicon & Web3 Engineers</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={16} className="perk-icon" />
                <span>24/7 Hacker Fuel, Rest Areas & High-Speed Optical Fiber</span>
              </div>
            </div>

            <div className="manifesto-cta-row">
              <button
                onClick={onOpenRegister}
                className="btn-vault btn-vault-primary"
              >
                <span>CLAIM INVITATION DOSSIER</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars (Swiss Grid) */}
          <div className="about-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="about-pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <span className="pillar-index font-mono">0{idx + 1}</span>
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
