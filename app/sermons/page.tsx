import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import SermonCard from '../../components/SermonCard';
import Section from '../../components/Section';
import { churchInfo, sermonHighlights, sermonLibrary, sermonTypes, socialLinks, videoClips } from '../../lib/siteContent';

export default function SermonsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Sermons"
        title="Messages that strengthen faith and build lives"
        description="Watch recent Sunday services and Bible studies, then keep growing through the Word during the week. YouTube is the primary livestream and replay destination for now."
        asideTitle="Watch online"
        asideBody="The sermon archive now includes real message links alongside the wider YouTube channel so guests can move from general browsing into specific teaching quickly."
      />

      <Section
        eyebrow="Featured messages"
        title="Watch the latest teaching"
        subtitle="Recent teaching is surfaced here first, with specific message links now beginning to replace broad channel-only placeholders."
      >
        <div className="two-col feature-split">
          <article className="panel feature-panel">
            {sermonHighlights[0].thumbnail ? (
              <div className="media-frame sermon-feature-frame">
                <Image
                  src={sermonHighlights[0].thumbnail}
                  alt={sermonHighlights[0].title}
                  fill
                  className="media-cover"
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            ) : null}
            <p className="card-label">{sermonHighlights[0].type}</p>
            <h3>{sermonHighlights[0].title}</h3>
            <p>{sermonHighlights[0].summary}</p>
            <div className="inline-actions">
              <a href={sermonHighlights[0].href} className="button" target="_blank" rel="noreferrer">Watch this message</a>
              <a href={socialLinks[0].href} className="text-link" target="_blank" rel="noreferrer">View Facebook page</a>
            </div>
          </article>
          <div className="stack-grid">
            <article className="panel compact-panel">
              <h3>Livestream destination</h3>
              <p>YouTube is the clearest current livestream and replay destination, with Facebook also active for service clips and updates.</p>
            </article>
            <article className="panel compact-panel">
              <h3>Archive standard</h3>
              <p>Each sermon entry uses a clear title, speaker, date, series, type, summary, and video link so the archive can keep growing in a cleaner, more trustworthy way.</p>
            </article>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Latest archive"
        title="Recent sermon links and archive entries"
        subtitle="The archive now blends specific sermon links with broader channel entries while more individual messages are being added."
      >
        <div className="three-col">
          {sermonLibrary.slice(0, 3).map((sermon) => (
            <SermonCard key={`${sermon.title}-${sermon.date}-latest`} {...sermon} compact />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Media clips"
        title="Short clips for preaching and worship highlights"
        subtitle="These clips can support the sermons page, social promotion, and future event or conference graphics while the full media library grows."
      >
        <div className="three-col">
          {videoClips.map((clip) => (
            <article key={clip.src} className="panel media-card">
              <div className="media-frame sermon-thumb-frame">
                <video
                  className="video-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={clip.poster}
                >
                  <source src={clip.src} type={clip.type} />
                </video>
              </div>
              <p className="card-label">{clip.useCase}</p>
              <h3>{clip.title}</h3>
              <p>{clip.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Message types"
        title="A cleaner structure for the sermon archive"
        subtitle="This setup supports the phase-one archive structure: featured messages first, followed by clear message types and consistent naming as the library grows."
        dark
      >
        <div className="tag-row">
          {sermonTypes.map((type) => (
            <span key={type} className="tag-pill">{type}</span>
          ))}
        </div>
        <div className="three-col">
          {sermonLibrary.map((sermon) => (
            <SermonCard key={`${sermon.title}-${sermon.date}`} {...sermon} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Naming standard"
        title="Recommended sermon title format going forward"
        subtitle="Clear sermon naming will make the website and YouTube archive feel more polished, searchable, and easier to browse."
      >
        <div className="feature-grid">
          {[
            'The Burden to Build',
            'Walking in the Spirit – Part 2',
            'Sunday Service | 1 March 2026',
            'Bible Study | Nehemiah 5',
          ].map((example) => (
            <article key={example} className="panel compact-panel">
              <p>{example}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Visit in person"
        title="Want to experience the message live?"
        description="Watch online anytime, then plan a Sunday visit if you would like to worship, pray, and hear the Word with us in person."
        primaryLabel="Plan Your Visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </main>
  );
}
