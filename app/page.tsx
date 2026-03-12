import Image from 'next/image';
import Link from 'next/link';
import CtaBand from '../components/CtaBand';
import ServiceHighlightCard from '../components/ServiceHighlightCard';
import Section from '../components/Section';
import {
  churchInfo,
  churchStoryMoments,
  communityHighlights,
  homepageActions,
  ministries,
  serviceHighlightClips,
  sermonHighlights,
  videoClips,
} from '../lib/siteContent';

export default function HomePage() {
  const homepagePrimaryActions = homepageActions.slice(0, 4);
  const featuredMinistries = ministries.slice(0, 4);
  const homepageVideo =
    videoClips.find((clip) => clip.useCase === 'Homepage flagship video') ?? videoClips[0];
  const homepageCoreValues = [
    {
      title: 'Believe',
      description:
        'We lead people to trust Jesus, stand on Scripture, and live by the power of the Holy Spirit.',
      scriptures: [
        'Trust in the Lord with all your heart. Proverbs 3:5',
        'Your word is a lamp to my feet and a light to my path. Psalm 119:105',
      ],
    },
    {
      title: 'Belong',
      description:
        'Church is family. We are building a spiritual home where every generation can be welcomed, known, and strengthened.',
      scriptures: [
        'So we, though many, are one body in Christ, and individually members one of another. Romans 12:5',
        'How good and pleasant it is when brothers dwell in unity. Psalm 133:1',
      ],
    },
    {
      title: 'Become',
      description:
        'We want believers to grow into maturity, discover their God-given purpose, and live with courage and conviction.',
      scriptures: [
        'Until we all attain... to mature manhood, to the measure of the stature of the fullness of Christ. Ephesians 4:13',
        'We are his workmanship, created in Christ Jesus for good works. Ephesians 2:10',
      ],
    },
  ];

  return (
    <main>
      <section className="hero hero-home">
        <div className="container hero-grid">
          <div className="hero-copy-block">
            <p className="eyebrow">Renewed Life International | Dube, Soweto</p>
            <h1>A Spirit-filled, Bible-based church where you can meet Jesus and find spiritual family.</h1>

            <div className="hero-cta-row">
              <Link href="/plan-your-visit" className="button button-primary">
                Plan My First Sunday
              </Link>
              <Link href="/sermons" className="button button-secondary hero-secondary-link">
                Watch a recent message
              </Link>
            </div>

            <p className="section-note">
              New to church or visiting with children? Start with our practical first-visit guide,
              then message the team if you want personal help before you come.
            </p>
          </div>

          <div className="hero-panel">
            <div className="panel-card hero-visit-card">
              <p className="eyebrow">Welcome</p>
              <h2>
                Looking for a spiritual home? You&apos;ve found a warm church family where you can
                truly believe, belong, and become.
              </h2>

              {homepageVideo ? (
                <div className="hero-video-block">
                  <div className="media-frame video-showcase-frame hero-video-frame">
                    <video
                      className="video-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster={homepageVideo.poster}
                      aria-label={homepageVideo.title}
                    >
                      <source src={homepageVideo.src} type={homepageVideo.type} />
                    </video>
                  </div>
                </div>
              ) : null}

              <Link href="/plan-your-visit" className="button button-primary hero-card-button">
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Your next step"
        title="Start here if you are new to Renewed Life"
        intro="Whether you want to plan your first Sunday, watch a message before visiting, or find your place in church life, these are the clearest next steps."
        compact
      >
        <div className="card-grid four-up">
          {homepagePrimaryActions.map((action) => (
            <article className="info-card homepage-actions-card" key={action.href}>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              <Link href={action.href} className="button button-secondary button-sm homepage-actions-button">
                {action.actionLabel}
              </Link>
            </article>
          ))}
        </div>

        <p className="section-note">
          Need prayer, support, or a direct conversation?{' '}
          <Link href="/contact" className="text-link">
            Contact the church
          </Link>
          .
        </p>
      </Section>

      <Section
        eyebrow="What visitors notice"
        title="Warmth, clarity, and room to take your next step"
        intro="We want the experience of Renewed Life to feel welcoming, grounded in Scripture, and clear enough for first-time guests to know what comes next."
        muted
      >
        <div className="card-grid three-up">
          {communityHighlights.map((highlight) => (
            <article className="info-card" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>

        <div className="inline-actions">
          <Link href="/plan-your-visit" className="button button-secondary">
            What to expect on Sunday
          </Link>
          <Link href="/families" className="button button-ghost">
            Visiting with children?
          </Link>
          <Link href="/contact" className="text-link">
            Ask a question before you come
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Service highlights"
        title="A quick look at what Sunday feels like"
        intro="These short service captures give a clearer sense of the worship, people, and atmosphere of a Sunday gathering at Renewed Life."
      >
        <div className="gallery-grid gallery-grid-three">
          {serviceHighlightClips.map((clip) => (
            <ServiceHighlightCard clip={clip} key={clip.src} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why Renewed Life"
        title="More than a service, a church family growing in Christ"
        intro="These core convictions shape how we welcome people, disciple believers, and build a healthy church in Dube, Soweto."
      >
        <div className="card-grid three-up">
          {homepageCoreValues.map((value) => (
            <article className="value-card value-card-flip" key={value.title} tabIndex={0}>
              <div className="value-card-flip-inner">
                <div className="value-card-face value-card-front">
                  <span className="value-pill">{value.title}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>

                <div className="value-card-face value-card-back">
                  <h3>{value.title}</h3>
                  <ul className="value-scripture-list">
                    {value.scriptures.map((scripture) => (
                      <li key={scripture}>{scripture}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Our story"
        title="Built with faith, growing with purpose"
        intro="Renewed Life began with a clear call from God and continues to grow as a church committed to the Word, the Spirit, and genuine Christian community."
        warm
      >
        <div className="split story-layout">
          <article className="info-card wide-panel story-anchor-card">
            <h3>A local church with a clear foundation</h3>
            <p>
              What began with simple faith and a clear call from God has grown into a church family rooted in the Word, the Spirit, prayer, and genuine Christian fellowship.
            </p>
            <Link href="/about" className="text-link">
              Read our story →
            </Link>
            <div className="media-frame story-anchor-image-frame">
              <Image
                src="/images/garage-venue.jpeg"
                alt="Garage venue image connected to the early story of Renewed Life International."
                fill
                className="media-cover"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </article>

          <div className="stack-grid story-moment-stack">
            {churchStoryMoments.map((moment) => (
              <article className="info-card story-moment-card" key={moment.label}>
                <p className="card-label">{moment.label}</p>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Ministries"
        title="There is a place for you here"
        intro="From children to seniors, there are practical places to build friendships, grow in Christ, and take your next step in the life of the church."
        muted
      >
        <div className="card-grid card-grid-2">
          {featuredMinistries.map((ministry) => (
            <article className="info-card" key={ministry.title}>
              <p className="mini-label">{ministry.rhythm}</p>
              <h3>{ministry.title}</h3>
              <p>{ministry.description}</p>
            </article>
          ))}
        </div>

        <div className="section-actions">
          <Link href="/ministries" className="button button-secondary">
            Explore ministries
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Recent teaching"
        title="Watch a message before you visit"
        intro="If you want to hear the tone and teaching of the church before coming in person, start with a recent sermon and get a feel for the ministry of the Word at Renewed Life."
      >
        <div className="card-grid three-up">
          {sermonHighlights.slice(0, 3).map((sermon) => (
            <article className="sermon-card homepage-sermon-card" key={sermon.title}>
              <p className="mini-label">{sermon.type}</p>
              <h3>{sermon.title}</h3>
              <p>{sermon.summary}</p>
              <Link href="/sermons" className="button button-secondary button-sm homepage-sermon-button">
                Browse sermons
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Plan your visit"
        title="Join us this Sunday with confidence"
        description="We would love to welcome you and your family to Renewed Life International. Plan your first Sunday, get directions, and know what to expect before you arrive."
        primaryLabel="Plan My First Sunday"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </main>
  );
}
