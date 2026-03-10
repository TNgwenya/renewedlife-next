import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { churchInfo, eftGivingDetails, givingCategories, givingWays } from '../../lib/siteContent';

export default function GivePage() {
  return (
    <main>
      <PageHero
        eyebrow="Give"
        title="Generosity is worship, partnership, and mission"
        description="We give because God has been faithful to us. Generosity helps support ministry, care for people, and advance the work of the Gospel through the local church."
        asideTitle="Giving information"
        asideBody="Giving is live in a simple phase-one format: EFT is available now, with direct support from the church office while online and QR-based options are still being finalized."
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
              We are keeping giving simple and trustworthy: one active EFT option now, with clear next-step support for anyone who needs help completing a transfer.
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
              <a href={churchInfo.emailHref} className="text-link">Contact the church for giving help</a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="EFT details"
        title="Bank transfer details for giving"
        subtitle="Use these confirmed EFT details for phase-one giving. If you need branch code guidance, confirmation, or help with your transfer, contact the church office directly."
      >
        <div className="two-col">
          <article className="panel elevated-panel">
            <p className="card-label">Active method</p>
            <h3>Give via FNB EFT</h3>
            <div className="meta-list">
              {eftGivingDetails.map((detail) => (
                <span key={detail.label}><strong>{detail.label}:</strong> {detail.value}</span>
              ))}
            </div>
            <p>
              If you need any extra transfer guidance, reference confirmation, or proof-of-payment assistance, contact the church and the team will help you.
            </p>
            <div className="inline-actions">
              <a href={churchInfo.emailHref} className="button">Email for giving support</a>
              <a href={churchInfo.whatsappHref} className="text-link" target="_blank" rel="noreferrer">Message on WhatsApp</a>
            </div>
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
            <p>
              Online giving and QR-based giving can be layered in next without needing to redesign this page.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="Giving support" title="Need giving details or assistance?">
        <div className="feature-grid">
          {[
            `Email ${churchInfo.email} for transfer support`,
            `Call ${churchInfo.phoneDisplay} for direct assistance`,
            'Ask for any additional EFT transfer guidance you need',
            'Ask when online giving or SnapScan / Zapper will be activated',
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
        description="If you need help with EFT giving, transfer confirmation, or a giving-related question, contact the church directly and the team will assist you."
        primaryLabel="Contact the church"
        primaryHref="/contact"
        secondaryLabel="Plan Your Visit"
        secondaryHref="/plan-your-visit"
      />
    </main>
  );
}
