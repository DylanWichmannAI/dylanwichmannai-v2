'use client';

const STATS: Array<{
  display: string;
  label: string;
  sublabel: string;
}> = [
  { display: '26', label: 'AI Agents', sublabel: 'Fully autonomous squad' },
  { display: '7', label: 'Active Squads', sublabel: 'Health, Ops, Build, Research, Client, Command, DW' },
  { display: '24/7', label: 'Uptime', sublabel: 'Zero-downtime operations' },
  { display: '1', label: 'Mac Mini', sublabel: 'Runs it all from Cape Town' },
];

export default function CredibilityBar() {
  return (
    <section className="bg-[#F8F8F6] border-y border-[#E5E7EB] py-16 px-6">
      <div className="max-w-[1280px] mx-auto">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map(({ display, label, sublabel }) => (
            <div key={label} className="text-center md:text-left">
              <div
                className="font-bold text-[#0A0A0A] mb-1"
                style={{
                  fontFamily: 'var(--font-clash-display), Space Grotesk, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                }}
              >
                {display}
              </div>
              <p className="text-[#0A0A0A] text-sm font-semibold mb-0.5">{label}</p>
              <p className="text-[#6B7280] text-xs leading-snug">{sublabel}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] mt-12 pt-12">
          <p className="text-center text-[#6B7280] text-xs uppercase tracking-widest mb-8">
            Trusted by businesses in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Cape Town', 'Johannesburg', 'Durban', 'London', 'Dubai'].map((city) => (
              <span key={city} className="text-[#9CA3AF] text-sm font-medium tracking-wider">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
