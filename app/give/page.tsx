import type { Metadata } from 'next';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import {
  churchInfo,
  givingCategories,
  givingFaqs,
  givingWays,
} from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Give',
  description:
    'Support the ministry of Renewed Life International with clear giving guidance, categories, and direct support options.',
  path: '/give',
});

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Give with faith, clarity, and trust"
        description="Every act of generosity helps strengthen worship, discipleship, ministry, outreach, and practical care through the life of the church."
        asideTitle="Need help giving?"
        asideBody="If you need assistance, contact the church and we will guide you."
      >
        <div className="hero-actions">
          <a
            href={churchInfo.givingPrimaryHref || churchInfo.emailHref}
            className="button"
            target={churchInfo.givingPrimaryHref ? '_blank' : undefined}
            rel={churchInfo.givingPrimaryHref ? 'noreferrer' : undefined}
          >
            {churchInfo.givingPrimaryLabel || 'Request giving details'}
          </a>
          <a
            href={churchInfo.whatsappGivingHref}
            className="button button-ghost"
            target="_blank"
            rel="noreferrer"
          >
            Ask about giving
          </a>
        </div>
      </PageHero>

      <Section
        eyebrow="Why we give"
        title="Kingdom partnership through generosity"
        intro="Giving is part of worship. It is one of the ways we honour God, strengthen the church, and help ministry reach people meaningfully."
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <p className="card-label">Kingdom impact</p>
            <h3>Your giving supports ministry</h3>
            <p>
              Every act of generosity helps strengthen worship, teaching,
              outreach, discipleship, administration, and practical care.
            </p>
          </article>

          <article className="info-card">
            <p className="card-label">Trust and clarity</p>
            <h3>Giving should feel simple and secure</h3>
            <p>
              We want the giving experience to stay clean, trustworthy, and easy
              to understand, with clear support for anyone who needs help.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Ways to give"
        title="Choose the method that works best for you"
        intro="Keep the giving experience simple. Lead with one primary online option, then support other practical methods clearly."
        dark
      >
        <div className="card-grid card-grid-3">
          {givingWays.map((way) => (
            <article className="info-card" key={way.title}>
              <p className="card-label">{way.support}</p>
              <h3>{way.title}</h3>
              <p>{way.description}</p>
              <a
                href={way.actionHref}
                className="text-link"
                target={way.actionHref.startsWith('http') ? '_blank' : undefined}
                rel={way.actionHref.startsWith('http') ? 'noreferrer' : undefined}
              >
                {way.actionLabel} →
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Giving categories"
        title="Keep categories simple and consistent"
        intro="Simple giving categories help people know exactly where their gift is intended to go."
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
        eyebrow="Helpful guidance"
        title="Questions people often have"
        intro="A trustworthy giving page answers the common questions clearly and quickly."
        dark
      >
        <div className="card-grid card-grid-2">
          {givingFaqs.map((item) => (
            <article className="info-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Need direct help?"
        title="We can guide you personally"
        intro="If you would like giving details, EFT instructions, or help using the online method, contact us directly."
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <h3>Contact the church office</h3>
            <ul className="stack-list">
              <li>
                <a href={churchInfo.emailHref}>{churchInfo.email}</a>
              </li>
              <li>
                <a href={churchInfo.phoneHref}>{churchInfo.phoneDisplay}</a>
              </li>
              <li>
                <a
                  href={churchInfo.whatsappGivingHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp giving support
                </a>
              </li>
            </ul>
          </article>

          <article className="info-card">
            <h3>What to ask for</h3>
            <ul className="stack-list">
              <li>Secure online giving link</li>
              <li>EFT banking details and reference guidance</li>
              <li>Support for mobile giving options</li>
              <li>Clarification on giving categories</li>
            </ul>
          </article>
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