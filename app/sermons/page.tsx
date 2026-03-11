import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import SermonCard from '../../components/SermonCard';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import {
  churchInfo,
  sermonHighlights,
  sermonLibrary,
  sermonStartHere,
  sermonTypes,
  socialLinks,
} from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Sermons',
  description:
    'Watch sermons, Bible study teachings, and message replays from Renewed Life International in Dube, Soweto.',
  path: '/sermons',
  keywords: [
    'sermons Soweto church',
    'Bible teaching Dube',
    'Renewed Life International sermons',
  ],
});

export default function SermonsPage() {
  const featured = sermonHighlights[0];
  const featuredDetails =
    sermonLibrary.find((sermon) => sermon.title === featured?.title) ?? sermonLibrary[0];
  const startHereMessages = sermonStartHere
    .map((entry) => {
      const sermon = sermonLibrary.find((item) => item.title === entry.title);

      return sermon ? { ...entry, sermon } : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const facebookLink = socialLinks.find((link) => link.label === 'Facebook');

  return (
    <>
      <PageHero
        eyebrow="Sermons"
        title="Watch, listen, and grow in the Word"
        description="Listen to recent messages, Bible study teachings, and sermon replays that reflect the preaching ministry of Renewed Life International."
        asideTitle="Primary platform"
        asideBody="YouTube is the main home for livestreams, replays, and the growing sermon archive."
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
            href={facebookLink?.href || socialLinks[0]?.href}
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
        eyebrow="New to Renewed Life?"
        title="A simple place to start listening"
        subtitle="If you are discovering the church for the first time, these messages offer a good introduction to the tone, themes, and teaching ministry of Renewed Life."
      >
        <div className="card-grid card-grid-3">
          {startHereMessages.map((entry) => (
            <article className="info-card" key={entry.title}>
              <p className="card-label">{entry.label}</p>
              <h3>{entry.sermon.title}</h3>
              <p>{entry.reason}</p>
              <div className="meta-list">
                <div>
                  <strong>Type:</strong> {entry.sermon.type}
                </div>
                <div>
                  <strong>Series:</strong> {entry.sermon.series}
                </div>
              </div>
              <a href={entry.sermon.href} className="button button-secondary button-sm" target="_blank" rel="noreferrer">
                Start with this message
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Where to watch"
        title="Stay connected to the teaching ministry"
        subtitle="Watch full messages, follow new uploads, and stay connected to the teaching shaping the life of the church."
        dark
      >
        <div className="card-grid card-grid-3">
          <article className="info-card">
            <p className="card-label">Primary archive</p>
            <h3>YouTube channel</h3>
            <p>
              Watch sermon replays, Bible study teaching, and livestream archives in one place.
            </p>
            <a href={churchInfo.youtubeHref} className="button button-secondary button-sm" target="_blank" rel="noreferrer">
              Open YouTube
            </a>
          </article>

          <article className="info-card">
            <p className="card-label">Updates and sharing</p>
            <h3>Facebook page</h3>
            <p>
              Follow the church on Facebook for service reminders, clips, and ministry updates.
            </p>
            <a
              href={facebookLink?.href || socialLinks[0]?.href}
              className="button button-secondary button-sm"
              target="_blank"
              rel="noreferrer"
            >
              Visit Facebook
            </a>
          </article>

          <article className="info-card">
            <p className="card-label">Live in the room</p>
            <h3>Join us on Sunday</h3>
            <p>
              Experience the Word, worship, and prayer in person every Sunday at {churchInfo.venue}.
            </p>
            <Link href="/plan-your-visit" className="button button-secondary button-sm">
              Plan your visit
            </Link>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Browse by type"
        title="Find the kind of message you need"
        subtitle="Browse by service type so you can find Sunday preaching, Bible study teaching, and special messages more easily."
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
        eyebrow="Full library"
        title="Sermon library"
        subtitle="Browse Sunday services, Bible studies, and special messages with clear metadata and direct watch links."
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