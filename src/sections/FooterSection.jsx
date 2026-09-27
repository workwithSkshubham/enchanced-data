import React from 'react';
import { ArrowUp, Terminal, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, DiscordIcon } from '../components/SocialIcons';
import { EVENT_DATA } from '../data/eventData';

export default function FooterSection({ onOpenRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return <InstagramIcon size={18} />;
      case 'linkedin':
        return <LinkedinIcon size={18} />;
      case 'github':
        return <GithubIcon size={18} />;
      case 'discord':
        return <DiscordIcon size={18} />;
      default:
        return <TwitterIcon size={18} />;
    }
  };

  return (
    <footer className="vault-footer" role="contentinfo">
      {/* 1. Infinite Running Marquee */}
      <div className="footer-marquee-strip" aria-hidden="true">
        <div className="marquee-content-track">
          <span className="marquee-segment font-display">
            BUILD • CREATE • INNOVATE • CONNECT • GFG BENNETT UNIVERSITY • VIBRANIUM VAULT •
          </span>
          <span className="marquee-segment font-display">
            BUILD • CREATE • INNOVATE • CONNECT • GFG BENNETT UNIVERSITY • VIBRANIUM VAULT •
          </span>
          <span className="marquee-segment font-display">
            BUILD • CREATE • INNOVATE • CONNECT • GFG BENNETT UNIVERSITY • VIBRANIUM VAULT •
          </span>
          <span className="marquee-segment font-display">
            BUILD • CREATE • INNOVATE • CONNECT • GFG BENNETT UNIVERSITY • VIBRANIUM VAULT •
          </span>
        </div>
      </div>

      {/* Animated Spectral Gradient Divider */}
      <div className="footer-luminous-divider" />

      <div className="vault-container footer-content-container">
        <div className="footer-editorial-grid">
          {/* Brand & Organization Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="footer-logo-glyph">
                <svg viewBox="0 0 32 32" className="brand-svg">
                  <circle cx="16" cy="16" r="14" stroke="rgba(25, 230, 140, 0.4)" strokeWidth="1.2" fill="none" />
                  <polygon points="16,6 24,11 24,21 16,26 8,21 8,11" stroke="#19E68C" strokeWidth="1.2" fill="none" />
                  <circle cx="16" cy="16" r="3" fill="#19E68C" />
                </svg>
              </div>
              <span className="footer-brand-name font-display">VIBRANIUM VAULT</span>
            </div>

            <p className="footer-desc">
              The annual flagship technology symposium and 36-hour hackathon organized by the{' '}
              <strong>GeeksForGeeks Student Chapter, Bennett University</strong>.
            </p>

            <div className="footer-location-tag font-mono">
              <MapPin size={14} className="text-emerald" />
              <span>Bennett University, Greater Noida, Delhi-NCR, India</span>
            </div>

            <div className="footer-status-pill">
              <span className="pulse-dot" />
              <span className="font-mono text-xs">{EVENT_DATA.organizer.status}</span>
            </div>
          </div>

          {/* Quick Navigation Columns */}
          <div className="footer-links-col">
            <h4 className="footer-heading font-mono">SECTORS</h4>
            <ul className="footer-nav-list">
              <li><a href="#about" className="footer-nav-link">01 // Manifesto</a></li>
              <li><a href="#highlights" className="footer-nav-link">02 // Highlights</a></li>
              <li><a href="#tracks" className="footer-nav-link">03 // Tracks</a></li>
              <li><a href="#timeline" className="footer-nav-link">04 // Timeline</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading font-mono">DOSSIER</h4>
            <ul className="footer-nav-list">
              <li><a href="#speakers" className="footer-nav-link">Luminaries & Mentors</a></li>
              <li><a href="#gallery" className="footer-nav-link">Atmosphere Archives</a></li>
              <li><a href="#faq" className="footer-nav-link">Decryption & FAQ</a></li>
              <li>
                <button onClick={onOpenRegister} className="footer-register-link font-mono">
                  Register For Vault →
                </button>
              </li>
            </ul>
          </div>

          {/* Connect / Socials Column */}
          <div className="footer-connect-col">
            <h4 className="footer-heading font-mono">CONNECTIVITY</h4>
            <p className="footer-connect-text">
              Follow the official GFG Bennett University chapter channels for announcements, mentor reveals, and challenge teasers.
            </p>

            {/* Magnetic Social Icons */}
            <div className="footer-social-icons-group">
              {EVENT_DATA.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-social-btn"
                  aria-label={item.name}
                  title={`${item.name} (${item.handle})`}
                >
                  {getSocialIcon(item.name)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left font-mono">
            <span>© 2026 GEEKSFORGEEKS STUDENT CHAPTER, BENNETT UNIVERSITY.</span>
            <span className="bottom-tagline">ALL RIGHTS RESERVED // PROTOCOL VIBRANIUM</span>
          </div>

          <div className="footer-bottom-right">
            <button
              onClick={scrollToTop}
              className="footer-back-to-top-btn"
              aria-label="Back to top"
            >
              <span className="font-mono text-xs">ASCEND TO SURFACE</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
