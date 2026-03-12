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
    'A Spirit-filled, Bible-based church in Dube, Soweto where you can meet Jesus, grow in the Word, and find spiritual family. Join us Sundays and Wednesdays.',
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
      'A Spirit-filled, Bible-based church in Dube, Soweto with heartfelt worship, prayer, biblical preaching, and a warm welcome for families.',
    url: churchInfo.websiteHref,
    siteName: 'Renewed Life International',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${churchInfo.legalName} social sharing image`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renewed Life International',
    description:
      'A Spirit-filled, Bible-based church in Dube, Soweto where you can meet Jesus and find spiritual family.',
    images: ['/twitter-image'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <div className="site-shell">
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
                <Link href="/sermons" className="text-link desktop-only header-link-action">
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
              <div className="footer-brand-block footer-panel">
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
                <p className="footer-copy">
                  A warm local church in Dube, Soweto where people worship Jesus, grow in
                  Scripture, and are welcomed into genuine spiritual family.
                </p>
                <div className="footer-action-row">
                  <Link href="/plan-your-visit" className="button button-primary button-sm footer-button">
                    Plan your first Sunday
                  </Link>
                  <Link href="/contact" className="button button-secondary button-sm footer-button">
                    Prayer request
                  </Link>
                </div>
              </div>

              <div className="footer-panel">
                <h4>Visit</h4>
                <ul className="footer-list">
                  <li>
                    <Link href="/plan-your-visit">What to expect on Sunday</Link>
                  </li>
                  <li>{churchInfo.venue}</li>
                  <li>{churchInfo.addressLine1}</li>
                  <li>{churchInfo.addressLine2}</li>
                  <li>{churchInfo.addressLine3}</li>
                  <li>
                    <strong>{churchInfo.serviceTimes[0].label}</strong>
                    <br />
                    <span>{churchInfo.serviceTimes[0].time}</span>
                  </li>
                  <li>
                    <a href={churchInfo.mapHref} target="_blank" rel="noreferrer">
                      Get Directions
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-panel">
                <h4>Next steps</h4>
                <ul className="footer-list">
                  <li>
                    <Link href="/about">About Renewed Life</Link>
                  </li>
                  <li>
                    <Link href="/families">Families</Link>
                  </li>
                  <li>
                    <Link href="/ministries">Explore ministries</Link>
                  </li>
                  <li>
                    <Link href="/sermons">Watch sermons</Link>
                  </li>
                  <li>
                    <Link href="/give">Giving information</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-panel">
                <h4>Contact</h4>
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
              <p>© 2026 {churchInfo.legalName}. Worship with us in Dube, Soweto.</p>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
