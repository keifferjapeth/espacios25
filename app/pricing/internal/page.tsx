import { headers } from 'next/headers';

const allowInternal = process.env.INTERNAL_PRICING_ENABLED === 'true';
const adminToken = process.env.INTERNAL_PRICING_TOKEN ?? '';

const internalLines = [
  'ESPACIOS — INTERNAL PRICING DETAILS',
  'Draft rates for pilot projects and non-public offers.',
  'Share only with pre-approved admin users.',
];

export default function InternalPricingPage() {
  const headerList = headers();
  const inboundToken = headerList.get('x-espacios-admin-token');
  const authorized = allowInternal && Boolean(adminToken) && inboundToken === adminToken;

  if (!authorized) {
    return (
      <main className="container">
        <section className="section-card">
          <p className="badge">Access restricted</p>
          <h1 style={{ marginTop: 'var(--space-3)' }}>This pricing view is limited to Espacios admins.</h1>
          <p className="muted">
            The content on this route is intentionally hidden. Set INTERNAL_PRICING_ENABLED=true and provide the
            X-Espacios-Admin-Token request header that matches INTERNAL_PRICING_TOKEN to review internal pricing drafts.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="section-card">
        <p className="badge">Internal only</p>
        <h1 style={{ marginTop: 'var(--space-3)' }}>Confidential pricing worksheet</h1>
        <div className="details" style={{ marginTop: 'var(--space-4)' }}>
          {internalLines.map((line) => (
            <p key={line} style={{ margin: 'var(--space-2) 0' }}>
              {line}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
