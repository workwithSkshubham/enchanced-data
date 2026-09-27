import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export default function Navbar({ isAudioEnabled, toggleAudio, onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'HIGHLIGHTS', href: '#highlights' },
    { label: 'TRACKS', href: '#tracks' },
    { label: 'TIMELINE', href: '#timeline' },
    { label: 'SPEAKERS', href: '#speakers' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = ['hero', 'about', 'highlights', 'tracks', 'timeline', 'speakers', 'gallery', 'faq'];
      const scrollPos = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Use View Transition API if supported
      if ('startViewTransition' in document) {
        document.startViewTransition(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`vault-navbar ${scrolled ? 'is-scrolled' : ''}`}
        role="banner"
      >
        <div className="vault-nav-container">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="vault-brand"
            aria-label="Vibranium Vault — Return to top"
          >
            <div className="vault-brand-glyph">
              <svg viewBox="0 0 32 32" className="brand-svg">
                <circle cx="16" cy="16" r="14" stroke="rgba(25, 230, 140, 0.4)" strokeWidth="1.2" fill="none" />
                <polygon points="16,6 24,11 24,21 16,26 8,21 8,11" stroke="#19E68C" strokeWidth="1.2" fill="none" />
                <circle cx="16" cy="16" r="3" fill="#19E68C" />
              </svg>
            </div>
            <div className="vault-brand-text">
              <span className="vault-name">VIBRANIUM VAULT</span>
              <span className="vault-chapter">GFG BENNETT UNIVERSITY</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="vault-nav-desktop" aria-label="Main Navigation">
            <ul className="nav-link-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`nav-link-item ${isActive ? 'is-active' : ''}`}
                    >
                      {link.label}
                      {isActive && <span className="active-glow-dot" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Cluster */}
          <div className="vault-nav-actions">
            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              className={`nav-icon-btn ${isAudioEnabled ? 'is-audio-active' : ''}`}
              title={isAudioEnabled ? 'Mute Ambience' : 'Enable Ethereal Audio Ambience'}
              aria-label={isAudioEnabled ? 'Mute audio' : 'Enable audio'}
            >
              {isAudioEnabled ? (
                <>
                  <Volume2 size={16} />
                  <span className="audio-wave-bars" aria-hidden="true">
                    <span className="bar bar-1" />
                    <span className="bar bar-2" />
                    <span className="bar bar-3" />
                  </span>
                </>
              ) : (
                <VolumeX size={16} />
              )}
            </button>

            {/* Quick Register CTA Button */}
            <button
              onClick={onOpenRegister}
              className="btn-vault btn-vault-primary nav-register-btn"
            >
              <span>REGISTER</span>
              <ArrowUpRight size={15} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-icon-btn mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`vault-mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <span className="hud-tag active">VAULT PORTAL // MENU</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="nav-icon-btn"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-item"
              >
                <span className="mobile-nav-label">{link.label}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <div className="mobile-chapter-info">
              <p className="mobile-tagline">{EVENT_DATA.tagline}</p>
              <p className="mobile-coord">{EVENT_DATA.organizer.institution} • {EVENT_DATA.organizer.coordinates}</p>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="btn-vault btn-vault-primary w-full"
            >
              REGISTER FOR VAULT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
