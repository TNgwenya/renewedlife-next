import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import PageHero from '../../components/PageHero';
import Section from '../../components/Section';
import VisitorInterestForm from '../../components/VisitorInterestForm';
import { churchInfo, videoClips, visitExpectations, visitorGallery } from '../../lib/siteContent';

export default function PlanYourVisitPage() {
  return (
    <main>
      <PageHero
        eyebrow="Plan Your Visit"
        title="Your first visit to Renewed Life should feel simple, clear, and welcoming"
        description="We want to remove uncertainty so you can focus on encountering God, meeting people, and feeling at home from the moment you arrive."
        asideTitle="Quick details"
        asideBody={`${churchInfo.serviceTimes[0].label} · ${churchInfo.serviceTimes[0].time} · ${churchInfo.venue}, ${churchInfo.city}`}
      >
        <a href={churchInfo.whatsappHref} className="button" target="_blank" rel="noreferrer">
          Message us on WhatsApp
        </a>
      </PageHero>

      <Section
        eyebrow="Service details"
        title="Everything you need before Sunday"
        subtitle="Find the essential information in one place so you know when to come, where to go, and what the atmosphere will be like."
      >
        <div className="feature-grid">
          <article className="panel">
            <h3>Service times</h3>
            {churchInfo.serviceTimes.map((service) => (
              <p key={service.label}>{service.label} · {service.time}</p>
            ))}
          </article>
          <article className="panel">
            <h3>Location</h3>
            <p>{churchInfo.venue}</p>
            <p>{churchInfo.addressLine1}</p>
            <p>{churchInfo.addressLine2}</p>
            <p>{churchInfo.addressLine3}</p>
            <a href={churchInfo.mapHref} className="text-link" target="_blank" rel="noreferrer">Open in Google Maps</a>
          </article>
          <article className="panel">
            <h3>Need help before you arrive?</h3>
            <p>Call, email, or message us on WhatsApp if you have any questions before your first visit.</p>
            <a href={churchInfo.phoneHref} className="text-link">Call the church</a>
          </article>
          <article className="panel">
            <h3>Weekly rhythm</h3>
            <p>Renewed Life gathers beyond Sunday through Bible study, connect groups, youth, women’s, and men’s gatherings during the week.</p>
          </article>
        </div>
        <div className="map-embed-shell panel">
          <iframe
            src={churchInfo.mapEmbedSrc}
            title="Renewed Life map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="map-embed-frame"
          />
        </div>
      </Section>

      <Section
        eyebrow="Weekly rhythm"
        title="Church life continues throughout the week"
        subtitle="Here is the broader rhythm of gatherings that help people grow in community, prayer, discipleship, and purpose."
      >
        <div className="three-col">
          {churchInfo.weeklyRhythm.map((gathering) => (
            <article key={gathering.label} className="panel compact-panel">
              <p className="card-label">{gathering.day}</p>
              <h3>{gathering.label}</h3>
              <p>{gathering.time}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What to expect" title="A welcoming and faith-filled Sunday experience" dark>
        <div className="two-col feature-split">
          <div className="stack-grid">
            {visitExpectations.map((item) => (
              <article key={item} className="panel compact-panel">
                <p>{item}</p>
              </article>
            ))}
          </div>
          <article className="panel feature-panel">
            <h3>What should I wear?</h3>
            <p>
              Come as you are. You do not need to dress a certain way to be welcomed here. Our desire is for you to feel comfortable and ready to receive.
            </p>
            <h3>What about children and families?</h3>
            <p>
              Families are warmly welcome. Children can learn God’s Word in a safe, joyful environment while parents receive clear guidance on arrival and what to expect.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Sunday atmosphere"
        title="Picture what your first visit could feel like"
        subtitle="Use real church-life visuals to remove uncertainty and help guests feel reassured before they arrive."
      >
        <div className="two-col media-showcase-grid">
          <article className="panel media-card">
            <div className="media-frame video-showcase-frame">
              <video
                className="video-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster={videoClips[1].poster}
              >
                <source src={videoClips[1].src} type="video/quicktime" />
              </video>
            </div>
            <p className="card-label">{videoClips[1].useCase}</p>
            <h3>{videoClips[1].title}</h3>
            <p>{videoClips[1].summary}</p>
          </article>
          <div className="gallery-grid gallery-grid-two">
            {visitorGallery.map((image) => (
              <article key={image.src} className="media-card panel">
                <div className="media-frame gallery-frame">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="media-cover"
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <p className="photo-note">{image.title}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Arrival guide"
        title="What happens when you get here?"
        subtitle="We want your arrival to feel easy, not awkward. Here is the simple journey we are designing for every first-time guest."
      >
        <div className="three-col">
          {[
            {
              title: 'Arrive and be greeted',
              text: 'A friendly team member can help point you in the right direction and answer any practical questions.',
            },
            {
              title: 'Enjoy the service',
              text: 'Join us for worship, prayer, and a Bible-centered message that is clear, faith-building, and Spirit-filled.',
            },
            {
              title: 'Connect afterwards',
              text: 'If you would like, meet someone from the team after the service, ask questions, or find out what your next step could be.',
            },
          ].map((step) => (
            <article key={step.title} className="panel">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Visitor form" title="Simple visitor interest form" dark>
        <div className="form-shell">
          <div className="panel form-panel">
            <p className="card-label">Guest response</p>
            <h3>Let us know you are coming</h3>
            <p>
              Fill in a few details and the form will prepare a structured visitor email to {churchInfo.email}. A live automated form flow can be connected next without redesigning the page.
            </p>
            <VisitorInterestForm email={churchInfo.email} whatsappHref={churchInfo.whatsappVisitFollowupHref} />
            <p>
              Prefer a quicker response? <a href={churchInfo.whatsappHref} className="text-link" target="_blank" rel="noreferrer">Message us on WhatsApp</a>.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Need a direct answer?"
        title="Reach out before Sunday and we will gladly help"
        description="If you have questions about parking, family needs, timing, or anything else, contact us and we will help you feel prepared."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Watch sermons"
        secondaryHref="/sermons"
      />
    </main>
  );
}