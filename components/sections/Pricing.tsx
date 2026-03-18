const PLANS = [
  {
    name: 'Starter',
    description: 'Perfect for businesses ready to begin their AI journey. Get started with the foundations that matter.',
    badge: null,
    highlighted: false,
  },
  {
    name: 'Growth',
    description: 'For businesses ready to scale. Full AI deployment with custom automation pipelines and ongoing support.',
    badge: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Total business transformation. End-to-end AI infrastructure, custom agent networks, fully managed.',
    badge: null,
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '112px 0', backgroundColor: '#F8F8F6' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6BFF', marginBottom: '16px' }}>
          Engagements
        </p>
        <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#0A0A0A', marginBottom: '16px', lineHeight: 1.15 }}>
          Ready to transform your business?
        </h2>
        <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '64px', lineHeight: 1.6 }}>
          Every engagement starts with a free discovery call.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {PLANS.map((plan) => (
            <div key={plan.name} style={{
              backgroundColor: plan.highlighted ? '#0A0A0A' : '#FFFFFF',
              border: plan.highlighted ? '1px solid #0A0A0A' : '1px solid #E5E7EB',
              borderRadius: '16px',
              padding: '40px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {plan.badge && (
                <span style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1A6BFF',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '4px 14px',
                  borderRadius: '100px',
                  whiteSpace: 'nowrap'
                }}>
                  {plan.badge}
                </span>
              )}
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: plan.highlighted ? '#FFFFFF' : '#0A0A0A' }}>
                {plan.name}
              </h3>
              <p style={{ fontSize: '15px', color: plan.highlighted ? '#9CA3AF' : '#6B7280', lineHeight: 1.7 }}>
                {plan.description}
              </p>
              <a
                href="mailto:admin@dylanwichmannai.com"
                style={{
                  marginTop: 'auto',
                  display: 'inline-block',
                  padding: '14px 24px',
                  backgroundColor: plan.highlighted ? '#FFFFFF' : '#0A0A0A',
                  color: plan.highlighted ? '#0A0A0A' : '#FFFFFF',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                Book a Discovery Call →
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#9CA3AF' }}>
          All engagements are tailored. Dylan will scope your project personally.
        </p>
      </div>
    </section>
  );
}
