'use client';

import { useState } from 'react';

type EventItem = {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  recurrence: string;
  ctaLabel: string;
  ctaHref: string;
};

type CalendarEvent = EventItem & {
  badge: string;
  startDate: Date;
  endDate: Date;
};

type CalendarCell = {
  key: string;
  date?: Date;
  events: CalendarEvent[];
};

const calendarWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function createLocalDate(year: number, monthIndex: number, day: number) {
  return new Date(year, monthIndex, day, 12, 0, 0, 0);
}

function startOfMonth(date: Date) {
  return createLocalDate(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return createLocalDate(date.getFullYear(), date.getMonth() + amount, 1);
}

function addDays(date: Date, amount: number) {
  return createLocalDate(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

function isSameDay(left: Date, right: Date) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function isSameMonth(left: Date, right: Date) {
  return left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth();
}

function isDateWithinRange(date: Date, startDate: Date, endDate: Date) {
  return date >= startDate && date <= endDate;
}

function monthLabel(date: Date) {
  return date.toLocaleDateString('en-ZA', {
    month: 'long',
    year: 'numeric',
  });
}

function fullDateLabel(date: Date) {
  return date.toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function parseMonthIndex(monthName: string) {
  const parsed = Date.parse(`${monthName} 1, 2026`);

  if (Number.isNaN(parsed)) {
    throw new Error(`Unsupported month name: ${monthName}`);
  }

  return new Date(parsed).getMonth();
}

function parseDateRange(dateLabel: string) {
  const rangeMatch = dateLabel.match(
    /^(\d{1,2})\s+([A-Za-z]+)\s*-\s*(\d{1,2})(?:\s+([A-Za-z]+))?\s+(\d{4})$/,
  );

  if (rangeMatch) {
    const [, startDay, startMonthName, endDay, optionalEndMonthName, year] = rangeMatch;
    const startMonthIndex = parseMonthIndex(startMonthName);
    const endMonthIndex = parseMonthIndex(optionalEndMonthName ?? startMonthName);

    return {
      startDate: createLocalDate(Number(year), startMonthIndex, Number(startDay)),
      endDate: createLocalDate(Number(year), endMonthIndex, Number(endDay)),
    };
  }

  const singleMatch = dateLabel.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);

  if (singleMatch) {
    const [, day, monthName, year] = singleMatch;
    const monthIndex = parseMonthIndex(monthName);
    const date = createLocalDate(Number(year), monthIndex, Number(day));

    return {
      startDate: date,
      endDate: date,
    };
  }

  throw new Error(`Unsupported date format: ${dateLabel}`);
}

function getEventBadge(event: EventItem) {
  if (event.recurrence.toLowerCase().includes('conference')) {
    return 'Conference';
  }

  if (event.title.toLowerCase().includes('prayer')) {
    return 'Prayer';
  }

  if (event.title.toLowerCase().includes('youth')) {
    return 'Youth';
  }

  return 'Event';
}

function buildCalendarCells(displayedMonth: Date, events: CalendarEvent[]) {
  const firstDay = displayedMonth.getDay();
  const daysInMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 0).getDate();
  const cells: CalendarCell[] = [];

  for (let index = 0; index < firstDay; index += 1) {
    cells.push({
      key: `empty-leading-${index}`,
      events: [],
    });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const currentDate = createLocalDate(displayedMonth.getFullYear(), displayedMonth.getMonth(), day);

    cells.push({
      key: `${displayedMonth.getFullYear()}-${displayedMonth.getMonth()}-${day}`,
      date: currentDate,
      events: events.filter((event) => isDateWithinRange(currentDate, event.startDate, event.endDate)),
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({
      key: `empty-trailing-${cells.length}`,
      events: [],
    });
  }

  return cells;
}

function findInitialMonth(events: CalendarEvent[]) {
  const today = createLocalDate(new Date().getFullYear(), new Date().getMonth(), 1);
  const eventMonths = events
    .flatMap((event) => {
      const months: Date[] = [];
      let current = startOfMonth(event.startDate);

      while (current <= startOfMonth(event.endDate)) {
        months.push(current);
        current = addMonths(current, 1);
      }

      return months;
    })
    .sort((left, right) => left.getTime() - right.getTime());

  const currentOrNextMonth = eventMonths.find((month) => month.getTime() >= today.getTime());

  return currentOrNextMonth ?? eventMonths[0] ?? today;
}

function formatAgendaDate(event: CalendarEvent) {
  if (isSameDay(event.startDate, event.endDate)) {
    return fullDateLabel(event.startDate);
  }

  if (isSameMonth(event.startDate, event.endDate)) {
    return `${event.startDate.getDate()}-${event.endDate.getDate()} ${event.startDate.toLocaleDateString('en-ZA', {
      month: 'long',
      year: 'numeric',
    })}`;
  }

  return `${fullDateLabel(event.startDate)} - ${fullDateLabel(event.endDate)}`;
}

export default function EventsCalendar({ events }: { events: EventItem[] }) {
  const calendarEvents = events
    .map((event) => {
      const { startDate, endDate } = parseDateRange(event.date);

      return {
        ...event,
        badge: getEventBadge(event),
        startDate,
        endDate,
      } satisfies CalendarEvent;
    })
    .sort((left, right) => left.startDate.getTime() - right.startDate.getTime());

  const earliestMonth = calendarEvents[0] ? startOfMonth(calendarEvents[0].startDate) : startOfMonth(new Date());
  const latestMonth = calendarEvents[calendarEvents.length - 1]
    ? startOfMonth(calendarEvents[calendarEvents.length - 1].endDate)
    : startOfMonth(new Date());
  const [displayedMonth, setDisplayedMonth] = useState(findInitialMonth(calendarEvents));
  const monthCells = buildCalendarCells(displayedMonth, calendarEvents);
  const today = createLocalDate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  const monthAgenda = calendarEvents.filter((event) => {
    const monthStart = startOfMonth(displayedMonth);
    const monthEnd = createLocalDate(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 0);

    return event.startDate <= monthEnd && event.endDate >= monthStart;
  });
  const canGoPrevious = displayedMonth.getTime() > earliestMonth.getTime();
  const canGoNext = displayedMonth.getTime() < latestMonth.getTime();

  return (
    <div className="events-calendar-grid">
      <article className="panel events-calendar-card">
        <div className="events-calendar-toolbar">
          <div className="events-calendar-head">
            <p className="card-label">Interactive month view</p>
            <h3>{monthLabel(displayedMonth)}</h3>
            <p className="events-calendar-caption">
              {monthAgenda.length > 0
                ? `Showing ${monthAgenda.length} listed gathering${monthAgenda.length === 1 ? '' : 's'} for this month.`
                : 'No special gatherings are listed in this month yet.'}
            </p>
          </div>

          <div className="events-calendar-nav" aria-label="Calendar month navigation">
            <button
              type="button"
              className="button button-ghost button-sm events-calendar-button"
              onClick={() => setDisplayedMonth((currentMonth) => addMonths(currentMonth, -1))}
              disabled={!canGoPrevious}
            >
              Previous
            </button>
            <button
              type="button"
              className="button button-ghost button-sm events-calendar-button"
              onClick={() => setDisplayedMonth((currentMonth) => addMonths(currentMonth, 1))}
              disabled={!canGoNext}
            >
              Next
            </button>
          </div>
        </div>

        <div className="events-calendar-weekdays">
          {calendarWeekdays.map((weekday) => (
            <span key={weekday}>{weekday}</span>
          ))}
        </div>

        <div className="events-calendar-days">
          {monthCells.map((cell) => {
            const isToday = cell.date ? isSameDay(cell.date, today) : false;

            return (
              <div
                className={[
                  'events-calendar-day',
                  cell.events.length > 0 ? 'events-calendar-day-active' : '',
                  !cell.date ? 'events-calendar-day-empty' : '',
                  isToday ? 'events-calendar-day-today' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                key={cell.key}
              >
                {cell.date ? <span className="events-calendar-date">{cell.date.getDate()}</span> : null}
                {cell.events.length > 0 ? (
                  <div className="events-calendar-event-stack">
                    {cell.events.slice(0, 2).map((event) => (
                      <span className="events-calendar-event-chip" key={`${event.title}-${cell.key}`}>
                        {event.badge}
                      </span>
                    ))}
                    {cell.events.length > 2 ? (
                      <small className="events-calendar-event-more">+{cell.events.length - 2} more</small>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </article>

      <aside className="panel events-calendar-agenda">
        <div className="events-calendar-head">
          <p className="card-label">Month agenda</p>
          <h3>{monthLabel(displayedMonth)}</h3>
        </div>

        {monthAgenda.length > 0 ? (
          <div className="events-calendar-agenda-list">
            {monthAgenda.map((event) => (
              <article className="events-calendar-agenda-item" key={`${event.title}-${event.date}`}>
                <div className="events-calendar-agenda-copy">
                  <div className="events-calendar-agenda-topline">
                    <span className="status-pill">{event.badge}</span>
                    <p>{formatAgendaDate(event)}</p>
                  </div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <div className="meta-list">
                    <span><strong>Time:</strong> {event.time}</span>
                    <span><strong>Venue:</strong> {event.venue}</span>
                  </div>
                </div>
                <a href={event.ctaHref} className="button button-ghost button-sm" target="_blank" rel="noreferrer">
                  {event.ctaLabel}
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p className="events-calendar-empty-state">
            No featured gatherings are scheduled for this month yet. Message the church team on WhatsApp if you want help with the regular weekly rhythm.
          </p>
        )}
      </aside>
    </div>
  );
}