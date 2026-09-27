import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Global "vault unlock" reveal system (GSAP + ScrollTrigger).
 *
 * Markup vocabulary:
 *   [data-reveal]                 — element fades + rises once it enters the viewport
 *                                   optional: data-reveal-delay="0.2", data-reveal-distance="48"
 *   [data-reveal-group]           — container whose [data-reveal-item] children stagger in
 *
 * Fully bypassed under prefers-reduced-motion: content simply stays visible.
 */
export function useScrollReveal() {
  useEffect(() => {
    const singles = gsap.utils.toArray('[data-reveal]');
    const groups = gsap.utils.toArray('[data-reveal-group]');

    if (prefersReducedMotion() || (singles.length === 0 && groups.length === 0)) {
      return;
    }

    const ctx = gsap.context(() => {
      singles.forEach((el) => {
        const distance = parseFloat(el.dataset.revealDistance || 36);
        const delay = parseFloat(el.dataset.revealDelay || 0);

        gsap.fromTo(
          el,
          { autoAlpha: 0, y: distance },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      });

      groups.forEach((group) => {
        const items = group.querySelectorAll('[data-reveal-item]');
        if (!items.length) return;

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.11,
            scrollTrigger: { trigger: group, start: 'top 85%', once: true },
          }
        );
      });
    });

    // Positions settle once webfonts and lazy images finish loading
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 700);
    const refreshOnLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', refreshOnLoad);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('load', refreshOnLoad);
      ctx.revert();
    };
  }, []);
}

/**
 * Scroll-scrubbed progress line for the tactical timeline.
 * The mission axis illuminates as the user descends through the dossier.
 */
export function useTimelineScrub(ref, deps = []) {
  useEffect(() => {
    const wrapper = ref.current;
    if (!wrapper || prefersReducedMotion()) return;

    const progress = wrapper.querySelector('.timeline-axis-progress');
    if (!progress) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progress,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top 72%',
            end: 'bottom 45%',
            scrub: 0.4,
          },
        }
      );
    }, wrapper);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
