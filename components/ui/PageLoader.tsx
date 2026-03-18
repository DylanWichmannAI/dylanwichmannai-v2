'use client';

import { useEffect, useRef, useState } from 'react';

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem('dw-loaded')) {
      onComplete();
      return;
    }

    // Dynamic GSAP import to avoid SSR issues
    import('gsap').then(({ gsap }) => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('dw-loaded', '1');
          onComplete();
        },
      });

      const obj = { val: 0 };
      tl.to(obj, {
        val: 100,
        duration: 1.2,
        ease: 'power2.inOut',
        onUpdate: () => setCount(Math.round(obj.val)),
      });

      tl.to(
        [leftRef.current, rightRef.current],
        {
          xPercent: (_i: number, el: Element) =>
            el === leftRef.current ? -100 : 100,
          duration: 0.8,
          ease: 'power4.inOut',
          stagger: 0,
        },
        '-=0.1'
      );
    });
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex pointer-events-none">
      <div
        ref={leftRef}
        className="w-1/2 h-full bg-[#0A0A0A] flex items-center justify-end pr-8"
      >
        <span
          className="text-white leading-none font-bold select-none"
          style={{
            fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
            fontSize: 'clamp(60px, 12vw, 120px)',
          }}
        >
          DW
        </span>
      </div>
      <div
        ref={rightRef}
        className="w-1/2 h-full bg-[#0A0A0A] flex items-end pb-8 pl-8"
      >
        <span
          className="text-white/20 select-none"
          style={{
            fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
            fontSize: 'clamp(32px, 6vw, 64px)',
          }}
        >
          {count}
        </span>
      </div>
    </div>
  );
}
