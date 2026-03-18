'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HoverCard from '@/components/ui/HoverCard';

const SERVICES = [
  {
    number: '01',
    title: 'AI Agent Deployment',
    description:
      'Deploy ready-made or custom AI agents that run 24/7. From data processing to client communication — always on, never tired.',
    price: 'Book a call for pricing',
  },
  {
    number: '02',
    title: 'Workflow Automation',
    description:
      'Map your bottlenecks. Automate them. Cut manual steps by up to 90% and free your team for the work that actually matters.',
    price: 'Book a call for pricing',
  },
  {
    number: '03',
    title: 'AI Coaching',
    description:
      'One-on-one sessions. Learn to design, deploy, and manage your own AI systems — without us holding your hand forever.',
    price: 'Book a call for pricing',
  },
  {
    number: '04',
    title: 'Done-for-You Deployment',
    description:
      'Full service. Discovery → Architecture → Deployment → Support. A complete AI operations team in 4–6 weeks.',
    price: 'Book a call for pricing',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.services-header', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="bg-[#111111] py-32 px-6"
      style={{ opacity: 1 }}
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="services-header mb-16" style={{ opacity: 1 }}>
          <p className="text-[#1A6BFF] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Services
          </p>
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            What I build for you.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <HoverCard key={service.number} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
