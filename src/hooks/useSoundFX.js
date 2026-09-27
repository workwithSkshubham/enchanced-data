import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Web Audio API synthesizer for subtle, ethereal portal drone and sci-fi tactile feedback.
 * Zero external audio files required. Completely optional and muted by default.
 */
export function useSoundFX() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const audioCtxRef = useRef(null);
  const droneNodesRef = useRef(null);

  // Initialize or resume audio context upon user gesture
  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  }, []);

  // Subtle sci-fi click sound on interaction
  const playClick = useCallback((freq = 880, type = 'sine', duration = 0.04) => {
    if (!isAudioEnabled || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio fallback silent
    }
  }, [isAudioEnabled]);

  // Subtle ambient drone (ethereal 108Hz + 216Hz harmonics)
  const startDrone = useCallback(() => {
    if (!audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, ctx.currentTime);

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(108, ctx.currentTime); // Deep resonant root
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(162, ctx.currentTime); // Perfect fifth harmonic

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.035, ctx.currentTime + 2); // Very quiet, atmospheric

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      droneNodesRef.current = { osc1, osc2, gain };
    } catch {
      // Audio silent
    }
  }, []);

  const stopDrone = useCallback(() => {
    if (droneNodesRef.current && audioCtxRef.current) {
      try {
        const { osc1, osc2, gain } = droneNodesRef.current;
        gain.gain.linearRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          try {
            osc1.stop();
            osc2.stop();
          } catch {
            // Already stopped
          }
        }, 550);
      } catch {
        // Safe exit
      }
      droneNodesRef.current = null;
    }
  }, []);

  const toggleAudio = () => {
    initAudio();
    setIsAudioEnabled((prev) => {
      const next = !prev;
      if (next) {
        startDrone();
      } else {
        stopDrone();
      }
      return next;
    });
  };

  useEffect(() => {
    return () => {
      stopDrone();
    };
  }, [stopDrone]);

  return { isAudioEnabled, toggleAudio, playClick };
}
