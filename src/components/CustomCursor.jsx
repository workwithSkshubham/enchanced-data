import React, { useEffect, useState, useRef } from 'react';

/**
 * High-performance smooth custom cursor with soft glow & interactive states.
 * Strictly active on desktop pointers; fully disabled on touch/coarse pointers and prefers-reduced-motion.
 */
export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Check if pointer is fine (mouse/desktop) and reduced motion is not requested
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    // Interactive element detection for cursor expansion
    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, select, textarea, .interactive-target');
      if (target) {
        setHovered(true);
        const customText = target.getAttribute('data-cursor-text');
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText('');
        }
      } else {
        setHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    // Smooth lerp for outer ring
    const renderLoop = () => {
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      className={`vault-cursor-wrapper ${visible ? 'is-visible' : ''} ${hovered ? 'is-hovering' : ''} ${clicked ? 'is-clicked' : ''}`}
      aria-hidden="true"
    >
      {/* Central Sharp Dot */}
      <div ref={cursorDotRef} className="vault-cursor-dot" />

      {/* Outer Ethereal Ring / Spotlight */}
      <div ref={cursorRingRef} className="vault-cursor-ring">
        {cursorText && <span className="cursor-label">{cursorText}</span>}
      </div>
    </div>
  );
}
