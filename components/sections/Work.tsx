const PROJECTS = [
  {
    title: 'AI Operations System — DWAI',
    description: 'Built a 26-agent autonomous system running on a single Mac Mini. Squads for health monitoring, build operations, content, client intake, and security — all self-managing.',
    outcome: '24/7 autonomous operations. Zero cloud dependency.',
    tags: ['26 Agents', 'OpenClaw', 'Mac Mini', 'Cape Town'],
  },
  {
    title: 'Instagram Content Pipeline',
    description: 'Automated content planning, generation, posting, and engagement across 5 Instagram accounts. AI handles caption writing, image generation, scheduling, and comment replies.',
    outcome: '5 accounts. Zero manual posting.',
    tags: ['Content', 'Instagram', 'Automation'],
  },
  {
    title: 'Client Intake & CRM Pipeline',
    description: 'Built an AI-powered intake system that qualifies leads, routes enquiries, maintains a live CRM, and follows up automatically — all without human intervention.',
    outcome: 'No lead falls through the cracks.',
    tags: ['CRM', 'Lead Qualification', 'Automation'],
  },
  {
    title: 'Self-Healing Infrastructure',
    description: 'The system monitors itself. Sentinel detects issues, Medic diagnoses them, Terminal applies fixes, Gauge verifies. Dylan is alerted only when a human decision is actually needed.',
    outcome: 'Infrastructure that heals itself.',
    tags: ['DevOps', 'Self-Healing', 'Monitoring'],
  },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: '112px 0', backgroundColor: '#FFFFFF' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6BFF', marginBottom: '16px' }}>
          Work
        </p>
        <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#0A0A0A', marginBottom: '16px', lineHeight: 1.15 }}>
          What&apos;s been built.
        </h2>
        <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '64px', lineHeight: 1.6, maxWidth: '600px' }}>
          Real systems. Real results. All running right now.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '24px' }}>
          {PROJECTS.map((p, i) => (
            <div key={i} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              padding: '40px',
            }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '12px',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    backgroundColor: '#F3F4F6',
                    color: '#6B7280'
                  }}>{tag}</span>
                ))}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0A0A0A', marginBottom: '12px' }}>{p.title}</h3>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.7, marginBottom: '24px' }}>{p.description}</p>
              <div style={{ paddingTop: '20px', borderTop: '1px solid #F3F4F6' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#1A6BFF' }}>→ {p.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
