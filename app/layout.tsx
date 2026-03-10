import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Analytics from '../components/Analytics';
import MobileNav from '../components/MobileNav';
import { churchInfo, navLinks, socialLinks } from '../lib/siteContent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  metadataBase: new URL(churchInfo.websiteHref),
  applicationName: 'Renewed Life International',
  title: {
    default: 'Renewed Life International',
    template: '%s | Renewed Life International',
  },
  referrer: 'origin-when-cross-origin',
  creator: 'Renewed Life International',
  publisher: 'Renewed Life International',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/site.webmanifest',
  description:
    'A warm, Spirit-filled church in Dube, Soweto where people believe, belong, and become. Join us Sundays and Wednesdays.',
  keywords: [
    'church in Soweto',
    'church in Dube',
    'church in Johannesburg',
    'Renewed Life International',
    'Spirit-filled church',
    'Bible study Soweto',
    'Christian church Johannesburg',
  ],
  openGraph: {
    title: 'Renewed Life International',
    description:
      'A church where people believe, belong, and become. Join us in Dube, Soweto.',
    url: churchInfo.websiteHref,
    siteName: 'Renewed Life International',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/logo/logo-primary.png',
        width: 1200,
        height: 1200,
        alt: `${churchInfo.legalName} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renewed Life International',
    description:
      'A warm, Spirit-filled church in Dube, Soweto where people believe, belong, and become.',
    images: ['/logo/logo-primary.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <div className="site-shell">
          <div className="topbar">
            <div className="container topbar-inner">
              <p>
                <strong>Sunday Service:</strong> {churchInfo.serviceTimes[0].time} at {churchInfo.venue}
              </p>
              <a href={churchInfo.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </div>
          </div>

          <header className="site-header">
            <div className="container header-inner">
              <Link href="/" className="brand" aria-label="Renewed Life home">
                <Image
                  src="/logo/logo-primary.png"
                  alt={churchInfo.legalName}
                  width={52}
                  height={52}
                  className="brand-mark"
                  priority
                />
                <div>
                  <span className="brand-title">{churchInfo.shortName}</span>
                  <span className="brand-tagline">{churchInfo.tagline}</span>
                </div>
              </Link>

              <nav className="desktop-nav" aria-label="Primary">
                {navLinks.map(({ label, href }) => (
                  <Link key={href} href={href} className="nav-link">
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="header-actions">
                <Link href="/sermons" className="button button-secondary desktop-only">
                  Watch Sermons
                </Link>
                <Link href="/plan-your-visit" className="button button-primary">
                  Plan Your Visit
                </Link>
                <MobileNav
                  navLinks={navLinks}
                  phoneHref={churchInfo.phoneHref}
                  phoneDisplay={churchInfo.phoneDisplay}
                  whatsappHref={churchInfo.whatsappHref}
                />
              </div>
            </div>
          </header>

          {children}

          <footer className="site-footer">
            <div className="container footer-grid">
              <div className="footer-brand-block">
                <Link href="/" className="brand footer-brand">
                  <Image
                    src="/logo/logo-primary.png"
                    alt={churchInfo.legalName}
                    width={52}
                    height={52}
                    className="brand-mark"
                  />
                  <div>
                    <span className="brand-title">{churchInfo.shortName}</span>
                    <span className="brand-tagline">{churchInfo.tagline}</span>
                  </div>
                </Link>
                <p className="footer-copy">{churchInfo.brandIdea}</p>
              </div>

              <div>
                <h4>Join us</h4>
                <ul className="footer-list">
                  {churchInfo.weeklyRhythm.slice(0, 3).map((service) => (
                    <li key={`${service.day}-${service.label}`}>
                      <strong>{service.label}</strong>
                      <br />
                      <span>
                        {service.day} · {service.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Visit</h4>
                <ul className="footer-list">
                  <li>{churchInfo.venue}</li>
                  <li>{churchInfo.addressLine1}</li>
                  <li>{churchInfo.addressLine2}</li>
                  <li>{churchInfo.addressLine3}</li>
                  <li>
                    <a href={churchInfo.mapHref} target="_blank" rel="noreferrer">
                      Get Directions
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4>Connect</h4>
                <ul className="footer-list">
                  <li>
                    <a href={churchInfo.emailHref}>{churchInfo.email}</a>
                  </li>
                  <li>
                    <a href={churchInfo.phoneHref}>{churchInfo.phoneDisplay}</a>
                  </li>
                  <li>
                    <a href={churchInfo.whatsappHref} target="_blank" rel="noreferrer">
                      WhatsApp Us
                    </a>
                  </li>
                </ul>

                <h4 className="footer-subhead">Follow</h4>
                <ul className="footer-list">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="container footer-bottom">
              <p>© 2026 {churchInfo.legalName}. All rights reserved.</p>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
