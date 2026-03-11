import type { Metadata } from 'next';
import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import {
  beliefs,
  churchInfo,
  churchStory,
  churchStoryMoments,
  coreValues,
  leadershipHighlights,
  missionStatement,
  outreachGallery,
  worshipGallery,
  visionStatement,
} from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'About',
  description:
    'Learn about Renewed Life International, our story, beliefs, mission, and pastoral leadership in Dube, Soweto, Johannesburg.',
  path: '/about',
  keywords: [
    'about Renewed Life International',
    'church in Dube Soweto',
    'pastors in Soweto church',
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Renewed Life"
        title="A church where people believe, belong, and become"
        description="Renewed Life International exists to help people encounter Jesus, be grounded in Scripture, and become part of a healthy church family."
        asideTitle="Who we are"
        asideBody="A Bible-rooted church family serving Dube, Soweto."
      >
        <div className="hero-actions">
          <a
            href={churchInfo.whatsappHref}
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Message the church
          </a>
          <a href="/plan-your-visit" className="button button-ghost">
            Plan your visit
          </a>
        </div>
      </PageHero>

      <Section eyebrow="Our story" title="How Renewed Life began" intro={churchStory}>
        <div className="card-grid card-grid-3">
          {churchStoryMoments.map((item) => (
            <article className="info-card" key={item.title}>
              <p className="card-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Mission and vision"
        title="Why we exist and where we are going"
        intro="Our mission explains what we are committed to now. Our vision describes the kind of church we believe God is forming us into."
        dark
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <p className="card-label">Our mission</p>
            <h3>What we are giving ourselves to</h3>
            <p>{missionStatement}</p>
          </article>

          <article className="info-card">
            <p className="card-label">Our vision</p>
            <h3>What we believe God is shaping in us</h3>
            <p>{visionStatement}</p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Our values"
        title="The culture of Renewed Life"
        intro="These values shape how we gather, lead, disciple, serve, and build community."
      >
        <div className="card-grid card-grid-3">
          {coreValues.map((value) => (
            <article className="info-card" key={value.title}>
              <p className="card-label">Core value</p>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What we believe"
        title="What we believe from Scripture"
        intro="Our beliefs are rooted in Scripture and expressed in a practical, faith-filled way."
        dark
      >
        <div className="card-grid card-grid-2">
          {beliefs.map((belief) => (
            <article className="info-card" key={belief.title}>
              <h3>{belief.title}</h3>
              <p>{belief.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Leadership"
        title="Pastoral and ministry leadership"
        intro="Our leadership exists to serve the church, shepherd people well, and keep Jesus and His Word at the center of church life."
      >
        <div className="card-grid card-grid-3">
          {leadershipHighlights.map((item) => (
            <article className="gallery-card" key={item.title}>
              {item.imageSrc ? (
                <div className="gallery-image-wrap">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={900}
                    height={700}
                    className="gallery-image"
                  />
                </div>
              ) : null}
              <div className="gallery-copy">
                <p className="card-label">Pastoral leadership</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Church life"
        title="Worship, family, and outreach"
        intro="Renewed Life is not only a Sunday gathering. It is a living church family growing in worship, discipleship, and service."
        dark
      >
        <div className="gallery-grid">
          {worshipGallery.slice(2, 4).map((image) => (
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

          {outreachGallery.slice(0, 3).map((image) => (
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
        eyebrow="Come and see"
        title="We would love to welcome you"
        description="Whether you are exploring faith, looking for a church home, or ready for a fresh start, there is room for you at Renewed Life."
        primaryLabel="Plan your visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </>
  );
}