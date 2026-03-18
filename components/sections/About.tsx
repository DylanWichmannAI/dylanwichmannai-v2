import Image from 'next/image';

export default function About() {
  return (
    <section id="about" style={{ padding: '112px 0', backgroundColor: '#FFFFFF' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left — Image */}
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/5' }}>
            <Image
              src="/images/hero-dylan.png"
              alt="Dylan Wichmann"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          {/* Right — Copy */}
          <div>
            <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6BFF', marginBottom: '16px' }}>
              About
            </p>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.2, marginBottom: '32px' }}>
              Cape Town. One Mac Mini.<br />26 AI agents.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8 }}>
                I spent 8 years as a professional hydrofoiler. I know what it means to build a system — to train every day, to refine every detail, to trust the process when results aren&apos;t visible yet.
              </p>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8 }}>
                When I transitioned out of sport, I went through the hardest years of my life. Coming through that, I rebuilt everything — including how I think about leverage, automation, and what&apos;s actually possible when you&apos;re building with the right tools.
              </p>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8 }}>
                I built a 26-agent AI system that runs my entire business from a Mac Mini in Marina da Gama. It manages my content across 5 Instagram accounts, handles client intake, monitors itself, and runs 24/7 without me touching it.
              </p>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8 }}>
                That&apos;s what I build for you.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginTop: '40px', paddingTop: '40px', borderTop: '1px solid #F3F4F6' }}>
              <div>
                <p style={{ fontSize: '28px', fontWeight: 700, color: '#0A0A0A' }}>26</p>
                <p style={{ fontSize: '13px', color: '#6B7280' }}>AI agents, my system</p>
              </div>
              <div>
                <p style={{ fontSize: '28px', fontWeight: 700, color: '#0A0A0A' }}>5</p>
                <p style={{ fontSize: '13px', color: '#6B7280' }}>IG accounts, automated</p>
              </div>
              <div>
                <p style={{ fontSize: '28px', fontWeight: 700, color: '#0A0A0A' }}>1</p>
                <p style={{ fontSize: '13px', color: '#6B7280' }}>Mac Mini, Cape Town</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
