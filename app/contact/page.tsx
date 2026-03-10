import CtaBand from '../../components/CtaBand';
import ContactForm from '../../components/ContactForm';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import { churchInfo, contactActions, formspreeEndpoint, socialLinks } from '../../lib/siteContent';

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Whether you have a question, need prayer, want more information, or want to let us know you are coming, our team is ready to help."
        asideTitle="Best next step"
        asideBody={`If you are visiting for the first time, head to Plan Your Visit for service times, directions to ${churchInfo.venue}, and what to expect.`}
      />

      <Section
        eyebrow="Reach out"
        title="Simple ways to connect with the church"
        subtitle="Choose the contact path that works best for you and someone from the church will gladly follow up."
      >
        <div className="feature-grid">
          {contactActions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              className="panel interactive-card"
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <p className="card-label">{action.title}</p>
              <h3>{action.value}</h3>
              <p>Open this contact option</p>
            </a>
          ))}
        </div>
      </Section>

      <Section eyebrow="Visit & office details" title="Find us with confidence" dark>
        <div className="two-col">
          <div className="panel">
            <h3>Address</h3>
            <p>{churchInfo.venue}</p>
            <p>{churchInfo.addressLine1}</p>
            <p>{churchInfo.addressLine2}</p>
            <p>{churchInfo.addressLine3}</p>
          </div>
          <div className="panel">
            <h3>Weekly rhythm</h3>
            {churchInfo.weeklyRhythm.slice(0, 4).map((service) => (
              <p key={service.label}>{service.label} · {service.day} · {service.time}</p>
            ))}
          </div>
          <div className="panel">
            <h3>Prayer & support</h3>
            <p>
              If you need prayer, guidance, or a pastoral conversation, contact the church and we will help you take the next step.
            </p>
            <a href={churchInfo.whatsappPrayerHref} className="text-link" target="_blank" rel="noreferrer">Request prayer / pastoral support on WhatsApp</a>
          </div>
          <div className="panel">
            <h3>Directions</h3>
            <p>
              Use Google Maps for the quickest route to church and share the location easily with family or friends coming with you.
            </p>
            <a href={churchInfo.mapHref} className="text-link" target="_blank" rel="noreferrer">Open directions in Google Maps</a>
          </div>
        </div>
        <div className="map-embed-shell panel">
          <iframe
            src={churchInfo.mapEmbedSrc}
            title="Renewed Life location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="map-embed-frame"
          />
        </div>
      </Section>

      <Section eyebrow="Follow online" title="Stay connected during the week" compact>
        <div className="feature-grid">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="panel interactive-card"
              target="_blank"
              rel="noreferrer"
            >
              <p className="card-label">Social</p>
              <h3>{link.label}</h3>
              <p>Connect with Renewed Life online</p>
            </a>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contact form"
        title="Send a message to the church"
        subtitle="Use the form below to prepare a structured email to the church inbox for questions, prayer requests, and general enquiries."
        dark
      >
        <div className="form-shell">
          <div className="panel form-panel">
            <p className="card-label">Church inbox</p>
            <h3>Contact {churchInfo.shortName}</h3>
            <p>
              Messages are sent directly to {churchInfo.email}, giving the church team a clean inbox submission to follow up from.
            </p>
            <ContactForm
              email={churchInfo.email}
              formEndpoint={formspreeEndpoint}
              whatsappBaseHref={churchInfo.whatsappBaseHref}
            />
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="First-time guest"
        title="Planning to visit this Sunday?"
        description="Use the dedicated visitor page for service details, reassurance, directions, and a simple visitor interest form."
        primaryLabel="Go to Plan Your Visit"
        primaryHref="/plan-your-visit"
        secondaryLabel="Watch sermons"
        secondaryHref="/sermons"
      />
    </main>
  );
}
