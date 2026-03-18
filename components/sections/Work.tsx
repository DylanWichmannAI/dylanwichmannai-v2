'use client';

import { useRef, useState } from 'react';
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
];

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState(0);

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

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef }
  );

  const project = PROJECTS[activeProject];

  return (
    <section
      ref={containerRef}
      id="work"
      className="bg-[#0A0A0A] py-32 px-6"
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="work-heading mb-16">
          <p className="text-[#1A6BFF] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Work
          </p>
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Selected case studies.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: Visual panel */}
          <div
            className="sticky top-28 rounded-2xl overflow-hidden transition-all duration-700"
            style={{
              aspectRatio: '4/3',
              background: `linear-gradient(135deg, ${project.color}15, #0A0A0A)`,
              border: `1px solid ${project.color}30`,
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              {/* Abstract system diagram */}
              <div className="relative w-full max-w-[300px] h-40 mb-8">
                {/* Central node */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-mono font-bold border-2"
                  style={{ borderColor: project.color, background: `${project.color}20` }}
                >
                  AI
                </div>
                {/* Orbiting nodes */}
                {[0, 1, 2, 3].map((i) => {
                  const angle = (i * Math.PI * 2) / 4;
                  const r = 90;
                  const x = 50 + (Math.cos(angle) * r) / 2;
                  const y = 50 + (Math.sin(angle) * r) / 4;
                  return (
                    <div
                      key={i}
                      className="absolute w-8 h-8 rounded-full border border-white/20 bg-[#161616] flex items-center justify-center"
                      style={{
                        left: `${x}%`,
                        top: `${y + 30}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: project.color }}
                      />
                    </div>
                  );
                })}
              </div>

              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">
                {project.stack}
              </p>
              <p
                className="font-bold text-white text-xl"
                style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
              >
                {project.title}
              </p>
            </div>
          </div>

          {/* Right: Project list */}
          <div className="space-y-4">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  i === activeProject
                    ? 'bg-[#161616] border-[#1A6BFF]/40'
                    : 'bg-[#111111] border-[#2A2A2A] hover:border-white/10'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="text-white font-semibold text-lg mb-2"
                      style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{p.result}</p>
                    <p className="text-white/30 text-xs mt-2">Client: {p.client}</p>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      i === activeProject
                        ? 'bg-[#1A6BFF] text-white'
                        : 'border border-[#2A2A2A] text-white/20'
                    }`}
                  >
                    →
                  </div>
                </div>
              </button>
            ))}

            <div className="pt-4">
              <a
                href="#contact"
                className="text-[#1A6BFF] text-sm hover:underline"
              >
                Interested in a custom build? Let&apos;s talk →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
