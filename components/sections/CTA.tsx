'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const split = new SplitText(headingRef.current, {
        type: 'words,lines',
        linesClass: 'line',
      });

      gsap.from(split.words, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.cta-sub', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-sub',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.cta-button', {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.cta-button',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className="bg-[#F8F8F6] py-40 px-6 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-[#1A6BFF]/6 blur-[120px]" />
      </div>

      <div className="relative max-w-[960px] mx-auto text-center">
        <p className="text-[#1A6BFF] text-sm font-medium tracking-[0.2em] uppercase mb-8">
          Ready to build?
        </p>

        <h2
          ref={headingRef}
          className="font-bold text-[#0A0A0A] leading-tight mb-8"
          style={{
            fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          }}
        >
          Ready to build your AI operations team?
        </h2>

        <p className="cta-sub text-[#6B7280] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Let&apos;s talk about what&apos;s possible for your business. No pressure. 30 minutes. Real answers.
        </p>

        <div className="cta-button">
          <MagneticButton
            href="mailto:admin@dylanwichmannai.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#1A6BFF] text-white font-medium rounded-full text-lg hover:bg-[#0055E0] transition-colors animate-pulse-ring"
          >
            Book a Free Discovery Call →
          </MagneticButton>
        </div>

        <p className="mt-8 text-[#9CA3AF] text-sm">
          Or email: <a href="mailto:admin@dylanwichmannai.com" className="text-[#6B7280] hover:text-[#0A0A0A] transition-colors">admin@dylanwichmannai.com</a>
        </p>
      </div>
    </section>
  );
}
