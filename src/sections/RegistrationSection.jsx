import React from 'react';
import { Sparkles, Terminal, Shield } from 'lucide-react';
import TicketPassGenerator from '../components/TicketPassGenerator';

export default function RegistrationSection({ onOpenFullForm, selectedTrack }) {
  return (
    <section id="register" className="section-spacing registration-section" aria-label="Registration Portal">
      {/* Background Energy Glow */}
      <div className="registration-climax-aura" aria-hidden="true" />

      <div className="vault-container">
        {/* Climax Section Header */}
        <div className="climax-header-composition text-center">
          <div className="climax-hud-pill">
            <span className="pulse-dot" />
            <span className="font-mono text-xs">REGISTRATION PROTOCOL // LIMITED PASSES</span>
          </div>

          <h2 className="climax-heading font-display">
            UNLOCK THE <span className="text-gradient-climax">VAULT.</span>
          </h2>

          <p className="climax-subheading">
            Your next build starts here. Step inside the dimensional forge at Bennett University.
          </p>

          <div className="climax-meta-badges">
            <span className="hud-tag active">
              <Shield size={12} />
              <span>ENTRY: 100% FREE</span>
            </span>
            <span className="hud-tag violet">
              <Terminal size={12} />
              <span>HACKATHON DURATION: 36 HOURS</span>
            </span>
            <span className="hud-tag spark">
              <Sparkles size={12} />
              <span>₹5,00,000+ BOUNTY POOL</span>
            </span>
          </div>
        </div>

        {/* Interactive Holographic Ticket Pass Generator */}
        <TicketPassGenerator
          onOpenFullForm={onOpenFullForm}
          initialTrack={selectedTrack}
        />
      </div>
    </section>
  );
}
