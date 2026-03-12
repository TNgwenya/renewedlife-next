import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import { churchInfo, familyHighlights, ministries } from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Kids and Families',
  description:
    'See how Renewed Life International welcomes parents, children, and first-time family visits in Dube, Soweto.',
  path: '/families',
  keywords: [
    'kids ministry Soweto',
    'family friendly church Dube',
    'children church Soweto',
    'Renewed Life families',
  ],
});

export default function FamiliesPage() {
  const childrenMinistry = ministries.find((ministry) => ministry.title === 'Children’s Ministry');

  return (
    <>
      <PageHero
        eyebrow="Kids and Families"
        title="Families are warmly welcome at Renewed Life"
        description="If you are planning to visit with children, we want your first Sunday to feel calm, clear, and well supported from the moment you arrive."
        asideTitle="A simple first step"
        asideBody="Message the church before Sunday if you want the latest children’s ministry and arrival guidance."
      >
        <div className="hero-actions">
          <a
            href={churchInfo.whatsappHref}
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Ask about visiting with children
          </a>
          <Link href="/plan-your-visit" className="button button-ghost">
            Plan my first Sunday
          </Link>
        </div>
      </PageHero>

      <Section
        eyebrow="What parents can expect"
        title="Practical reassurance before you arrive"
        subtitle="We use clear, careful language here because we do not want families guessing what their first visit will feel like."
      >
        <div className="card-grid card-grid-3">
          {familyHighlights.map((item) => (
            <article className="info-card" key={item.title}>
              <p className="card-label">Family reassurance</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Sunday guidance"
        title="How to make your first family visit easier"
        subtitle="A few small steps can make the morning feel much simpler, especially if your children are visiting a new church environment."
        warm
      >
        <div className="card-grid card-grid-3">
          <article className="info-card">
            <p className="card-label">Step 1</p>
            <h3>Arrive a little early</h3>
            <p>
              Coming 10 to 15 minutes early gives you time to greet the team, settle your children, and ask any practical questions before the service begins.
            </p>
          </article>

          <article className="info-card">
            <p className="card-label">Step 2</p>
            <h3>Ask about the current children’s arrangement</h3>
            <p>
              Because children’s ministry details can vary, we encourage parents to confirm the latest Sunday setup with the team before visiting or on arrival.
            </p>
          </article>

          <article className="info-card">
            <p className="card-label">Step 3</p>
            <h3>Let the team guide you</h3>
            <p>
              If you are unsure where to go, what happens next, or how your children will settle in, someone will gladly help you step by step.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Children’s ministry"
        title="A joyful and age-aware environment for children"
        subtitle="The goal is not only childcare. It is helping children encounter church life in a way that is understandable, warm, and rooted in the Bible."
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <p className="card-label">Current focus</p>
            <h3>{childrenMinistry?.title}</h3>
            <p>{childrenMinistry?.description}</p>
            <div className="meta-list">
              <div>
                <strong>What happens:</strong> {childrenMinistry?.whatHappens}
              </div>
              <div>
                <strong>When:</strong> {childrenMinistry?.rhythm}
              </div>
            </div>
          </article>

          <article className="info-card">
            <p className="card-label">Helpful note for parents</p>
            <h3>Ask for the latest age and check-in details</h3>
            <p>
              We have chosen not to publish precise children’s operational details here when they may change. The safest and clearest next step is to message the church team for the latest information before you visit.
            </p>
            <div className="stack-actions">
              <a href={childrenMinistry?.contactHref} className="button button-secondary button-sm" target="_blank" rel="noreferrer">
                Ask about children’s ministry
              </a>
              <Link href="/contact" className="text-link">
                Contact the church office
              </Link>
            </div>
          </article>
        </div>
      </Section>

      <CtaBand
        eyebrow="Ready to plan?"
        title="Let us help your family feel ready for Sunday"
        description="Plan your visit, message us with any family questions, and come expecting a warm welcome, practical help, and a Christ-centered service."
        primaryLabel="Plan my first Sunday"
        primaryHref="/plan-your-visit"
        secondaryLabel="Message us on WhatsApp"
        secondaryHref={churchInfo.whatsappHref}
      />
    </>
  );
}