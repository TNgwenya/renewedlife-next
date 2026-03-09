import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { ministries, ministryGallery, outreachGallery } from '../../lib/siteContent';

export default function MinistriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ministries"
        title="Find your place to grow, serve, and build meaningful relationships"
        description="Ministry at Renewed Life is about more than attending a service. It is about discipleship, community, care, and serving with purpose in every stage of life."
        asideTitle="How to use this page"
        asideBody="Each ministry area below shows who it serves, how often it gathers, and the clearest next step for getting involved."
      />

      <Section
        eyebrow="Ministry overview"
        title="A place for every stage of life"
        subtitle="These ministry pathways are designed to help people belong deeply, grow spiritually, and serve joyfully."
      >
        <div className="three-col">
          {ministries.map((ministry) => (
            <article className="panel" key={ministry.title}>
              <p className="card-label">{ministry.audience}</p>
              <h3>{ministry.title}</h3>
              <p>{ministry.description}</p>
              <p><strong>Meeting rhythm:</strong> {ministry.rhythm}</p>
              <p><strong>Next step:</strong> {ministry.cta}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Ministry in pictures"
        title="Real moments from ministry life"
        subtitle="Use real ministry imagery so each pathway feels active, relational, and grounded in actual church life."
      >
        <div className="gallery-grid gallery-grid-two">
          {ministryGallery.map((image) => (
            <article key={image.src} className="media-card panel media-card-inline ministry-media-card">
              <div className="media-frame ministry-frame">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="media-cover"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="card-label">Ministry life</p>
                <h3>{image.title}</h3>
                <p>{image.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What comes next" title="Ready to connect with a ministry?" dark>
        <div className="two-col">
          <article className="panel elevated-panel">
            <h3>For church leaders</h3>
            <p>
              This structure gives each ministry room to grow with clear leader details, meeting rhythms, photos, and simple next-step pathways.
            </p>
          </article>
          <article className="panel elevated-panel">
            <h3>For visitors and members</h3>
            <p>
              Start with the ministry that best matches your season of life and let us help you take the next step into community, discipleship, and service.
            </p>
          </article>
        </div>
        <div className="gallery-grid gallery-grid-two">
          {outreachGallery.slice(3, 5).map((image) => (
            <article key={image.src} className="media-card panel">
              <div className="media-frame gallery-frame">
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

      <CtaBand
        eyebrow="Join the family"
        title="Not sure where to begin?"
        description="Reach out and we will help you find the right next step for you or your family at Renewed Life."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Plan Your Visit"
        secondaryHref="/plan-your-visit"
      />
    </main>
  );
}
