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
  visitExpectations,
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

          <article className="info-card">
            <p className="card-label">Location</p>
            <h3>{churchInfo.venue}</h3>
            <p>
              {churchInfo.addressLine1}
              <br />
              {churchInfo.addressLine2}
              <br />
              {churchInfo.addressLine3}
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
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="What to expect"
        title="A welcoming, Christ-centered experience"
        subtitle="We want you and your family to feel comfortable, prepared, and spiritually encouraged from the moment you arrive."
        dark
      >
        <div className="card-grid card-grid-2">
          <article className="info-card">
            <h3>What your first visit feels like</h3>
            <ul className="check-list">
              {visitExpectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-card">
            <h3>Helpful answers</h3>
            <div className="faq-stack">
              <div>
                <h4>What should I wear?</h4>
                <p>
                  Come as you are. You do not need to dress a certain way to be welcomed.
                  Wear what is modest, comfortable, and appropriate for church, and come ready to receive.
                </p>
              </div>
              <div>
                <h4>What about children and families?</h4>
                <p>
                  Families are warmly welcome. We want parents and children to feel safe,
                  seen, and guided clearly on arrival, with help from the team if you are unsure where to go.
                </p>
                <Link href="/families" className="text-link">
                  Read the families guide
                </Link>
              </div>
              <div>
                <h4>What if church feels unfamiliar to me?</h4>
                <p>
                  You do not need to know the songs, the flow of the service, or what to do next before you arrive. We will help you feel at ease.
                </p>
              </div>
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
        eyebrow="Need extra reassurance?"
        title="A simple guide for nervous first-time guests"
        subtitle="If you are feeling unsure, these are the small practical details that usually help the most."
      >
        <div className="card-grid card-grid-3">
          <article className="info-card">
            <p className="card-label">Arrival</p>
            <h3>Come 10 to 15 minutes early</h3>
            <p>
              Arriving a little early gives you time to park, settle in, greet the team, and ask any practical questions before the service begins.
            </p>
          </article>

          <article className="info-card">
            <p className="card-label">Support</p>
            <h3>You do not need to figure it out alone</h3>
            <p>
              If you need help finding your seat, understanding the flow of the service, or knowing what to do next, someone will gladly assist you.
            </p>
          </article>

          <article className="info-card">
            <p className="card-label">Families</p>
            <h3>Parents and children are welcome</h3>
            <p>
              You are welcome to come as a family. If you arrive with children, the team can help you get oriented and feel settled quickly.
            </p>
            <Link href="/families" className="text-link">
              See family information
            </Link>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Guest response"
        title="Let us know you are coming"
        subtitle={`Fill in a few details and your visitor enquiry will go directly to ${churchInfo.email}.`}
      >
        <VisitorInterestForm
          endpoint={formspreeEndpoint}
          email={churchInfo.email}
          whatsappHref={churchInfo.whatsappVisitFollowupHref}
        />
      </Section>

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