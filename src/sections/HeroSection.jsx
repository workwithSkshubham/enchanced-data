import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Sparkles, Terminal, Calendar, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import VibraniumCore3D from '../components/VibraniumCore3D';

export default function HeroSection({ onOpenRegister }) {
  // Live Countdown calculation to October 24, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: '27',
    hours: '14',
    minutes: '38',
    seconds: '45',
  });

  useEffect(() => {
    const target = new Date(EVENT_DATA.details.targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Section">
      {/* Top HUD Telemetry Strip */}
      <div className="hero-hud-strip">
        <div className="vault-container">
          <div className="hud-strip-inner">
            <div className="hud-strip-left">
              <span className="hud-telemetry-item">
                <span className="pulse-dot" />
                <span className="mono-text">SYSTEM_ONLINE // PROTOCOL 0x7F</span>
              </span>
              <span className="hud-telemetry-separator">/</span>
              <span className="hud-telemetry-item">
                <span className="mono-text">COORDS: {EVENT_DATA.organizer.coordinates}</span>
              </span>
            </div>
            <div className="hud-strip-right">
              <span className="hud-telemetry-item highlight-emerald">
                <ShieldCheck size={13} />
                <span className="mono-text">{EVENT_DATA.organizer.securityClearance}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="vault-container hero-main-container">
        <div className="hero-grid-layout">
          {/* Left Column: Editorial Typography & Call to Actions */}
          <div className="hero-content-col">
            {/* Organizer Tag */}
            <div className="hero-organizer-badge">
              <span className="hud-tag active">
                <Terminal size={12} />
                <span>{EVENT_DATA.organizer.name}</span>
              </span>
              <span className="hero-institution-tag">
                {EVENT_DATA.organizer.institution}
              </span>
            </div>

            {/* Kinetic Typography Headline Composition */}
            <div className="hero-title-composition">
              <h1 className="hero-kinetic-title">
                <span className="title-row-1">VIBRANIUM</span>
                <span className="title-row-2">
                  <span className="title-gradient-text">VAULT</span>
                  <span className="title-edition-badge">2026</span>
                </span>
              </h1>
            </div>

            {/* Supporting Editorial Statement */}
            <p className="hero-tagline-statement">
              {EVENT_DATA.headline}
            </p>
            <p className="hero-description">
              {EVENT_DATA.subheadline}
            </p>

            {/* Event Key Metadata Pills (Editorial Swiss Grid) */}
            <div className="hero-meta-grid">
              <div className="hero-meta-card">
                <div className="meta-card-icon">
                  <Calendar size={16} />
                </div>
                <div className="meta-card-info">
                  <span className="meta-label">DATE & SCHEDULE</span>
                  <span className="meta-val">{EVENT_DATA.details.date}</span>
                </div>
              </div>

              <div className="hero-meta-card">
                <div className="meta-card-icon">
                  <MapPin size={16} />
                </div>
                <div className="meta-card-info">
                  <span className="meta-label">VENUE LOCATION</span>
                  <span className="meta-val">{EVENT_DATA.details.venue}</span>
                </div>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="hero-cta-cluster">
              <button
                onClick={onOpenRegister}
                className="btn-vault btn-vault-primary hero-btn-main"
                data-cursor-text="ACCESS"
              >
                <span>ENTER THE VAULT</span>
                <Sparkles size={16} />
              </button>

              <button
                onClick={scrollToAbout}
                className="btn-vault btn-vault-secondary hero-btn-sub"
              >
                <span>EXPLORE EVENT</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Countdown HUD Readout */}
            <div className="hero-countdown-wrapper">
              <div className="countdown-header">
                <span className="countdown-dot" />
                <span className="countdown-title">T-MINUS EVENT COUNTDOWN</span>
              </div>
              <div className="countdown-digits-grid">
                <div className="countdown-block">
                  <span className="digit-val">{timeLeft.days}</span>
                  <span className="digit-label">DAYS</span>
                </div>
                <span className="digit-divider">:</span>
                <div className="countdown-block">
                  <span className="digit-val">{timeLeft.hours}</span>
                  <span className="digit-label">HRS</span>
                </div>
                <span className="digit-divider">:</span>
                <div className="countdown-block">
                  <span className="digit-val">{timeLeft.minutes}</span>
                  <span className="digit-label">MIN</span>
                </div>
                <span className="digit-divider">:</span>
                <div className="countdown-block">
                  <span className="digit-val highlight-sec">{timeLeft.seconds}</span>
                  <span className="digit-label">SEC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Vibranium Core Energy Object */}
          <div className="hero-visual-col">
            <div className="hero-3d-stage">
              {/* Central Three.js Interactive WebGL Energy Core */}
              <VibraniumCore3D />

              {/* Holographic Concentric Decorative HUD Rings */}
              <div className="hud-orbital-ring ring-1" aria-hidden="true" />
              <div className="hud-orbital-ring ring-2" aria-hidden="true" />

              {/* Floating Data Pill Overlay */}
              <div className="hero-floating-hud-badge top-right">
                <span className="badge-signal" />
                <div>
                  <div className="hud-mono-bold">CORE: VIBRANIUM 99.4%</div>
                  <div className="hud-mono-dim">HARMONIC RESONANCE 432 THZ</div>
                </div>
              </div>

              <div className="hero-floating-hud-badge bottom-left">
                <div>
                  <div className="hud-mono-bold">NODE: GFG_BU_CAMPUS</div>
                  <div className="hud-mono-dim">LAT 28.4509° N • LONG 77.5842° E</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Scroll Down Indicator */}
        <div className="hero-scroll-cue">
          <button
            onClick={scrollToAbout}
            className="scroll-cue-btn"
            aria-label="Scroll to about section"
          >
            <span className="scroll-cue-text">SCROLL TO UNLOCK</span>
            <ArrowDownRight size={14} className="scroll-cue-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
