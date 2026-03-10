import Link from 'next/link';
import CtaBand from '../components/CtaBand';
import Section from '../components/Section';
import {
  churchInfo,
  coreValues,
  homepageActions,
  ministries,
  pastorWelcome,
  sermonHighlights,
} from '../lib/siteContent';

export default function HomePage() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="container hero-grid">
          <div className="hero-copy-block">
            <p className="eyebrow">Welcome to Renewed Life International</p>
            <h1>A church where you can believe, belong, and become.</h1>
            <p className="hero-text">
              We are a warm, Christ-centered, Spirit-filled church in Dube, Soweto, helping people
              encounter God, grow in the Word, build healthy relationships, and walk in purpose.
            </p>

            <div className="hero-cta-row">
              <Link href="/plan-your-visit" className="button button-primary">
                Plan Your Visit
              </Link>
              <Link href="/sermons" className="button button-secondary">
                Watch a Message
              </Link>
            </div>

            <div className="hero-meta-card">
              <div>
                <span className="meta-label">Sunday Service</span>
                <strong>{churchInfo.serviceTimes[0].time}</strong>
              </div>
              <div>
                <span className="meta-label">Location</span>
                <strong>{churchInfo.venue}, Dube</strong>
              </div>
              <div>
                <span className="meta-label">Midweek</span>
                <strong>Wednesday Bible Study</strong>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <p className="eyebrow">New here?</p>
              <h2>Your first visit should feel easy.</h2>
              <p>
                Get service times, directions, what to expect, and let us know you&apos;re coming.
              </p>
              <ul className="feature-list">
                <li>Friendly welcome team</li>
                <li>Powerful worship and biblical preaching</li>
                <li>Warm family atmosphere</li>
                <li>Simple next steps to get connected</li>
              </ul>
              <Link href="/plan-your-visit" className="text-link">
                Learn what to expect →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Your next step"
        title="Everything you need to get connected"
        intro="Whether you are visiting for the first time, looking for spiritual growth, or ready to become part of the family, start here."
      >
        <div className="card-grid four-up">
          {homepageActions.map((action) => (
            <article className="info-card" key={action.href}>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              <Link href={action.href} className="text-link">
                Explore →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why Renewed Life"
        title="More than a service - a spiritual home"
        intro="We are building a church family where people grow in faith, experience real community, and become who God has called them to be."
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
        eyebrow="What to expect"
        title="A church experience centered on Jesus"
        intro="When you join us, expect heartfelt worship, biblical teaching, prayer, and a welcoming environment for individuals, couples, families, and children."
      >
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Biblical teaching</h3>
            <p>
              We preach and teach the Word of God clearly, deeply, and practically for real-life transformation.
            </p>
          </div>
          <div className="experience-card">
            <h3>Spirit-filled worship</h3>
            <p>
              Our gatherings create room for reverence, joy, freedom, and encounter with God.
            </p>
          </div>
          <div className="experience-card">
            <h3>Healthy community</h3>
            <p>
              We believe church is family, and we are intentional about helping people belong and grow together.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Ministries"
        title="There is a place for you here"
        intro="Explore spaces where every age and stage of life can grow in faith and connection."
        muted
      >
        <div className="card-grid three-up">
          {ministries.slice(0, 6).map((ministry) => (
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
        intro="Catch up on recent sermons and hear the heart, message, and spiritual direction of our church."
      >
        <div className="card-grid three-up">
          {sermonHighlights.slice(0, 3).map((sermon) => (
            <article className="sermon-card" key={sermon.title}>
              <p className="mini-label">{sermon.type}</p>
              <h3>{sermon.title}</h3>
              <p>{sermon.summary}</p>
              <Link href="/sermons" className="text-link">
                Watch sermons →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="A word from our pastor"
        title="You are welcome here"
        intro={pastorWelcome.description}
        muted
      >
        <div className="pastor-note">
          <p>{pastorWelcome.description}</p>
          <strong>Renewed Life International Leadership</strong>
        </div>
      </Section>

      <CtaBand
        title="Join us this Sunday"
        description="We would love to welcome you and your family to Renewed Life International. Plan your visit, get directions, or message us directly."
        primaryLabel="Plan Your Visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  );
}
