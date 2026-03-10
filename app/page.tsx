import Link from 'next/link';
import CtaBand from '../components/CtaBand';
import Section from '../components/Section';
import {
  churchInfo,
  churchStoryMoments,
  coreValues,
  homepageActions,
  ministries,
  sermonHighlights,
} from '../lib/siteContent';

export default function HomePage() {
  const homepagePrimaryActions = homepageActions.slice(0, 3);
  const featuredMinistries = ministries.slice(0, 4);

  return (
    <main>
      <section className="hero hero-home">
        <div className="container hero-grid">
          <div className="hero-copy-block">
            <p className="eyebrow">Welcome to Renewed Life International</p>
            <h1>A church where you can believe, belong, and become.</h1>
            <p className="hero-text">
              We are a welcoming church in Dube, Soweto where people worship Jesus, learn the Word,
              pray together, and become part of a real spiritual family.
            </p>

            <div className="hero-cta-row">
              <Link href="/plan-your-visit" className="button button-primary">
                Plan Your Visit
              </Link>
              <Link href="/sermons" className="text-link hero-secondary-link">
                Watch a Message
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card hero-visit-card">
              <p className="eyebrow">This Sunday</p>
              <h2>Start with the essentials.</h2>

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
                  <span className="meta-label">Midweek</span>
                  <strong>{churchInfo.serviceTimes[1].time}</strong>
                </div>
              </div>

              <ul className="feature-list">
                <li>Friendly welcome team</li>
                <li>Spirit-filled worship and biblical preaching</li>
                <li>Simple next steps to get connected</li>
              </ul>

              <Link href="/plan-your-visit" className="button button-secondary hero-card-button">
                What to expect
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Your next step"
        title="Everything you need to get connected"
        intro="Whether you are visiting for the first time, looking for spiritual growth, or ready to become part of the church family, start here."
        compact
      >
        <div className="card-grid three-up">
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
        eyebrow="Why Renewed Life"
        title="More than a service - a spiritual home"
        intro="We are building a church family where people are known, discipled, prayed for, and strengthened to follow Jesus faithfully."
        muted
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
        intro="From children to seniors, there are real places to build friendships, grow in Christ, and serve meaningfully in church life."
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
            View All Ministries
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Recent teaching"
        title="Watch and grow in the Word"
        intro="Catch up on recent sermons and hear the biblical themes, pastoral burden, and teaching emphasis shaping our church."
      >
        <div className="card-grid three-up">
          {sermonHighlights.slice(0, 3).map((sermon) => (
            <article className="sermon-card" key={sermon.title}>
              <p className="mini-label">{sermon.type}</p>
              <h3>{sermon.title}</h3>
              <p>{sermon.summary}</p>
              <Link href="/sermons" className="button button-secondary button-sm">
                Watch sermons
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Plan your visit"
        title="Join us this Sunday"
        description="We would love to welcome you and your family to Renewed Life International. Plan your visit, get directions, or contact us directly."
        primaryLabel="Plan Your Visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  );
}
