import React, { useState, useRef } from 'react';
import { QrCode, Sparkles, Shield, Download, Check, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_DATA } from '../data/eventData';

export default function TicketPassGenerator({ onOpenFullForm, initialTrack = 'Neural Matrices' }) {
  const [attendeeName, setAttendeeName] = useState('Alex Vance');
  const [selectedTrack, setSelectedTrack] = useState(initialTrack);
  const [ticketId] = useState(() => `VV-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  const [isCopied, setIsCopied] = useState(false);

  const cardRef = useRef(null);

  // 3D Holographic Foil Tilt Effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--foil-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--foil-y', `${(y / rect.height) * 100}%`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const handleClaimPass = () => {
    // Trigger celebratory particle blast
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#19E68C', '#8B5CF6', '#FF8A3D', '#FFFFFF'],
      });
    } catch {
      // safe fallback
    }

    onOpenFullForm({ name: attendeeName, track: selectedTrack });
  };

  const handleShare = () => {
    const text = `I'm attending VIBRANIUM VAULT 2026 at Bennett University! Register your pass now: ${window.location.href}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="ticket-generator-wrapper">
      <div className="ticket-generator-grid">
        {/* Left: Interactive 3D Holographic Pass */}
        <div className="ticket-preview-container">
          <div
            ref={cardRef}
            className="holographic-pass-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-label="Vibranium Vault Digital Holographic Ticket"
          >
            {/* Holographic Iridescent Foil Sheen */}
            <div className="holographic-foil-layer" aria-hidden="true" />

            {/* Pass Header */}
            <div className="pass-header-row">
              <div className="pass-brand">
                <span className="pass-vault-title">VIBRANIUM VAULT</span>
                <span className="pass-chapter-subtitle">GFG BENNETT UNIVERSITY</span>
              </div>
              <div className="pass-tier-badge">
                <Shield size={12} />
                <span>BUILDER PASS</span>
              </div>
            </div>

            {/* Pass Midbody: Name & Track */}
            <div className="pass-body-row">
              <div className="pass-field">
                <span className="pass-field-label font-mono">ATTENDEE NAME</span>
                <div className="pass-attendee-name font-display">
                  {attendeeName || 'YOUR NAME HERE'}
                </div>
              </div>

              <div className="pass-field">
                <span className="pass-field-label font-mono">CHOSEN TRACK</span>
                <div className="pass-track-name font-mono">{selectedTrack}</div>
              </div>
            </div>

            {/* Pass Metadata Strip */}
            <div className="pass-meta-strip font-mono">
              <div>
                <span className="meta-sub">DATE</span>
                <span className="meta-main">OCT 24–25, 2026</span>
              </div>
              <div>
                <span className="meta-sub">VENUE</span>
                <span className="meta-main">BENNETT UNIV // AUDI 1</span>
              </div>
              <div>
                <span className="meta-sub">SECURITY</span>
                <span className="meta-main">LEVEL-07 ACTIVE</span>
              </div>
            </div>

            {/* Pass Bottom Row with Stylized QR */}
            <div className="pass-bottom-row">
              <div className="pass-barcode-area">
                <div className="pass-id font-mono">ID: #{ticketId}</div>
                <div className="pass-barcode-lines" aria-hidden="true">
                  <span style={{ width: '3px' }} />
                  <span style={{ width: '1px' }} />
                  <span style={{ width: '4px' }} />
                  <span style={{ width: '2px' }} />
                  <span style={{ width: '5px' }} />
                  <span style={{ width: '2px' }} />
                  <span style={{ width: '3px' }} />
                  <span style={{ width: '1px' }} />
                  <span style={{ width: '6px' }} />
                  <span style={{ width: '2px' }} />
                </div>
              </div>

              <div className="pass-qr-box">
                <QrCode size={52} className="pass-qr-icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Pass Customizer Controls */}
        <div className="ticket-controls-card">
          <div className="controls-header">
            <span className="hud-tag active">PASS SYNTHESIZER // CUSTOMIZE</span>
            <h3 className="controls-title font-display">FORGE YOUR IDENTITY PASS</h3>
            <p className="controls-desc">
              Generate your official digital cryptographic pass for on-campus verification at Bennett University.
            </p>
          </div>

          <div className="controls-form">
            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="pass-name-input" className="form-label font-mono">
                FULL NAME
              </label>
              <input
                id="pass-name-input"
                type="text"
                value={attendeeName}
                onChange={(e) => setAttendeeName(e.target.value)}
                maxLength={28}
                placeholder="Enter your name"
                className="form-input"
              />
            </div>

            {/* Track Selector */}
            <div className="form-group">
              <label htmlFor="pass-track-select" className="form-label font-mono">
                SELECT TRACK
              </label>
              <select
                id="pass-track-select"
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
                className="form-select"
              >
                {EVENT_DATA.tracks.map((t) => (
                  <option key={t.id} value={t.title}>
                    {t.title} ({t.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Action Buttons */}
            <div className="controls-actions">
              <button
                onClick={handleClaimPass}
                className="btn-vault btn-vault-primary w-full"
              >
                <span>CLAIM PASS & ENLIST</span>
                <Sparkles size={16} />
              </button>

              <button
                onClick={handleShare}
                className="btn-vault btn-vault-secondary w-full"
                title="Copy share link"
              >
                {isCopied ? <Check size={16} className="text-emerald" /> : <Share2 size={16} />}
                <span>{isCopied ? 'COPIED TO CLIPBOARD!' : 'SHARE INVITATION'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
