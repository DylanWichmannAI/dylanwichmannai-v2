// Shared GSAP animation presets

export const fadeUp = {
  from: { y: 40, opacity: 0 },
  to: { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
};

export const slideLeft = {
  from: { x: -40, opacity: 0 },
  to: { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
};

export const clipReveal = {
  from: { clipPath: 'inset(0 100% 0 0)' },
  to: { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power4.inOut' },
};

export const scrollTriggerDefaults = {
  start: 'top 80%',
  toggleActions: 'play none none reverse' as const,
};

export const springTransition = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 20,
  mass: 0.5,
};
