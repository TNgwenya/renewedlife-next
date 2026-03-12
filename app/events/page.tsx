import type { Metadata } from 'next';
import CtaBand from '../../components/CtaBand';
import EventsCalendar from '../../components/EventsCalendar';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import { churchInfo, upcomingEvents } from '../../lib/siteContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Events',
  description:
    'See upcoming events at Renewed Life International in Dube, Soweto, including worship gatherings, prayer nights, and special conferences.',
  path: '/events',
  keywords: [
    'church events Soweto',
    'Renewed Life International events',
    'prayer nights Dube church',
  ],
});

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="Gather for moments of worship, prayer, and spiritual growth"
        description="These upcoming events give the church family and new guests clear opportunities to gather beyond the regular weekly rhythm."
        asideTitle="How to respond"
        asideBody="Use the event cards below to see dates, times, venues, and the quickest next step for registering or asking a question."
      >
        <a href={churchInfo.whatsappHref} className="button" target="_blank" rel="noreferrer">
          Ask about an event on WhatsApp
        </a>
      </PageHero>

      <Section
        eyebrow="Calendar"
        title="See the next gatherings on the calendar"
        subtitle="Browse the featured gatherings month by month, with the calendar and agenda updating automatically from the live event list below."
        muted
      >
        <EventsCalendar events={upcomingEvents} />
      </Section>

      <Section
        eyebrow="Upcoming"
        title="Plan for the next key gatherings"
        subtitle="Each event below is structured to help visitors and members understand what is happening, when to come, and how to respond."
      >
        <div className="three-col">
          {upcomingEvents.map((event) => (
            <article key={`${event.title}-${event.date}`} className="panel feature-panel">
              <p className="card-label">{event.recurrence}</p>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="meta-list">
                <span><strong>Date:</strong> {event.date}</span>
                <span><strong>Time:</strong> {event.time}</span>
                <span><strong>Venue:</strong> {event.venue}</span>
              </div>
              <a href={event.ctaHref} className="button" target="_blank" rel="noreferrer">
                {event.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why events matter"
        title="More than a date on the calendar"
        subtitle="Special gatherings help the church pray together, build strong relationships, and make space for focused teaching, worship, and ministry."
        warm
      >
        <div className="three-col">
          {[
            'Events create focused moments for spiritual encouragement and deeper connection.',
            'They help new people find a natural way to engage with church life beyond Sunday.',
            'They give the church family a shared rhythm of prayer, worship, and discipleship throughout the year.',
          ].map((item) => (
            <article key={item} className="panel compact-panel">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Need details?"
        title="Have a question before attending an event?"
        description="Reach out if you need help with timing, directions, registration, or anything else related to the upcoming gatherings."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Plan Your Visit"
        secondaryHref="/plan-your-visit"
      />
    </main>
  );
}