import type { Metadata } from 'next';
import CtaBand from '../../components/CtaBand';
import ContactForm from '../../components/ContactForm';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import {
  churchInfo,
  contactActions,
  formspreeEndpoint,
  socialLinks,
} from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description:
    'Contact Renewed Life International for prayer, pastoral support, service information, or any questions about visiting.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Reach out with questions, prayer requests, pastoral support needs, or if you simply want help taking the next step."
        asideTitle="Best quick option"
        asideBody="WhatsApp is the fastest way to reach the church team."
      >
        <div className="hero-actions">
          <a
            href={churchInfo.whatsappHref}
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
          <a href={churchInfo.phoneHref} className="button button-ghost">
            Call the church
          </a>
        </div>
      </PageHero>

      <Section
        eyebrow="Direct contact"
        title="Choose the easiest way to reach us"
        subtitle="Use the option that works best for you."
      >
        <div className="card-grid card-grid-3">
          {contactActions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              className="info-card info-card-link interactive-card"
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <p className="card-label">{action.title}</p>
              <h3>{action.value}</h3>
              <p>{action.description}</p>
              <span className="text-link">Open this contact option →</span>
            </a>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Visit"
        title="Find us easily"
        subtitle="Use the details below to visit Renewed Life International in Dube, Soweto."
        dark
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <p className="card-label">Address</p>
            <h3>{churchInfo.venue}</h3>
            <p>
              {churchInfo.addressLine1}
              <br />
              {churchInfo.addressLine2}
              <br />
              {churchInfo.addressLine3}
            </p>
            <a
              href={churchInfo.mapHref}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary button-sm"
            >
              Open directions
            </a>
          </article>

          <article className="info-card">
            <p className="card-label">Weekly rhythm</p>
            <h3>When we gather</h3>
            <ul className="stack-list">
              {churchInfo.weeklyRhythm.slice(0, 4).map((service) => (
                <li key={`${service.day}-${service.label}`}>
                  <strong>{service.label}</strong>
                  <br />
                  <span>
                    {service.day} · {service.time}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Prayer & support"
        title="Need prayer or pastoral guidance?"
        subtitle="If you need prayer, encouragement, or a pastoral conversation, reach out and someone from the team will assist you."
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <h3>Prayer support</h3>
            <p>
              Share your need with us and we will stand with you in faith and
              prayer.
            </p>
            <a
              href={churchInfo.whatsappPrayerHref}
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Request prayer on WhatsApp
            </a>
          </article>

          <article className="info-card">
            <h3>Church social channels</h3>
            <ul className="stack-list">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <strong>{link.label}</strong>
                  </a>
                  <br />
                  <span>Connect with Renewed Life online</span>
                </li>
              ))}
            </ul>

            <div className="section-actions">
              <a href={churchInfo.whatsappHref} className="button button-secondary button-sm" target="_blank" rel="noreferrer">
                Message the church
              </a>
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Church inbox"
        title={`Send a message to ${churchInfo.shortName}`}
        subtitle={`Messages are routed directly to ${churchInfo.email} so the church team can follow up cleanly.`}
      >
        <ContactForm endpoint={formspreeEndpoint} email={churchInfo.email} />
      </Section>

      <CtaBand
        eyebrow="First-time guest?"
        title="Planning to join us this Sunday?"
        description="Get service times, directions, and a simple guide to what your first visit will feel like."
        primaryLabel="Plan your visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="WhatsApp us"
        secondaryHref={churchInfo.whatsappHref}
      />
    </>
  );
}