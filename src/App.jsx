import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import VaultLoader from './components/VaultLoader';
import RegistrationModal from './components/RegistrationModal';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import HighlightsSection from './sections/HighlightsSection';
import TracksSection from './sections/TracksSection';
import TimelineSection from './sections/TimelineSection';
import SpeakersSection from './sections/SpeakersSection';
import GallerySection from './sections/GallerySection';
import RegistrationSection from './sections/RegistrationSection';
import FAQSection from './sections/FAQSection';
import FooterSection from './sections/FooterSection';

import { useSoundFX } from './hooks/useSoundFX';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [registrationInitialData, setRegistrationInitialData] = useState({});
  const { isAudioEnabled, toggleAudio, playClick } = useSoundFX();

  const handleOpenRegister = (data = {}) => {
    playClick(1050, 'sine', 0.05);
    setRegistrationInitialData(data);
    setIsRegisterModalOpen(true);
  };

  const handleSelectTrack = (trackName) => {
    handleOpenRegister({ track: trackName });
  };

  return (
    <div className="vibranium-app-root">
      {/* Intro Loading Sequence */}
      {loading && <VaultLoader onComplete={() => setLoading(false)} />}

      {/* Film Grain & Atmospheric Ambient Aurora Orbs */}
      <div className="film-grain-overlay" aria-hidden="true" />
      <div className="ambient-aurora-bg" aria-hidden="true">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        isAudioEnabled={isAudioEnabled}
        toggleAudio={toggleAudio}
        onOpenRegister={() => handleOpenRegister()}
      />

      {/* Main Sections */}
      <main id="main-content">
        <HeroSection onOpenRegister={() => handleOpenRegister()} />
        <AboutSection onOpenRegister={() => handleOpenRegister()} />
        <HighlightsSection onOpenRegister={() => handleOpenRegister()} />
        <TracksSection onSelectTrackForRegister={handleSelectTrack} />
        <TimelineSection />
        <SpeakersSection />
        <GallerySection />
        <RegistrationSection
          onOpenFullForm={handleOpenRegister}
          selectedTrack={registrationInitialData.track}
        />
        <FAQSection />
      </main>

      {/* Footer */}
      <FooterSection onOpenRegister={() => handleOpenRegister()} />

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        initialData={registrationInitialData}
      />
    </div>
  );
}
