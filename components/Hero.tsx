import Image from 'next/image';
import Link from 'next/link';
import { churchInfo, worshipGallery } from '../lib/siteContent';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{churchInfo.shortName}</p>
          <h1>A church where people believe, belong, and become.</h1>
          <p className="hero-copy">
            Encounter God, find family, and grow into who God has called you to be through worship,
            the Word, prayer, and genuine Christian fellowship.
          </p>
          <div className="hero-actions">
            <Link href="/plan-your-visit" className="button">Plan Your Visit</Link>
            <Link href="/sermons" className="button button-secondary">Watch Online</Link>
            <Link href="/give" className="button button-ghost">Give</Link>
          </div>
          <p className="hero-supporting-copy">
            Join us at {churchInfo.venue} in Dube, Soweto and discover a church family that is serious
            about God, welcoming to people, and filled with hope.
          </p>
          <div className="hero-meta">
            <div>
              <strong>{churchInfo.serviceTimes[0].label}</strong>
              <span>{churchInfo.serviceTimes[0].time}</span>
            </div>
            <div>
              <strong>{churchInfo.serviceTimes[1].label}</strong>
              <span>{churchInfo.serviceTimes[1].time}</span>
            </div>
            <div>
              <strong>Venue</strong>
              <span>{churchInfo.venue}, Dube</span>
            </div>
          </div>
        </div>
        <div className="hero-stack">
          <div className="hero-photo-card glass-card">
            <div className="media-frame hero-photo-frame">
              <Image
                src={worshipGallery[0].src}
                alt={worshipGallery[0].alt}
                fill
                priority
                className="media-cover"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
            <div className="hero-photo-copy">
              <p className="eyebrow">This Sunday</p>
              <h3>{worshipGallery[0].title}</h3>
              <p>
                Expect heartfelt worship, prayer, biblical preaching, and a welcoming family atmosphere from the moment you arrive.
              </p>
            </div>
          </div>
          <div className="hero-card glass-card compact-card">
            <p className="card-label">Quick reassurance</p>
            <p>
              Come as you are. Our team is ready to help you find parking, settle in, and enjoy the service.
            </p>
            <ul>
              <li>First-time guest friendly</li>
              <li>Warm family and children-friendly environment</li>
              <li>Spirit-filled, Bible-centered gatherings</li>
            </ul>
            <Link href="/contact" className="text-link">Ask a question before you come</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
