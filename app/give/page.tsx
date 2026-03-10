import type { Metadata } from 'next';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import {
  churchInfo,
  eftGivingDetails,
  givingCategories,
  givingWays,
} from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Give',
  description:
    'Give to Renewed Life International through clear EFT details, trusted support, and simple giving guidance.',
  path: '/give',
});

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Give with faith, clarity, and trust"
        description="Giving is one of the ways we worship God together and take part in the ministry He is building through Renewed Life International."
        asideTitle="Need help giving?"
        asideBody="Bank transfer / EFT is the current giving method. If you need help, we will guide you personally."
      >
        <div className="hero-actions">
          <a
            href={churchInfo.whatsappGivingHref}
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp giving support
          </a>
          <a
            href={churchInfo.emailHref}
            className="button button-ghost"
          >
            Email the church office
          </a>
        </div>
      </PageHero>

      <Section
        eyebrow="Why we give"
        title="Kingdom partnership through generosity"
        intro="Giving is part of worship. It is one of the ways we honour God, serve His people, and help the ministry of the church continue with strength and care."
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <p className="card-label">Kingdom impact</p>
            <h3>Your giving supports ministry</h3>
            <p>
              Every act of generosity helps strengthen worship, teaching, outreach,
              discipleship, church operations, and practical care.
            </p>
          </article>

          <article className="info-card">
            <p className="card-label">Worship with integrity</p>
            <h3>Simple, clear, and trustworthy</h3>
            <p>
              We want every giver to know how to give confidently, with peace of mind, and with clear help when needed.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Current giving method"
        title="Give by bank transfer / EFT"
        intro="Renewed Life currently receives giving through bank transfer. It is a clear and dependable way to support the ministry."
        dark
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <p className="card-label">Active method</p>
            <h3>Bank transfer / EFT</h3>
            <p>
              Use the banking details below to give your tithe, offering, or special gift. If you need help with your reference or would like confirmation, contact us directly.
            </p>
          </article>

          <article className="info-card">
            <p className="card-label">Support available</p>
            <h3>Need help before you send?</h3>
            <p>
              Our team can help you confirm the account details, answer questions, and guide you if you are giving for a specific purpose.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="EFT details"
        title="Banking details"
        intro="Use these details for your bank transfer. If you need additional guidance, contact the church before sending your gift."
      >
        <div className="card-grid card-grid-2">
          {eftGivingDetails.map((detail) => (
            <article className="info-card" key={detail.label}>
              <p className="card-label">{detail.label}</p>
              <h3>{detail.value}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Giving categories"
        title="Give with clarity"
        intro="If your gift is intended for a specific purpose, these simple categories can help you communicate it clearly."
      >
        <div className="tag-row">
          {givingCategories.map((category) => (
            <span className="tag-pill" key={category}>
              {category}
            </span>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Need direct help?"
        title="We can guide you personally"
        intro="If you would like help with giving details, reference guidance, or confirmation before you send, contact us directly."
      >
        <div className="card-grid card-grid-2">
          {givingWays.map((way) => (
            <article className="info-card" key={way.title}>
              <p className="card-label">{way.support}</p>
              <h3>{way.title}</h3>
              <p>{way.description}</p>
              <a
                href={way.actionHref}
                className="button button-secondary button-sm"
                target={way.actionHref.startsWith('http') ? '_blank' : undefined}
                rel={way.actionHref.startsWith('http') ? 'noreferrer' : undefined}
              >
                {way.actionLabel}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Need another next step?"
        title="Join us in person as well"
        description="Generosity is one part of church life. Come worship, grow, and become part of the family with us."
        primaryLabel="Plan your visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </>
  );
}