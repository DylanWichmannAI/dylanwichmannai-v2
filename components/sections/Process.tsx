export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We map your business, your bottlenecks, and your goals. Free, no obligation. Usually 30 minutes."
    },
    {
      number: "02",
      title: "Custom Proposal",
      description: "I design a system tailored to your operation — the right agents, the right workflows. You approve the scope before anything is built."
    },
    {
      number: "03",
      title: "Build & Deploy",
      description: "I build it, test it, deploy it on dedicated hardware. You get a full handover session and documentation."
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Monthly retainer or project basis. The system evolves as your business grows. You're never on your own."
    }
  ];

  return (
    <section id="process" style={{ padding: '96px 0', backgroundColor: '#F8F8F6' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6BFF', marginBottom: '16px' }}>
          The Process
        </p>
        <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#0A0A0A', marginBottom: '64px', lineHeight: 1.15 }}>
          How we work together.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '48px' }}>
          {steps.map((step) => (
            <div key={step.number} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{
                fontSize: '64px',
                fontWeight: 800,
                color: '#E5E7EB',
                lineHeight: 1,
                flexShrink: 0,
                width: '72px',
                textAlign: 'right'
              }}>
                {step.number}
              </span>
              <div style={{ paddingTop: '8px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0A0A0A', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
