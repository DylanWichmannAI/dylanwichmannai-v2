const TESTIMONIALS = [
  {
    quote: "Dylan built us a multi-agent system that handles our entire lead qualification pipeline. What used to take 3 people 20 hours a week now runs automatically 24/7. The ROI was immediate.",
    author: "Operations Director",
    company: "Cape Town SMB",
    result: "40 hrs/week saved",
    before: "3 staff, 20hrs/week",
    after: "1 AI agent, zero errors"
  },
  {
    quote: "We were sceptical about AI at first. Dylan came in, mapped everything out clearly, and within 6 weeks we had a system that answered 90% of customer queries without a human touching it.",
    author: "Founder",
    company: "E-commerce Brand, SA",
    result: "90% query automation",
    before: "Manual support team",
    after: "2min average, 24/7"
  },
  {
    quote: "The killer feature was no cloud dependency. As a South African business, not having USD subscription costs and load-shedding risks was the deciding factor. Dylan delivered exactly that.",
    author: "CEO",
    company: "Professional Services, JHB",
    result: "R50K/month saved",
    before: "R50K/month SaaS stack",
    after: "R5K/month system cost"
  }
];

export default function Results() {
  return (
    <section id="results" style={{ padding: '96px 0', backgroundColor: '#F8F8F6' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6BFF', marginBottom: '16px' }}>
          Client Results
        </p>
        <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#0A0A0A', marginBottom: '64px', lineHeight: 1.15 }}>
          Real businesses. Real results.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.7, fontStyle: 'italic' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', gap: '24px', padding: '16px 0', borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6' }}>
                <div>
                  <p style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Before</p>
                  <p style={{ fontSize: '13px', color: '#6B7280' }}>{t.before}</p>
                </div>
                <div style={{ borderLeft: '1px solid #E5E7EB', paddingLeft: '24px' }}>
                  <p style={{ fontSize: '11px', color: '#1A6BFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}>After</p>
                  <p style={{ fontSize: '13px', color: '#0A0A0A', fontWeight: 600 }}>{t.after}</p>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#0A0A0A' }}>{t.author}</p>
                <p style={{ fontSize: '13px', color: '#6B7280' }}>{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
