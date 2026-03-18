'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TESTIMONIALS = [
  {
    quote:
      "Dylan built us a multi-agent system that handles our entire lead qualification pipeline. What used to take 3 people 20 hours a week now runs automatically 24/7. The ROI was immediate.",
    author: 'Operations Director',
    company: 'Cape Town SMB',
    result: '40 hrs/week saved',
  },
  {
    quote:
      "We were sceptical about AI at first. Dylan came in, mapped everything out clearly, and within 6 weeks we had a system that answered 90% of customer queries without a human touching it.",
    author: 'Founder',
    company: 'E-commerce Brand, SA',
    result: '90% query automation',
  },
  {
    quote:
      "The killer feature was no cloud dependency. As a South African business, not having USD subscription costs and load-shedding risks was the deciding factor. Dylan delivered exactly that.",
    author: 'CEO',
    company: 'Professional Services, JHB',
    result: 'R50K/month saved',
  },
];

export default function Results() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.results-heading', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.results-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="results"
      className="bg-white py-32 px-6 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="results-heading mb-16">
          <p className="text-[#1A6BFF] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Results
          </p>
          <h2
            className="font-bold text-[#0A0A0A]"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Real businesses. Real results.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-[#E5E7EB] rounded-2xl hover:border-[#1A6BFF]/30 hover:shadow-sm transition-all duration-300"
            >
              {/* Result badge */}
              <div className="inline-flex items-center gap-2 bg-[#1A6BFF]/8 border border-[#1A6BFF]/20 rounded-full px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A6BFF]" />
                <span className="text-[#1A6BFF] text-xs font-medium">{t.result}</span>
              </div>

              <blockquote className="text-[#6B7280] text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="border-t border-[#E5E7EB] pt-4">
                <p className="text-[#0A0A0A] text-sm font-medium">{t.author}</p>
                <p className="text-[#9CA3AF] text-xs mt-0.5">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { before: '3 staff on data entry', after: '1 AI agent, zero errors' },
            { before: '4hr response time on queries', after: '2min average, 24/7' },
            { before: 'R50K/month consultants', after: 'R5K/month system cost' },
          ].map(({ before, after }, i) => (
            <div key={i} className="p-6 bg-[#F8F8F6] border border-[#E5E7EB] rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wider mb-1.5">Before</p>
                  <p className="text-[#9CA3AF] text-sm line-through">{before}</p>
                </div>
                <span className="text-[#1A6BFF] text-lg mt-4">→</span>
                <div className="flex-1">
                  <p className="text-[#1A6BFF] text-xs uppercase tracking-wider mb-1.5">After</p>
                  <p className="text-[#0A0A0A] text-sm font-medium">{after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
