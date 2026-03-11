import Link from 'next/link';
import CtaBand from '../components/CtaBand';
import Section from '../components/Section';
import {
  churchInfo,
  churchStoryMoments,
  communityHighlights,
  coreValues,
  homepageActions,
  ministries,
  sermonHighlights,
} from '../lib/siteContent';

export default function HomePage() {
  const homepagePrimaryActions = homepageActions.slice(0, 4);
  const featuredMinistries = ministries.slice(0, 4);

  return (
    <main>
      <section className="hero hero-home">
        <div className="container hero-grid">
          <div className="hero-copy-block">
            <p className="eyebrow">Renewed Life International | Dube, Soweto</p>
            <h1>A Spirit-filled, Bible-based church where you can meet Jesus and find spiritual family.</h1>
            <p className="hero-text">
              Join us in Dube, Soweto for heartfelt worship, prayer, biblical preaching, and a warm
              welcome for you and your family. If this will be your first Sunday, we will help you
              feel at ease from the moment you arrive.
            </p>

            <div className="hero-cta-row">
              <Link href="/plan-your-visit" className="button button-primary">
                Plan My First Sunday
              </Link>
              <Link href="/sermons" className="text-link hero-secondary-link">
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
              <p className="eyebrow">This Sunday</p>
              <h2>Everything you need to walk in with confidence.</h2>

              <div className="hero-visit-details">
                <div>
                  <span className="meta-label">Service</span>
                  <strong>{churchInfo.serviceTimes[0].time}</strong>
                </div>
                <div>
                  <span className="meta-label">Location</span>
                  <strong>{churchInfo.venue}, Dube</strong>
                </div>
                <div>
                  <span className="meta-label">Arrive</span>
                  <strong>10 to 15 minutes early</strong>
                </div>
              </div>

              <ul className="feature-list">
                <li>Friendly welcome team</li>
                <li>Spirit-filled worship and biblical preaching</li>
                <li>Clear help for first-time guests and families</li>
              </ul>

              <Link href="/plan-your-visit" className="button button-secondary hero-card-button">
                See first-visit details
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
            <article className="info-card" key={action.href}>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              <Link href={action.href} className="button button-secondary button-sm">
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
              <p className="card-label">Visitor reassurance</p>
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
        eyebrow="Why Renewed Life"
        title="More than a service, a church family growing in Christ"
        intro="These core convictions shape how we welcome people, disciple believers, and build a healthy church in Dube, Soweto."
      >
        <div className="card-grid three-up">
          {coreValues.map((value) => (
            <article className="value-card" key={value.title}>
              <span className="value-pill">{value.title}</span>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Our story"
        title="Built with faith, growing with purpose"
        intro="Renewed Life began with a clear call from God and continues to grow as a church committed to the Word, the Spirit, and genuine Christian community."
      >
        <div className="split story-layout">
          <article className="info-card wide-panel story-anchor-card">
            <p className="card-label">Church credibility</p>
            <h3>A local church with a clear foundation</h3>
            <p>
              What began with simple faith and a clear call from God has grown into a church family rooted in the Word, the Spirit, prayer, and genuine Christian fellowship.
            </p>
            <Link href="/about" className="text-link">
              Read our story →
            </Link>
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
            <article className="sermon-card" key={sermon.title}>
              <p className="mini-label">{sermon.type}</p>
              <h3>{sermon.title}</h3>
              <p>{sermon.summary}</p>
              <Link href="/sermons" className="button button-secondary button-sm">
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
