import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { ArrowDownRight, Sparkles, Terminal, Calendar, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { EVENT_DATA } from '../data/eventData';
import CharacterEmblem from '../components/CharacterEmblems';
import { prefersReducedMotion } from '../animations/scrollReveal';

// Three.js is heavy — load the WebGL core as its own lazy chunk so the
// initial hero paint stays fast (falls back internally if WebGL is absent).
const VibraniumCore3D = lazy(() => import('../components/VibraniumCore3D'));

const ZERO_COUNTDOWN = { days: '00', hours: '00', minutes: '00', seconds: '00' };

export default function HeroSection({ onOpenRegister, introDone = true }) {
  const heroRef = useRef(null);

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
      } else {
        // Event moment reached — settle the readout at zero instead of freezing
        setTimeLeft(ZERO_COUNTDOWN);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cinematic hero entrance — plays once the vault loader lifts
  useEffect(() => {
    if (!introDone) return;
    if (prefersReducedMotion()) return;

    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const targets = hero.querySelectorAll('[data-hero-entrance]');
      if (targets.length) {
        gsap.fromTo(
          targets,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.05,
            ease: 'power3.out',
            stagger: 0.09,
            delay: 0.05,
          }
        );
      }

      const visual = hero.querySelector('.hero-visual-col');
      if (visual) {
        gsap.fromTo(
          visual,
          { autoAlpha: 0, scale: 0.92 },
          { autoAlpha: 1, scale: 1, duration: 1.4, ease: 'power3.out', delay: 0.3 }
        );
      }
    }, hero);

    return () => ctx.revert();
  }, [introDone]);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Section" ref={heroRef}>
      {/* Top HUD Telemetry Strip */}
      <div className="hero-hud-strip" data-hero-entrance>
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
            <div className="hero-organizer-badge" data-hero-entrance>
              <span className="hud-tag active">
                <Terminal size={12} />
                <span>{EVENT_DATA.organizer.name}</span>
              </span>
              <span className="hero-institution-tag">
                {EVENT_DATA.organizer.institution}
              </span>
            </div>

            {/* Kinetic Typography Headline Composition */}
            <div className="hero-title-composition" data-hero-entrance>
              <h1 className="hero-kinetic-title">
                <span className="title-row-1">VIBRANIUM</span>
                <span className="title-row-2">
                  <span className="title-gradient-text">VAULT</span>
                  <span className="title-edition-badge">2026</span>
                </span>
              </h1>
            </div>

            {/* Supporting Editorial Statement */}
            <p className="hero-tagline-statement" data-hero-entrance>
              {EVENT_DATA.headline}
            </p>
            <p className="hero-description" data-hero-entrance>
              {EVENT_DATA.subheadline}
            </p>

            {/* Event Key Metadata Pills (Editorial Swiss Grid) */}
            <div className="hero-meta-grid" data-hero-entrance>
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
            <div className="hero-cta-cluster" data-hero-entrance>
              <button
                onClick={onOpenRegister}
                className="btn-vault btn-vault-primary hero-btn-main magnetic-target"
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
            <div className="hero-countdown-wrapper" data-hero-entrance>
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
              {/* Thor energy sigil accompanying the core */}
              <CharacterEmblem type="thor" slotClass="slot-thor" />

              {/* Central Three.js Interactive WebGL Energy Core */}
              <Suspense fallback={<div className="core-ambient-aura" aria-hidden="true" />}>
                <VibraniumCore3D />
              </Suspense>

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
        <div className="hero-scroll-cue" data-hero-entrance>
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
