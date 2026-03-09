import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import {
  beliefs,
  churchInfo,
  churchStory,
  coreValues,
  leadershipHighlights,
  missionStatement,
  outreachGallery,
  worshipGallery,
  visionStatement,
} from '../../lib/siteContent';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A church family committed to Jesus, spiritual growth, and genuine community"
        description={churchInfo.brandIdea}
        asideTitle="Our heartbeat"
        asideBody={`${churchInfo.legalName} was birthed in response to God’s call in late 2018 and officially launched on 6 January 2019.`}
      />

      <Section
        eyebrow="Our story"
        title="Who we are"
        subtitle={churchStory}
      >
        <div className="two-col">
          <div className="panel">
            <h3>Our mission</h3>
            <p>
              {missionStatement}
            </p>
          </div>
          <div className="panel">
            <h3>Our vision</h3>
            <p>
              {visionStatement}
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Believe, belong, become" title="The values shaping our culture" dark>
        <div className="three-col">
          {coreValues.map((value) => (
            <article key={value.title} className="panel">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What we believe" title="A simple foundation for faith and life">
        <div className="feature-grid">
          {beliefs.map((belief) => (
            <article key={belief.title} className="panel compact-panel">
              <h3>{belief.title}</h3>
              <p>{belief.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Pastoral leadership and spiritual care" dark>
        <div className="two-col">
          {leadershipHighlights.map((item) => (
            <article key={item.title} className="panel elevated-panel">
              {item.imageSrc ? (
                <div className="media-frame leadership-frame">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="media-cover"
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
              ) : null}
              <p className="card-label">Pastoral leadership</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Church life"
        title="What gathered worship looks like at Renewed Life"
        subtitle="Real images help communicate the spiritual atmosphere, warmth, and sense of family that define the church experience."
      >
        <div className="gallery-grid gallery-grid-two">
          {worshipGallery.slice(2, 4).map((image) => (
            <article key={image.src} className="media-card panel">
              <div className="media-frame gallery-frame gallery-frame-tall">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="media-cover"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <p className="photo-note">{image.title}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Impact beyond Sunday"
        title="Mission, outreach, and visible gospel impact"
        subtitle="These outreach moments help show that Renewed Life is not only a Sunday gathering, but a church committed to prayer, witness, and practical ministry in the community."
        dark
      >
        <div className="gallery-grid gallery-grid-three">
          {outreachGallery.slice(0, 3).map((image) => (
            <article key={image.src} className="media-card panel">
              <div className="media-frame gallery-frame">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="media-cover"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <p className="photo-note">{image.title}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Visit us"
        title="Come and experience Renewed Life for yourself"
        description={`If you are looking for a church home or simply want to visit for the first time, we would love to welcome you at ${churchInfo.venue} this Sunday.`}
        primaryLabel="Plan Your Visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </main>
  );
}
