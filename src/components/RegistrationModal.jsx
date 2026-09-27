import React, { useState, useRef } from 'react';
import { X, ShieldCheck, Send, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_DATA } from '../data/eventData';
import { useModalA11y } from '../hooks/useModalA11y';

export default function RegistrationModal({ isOpen, onClose, initialData = {} }) {
  const modalCardRef = useRef(null);
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    email: '',
    institution: 'Bennett University',
    enrolment: '',
    track: initialData.track || 'Neural Matrices',
    teamSize: 'Team of 4',
    github: '',
    experience: 'Intermediate',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [prevInitialData, setPrevInitialData] = useState(initialData);

  if (
    initialData &&
    (initialData.name !== prevInitialData?.name || initialData.track !== prevInitialData?.track)
  ) {
    setPrevInitialData(initialData);
    setFormData((prev) => ({
      ...prev,
      name: initialData.name || prev.name,
      track: initialData.track || prev.track,
    }));
  }

  // ESC key, focus trap and background scroll lock
  useModalA11y(isOpen, onClose, modalCardRef);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.enrolment.trim()) newErrors.enrolment = 'Student ID / Enrolment is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebratory confetti blast
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#19E68C', '#8B5CF6', '#FF8A3D', '#FFFFFF'],
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="vault-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
    >
      <div
        ref={modalCardRef}
        className="vault-modal-card registration-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close registration modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header-strip">
              <span className="hud-tag active">ENLISTMENT PORTAL // GFG BU</span>
              <span className="mono-subtle">{EVENT_DATA.organizer.campus}</span>
            </div>

            <h2 id="reg-modal-title" className="modal-heading font-display">
              UNLOCK YOUR VAULT PASS
            </h2>
            <p className="modal-subheading">
              Secure your spot for the 36-hour hackathon and technology symposium at Bennett University.
            </p>

            <form onSubmit={handleSubmit} className="reg-form-grid" noValidate>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label font-mono" htmlFor="reg-name">
                  FULL NAME *
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  placeholder="e.g. Natasha Romanoff"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`form-input ${errors.name ? 'is-invalid' : ''}`}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label font-mono" htmlFor="reg-email">
                  COLLEGE / PERSONAL EMAIL *
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  placeholder="alex.vance@bennett.edu.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              {/* Institution */}
              <div className="form-group">
                <label className="form-label font-mono" htmlFor="reg-inst">
                  COLLEGE / UNIVERSITY *
                </label>
                <select
                  id="reg-inst"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="form-select"
                >
                  <option value="Bennett University">Bennett University (Host Campus)</option>
                  <option value="IIT / NIT / IIIT">IIT / NIT / IIIT</option>
                  <option value="Delhi Technological University (DTU)">Delhi Technological University (DTU)</option>
                  <option value="NSUT / IPU Affiliate">NSUT / IPU Affiliate</option>
                  <option value="Other Recognized University">Other Recognized University</option>
                </select>
              </div>

              {/* Student Enrolment / ID */}
              <div className="form-group">
                <label className="form-label font-mono" htmlFor="reg-id">
                  STUDENT ROLL / ENROLMENT NO. *
                </label>
                <input
                  id="reg-id"
                  type="text"
                  required
                  placeholder="e.g. E22CSEU0142"
                  value={formData.enrolment}
                  onChange={(e) => setFormData({ ...formData, enrolment: e.target.value })}
                  className={`form-input ${errors.enrolment ? 'is-invalid' : ''}`}
                />
                {errors.enrolment && <span className="field-error">{errors.enrolment}</span>}
              </div>

              {/* Track Selection */}
              <div className="form-group">
                <label className="form-label font-mono" htmlFor="reg-track">
                  PRIMARY COMPETITION TRACK *
                </label>
                <select
                  id="reg-track"
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="form-select"
                >
                  {EVENT_DATA.tracks.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Team Size */}
              <div className="form-group">
                <label className="form-label font-mono" htmlFor="reg-team">
                  FORMATION SIZE
                </label>
                <select
                  id="reg-team"
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="form-select"
                >
                  <option value="Solo Builder">Solo Builder (Looking for team)</option>
                  <option value="Team of 2">Duo (2 Hackers)</option>
                  <option value="Team of 3">Trio (3 Hackers)</option>
                  <option value="Team of 4">Full Squad (4 Hackers)</option>
                </select>
              </div>

              {/* GitHub / Portfolio */}
              <div className="form-group full-width">
                <label className="form-label font-mono" htmlFor="reg-github">
                  GITHUB / PORTFOLIO URL
                </label>
                <input
                  id="reg-github"
                  type="url"
                  placeholder="https://github.com/your-handle"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="form-input"
                />
              </div>

              {/* Submit CTA */}
              <div className="form-submit-row full-width">
                <button type="submit" className="btn-vault btn-vault-primary w-full">
                  <span>CONFIRM VAULT REGISTRATION</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="submission-success-view">
            <div className="success-icon-bubble">
              <ShieldCheck size={48} className="text-emerald" />
            </div>

            <span className="hud-tag active">DOSSIER RECEIVED // VERIFIED</span>

            <h3 className="success-title font-display">
              WELCOME TO THE VIBRANIUM VAULT, {formData.name.toUpperCase()}!
            </h3>

            <p className="success-message">
              Your registration application has been received by the <strong>GeeksForGeeks Student Chapter, Bennett University</strong>.
              A confirmation packet with your digital badge and Discord invitation has been dispatched to <strong>{formData.email}</strong>.
            </p>

            <div className="success-pass-summary font-mono">
              <div className="summary-row">
                <span>REGISTERED TRACK:</span>
                <span className="text-emerald">{formData.track}</span>
              </div>
              <div className="summary-row">
                <span>VENUE:</span>
                <span>Auditorium 1, Bennett University</span>
              </div>
              <div className="summary-row">
                <span>DATES:</span>
                <span>OCTOBER 24–25, 2026</span>
              </div>
            </div>

            <button onClick={resetForm} className="btn-vault btn-vault-primary">
              <span>RETURN TO VAULT DASHBOARD</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
