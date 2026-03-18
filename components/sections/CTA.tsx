export default function CTA() {
  return (
    <section id="contact" style={{ padding: '120px 24px', backgroundColor: '#0A0A0A', textAlign: 'center' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6BFF', marginBottom: '24px' }}>
          Ready to build?
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '24px' }}>
          Ready to build your AI operations team?
        </h2>
        <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: 1.7, marginBottom: '48px' }}>
          Let&apos;s talk about what&apos;s possible for your business. No pressure. 30 minutes. Real answers.
        </p>
        <a
          href="mailto:admin@dylanwichmannai.com"
          style={{
            display: 'inline-block',
            padding: '18px 40px',
            backgroundColor: '#1A6BFF',
            color: '#FFFFFF',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.02em'
          }}
        >
          Book a Free Discovery Call →
        </a>
        <p style={{ marginTop: '24px', fontSize: '14px', color: '#4B5563' }}>
          Or email: <a href="mailto:admin@dylanwichmannai.com" style={{ color: '#6B7280', textDecoration: 'none' }}>admin@dylanwichmannai.com</a>
        </p>
      </div>
    </section>
  );
}
