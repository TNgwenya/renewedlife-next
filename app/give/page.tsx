import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { churchInfo, givingCategories, givingWays } from '../../lib/siteContent';

export default function GivePage() {
  return (
    <main>
      <PageHero
        eyebrow="Give"
        title="Generosity is worship, partnership, and mission"
        description="We give because God has been faithful to us. Generosity helps support ministry, care for people, and advance the work of the Gospel through the local church."
        asideTitle="Giving information"
        asideBody="Phase 1 giving is being kept simple: one clear secure giving path, optional banking details, and direct help from the church office while the final platform link is confirmed."
      />

      <Section
        eyebrow="Why we give"
        title="A biblical and joyful response to God’s goodness"
        subtitle="Giving is not pressure-driven. It is a prayerful act of worship, stewardship, and participation in what God is doing through the church."
      >
        <div className="two-col">
          <div className="panel elevated-panel">
            <h3>Kingdom partnership</h3>
            <p>
              Every act of generosity helps strengthen worship, teaching, outreach, discipleship, and practical care.
            </p>
          </div>
          <div className="panel elevated-panel">
            <h3>Trust and clarity</h3>
            <p>
              We want the final giving setup to stay simple and trustworthy, with one secure primary method and clear support for anyone who needs help.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Giving methods" title="Simple ways to support the vision" dark>
        <div className="three-col">
          {givingWays.map((way) => (
            <article key={way.title} className="panel">
              <p className="card-label">{way.support}</p>
              <h3>{way.title}</h3>
              <p>{way.description}</p>
              <span className="status-pill">{way.actionLabel}</span>
              <a href={churchInfo.emailHref} className="text-link">Request giving details</a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Recommended setup"
        title="A giving structure that fits South African habits"
        subtitle="The clearest phase-one giving setup for Renewed Life is one secure online gateway, EFT details, and an optional QR-based convenience layer."
      >
        <div className="two-col">
          <article className="panel elevated-panel">
            <h3>Primary online method</h3>
            <p>
              The recommended website-first giving option is a PayFast-style secure checkout with card payments and instant EFT support.
            </p>
          </article>
          <article className="panel elevated-panel">
            <h3>Giving categories</h3>
            <div className="tag-row tag-row-light">
              {givingCategories.map((category) => (
                <span key={category} className="tag-pill tag-pill-light">{category}</span>
              ))}
            </div>
            <p>
              Keep the giving categories simple and consistent so members know exactly where to give.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="Giving support" title="Need giving details or assistance?">
        <div className="feature-grid">
          {[
            `Email ${churchInfo.email} for giving information`,
            `Call ${churchInfo.phoneDisplay} for direct assistance`,
            'Ask for EFT banking details and reference instructions',
            'Ask whether SnapScan or Zapper will be enabled for mobile giving',
          ].map((item) => (
            <article key={item} className="panel compact-panel">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Questions?"
        title="Need help before giving?"
        description="If you need banking details, help with online giving, or want to ask a question about stewardship, contact the church directly."
        primaryLabel="Contact the church"
        primaryHref="/contact"
        secondaryLabel="Plan Your Visit"
        secondaryHref="/plan-your-visit"
      />
    </main>
  );
}
