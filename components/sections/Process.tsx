'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description:
      "We understand your business, map your workflows, and identify the 3 highest-leverage automation opportunities. No fluff — just clarity.",
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Architect your AI system: which agents, what they do, how they interact, and what success looks like before we write a single line.',
  },
  {
    number: '03',
    title: 'Deployment',
    description:
      'Build and deploy your agents on your hardware. Integrate with your existing tools. Your system, on your terms.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'Monitor, optimise, improve. Your system gets better over time. We stay close so nothing breaks silently.',
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step) => {
        gsap.from(step, {
          x: -40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="process"
      className="bg-[#F8F8F6] py-32 px-6"
      style={{ opacity: 1, visibility: 'visible' }}
      data-visible="true"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="mb-20" style={{ opacity: 1 }}>
          <p className="text-[#1A6BFF] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Process
          </p>
          <h2
            className="font-bold text-[#0A0A0A]"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            How we work together.
          </h2>
        </div>

        {/* Steps — clean flex card layout, no overlap */}
        <div className="max-w-[760px] flex flex-col gap-12">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="process-step flex items-start gap-6"
              style={{ opacity: 1, visibility: 'visible' }}
            >
              {/* Number — fixed width, large accent, no overlap */}
              <div className="flex-shrink-0 w-20 text-right">
                <span
                  className="font-bold leading-none text-[#E5E7EB]"
                  style={{
                    fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
                    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2 pb-2 border-b border-[#E5E7EB] last:border-0">
                <h3
                  className="font-semibold text-[#0A0A0A] text-xl mb-3"
                  style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
