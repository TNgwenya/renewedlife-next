import type { Metadata } from 'next';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { buildPageMetadata } from '../../lib/seo';
import { churchInfo, upcomingEvents } from '../../lib/siteContent';

const calendarWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type CalendarEvent = {
  day: number;
  title: string;
  badge?: string;
};

function buildCalendarMonth(year: number, monthIndex: number, events: CalendarEvent[]) {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const eventMap = new Map(events.map((event) => [event.day, event]));
  const cells: Array<{ day?: number; event?: CalendarEvent }> = [];

  for (let index = 0; index < firstDay; index += 1) {
    cells.push({});
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ day, event: eventMap.get(day) });
  }

  while (cells.length % 7 !== 0) {
    cells.push({});
  }

  return cells;
}

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
  const marchEvents = buildCalendarMonth(2026, 2, [
    { day: 14, title: 'Youth Connect', badge: 'Youth' },
    { day: 20, title: 'Night Prayer', badge: 'Prayer' },
  ]);
  const aprilEvents = buildCalendarMonth(2026, 3, [
    { day: 1, title: 'Passover Conference opens', badge: 'Conference' },
    { day: 2, title: 'Passover Conference', badge: 'Conference' },
    { day: 3, title: 'Passover Conference', badge: 'Conference' },
    { day: 4, title: 'Passover Conference', badge: 'Conference' },
    { day: 5, title: 'Passover Conference closes', badge: 'Conference' },
  ]);

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
        subtitle="A quick calendar view makes it easier to spot key dates and plan ahead, similar to the clear event rhythm used on Meta Church-style pages."
        muted
      >
        <div className="events-calendar-grid">
          <article className="panel events-calendar-card">
            <div className="events-calendar-head">
              <p className="card-label">Month view</p>
              <h3>March 2026</h3>
            </div>
            <div className="events-calendar-weekdays">
              {calendarWeekdays.map((weekday) => (
                <span key={weekday}>{weekday}</span>
              ))}
            </div>
            <div className="events-calendar-days">
              {marchEvents.map((cell, index) => (
                <div
                  className={`events-calendar-day${cell.event ? ' events-calendar-day-active' : ''}${!cell.day ? ' events-calendar-day-empty' : ''}`}
                  key={`march-${cell.day ?? 'empty'}-${index}`}
                >
                  {cell.day ? <span className="events-calendar-date">{cell.day}</span> : null}
                  {cell.event ? (
                    <>
                      <strong>{cell.event.badge}</strong>
                      <small>{cell.event.title}</small>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </article>

          <article className="panel events-calendar-card">
            <div className="events-calendar-head">
              <p className="card-label">Month view</p>
              <h3>April 2026</h3>
            </div>
            <div className="events-calendar-weekdays">
              {calendarWeekdays.map((weekday) => (
                <span key={weekday}>{weekday}</span>
              ))}
            </div>
            <div className="events-calendar-days">
              {aprilEvents.map((cell, index) => (
                <div
                  className={`events-calendar-day${cell.event ? ' events-calendar-day-active' : ''}${!cell.day ? ' events-calendar-day-empty' : ''}`}
                  key={`april-${cell.day ?? 'empty'}-${index}`}
                >
                  {cell.day ? <span className="events-calendar-date">{cell.day}</span> : null}
                  {cell.event ? (
                    <>
                      <strong>{cell.event.badge}</strong>
                      <small>{cell.event.title}</small>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="three-col events-calendar-agenda">
          {upcomingEvents.map((event) => (
            <article key={`${event.title}-calendar`} className="panel compact-panel">
              <p className="card-label">{event.date}</p>
              <h3>{event.title}</h3>
              <p>{event.time} · {event.venue}</p>
            </article>
          ))}
        </div>
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