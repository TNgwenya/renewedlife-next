import type { Metadata } from 'next';
import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import SermonCard from '../../components/SermonCard';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import {
  churchInfo,
  sermonHighlights,
  sermonLibrary,
  sermonTypes,
  socialLinks,
  videoClips,
} from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Sermons',
  description:
    'Watch sermons, Bible study teachings, and message replays from Renewed Life International.',
  path: '/sermons',
});

export default function SermonsPage() {
  const featured = sermonHighlights[0];
  const featuredDetails =
    sermonLibrary.find((sermon) => sermon.title === featured?.title) ?? sermonLibrary[0];

  return (
    <>
      <PageHero
        eyebrow="Sermons"
        title="Watch, listen, and grow in the Word"
        description="Explore recent messages, sermon series, Bible study teachings, and livestream replays from Renewed Life International."
        asideTitle="Primary platform"
        asideBody="YouTube is the clearest destination for livestreams, replays, and sermon archives."
      >
        <div className="hero-actions">
          <a
            href={churchInfo.livestreamHref}
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
          <a
            href={socialLinks[0]?.href}
            className="button button-ghost"
            target="_blank"
            rel="noreferrer"
          >
            View Facebook page
          </a>
        </div>
      </PageHero>

      {featured ? (
        <Section
          eyebrow="Featured message"
          title={featured.title}
          subtitle={featured.summary}
        >
          <div className="featured-sermon">
            {featured.thumbnail ? (
              <div className="featured-sermon-image">
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  width={1200}
                  height={800}
                />
              </div>
            ) : null}

            <div className="featured-sermon-copy">
              <p className="card-label">{featured.type}</p>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>

              <div className="meta-list">
                <div>
                  <strong>Speaker:</strong> {featuredDetails?.speaker}
                </div>
                <div>
                  <strong>Date:</strong> {featuredDetails?.date}
                </div>
                <div>
                  <strong>Series:</strong> {featuredDetails?.series}
                </div>
              </div>

              <div className="stack-actions">
                <a
                  href={featured.href}
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch this message
                </a>
                <a
                  href={churchInfo.livestreamHref}
                  className="button button-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Browse YouTube archive
                </a>
              </div>
            </div>
          </div>
        </Section>
      ) : null}

      <Section
        eyebrow="Latest sermons"
        title="Recent messages"
        subtitle="A curated selection of the latest preaching and teaching to help people quickly find a message to watch."
        dark
      >
        <div className="card-grid card-grid-3">
          {sermonLibrary.slice(0, 6).map((sermon) => (
            <SermonCard
              key={`${sermon.title}-${sermon.date}`}
              title={sermon.title}
              speaker={sermon.speaker}
              date={sermon.date}
              series={sermon.series}
              type={sermon.type}
              summary={sermon.summary}
              href={sermon.href}
              thumbnail={sermon.thumbnail}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Browse by type"
        title="Find the kind of message you need"
        subtitle="Help visitors and members scan the archive more quickly."
      >
        <div className="tag-row">
          {sermonTypes.map((type) => (
            <span key={type} className="tag-pill">
              {type}
            </span>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Media strategy"
        title="Keep the sermon archive clean and trustworthy"
        subtitle="Every sermon should keep a clear title, speaker, date, series, type, summary, and working video link."
      >
        <div className="card-grid card-grid-3">
          {videoClips.map((clip) => (
            <article className="info-card" key={clip.title}>
              <p className="card-label">{clip.useCase}</p>
              <h3>{clip.title}</h3>
              <p>{clip.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Full library"
        title="Sermon archive"
        subtitle="A growing library of Sunday services, Bible studies, and special messages."
        dark
      >
        <div className="card-grid card-grid-3">
          {sermonLibrary.map((sermon) => (
            <SermonCard
              key={`${sermon.title}-${sermon.date}-archive`}
              title={sermon.title}
              speaker={sermon.speaker}
              date={sermon.date}
              series={sermon.series}
              type={sermon.type}
              summary={sermon.summary}
              href={sermon.href}
              thumbnail={sermon.thumbnail}
              compact
            />
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Join live"
        title="Prefer to experience it in person?"
        description="Join us on Sunday for worship, prayer, and a Bible-centered message, or plan your visit before you come."
        primaryLabel="Plan your visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </>
  );
}