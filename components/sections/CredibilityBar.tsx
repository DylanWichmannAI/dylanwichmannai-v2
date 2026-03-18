'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';

const STATS: Array<{
  end: number | null;
  suffix: string;
  display: string | null;
  label: string;
}> = [
  { end: 40, suffix: '+', display: null, label: 'Hours saved per client / week' },
  { end: 99, suffix: '%', display: null, label: 'Process consistency rate' },
  { end: 60, suffix: '%', display: null, label: 'Average cost reduction' },
  { end: null, suffix: '', display: '4–6 wks', label: 'To full deployment' },
];

export default function CredibilityBar() {
  return (
    <section className="bg-[#111111] border-y border-[#2A2A2A] py-16 px-6">
      <div className="max-w-[1280px] mx-auto">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map(({ end, suffix, display, label }) => (
            <div key={label} className="text-center md:text-left">
              <div
                className="font-bold text-white mb-1"
                style={{
                  fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                }}
              >
                {display != null ? (
                  <span>{display}</span>
                ) : (
                  <AnimatedCounter end={end!} suffix={suffix} />
                )}
              </div>
              <p className="text-white/40 text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2A2A] mt-12 pt-12">
          <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-8">
            Trusted by businesses in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Cape Town', 'Johannesburg', 'Durban', 'London', 'Dubai'].map((city) => (
              <span key={city} className="text-white/20 text-sm font-medium tracking-wider">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
