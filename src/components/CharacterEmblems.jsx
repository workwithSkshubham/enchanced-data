import React from 'react';

/**
 * VIBRANIUM VAULT — Character Energy Emblems
 *
 * Five original, abstract geometric "energy sigils" inspired by the thematic
 * identities of Thor, Doctor Doom, Loki, Captain America and Doctor Strange.
 * These are hand-authored vector compositions (energy, light and rune motifs) —
 * NOT reproductions of any copyrighted character artwork or logos.
 *
 * Each emblem carries its own subtle animation identity (see styles/effects.css):
 *   THOR     — lightning pulses + electric flicker
 *   DOOM     — slow intimidating drift + smoke haze
 *   LOKI     — elegant floating + illusion particles
 *   CAPTAIN  — shield rotation + kinetic trail
 *   STRANGE  — rotating mystical portal + sparks
 *
 * Decorative only: aria-hidden, non-focusable, pointer-events disabled.
 */

function ThorSigil() {
  return (
    <svg viewBox="0 0 140 140" className="emblem-svg emblem-thor-svg" aria-hidden="true" focusable="false">
      <g className="emblem-thor-bolt">
        <polygon
          points="76,18 52,72 68,72 58,122 92,62 74,62 88,18"
          fill="none"
          stroke="#FF8A3D"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <polygon
          points="76,30 60,68 71,68 63,108 86,62 72,62 82,30"
          fill="rgba(255, 138, 61, 0.14)"
          stroke="none"
        />
      </g>
      <circle cx="70" cy="70" r="52" fill="none" stroke="rgba(25, 230, 140, 0.35)" strokeWidth="1" strokeDasharray="4 7" className="emblem-ring-slow" />
      <g fill="#19E68C" className="emblem-thor-sparks">
        <circle cx="26" cy="46" r="1.8" />
        <circle cx="114" cy="58" r="1.4" />
        <circle cx="34" cy="102" r="1.6" />
        <circle cx="106" cy="96" r="1.2" />
      </g>
    </svg>
  );
}

function DoomSigil() {
  return (
    <svg viewBox="0 0 140 140" className="emblem-svg emblem-doom-svg" aria-hidden="true" focusable="false">
      {/* Armored hood silhouette */}
      <path
        d="M70 16 L106 38 L106 84 L88 112 L52 112 L34 84 L34 38 Z"
        fill="rgba(13, 17, 16, 0.55)"
        stroke="#3d5c4c"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Mask face plate */}
      <path
        d="M70 34 L92 48 L92 76 L70 96 L48 76 L48 48 Z"
        fill="none"
        stroke="rgba(139, 92, 246, 0.55)"
        strokeWidth="1.6"
      />
      {/* Eyes */}
      <line x1="56" y1="58" x2="66" y2="58" stroke="#19E68C" strokeWidth="2.4" strokeLinecap="round" className="emblem-doom-eyes" />
      <line x1="74" y1="58" x2="84" y2="58" stroke="#19E68C" strokeWidth="2.4" strokeLinecap="round" className="emblem-doom-eyes" />
      {/* Dark energy vents */}
      <line x1="62" y1="72" x2="78" y2="72" stroke="rgba(25, 230, 140, 0.4)" strokeWidth="1.2" />
      <line x1="64" y1="80" x2="76" y2="80" stroke="rgba(25, 230, 140, 0.28)" strokeWidth="1.2" />
      {/* Atmospheric smoke */}
      <g className="emblem-doom-smoke" fill="none" stroke="rgba(61, 92, 76, 0.6)">
        <circle cx="30" cy="98" r="9" strokeWidth="1" />
        <circle cx="110" cy="100" r="11" strokeWidth="1" />
        <circle cx="40" cy="118" r="6" strokeWidth="1" />
        <circle cx="100" cy="120" r="7" strokeWidth="1" />
      </g>
    </svg>
  );
}

function LokiSigil() {
  return (
    <svg viewBox="0 0 140 140" className="emblem-svg emblem-loki-svg" aria-hidden="true" focusable="false">
      {/* Horned circlet */}
      <path
        d="M44 66 C40 40 46 26 58 20 C54 34 56 46 62 56"
        fill="none"
        stroke="#19E68C"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M96 66 C100 40 94 26 82 20 C86 34 84 46 78 56"
        fill="none"
        stroke="#19E68C"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M70 24 L70 46" stroke="rgba(25, 230, 140, 0.5)" strokeWidth="1.6" strokeLinecap="round" />
      {/* Magical core */}
      <circle cx="70" cy="78" r="17" fill="none" stroke="rgba(25, 230, 140, 0.7)" strokeWidth="1.8" className="emblem-ring-slow" />
      <circle cx="70" cy="78" r="8" fill="rgba(25, 230, 140, 0.18)" />
      <circle cx="70" cy="78" r="3" fill="#19E68C" className="emblem-core-pulse" />
      {/* Illusion particles */}
      <g fill="#19E68C" className="emblem-loki-particles">
        <circle cx="34" cy="52" r="1.6" />
        <circle cx="108" cy="50" r="1.4" />
        <circle cx="42" cy="108" r="1.8" />
        <circle cx="98" cy="110" r="1.3" />
        <circle cx="70" cy="118" r="1.5" />
      </g>
    </svg>
  );
}

function CaptainSigil() {
  return (
    <svg viewBox="0 0 140 140" className="emblem-svg emblem-captain-svg" aria-hidden="true" focusable="false">
      {/* Concentric tactical rings */}
      <circle cx="70" cy="70" r="50" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2.4" />
      <circle cx="70" cy="70" r="38" fill="none" stroke="rgba(25, 230, 140, 0.55)" strokeWidth="2" />
      <circle cx="70" cy="70" r="26" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.8" />
      {/* Kinetic motion trails */}
      <circle cx="70" cy="70" r="56" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.2" strokeDasharray="2 10" className="emblem-captain-trail" />
      <g className="emblem-captain-sparks">
        <line x1="14" y1="70" x2="2" y2="70" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="126" y1="70" x2="138" y2="70" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="70" y1="14" x2="70" y2="2" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      {/* Core star glyph */}
      <g className="emblem-captain-star">
        <polygon
          points="70,56 74.7,64.6 84.4,65.9 77.2,72.9 79.1,82.6 70,77.8 60.9,82.6 62.8,72.9 55.6,65.9 65.3,64.6"
          fill="none"
          stroke="#F4F4F0"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function StrangeSigil() {
  return (
    <svg viewBox="0 0 140 140" className="emblem-svg emblem-strange-svg" aria-hidden="true" focusable="false">
      {/* Mystical portal rings */}
      <circle cx="70" cy="70" r="52" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeDasharray="10 6" className="emblem-strange-portal-outer" />
      <circle cx="70" cy="70" r="40" fill="none" stroke="rgba(255, 138, 61, 0.75)" strokeWidth="1.5" strokeDasharray="3 6" className="emblem-strange-portal-inner" />
      <circle cx="70" cy="70" r="28" fill="none" stroke="rgba(139, 92, 246, 0.45)" strokeWidth="1.2" />
      {/* Sacred geometry core */}
      <polygon points="70,44 93,83 47,83" fill="none" stroke="rgba(244, 244, 240, 0.7)" strokeWidth="1.4" className="emblem-ring-slow" />
      <polygon points="70,96 47,57 93,57" fill="none" stroke="rgba(244, 244, 240, 0.4)" strokeWidth="1.2" className="emblem-ring-slow-reverse" />
      <circle cx="70" cy="70" r="4" fill="#FF8A3D" className="emblem-core-pulse" />
      {/* Magic sparks */}
      <g className="emblem-strange-sparks">
        <circle cx="24" cy="38" r="1.6" fill="#8B5CF6" />
        <circle cx="118" cy="46" r="1.4" fill="#FF8A3D" />
        <circle cx="30" cy="106" r="1.5" fill="#FF8A3D" />
        <circle cx="112" cy="104" r="1.7" fill="#8B5CF6" />
      </g>
    </svg>
  );
}

const SIGILS = {
  thor: ThorSigil,
  doom: DoomSigil,
  loki: LokiSigil,
  captain: CaptainSigil,
  strange: StrangeSigil,
};

/**
 * Single emblem slot — position/size driven by the `slotClass` CSS.
 */
export default function CharacterEmblem({ type, slotClass }) {
  const Sigil = SIGILS[type];
  if (!Sigil) return null;

  return (
    <div className={`character-emblem-slot ${slotClass}`} aria-hidden="true">
      <Sigil />
    </div>
  );
}
