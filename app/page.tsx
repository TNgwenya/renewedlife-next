import Image from 'next/image';
import Link from 'next/link';
import CtaBand from '../components/CtaBand';
import Hero from '../components/Hero';
import Section from '../components/Section';
import {
  churchInfo,
  churchStory,
  communityHighlights,
  coreValues,
  flagshipPhotos,
  homepageActions,
  ministries,
  pastorWelcome,
  sermonHighlights,
  videoClips,
  worshipGallery,
} from '../lib/siteContent';

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Section
        eyebrow="Start here"
        title="A clearer first step for every guest"
        subtitle="We have shaped the site around the questions first-time visitors ask most: where do I go, when do I arrive, what will it feel like, and how do I connect?"
      >
        <div className="feature-grid">
          {homepageActions.map((action) => (
            <article key={action.title} className="panel interactive-card">
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              <Link href={action.href} className="text-link">Take this step</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="About Renewed Life"
        title="A church where people can believe, belong, and become"
        subtitle={churchInfo.brandIdea}
        dark
      >
        <div className="three-col">
          {coreValues.map((value) => (
            <article key={value.title} className="panel elevated-panel">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link href="/about" className="button button-secondary">Learn more about us</Link>
        </div>
      </Section>

      <Section
        eyebrow="Our story"
        title="Renewed Life began with simple faith and God’s call"
        subtitle={churchStory}
      >
        <div className="two-col story-layout">
          <article className="panel elevated-panel">
            <p className="card-label">Since 2019</p>
            <h3>Built through prayer, the Word, and faithful obedience</h3>
            <p>
              From its official launch on 6 January 2019, Renewed Life has grown as a Christ-centered church committed to transformed lives and genuine Christian fellowship.
            </p>
          </article>
          <div className="stack-grid">
            <article className="panel elevated-panel">
              <p className="card-label">Our weekly rhythm</p>
              <h3>A church family gathering throughout the week</h3>
              <p>
                Sunday services, Bible study, connect groups, youth, women’s and men’s gatherings all help people grow beyond a single Sunday moment.
              </p>
            </article>
            <article className="panel media-card">
              <div className="media-frame gallery-frame">
                <Image
                  src={flagshipPhotos[1].src}
                  alt={flagshipPhotos[1].alt}
                  fill
                  className="media-cover"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Ministries & next steps"
        title="There is a place for every person in the family"
        subtitle="From children and youth to prayer, worship, and outreach, our ministries are designed to help people grow and serve with purpose."
      >
        <div className="three-col">
          {ministries.slice(0, 3).map((ministry) => (
            <article key={ministry.title} className="panel">
              <p className="card-label">{ministry.rhythm}</p>
              <h3>{ministry.title}</h3>
              <p>{ministry.description}</p>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link href="/ministries" className="button button-secondary">Explore ministries</Link>
        </div>
      </Section>

      <Section
        eyebrow="Welcome"
        title={pastorWelcome.title}
        subtitle={pastorWelcome.description}
        dark
      >
        <div className="two-col">
          <article className="panel elevated-panel">
            <p className="card-label">Pastoral welcome</p>
            <h3>Led with spiritual depth, warmth, and purpose</h3>
            <p>
              We want every guest to experience a church that is alive, serious about God, welcoming to people, and well-led.
            </p>
          </article>
          <article className="panel elevated-panel">
            <p className="card-label">Visit us</p>
            <h3>{churchInfo.venue}</h3>
            <p>
              Join us in Dube, Soweto for worship, prayer, biblical teaching, and a clear next step into spiritual family.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Latest teaching"
        title="Watch, listen, and keep growing through the Word"
        subtitle="Sermons should be easy to find, easy to revisit, and easy to share with someone taking a step toward faith."
        dark
      >
        <div className="two-col feature-split">
          <article className="panel feature-panel">
            <p className="card-label">Featured message</p>
            <h3>{sermonHighlights[0].title}</h3>
            <p>{sermonHighlights[0].summary}</p>
            <div className="inline-actions">
              <Link href="/sermons" className="button">Watch sermons</Link>
              <a href={churchInfo.youtubeHref} className="text-link" target="_blank" rel="noreferrer">Open YouTube channel</a>
            </div>
          </article>
          <div className="stack-grid">
            {sermonHighlights.slice(1).map((sermon) => (
              <article key={sermon.title} className="panel compact-panel">
                <p className="card-label">{sermon.type}</p>
                <h3>{sermon.title}</h3>
                <p>{sermon.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="A living first impression"
        title="See and feel the atmosphere before you arrive"
        subtitle="Use strong real media to help first-time visitors sense that worship is alive, the room is welcoming, and leadership is present."
      >
        <div className="two-col media-showcase-grid">
          <article className="panel media-card">
            <div className="media-frame video-showcase-frame">
              <video
                className="video-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster={videoClips[0].poster}
              >
                <source src={videoClips[0].src} type={videoClips[0].type} />
              </video>
            </div>
            <p className="card-label">{videoClips[0].useCase}</p>
            <h3>{videoClips[0].title}</h3>
            <p>{videoClips[0].summary}</p>
          </article>
          <div className="stack-grid">
            {flagshipPhotos.map((image) => (
              <article key={image.src} className="panel media-card media-card-inline">
                <div className="media-frame media-card-inline-frame">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="media-cover"
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="card-label">Flagship photo</p>
                  <h3>{image.title}</h3>
                  <p>{image.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Community"
        title="A welcoming church experience built on trust, prayer, and real relationships"
        subtitle="We want guests to know what they can expect before they arrive and feel supported after they do."
      >
        <div className="three-col">
          {communityHighlights.map((highlight) => (
            <article key={highlight.title} className="panel">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Worship moments"
        title="A glimpse of the atmosphere at Renewed Life"
        subtitle="These moments from recent gatherings help show the warmth, worship, and spiritual life of the church before a guest ever walks through the door."
        dark
      >
        <div className="gallery-grid gallery-grid-three">
          {worshipGallery.slice(0, 3).map((image) => (
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
        eyebrow="Next step"
        title="Ready to experience Renewed Life in person?"
        description="Plan your visit, get directions, and let us know you are coming so we can help you feel at home from the moment you arrive."
        primaryLabel="Plan Your Visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </main>
  );
}
