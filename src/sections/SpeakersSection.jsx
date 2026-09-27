import React, { useState, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { EVENT_DATA } from '../data/eventData';
import { useModalA11y } from '../hooks/useModalA11y';
import CharacterEmblem from '../components/CharacterEmblems';

export default function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const speakerModalRef = useRef(null);

  const closeSpeakerModal = () => setSelectedSpeaker(null);

  // ESC key, focus trap and background scroll lock for the dossier modal
  useModalA11y(Boolean(selectedSpeaker), closeSpeakerModal, speakerModalRef);

  const handleCardMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="speakers" className="section-spacing speakers-section" aria-label="Keynote Speakers & Mentors">
      {/* Doctor Doom Armored Throne Sigil */}
      <CharacterEmblem type="doom" slotClass="slot-doom" />

      <div className="vault-container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div>
            <div className="section-numeral">05 // ARCHITECTS & MENTORS</div>
            <h2 className="section-title">THE VAULT LUMINARIES</h2>
          </div>
          <p className="section-subtitle">
            World-class researchers, distributed systems founders, and creative technologists mentoring you on-site.
          </p>
        </div>

        {/* 4 Speaker Editorial Cards */}
        <div className="speakers-grid">
          {EVENT_DATA.speakers.map((spk) => (
            <div
              key={spk.id}
              className="card-vault-3d speaker-card"
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onClick={() => setSelectedSpeaker(spk)}
            >
              {/* Image Container with Lens Zoom */}
              <div className="speaker-image-container">
                <img
                  src={spk.image}
                  alt={spk.name}
                  className="speaker-image"
                  loading="lazy"
                />
                <div className="speaker-image-overlay" />
                <div className="speaker-track-tag font-mono">
                  {spk.track}
                </div>
              </div>

              {/* Speaker Content */}
              <div className="speaker-card-body">
                <div className="speaker-role-org font-mono">
                  {spk.role} • {spk.org}
                </div>
                <h3 className="speaker-name">{spk.name}</h3>
                <p className="speaker-keynote-topic">
                  "{spk.topic}"
                </p>

                {/* Footer with Socials */}
                <div className="speaker-card-footer">
                  <div className="speaker-socials-group" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={spk.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-mini-link"
                      aria-label={`${spk.name} on GitHub`}
                    >
                      <GithubIcon size={15} />
                    </a>
                    <a
                      href={spk.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-mini-link"
                      aria-label={`${spk.name} on LinkedIn`}
                    >
                      <LinkedinIcon size={15} />
                    </a>
                    <a
                      href={spk.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-mini-link"
                      aria-label={`${spk.name} on Twitter`}
                    >
                      <TwitterIcon size={15} />
                    </a>
                  </div>

                  <span className="speaker-view-bio-pill">
                    <span>DOSSIER</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Speaker Dossier Modal */}
      {selectedSpeaker && (
        <div
          className="vault-modal-backdrop"
          onClick={closeSpeakerModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="speaker-modal-title"
        >
          <div
            ref={speakerModalRef}
            className="vault-modal-card speaker-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeSpeakerModal}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-speaker-layout">
              <div className="modal-speaker-img-box">
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} />
                <span className="hud-tag active mt-3">{selectedSpeaker.track}</span>
              </div>

              <div className="modal-speaker-details">
                <div className="font-mono text-emerald text-xs">OFFICIAL LUMINARY DOSSIER // GFG-BU-2026</div>
                <h3 id="speaker-modal-title" className="modal-speaker-name">{selectedSpeaker.name}</h3>
                <div className="modal-speaker-role font-mono">
                  {selectedSpeaker.role} // {selectedSpeaker.org}
                </div>

                <div className="modal-topic-block">
                  <div className="modal-topic-label font-mono">KEYNOTE MASTERCLASS</div>
                  <p className="modal-topic-title">"{selectedSpeaker.topic}"</p>
                </div>

                <p className="modal-speaker-bio">{selectedSpeaker.bio}</p>

                <div className="modal-actions-row">
                  <a
                    href={selectedSpeaker.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-vault btn-vault-secondary"
                  >
                    <span>CONNECT ON LINKEDIN</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
