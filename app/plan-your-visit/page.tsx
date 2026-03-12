import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import VisitorInterestForm from '../../components/VisitorInterestForm';
import { buildPageMetadata } from '../../lib/seo';
import {
  churchInfo,
  formspreeEndpoint,
} from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Plan Your Visit',
  description:
    'Plan your first Sunday at Renewed Life International in Dube, Soweto with service times, directions, family reassurance, and practical visitor guidance.',
  path: '/plan-your-visit',
  keywords: [
    'plan a church visit in Soweto',
    'first time church visit Dube',
    'family friendly church Soweto',
    'Renewed Life International visit',
  ],
});

const firstVisitSteps = [
  {
    title: 'Arrive and be welcomed',
    text: 'Our welcome team will help you find your way, answer practical questions, and help you settle in comfortably.',
  },
  {
    title: 'Enjoy worship and the Word',
    text: 'Expect heartfelt worship, prayer, and clear Bible teaching that is Christ-centered, practical, and faith-building.',
  },
  {
    title: 'Take your next step',
    text: 'After the service, you can connect with someone from the team, ask questions, and find your next step in the church family.',
  },
];

const visitFaqs = [
  {
    question: 'What should I wear?',
    answer:
      'Come as you are. You do not need special clothes to be welcomed at Renewed Life. Dress modestly, comfortably, and in a way that helps you feel at ease for church.',
  },
  {
    question: 'What time should I arrive?',
    answer:
      'Arriving 10 to 15 minutes early is usually best. It gives you time to settle in, greet the team, and get comfortable before the service begins.',
  },
  {
    question: 'What is the service like?',
    answer:
      'You can expect heartfelt worship, prayer, and Bible-based preaching that points people to Jesus and applies God’s Word to everyday life.',
  },
  {
    question: 'What if I do not know anyone?',
    answer:
      'That is completely okay. Many people arrive not knowing anyone at first, and our desire is that you would be welcomed, helped, and treated like family from the moment you walk in.',
  },
  {
    question: 'Will someone help me when I arrive?',
    answer:
      'Yes. Our welcome team can help you find your way, answer practical questions, and help you feel more relaxed if this is your first time visiting.',
  },
  {
    question: 'Can I come even if I am still figuring out faith?',
    answer:
      'Absolutely. No matter where you are in life or faith, you are welcome here. We want every guest to encounter God, hear the truth of Scripture, and leave with hope and clarity.',
  },
];

export default function PlanYourVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan Your Visit"
        title="Plan your first Sunday with confidence"
        description="Get service times, directions, what to expect, and a simple way to let us know you are coming. If church feels unfamiliar, you will not be out of place here."
        asideTitle="This Sunday"
        asideBody={`${churchInfo.serviceTimes[0]?.label} · ${churchInfo.serviceTimes[0]?.time} at ${churchInfo.venue}, Dube`}
      >
        <div className="hero-actions">
          <a
            href={churchInfo.whatsappHref}
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Plan my visit on WhatsApp
          </a>
          <a
            href={churchInfo.mapHref}
            className="button button-ghost"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>
      </PageHero>

      <Section
        eyebrow="What to expect"
        title="A welcoming, Christ-centered experience"
        subtitle="We want you and your family to feel welcomed, spiritually encouraged, and confident about what your first Sunday will be like."
        warm
      >
        <div className="split visit-expect-section">
          <article className="info-card visit-expect-copy">
            <h3>From the moment you walk in, our desire is for you to encounter God in a real and life-changing way.</h3>
            <p>
              At Renewed Life, you will find people who care about where you have come from and who are willing to walk with you in the journey God is leading you on.
            </p>
            <p>
              No matter where you are in life or faith, we want you to leave with renewed hope, clearer purpose, and the confidence that God is at work in your life. That is why our worship, prayer, and weekly preaching are centered on Scripture and grounded in practical truth for everyday living.
            </p>
            <div className="inline-actions visit-expect-actions">
              <Link href="#guest-response" className="button button-secondary">
                Let us know you are coming
              </Link>
              <Link href="#visit-faq" className="button button-ghost">
                FAQs
              </Link>
            </div>
          </article>

          <article className="info-card visit-expect-media-card">
            <div className="media-frame visit-expect-frame">
              <Image
                src="/images/visitor-welcome.JPG"
                alt="A welcoming moment for visitors at Renewed Life International."
                fill
                className="media-cover"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Visit essentials"
        title="Everything you need before Sunday"
        subtitle="Here are the most important details for planning a calm, clear first visit to Renewed Life."
      >
        <div className="card-grid card-grid-3">
          <article className="info-card">
            <p className="card-label">Service times</p>
            <h3>Join us this week</h3>
            <ul className="stack-list">
              {churchInfo.serviceTimes.map((service) => (
                <li key={service.label}>
                  <strong>{service.label}</strong>
                  <br />
                  <span>{service.time}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="info-card visit-location-card">
            <p className="card-label">Location</p>
            <h3>{churchInfo.venue}</h3>
            
            <p>
              {churchInfo.addressLine1}
              <br />
              {churchInfo.addressLine2}
              <br />
              {churchInfo.addressLine3}
            </p>
            <p className="photo-note">
              A quick venue view to help first-time guests arrive with more confidence.
            </p>
            <a
              href={churchInfo.mapHref}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Open in Google Maps →
            </a>
          </article>

          <article className="info-card">
            <p className="card-label">Need help first?</p>
            <h3>We are happy to help</h3>
            <p>
              If you have questions before you arrive, reach out by phone, email, or WhatsApp
              and we will gladly help you know where to go and what to expect.
            </p>
            <div className="stack-actions">
              <a href={churchInfo.phoneHref} className="text-link">
                Call the church →
              </a>
              <a
                href={churchInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Message on WhatsApp →
              </a>
              <Link href="#visit-faq" className="text-link">
                FAQs →
              </Link>
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="First-time journey"
        title="How your visit will flow"
        subtitle="A simple three-step picture of what usually happens when you join us."
      >
        <div className="card-grid card-grid-3">
          {firstVisitSteps.map((step, index) => (
            <article className="info-card" key={step.title}>
              <p className="card-label">Step {index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What about kids?"
        title="What about Children?"
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <h3>You can come as a family with confidence</h3>
            <p>
              We know that visiting church with children can bring extra questions, and we want to make that easier for you. Our heart is that parents feel supported and children feel safe, welcomed, and cared for from the moment they arrive.
            </p>
            <p>
              If you are unsure where to go, what the current children’s arrangements are, or how to settle in with your child, the team will gladly help you. You do not need to figure it out on your own.
            </p>
            <Link href="/families" className="text-link">
              Read the families guide
            </Link>
          </article>

          <article className="info-card visit-kids-media-card">
            <div className="media-frame visit-kids-frame">
              <Image
                src="/images/sunday-school-1.jpg"
                alt="Children at Renewed Life International in a Sunday school setting."
                fill
                className="media-cover"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </article>
        </div>
      </Section>

      <div id="visit-faq">
        <Section
          eyebrow="FAQ"
          title="FAQs"
          muted
        >
          <div className="faq-accordion">
            {visitFaqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Section>
      </div>

      <div id="guest-response">
        <Section
          eyebrow="Guest response"
          title="Let us know you are coming"
          subtitle={`Fill in a few details and your visitor enquiry will go directly to ${churchInfo.email}.`}
          muted
        >
          <VisitorInterestForm
            endpoint={formspreeEndpoint}
            email={churchInfo.email}
            whatsappHref={churchInfo.whatsappVisitFollowupHref}
          />
        </Section>
      </div>

      <CtaBand
        eyebrow="Still deciding?"
        title="We would love to welcome you personally"
        description="Come and join us this Sunday for worship, the Word, prayer, and a warm welcome from the church family. If you want a personal point of contact before you arrive, message us first."
        primaryLabel="Plan my visit on WhatsApp"
        primaryHref={churchInfo.whatsappVisitFollowupHref}
        secondaryLabel="See family information"
        secondaryHref="/families"
      />
    </>
  );
}