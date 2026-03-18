'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const PLANS = [
  {
    name: 'Starter',
    description: 'Perfect for businesses ready to begin their AI journey. Get started with the foundations.',
    highlighted: false,
  },
  {
    name: 'Growth',
    description: 'For businesses ready to scale. Full AI deployment with custom automation pipelines.',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'Total business transformation. End-to-end AI infrastructure, custom agent networks.',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#111111] py-32 px-6"
      style={{ opacity: 1, visibility: 'visible' }}
      data-visible="true"
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="mb-16 text-center" style={{ opacity: 1 }}>
          <h2
            className="font-bold text-white mb-6"
            style={{
              fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Ready to transform your business?
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            Every engagement starts with a free discovery call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ opacity: 1 }}
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

              <div className="mb-6 flex-1">
                <p
                  className="font-bold text-white text-2xl mb-4"
                  style={{ fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif' }}
                >
                  {plan.name}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <MagneticButton
                href="mailto:admin@dylanwichmannai.com"
                className={`w-full py-3 rounded-full text-sm font-medium text-center transition-colors ${
                  plan.highlighted
                    ? 'bg-[#1A6BFF] text-white hover:bg-[#0055E0]'
                    : 'border border-white/20 text-white hover:border-white/40'
                }`}
              >
                Book a Discovery Call →
              </MagneticButton>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-10">
          All engagements are tailored. Dylan will scope your project personally.
        </p>
      </div>
    </section>
  );
}
