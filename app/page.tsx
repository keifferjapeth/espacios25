import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <section className="hero section-card">
        <div className="badge">Dubai-first CRM</div>
        <h1>Espacios streamlines every viewing, message, and lease renewal in Dubai.</h1>
        <p>
          Purpose-built for developers and brokerages managing Dubai&apos;s high-velocity waterfront and desert luxury
          portfolios. Automate campaigns, centralize conversations, and keep every deal in motion.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/pricing">
            View pricing
          </Link>
          <Link className="button secondary" href="mailto:hello@espacios.ae">
            Talk with our team
          </Link>
        </div>
      </section>
    </main>
  );
}
