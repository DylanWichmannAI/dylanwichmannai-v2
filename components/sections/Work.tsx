const PROJECTS = [
  {
    title: 'Multi-Agent CRM System',
    client: 'Cape Town SMB',
    result: '40 hours/week saved on data entry and lead follow-ups.',
    tags: ['CRM', 'Automation', 'Lead Management'],
  },
  {
    title: 'AI Customer Support System',
    client: 'E-commerce Brand, SA',
    result: '90% of customer queries handled automatically — 24/7, no human touchpoints.',
    tags: ['Support', 'Telegram', 'NLP'],
  },
  {
    title: 'Financial Reporting Automation',
    client: 'Professional Services, JHB',
    result: 'R50K/month in consultant fees replaced by a fully autonomous reporting system.',
    tags: ['Finance', 'Reporting', 'Google Drive'],
  },
  {
    title: 'Workflow Automation Suite',
    client: 'Operations Team, Durban',
    result: '80% reduction in manual process steps across 5 departments.',
    tags: ['Operations', 'Automation', 'On-Premise'],
  },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: '112px 0', backgroundColor: '#FFFFFF' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6BFF', marginBottom: '16px' }}>
          Work
        </p>
        <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#0A0A0A', marginBottom: '64px', lineHeight: 1.15 }}>
          Selected case studies.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '24px' }}>
          {PROJECTS.map((p, i) => (
            <div key={i} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              padding: '40px',
              transition: 'box-shadow 0.2s ease'
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
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.7, marginBottom: '24px' }}>{p.result}</p>
              <p style={{ fontSize: '13px', color: '#9CA3AF' }}>— {p.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
