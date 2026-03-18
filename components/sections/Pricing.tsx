'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'DIY',
    price: 'R2,500–R5,000',
    description: 'Your hardware, our templates.',
    features: [
      'Pre-built agent templates',
      'Email support',
      'Self-service setup guides',
      'Community access',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Guided',
    price: 'R7,500–R15,000',
    description: 'Hands-on setup. Custom architecture.',
    features: [
      'Custom AI architecture design',
      'Hands-on deployment assistance',
      '30 days priority support',
      'Integration with your tools',
      'Performance tuning',
    ],
    cta: 'Book a call',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Done-for-You',
    price: 'R15,000–R35,000',
    description: 'Discovery → Deployment. Full service.',
    features: [
      'Full discovery workshop',
      'Custom agent development',
      '90 days premium support',
      'Team training included',
      'Complete operation handoff',
    ],
    cta: 'Let\'s talk',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#111111] py-32 px-6"
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="mb-16">
          <p className="text-[#1A6BFF] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Pricing
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Simple, transparent pricing.
          </h2>
          <p className="text-white/50 text-base max-w-xl">
            All prices in South African Rand. No hidden fees. No USD subscription surprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative p-8 rounded-2xl border flex flex-col ${
                plan.highlighted
                  ? 'bg-[#1A6BFF]/10 border-[#1A6BFF]/40 scale-[1.02]'
                  : 'bg-[#161616] border-[#2A2A2A]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A6BFF] text-white text-xs font-medium px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p
                  className="text-white/50 text-sm font-medium uppercase tracking-wider mb-2"
                >
                  {plan.name}
                </p>
                <p
                  className="font-bold text-white text-3xl mb-2"
                  style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
                >
                  {plan.price}
                </p>
                <p className="text-white/40 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={14} className="text-[#1A6BFF] mt-0.5 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="#contact"
                className={`w-full py-3 rounded-full text-sm font-medium text-center transition-colors ${
                  plan.highlighted
                    ? 'bg-[#1A6BFF] text-white hover:bg-[#0055E0]'
                    : 'border border-white/20 text-white hover:border-white/40'
                }`}
              >
                {plan.cta} →
              </MagneticButton>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          Not sure which fits? <a href="#contact" className="text-[#1A6BFF] hover:underline">Book a free 30-min discovery call.</a> No pressure.
        </p>
      </div>
    </section>
  );
}
