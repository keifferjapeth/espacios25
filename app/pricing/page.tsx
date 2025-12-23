'use client';

import Link from 'next/link';
import { useState } from 'react';

type Plan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  badge?: string;
  highlights: string[];
  details: string[];
  cta: string;
};

type AddOn = {
  name: string;
  price: string;
  description: string;
};

type MessageRate = {
  channel: string;
  direction: string;
  price: string;
  notes: string;
};

const plans: Plan[] = [
  {
    id: 'launch',
    name: 'Harbour Launch',
    price: 'AED 899',
    cadence: '/month',
    tagline: 'For boutique teams selling waterfront apartments and creekside lofts.',
    highlights: ['Up to 8 team seats', 'Unified inbox for WhatsApp, SMS, and email', 'Auto-routing by tower, district, or language'],
    details: [
      'Lead capture from portals like Bayut and Dubizzle with automatic tagging by community.',
      'Conversation sync across WhatsApp, SMS, and email with SLA timers tuned to Dubai working hours.',
      'Pipeline stages tailored to Dubai registrations: inquiry, viewing booked, offer, SPA, DLD registration, handover.',
      'Task automations for escrow reminders and Ejari renewals.',
    ],
    cta: 'Start with Launch',
  },
  {
    id: 'growth',
    name: 'Marina Growth',
    price: 'AED 1,899',
    cadence: '/month',
    badge: 'Most popular',
    tagline: 'For multi-office brokerages orchestrating Palm Jumeirah villas and downtown penthouses.',
    highlights: ['Up to 20 seats + 2 shared deal rooms', 'AI concierge for multilingual follow-ups', 'Embedded analytics for ROI by tower and source'],
    details: [
      'Priority SLA routing with Arabic, English, and Russian templates for instant replies.',
      'Portfolio view to monitor leasing velocity across DIFC, Business Bay, and JVC.',
      'Dynamic campaigns triggered by viewings, no-shows, and post-handover satisfaction surveys.',
      'Data warehouse export and webhook delivery to your BI stack.',
    ],
    cta: 'Upgrade to Growth',
  },
  {
    id: 'enterprise',
    name: 'Skyline Enterprise',
    price: 'Custom',
    cadence: 'tailored',
    badge: 'Includes on-site rollout',
    tagline: 'For developers launching master communities and branded residences across Dubai.',
    highlights: ['Unlimited seats + dedicated pods', 'Solution architect & on-ground enablement', 'Private data residency & SSO'],
    details: [
      'White-glove onboarding with project-specific playbooks for waterfront, desert, and golf communities.',
      'AI agent trained on your floor plans, payment plans, and handover punch lists.',
      'Enterprise-grade governance with approval flows, maker-checker, and audit-ready exports.',
      'Regional hosting options, SCIM provisioning, and support for existing identity providers.',
    ],
    cta: 'Design your enterprise plan',
  },
];

const addOns: AddOn[] = [
  {
    name: 'Verified WhatsApp Business Messaging',
    price: 'AED 450 /month + meta fees',
    description: 'Green-tick verified senders, templated outreach, and session failover to SMS.',
  },
  {
    name: 'AI Lead Concierge',
    price: 'AED 0.35 /conversation',
    description: 'Always-on assistant that books viewings, qualifies by budget and neighborhood, and hands off to agents seamlessly.',
  },
  {
    name: 'Premium Data Residency',
    price: 'AED 1,200 /month',
    description: 'Dedicated, region-pinned storage and backups for compliance-focused developers.',
  },
];

const messagingRates: MessageRate[] = [
  {
    channel: 'SMS UAE',
    direction: 'Outbound',
    price: 'AED 0.18 /msg',
    notes: 'High deliverability routes with sender ID registration included.',
  },
  {
    channel: 'SMS GCC',
    direction: 'Outbound',
    price: 'AED 0.28 /msg',
    notes: 'Best-effort cross-border delivery; volume discounts available.',
  },
  {
    channel: 'WhatsApp',
    direction: 'Session & Template',
    price: 'Pass-through Meta fees',
    notes: 'Billed per Meta schedule; auto-fallback to SMS for failed deliveries.',
  },
  {
    channel: 'Inbound',
    direction: 'All channels',
    price: 'Free',
    notes: 'Unlimited inbound messaging and media intake.',
  },
];

const sections = [
  { id: 'plans', label: 'Plan tiers' },
  { id: 'add-ons', label: 'Add-ons' },
  { id: 'messaging', label: 'Messaging charges' },
  { id: 'faq', label: 'FAQs' },
];

export default function PricingPage() {
  const [expandedPlanIds, setExpandedPlanIds] = useState<string[]>(['growth']);

  const togglePlan = (id: string) => {
    setExpandedPlanIds((current) =>
      current.includes(id) ? current.filter((planId) => planId !== id) : [...current, id]
    );
  };

  const setAll = (open: boolean) => {
    setExpandedPlanIds(open ? plans.map((plan) => plan.id) : []);
  };

  return (
    <main className="container">
      <section className="hero section-card" aria-labelledby="pricing-hero-heading">
        <div className="badge">Dubai-ready pricing</div>
        <h1 id="pricing-hero-heading">Pricing built for Dubai real estate momentum.</h1>
        <p>
          Whether you are pre-selling a waterfront tower, leasing villas along Al Qudra, or onboarding corporate tenants
          in DIFC, Espacios keeps every viewing, payment plan, and message in one reactive workspace.
        </p>
        <div className="hero-actions">
          <Link className="button" href="#plans">
            Review plans
          </Link>
          <Link className="button secondary" href="mailto:pricing@espacios.ae">
            Talk to sales
          </Link>
        </div>
      </section>

      <section className="two-col">
        <nav className="toc" aria-label="Pricing navigation">
          <h3>Fast navigation</h3>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid" style={{ gap: 'var(--space-8)' }}>
          <section className="section-card" id="plans" aria-labelledby="plans-heading">
            <div className="section-heading">
              <div>
                <p className="badge">Plan tiers</p>
                <h2 id="plans-heading">From boutique teams to skyline launches</h2>
                <p>
                  Every plan pairs responsive automation with Dubai-native workflows so your agents stay fast while buyers
                  and tenants feel looked after.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                <button
                  className="button secondary"
                  onClick={() => setAll(false)}
                  aria-pressed={expandedPlanIds.length !== plans.length}
                >
                  Collapse all
                </button>
                <button
                  className="button"
                  onClick={() => setAll(true)}
                  aria-pressed={expandedPlanIds.length === plans.length}
                >
                  Expand all
                </button>
              </div>
            </div>

            <div className="card-grid">
              {plans.map((plan) => {
                const isExpanded = expandedPlanIds.includes(plan.id);

                return (
                  <article key={plan.id} className="plan-card">
                    <div className="plan-head">
                      <div>
                        {plan.badge ? <div className="badge">{plan.badge}</div> : null}
                        <h3 className="plan-title">{plan.name}</h3>
                        <p className="muted">{plan.tagline}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div className="plan-price">{plan.price}</div>
                        <div className="muted">{plan.cadence}</div>
                      </div>
                    </div>

                    <ul className="feature-list" aria-label={`${plan.name} highlights`}>
                      {plan.highlights.map((item) => (
                        <li key={item} className="feature-item">
                          <span className="pill">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <details className="details" open={isExpanded}>
                      <summary
                        role="button"
                        aria-expanded={isExpanded}
                        onClick={(event) => {
                          event.preventDefault();
                          togglePlan(plan.id);
                        }}
                      >
                        Plan details
                        <span className="muted">{isExpanded ? 'Hide' : 'Show'}</span>
                      </summary>
                      <ul className="feature-list" style={{ marginTop: 'var(--space-3)' }}>
                        {plan.details.map((detail) => (
                          <li key={detail} className="feature-item">
                            <span className="pill">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </details>

                    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                      <Link className="button" href="mailto:pricing@espacios.ae">
                        {plan.cta}
                      </Link>
                      <Link className="button secondary" href="#add-ons">
                        Explore add-ons
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="section-card" id="add-ons" aria-labelledby="addons-heading">
            <div className="section-heading">
              <div>
                <p className="badge">Add-ons</p>
                <h2 id="addons-heading">Layer on concierge, data residency, and verified messaging</h2>
                <p>
                  Extend Espacios with services tuned to Dubai&apos;s luxury buyers, global investors, and compliance
                  requirements.
                </p>
              </div>
            </div>
            <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {addOns.map((addon) => (
                <article key={addon.name} className="add-on">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>{addon.name}</h3>
                    <span className="pill">{addon.price}</span>
                  </div>
                  <p className="muted" style={{ margin: 0 }}>
                    {addon.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-card" id="messaging" aria-labelledby="messaging-heading">
            <div className="section-heading">
              <div>
                <p className="badge">Messaging charges</p>
                <h2 id="messaging-heading">Transparent messaging rates for GCC engagement</h2>
                <p>
                  Pay only for outbound delivery while keeping inbound open and free. All plans include rate-limiters and
                  deliverability monitoring.
                </p>
              </div>
            </div>
            <div className="details" style={{ marginBottom: 'var(--space-4)' }}>
              <p style={{ margin: 0 }}>
                We align with the latest TRA and Meta policies. Choose verified WhatsApp for premium conversions and SMS
                fallback for always-on reach across Dubai, Abu Dhabi, and the wider GCC.
              </p>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Channel</th>
                    <th scope="col">Direction</th>
                    <th scope="col">Price</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {messagingRates.map((rate) => (
                    <tr key={`${rate.channel}-${rate.direction}`}>
                      <td>{rate.channel}</td>
                      <td>{rate.direction}</td>
                      <td>{rate.price}</td>
                      <td className="muted">{rate.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="section-card" id="faq" aria-labelledby="faq-heading">
            <div className="section-heading">
              <div>
                <p className="badge">FAQs</p>
                <h2 id="faq-heading">Dubai-first support and rollout</h2>
                <p>Clarity around onboarding, support, and security for your team.</p>
              </div>
            </div>
            <div className="grid">
              <details className="details" open>
                <summary>Do you support on-site enablement?</summary>
                <p className="muted" style={{ margin: 'var(--space-3) 0 0' }}>
                  Yes. Growth and Enterprise plans include on-ground enablement across Dubai, Abu Dhabi, and the Northern
                  Emirates with Arabic and English training tracks.
                </p>
              </details>
              <details className="details">
                <summary>How do you secure investor data?</summary>
                <p className="muted" style={{ margin: 'var(--space-3) 0 0' }}>
                  Data residency and audit logging are available on every plan, with premium isolation for Enterprise.
                  All traffic is encrypted in transit and at rest.
                </p>
              </details>
              <details className="details">
                <summary>Can you integrate with our portal stack?</summary>
                <p className="muted" style={{ margin: 'var(--space-3) 0 0' }}>
                  Absolutely. We support inbound feeds from Property Finder, Bayut, Dubizzle, and your custom landing
                  pages via secure webhooks and form capture.
                </p>
              </details>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
