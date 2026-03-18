'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';

// Lazy load particle field — no SSR
const ParticleField = dynamic(() => import('@/components/three/ParticleField'), {
  ssr: false,
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      // Respect reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const split = new SplitText(headingRef.current, {
        type: 'words,lines',
        wordsClass: 'word',
        linesClass: 'line',
      });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(labelRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });

      tl.from(
        split.words,
        {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: 'power4.out',
          stagger: 0.04,
        },
        '-=0.3'
      );

      tl.from(
        subRef.current,
        { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      );

      tl.from(
        ctaRef.current ? Array.from(ctaRef.current.children) : [],
        { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out', stagger: 0.1 },
        '-=0.3'
      );

      tl.from(
        imageRef.current,
        {
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.2,
          ease: 'power4.inOut',
        },
        '-=0.8'
      );

      // Parallax on scroll
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
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
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#1A6BFF]/8 blur-[120px] pointer-events-none" />

      {/* Particle field */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleField />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 pb-16">

        {/* Left: Text */}
        <div>
          <p
            ref={labelRef}
            className="text-[#1A6BFF] text-sm font-medium tracking-[0.2em] uppercase mb-6"
          >
            Cape Town&apos;s Leading AI Consultant
          </p>

          <h1
            ref={headingRef}
            className="font-bold text-white leading-[1.05] mb-8"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            }}
          >
            Turn Your Business Into an AI-Powered Machine.
          </h1>

          <p
            ref={subRef}
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-[480px]"
          >
            I deploy custom AI agent systems that automate 80% of your operations — built on your hardware, under your control. No subscriptions. No lock-in.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <MagneticButton
              href="#contact"
              className="px-8 py-4 bg-[#1A6BFF] text-white font-medium rounded-full text-base hover:bg-[#0055E0] transition-colors"
              data-cursor-label="Book"
            >
              Book a Call →
            </MagneticButton>
            <a
              href="#work"
              data-cursor-label="View"
              className="px-8 py-4 border border-white/20 text-white font-medium rounded-full text-base hover:border-white/40 transition-colors"
            >
              See Our Work ↓
            </a>
          </div>
        </div>

        {/* Right: Dylan's photo */}
        <div
          ref={imageRef}
          className="relative rounded-2xl overflow-hidden max-w-[480px] mx-auto lg:mx-0 w-full"
          style={{ aspectRatio: '4/5' }}
        >
          <Image
            src="/images/dylan-hero.jpg"
            alt="Dylan Wichmann — AI Consultant, Cape Town"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />

          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
            <p className="text-white text-sm font-medium">🇿🇦 Cape Town, South Africa</p>
            <p className="text-white/60 text-xs mt-0.5">Available for new clients</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
