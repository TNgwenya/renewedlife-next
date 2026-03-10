import type { Metadata } from 'next';
import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import {
  churchInfo,
  ministries,
  ministryGallery,
  outreachGallery,
} from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Ministries',
  description:
    'Explore the ministries of Renewed Life International and find a place to grow, belong, and serve.',
  path: '/ministries',
});

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title="There is a place for you here"
        description="Our ministries are designed to help people grow in faith, build meaningful relationships, and serve with purpose in every season of life."
        asideTitle="Next step"
        asideBody="Find the ministry that best matches your season and connect with the team."
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
        intro="Every ministry should make disciples, build community, and help people take practical next steps."
      >
        <div className="card-grid card-grid-3">
          {ministries.map((ministry) => (
            <article className="info-card" key={ministry.title}>
              <p className="card-label">{ministry.audience}</p>
              <h3>{ministry.title}</h3>
              <p>{ministry.description}</p>

              <div className="meta-list">
                <div>
                  <strong>Meeting rhythm:</strong> {ministry.rhythm}
                </div>
                <div>
                  <strong>Next step:</strong> {ministry.cta}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Ministry life"
        title="What connection looks like"
        intro="Healthy ministry life should feel relational, purposeful, and spiritually alive."
        dark
      >
        <div className="gallery-grid">
          {ministryGallery.map((image) => (
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
                <p className="card-label">Ministry life</p>
                <h3>{image.title}</h3>
                <p>{image.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How ministries should work"
        title="Clear pathways for leaders and members"
        intro="A strong ministry system should not only inspire people. It should also make joining, serving, and growing simple."
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <p className="card-label">For church leaders</p>
            <h3>Build ministries with structure</h3>
            <p>
              Give every ministry clear leadership, rhythm, purpose, photos,
              communication, and a simple next-step path for new people to join.
            </p>
          </article>

          <article className="info-card">
            <p className="card-label">For visitors and members</p>
            <h3>Make joining feel easy</h3>
            <p>
              Help people identify the ministry that matches their season of life,
              then guide them into community, discipleship, and consistent
              involvement.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Beyond the walls"
        title="Service and outreach"
        intro="Church life should overflow into care, presence, and impact in the wider community."
        dark
      >
        <div className="gallery-grid">
          {outreachGallery.slice(3, 5).map((image) => (
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