import type { Metadata } from 'next';
import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import {
  churchInfo,
  ministries,
  ministryLifeGallery,
  outreachGallery,
} from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Ministries',
  description:
    'Explore the ministries of Renewed Life International in Dube, Soweto and find a clear place to grow, belong, and serve.',
  path: '/ministries',
  keywords: [
    'church ministries Soweto',
    'children youth women men ministry Dube',
    'Renewed Life ministries',
  ],
});

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title="There is a place for you here"
        description="Our ministries help people pray together, build strong relationships, and keep growing as disciples of Jesus in every season of life, with clear next steps for getting involved."
        asideTitle="Next step"
        asideBody="Find the ministry that best matches your season, learn what to expect, and connect with the team."
      >
        <div className="hero-actions">
          <a
            href={churchInfo.whatsappHref}
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Ask about ministries
          </a>
          <a href="/contact" className="button button-ghost">
            Contact the church
          </a>
        </div>
      </PageHero>

      <Section
        eyebrow="Ministry directory"
        title="Spaces to grow, belong, and serve"
        intro="Each ministry below gives a clearer picture of who it serves, what the rhythm looks like, and the simplest next step for getting connected."
      >
        <div className="card-grid card-grid-2 ministries-directory-grid">
          {ministries.map((ministry) => (
            <article className="info-card ministries-directory-card" key={ministry.title}>
              <div className="ministries-directory-head">
                <p className="card-label">{ministry.audience}</p>
                <span className="status-pill ministries-directory-pill">{ministry.rhythm}</span>
              </div>

              <h3>{ministry.title}</h3>
              <p>{ministry.description}</p>

              <div className="ministries-directory-meta">
                <article className="ministries-directory-panel">
                  <p className="card-label">What happens</p>
                  <p>{ministry.whatHappens}</p>
                </article>
                <article className="ministries-directory-panel">
                  <p className="card-label">Next step</p>
                  <p>{ministry.nextStepDescription}</p>
                </article>
              </div>

              <a href={ministry.contactHref} className="button button-secondary button-sm ministries-directory-button" target="_blank" rel="noreferrer">
                {ministry.cta}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Ministry life"
        title="What ministry life feels like"
        intro="Ministry life at Renewed Life is relational, prayerful, and built around helping people move from attendance into real belonging."
        warm
      >
        <div className="gallery-grid ministries-life-grid">
          {ministryLifeGallery.map((image) => (
            <article className="gallery-card" key={image.title}>
              <div className="gallery-image-wrap">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={700}
                  className="gallery-image"
                />
              </div>
              <div className="gallery-copy">
                <p className="card-label">{image.label}</p>
                <h3>{image.title}</h3>
                <p>{image.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Getting connected"
        title="How to find your place"
        intro="If you are exploring church life or ready to serve, we want the next step to feel simple, relational, and personal."
        muted
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <p className="card-label">If you are exploring</p>
            <h3>Start where you can build real connection</h3>
            <p>
              If you are new, start with the ministry that best matches your season of life, then let the team help you connect to the right gathering or leader.
            </p>
          </article>

          <article className="info-card">
            <p className="card-label">If you are ready to serve</p>
            <h3>Let us help you take the next step</h3>
            <p>
              Tell us where you feel drawn to serve, and we will help you connect with the right ministry leaders, expectations, and rhythms.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Beyond the walls"
        title="Service and outreach"
        intro="Church life should overflow into care, presence, witness, and visible impact in the wider community."
        warm
      >
        <div className="gallery-grid ministries-outreach-grid">
          {outreachGallery.map((image) => (
            <article className="gallery-card" key={image.title}>
              <div className="gallery-image-wrap">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={700}
                  className="gallery-image"
                />
              </div>
              <div className="gallery-copy">
                <p className="card-label">Beyond the walls</p>
                <h3>{image.title}</h3>
                <p>{image.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Ready to connect?"
        title="Let us help you find your place"
        description="Tell us what season of life you are in, and we will gladly guide you toward the right ministry and next step."
        primaryLabel="Message us on WhatsApp"
        primaryHref={churchInfo.whatsappHref}
        secondaryLabel="Plan your visit"
        secondaryHref="/plan-your-visit"
      />
    </>
  );
}