'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PROJECTS = [
  {
    id: 1,
    title: 'Multi-Agent CRM System',
    client: 'Cape Town SMB',
    result: '40 hours/week saved on data entry and follow-ups',
    stack: 'OpenClaw, 6 agents, Mac Mini',
    tags: ['CRM', 'Automation', 'Lead Management'],
    color: '#1A6BFF',
  },
  {
    id: 2,
    title: 'AI Customer Support System',
    client: 'E-commerce Brand',
    result: '90% query automation — 24/7 with no human touchpoints',
    stack: 'OpenClaw + Telegram integration, 3 agents',
    tags: ['Support', 'Telegram', 'NLP'],
    color: '#0055E0',
  },
  {
    id: 3,
    title: 'Financial Reporting Automation',
    client: 'Professional Services, JHB',
    result: 'R50K/month in consultant fees replaced by autonomous system',
    stack: 'OpenClaw + Google Drive + reporting agents',
    tags: ['Finance', 'Reporting', 'Google Drive'],
    color: '#3B82F6',
  },
  {
    id: 4,
    title: 'Workflow Automation Suite',
    client: 'Operations Team, Durban',
    result: '80% reduction in manual process steps across 5 departments',
    stack: 'OpenClaw, 4 agents, on-premise',
    tags: ['Operations', 'Automation', 'On-Premise'],
    color: '#1A6BFF',
  },
];

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.work-heading', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.utils.toArray<HTMLElement>('.work-card').forEach((card, i) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: (i % 2) * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
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
      id="work"
      className="bg-[#F8F8F6] py-32 px-6"
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="work-heading mb-16">
          <p className="text-[#1A6BFF] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Work
          </p>
          <h2
            className="font-bold text-[#0A0A0A]"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Selected case studies.
          </h2>
        </div>

        {/* Clean 2-column grid — no horizontal scroll, no sticky panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="work-card p-8 bg-white border border-[#E5E7EB] rounded-2xl hover:border-[#1A6BFF]/30 hover:shadow-md transition-all duration-300"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#6B7280]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className="text-[#0A0A0A] font-semibold text-xl mb-3"
                style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
              >
                {p.title}
              </h3>

              {/* Result */}
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{p.result}</p>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                <div>
                  <p className="text-[#9CA3AF] text-xs">Client: {p.client}</p>
                  <p className="text-[#9CA3AF] text-xs mt-0.5">{p.stack}</p>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${p.color}15`, color: p.color }}
                >
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 text-center">
          <a
            href="#contact"
            className="text-[#1A6BFF] text-sm hover:underline"
          >
            Interested in a custom build? Let&apos;s talk →
          </a>
        </div>
      </div>
    </section>
  );
}
