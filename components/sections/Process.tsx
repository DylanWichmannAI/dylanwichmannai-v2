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

      // Animate the vertical line drawing down (no opacity change — just scaleY)
      gsap.from('.process-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-container',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });

      // Animate each step FROM an offset — steps start fully visible
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step) => {
        gsap.from(step, {
          x: -40,
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
      className="bg-[#0A0A0A] py-32 px-6"
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
            className="font-bold text-white"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            How we work together.
          </h2>
        </div>

        {/* Steps */}
        <div className="process-container relative max-w-[760px]">

          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#2A2A2A]">
            <div className="process-line absolute inset-0 bg-[#1A6BFF]" />
          </div>

          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="process-step relative pl-20 pb-16 last:pb-0"
                style={{ opacity: 1, visibility: 'visible' }}
                data-visible="true"
              >
                {/* Number badge */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0A0A0A] border border-[#2A2A2A] flex items-center justify-center z-10">
                  <span
                    className="text-[#1A6BFF] text-xs font-mono font-medium"
                  >
                    {step.number}
                  </span>
                </div>

                <div className="pt-2">
                  <h3
                    className="font-semibold text-white text-xl mb-3"
                    style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-[500px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
