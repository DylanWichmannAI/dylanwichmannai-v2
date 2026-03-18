const RESULTS = [
  {
    stat: '26',
    label: 'AI agents',
    description: 'Running simultaneously on a single Mac Mini. Health, Operations, Build, Research, Client Services, Content, and Command squads — all autonomous.',
    note: 'Dylan\'s own system'
  },
  {
    stat: '5',
    label: 'Instagram accounts',
    description: 'Managed autonomously — content planned, generated, posted, and engaged with. Zero manual posting.',
    note: '5,200+ combined followers'
  },
  {
    stat: '24/7',
    label: 'Zero downtime',
    description: 'The system monitors itself, heals itself, and alerts Dylan only when something genuinely needs a human decision.',
    note: 'Self-healing loop'
  },
  {
    stat: 'R0',
    label: 'Cloud dependency',
    description: 'Everything runs on local hardware. No USD SaaS bills. No load-shedding risk. No data leaving your premises without your say-so.',
    note: 'On-premise by design'
  }
];

export default function Results() {
  return (
    <section id="results" style={{ padding: '112px 0', backgroundColor: '#F8F8F6' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6BFF', marginBottom: '16px' }}>
          Proof
        </p>
        <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#0A0A0A', marginBottom: '16px', lineHeight: 1.15 }}>
          I run this system myself.
        </h2>
        <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '64px', lineHeight: 1.6, maxWidth: '600px' }}>
          Before I build it for you, I built it for me. Here&apos;s what the system actually does.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '24px' }}>
          {RESULTS.map((r, i) => (
            <div key={i} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              padding: '40px',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start'
            }}>
              <div style={{ flexShrink: 0 }}>
                <p style={{ fontSize: '48px', fontWeight: 800, color: '#0A0A0A', lineHeight: 1 }}>{r.stat}</p>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#1A6BFF', marginTop: '4px' }}>{r.label}</p>
              </div>
              <div style={{ borderLeft: '1px solid #E5E7EB', paddingLeft: '24px' }}>
                <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7, marginBottom: '12px' }}>{r.description}</p>
                <p style={{ fontSize: '12px', color: '#9CA3AF', fontStyle: 'italic' }}>{r.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
