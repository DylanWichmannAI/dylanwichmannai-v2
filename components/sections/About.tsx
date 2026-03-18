'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ASIDE_STATS = [
  { value: '3+', label: 'years building AI systems' },
  { value: '50+', label: 'automations deployed' },
  { value: 'R0', label: 'cloud dependency for clients' },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.utils.toArray<HTMLElement>('.about-line').forEach((el, i) => {
        gsap.from(el, {
          x: -40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.07,
        });
      });

      gsap.from('.about-image', {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.2,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.to('.about-image', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="bg-[#0A0A0A] py-32 px-6 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div>
          <p className="about-line text-[#1A6BFF] text-sm font-medium tracking-[0.2em] uppercase mb-6">
            About
          </p>

          <h2
            className="about-line font-bold text-white leading-tight mb-8"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            Cape Town&apos;s AI guy.
          </h2>

          <p className="about-line text-white/60 text-base leading-relaxed mb-5">
            I&apos;m Dylan Wichmann — Cape Town-based AI systems architect and consultant. I don&apos;t just talk about AI. I build it, deploy it, and hand you the keys.
          </p>

          <p className="about-line text-white/60 text-base leading-relaxed mb-5">
            My work: designing multi-agent systems that run 24/7 on your own hardware, doing the work of an entire operations team without the headcount.
          </p>

          <p className="about-line text-white/60 text-base leading-relaxed mb-10">
            Built for South African businesses. No USD cloud bills, no latency issues, no vendor lock-in. Your AI stack, on your terms.
          </p>

          {/* Aside stats */}
          <div className="grid grid-cols-3 gap-6 border-t border-[#2A2A2A] pt-8">
            {ASIDE_STATS.map(({ value, label }) => (
              <div key={label} className="about-line">
                <p
                  className="font-bold text-white text-2xl mb-1"
                  style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
                >
                  {value}
                </p>
                <p className="text-white/40 text-xs leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div
          className="about-image relative rounded-2xl overflow-hidden max-w-[480px] mx-auto lg:mx-0 w-full"
          style={{ aspectRatio: '4/5' }}
        >
          <Image
            src="/images/dylan-about.jpg"
            alt="Dylan Wichmann working — Cape Town AI consultant"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
          {/* Cape Town badge */}
          <div className="absolute top-6 right-6 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
            <p className="text-white/60 text-xs uppercase tracking-wider">Based in</p>
            <p className="text-white text-sm font-medium mt-0.5">Cape Town 🇿🇦</p>
          </div>
        </div>
      </div>
    </section>
  );
}
