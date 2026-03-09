import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
  title: {
    default: 'Renewed Life',
    template: '%s | Renewed Life',
  },
  description: 'Renewed Life is a warm, Spirit-filled church in Dube, Soweto where people believe, belong, and become.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <span className="brand-logo-shell">
                <Image
                  src="/logo/logo-primary.png"
                  alt={`${churchInfo.legalName} logo`}
                  width={128}
                  height={96}
                  className="brand-logo-image"
                  priority
                />
              </span>
              <div>
                <div className="brand-name">{churchInfo.shortName}</div>
                <div className="brand-tag">{churchInfo.tagline}</div>
              </div>
            </Link>
            <nav className="main-nav">
              {navLinks.map(({ label, href }) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </nav>
            <div className="header-actions">
              <Link href="/plan-your-visit" className="button button-sm header-primary-cta">Plan Your Visit</Link>
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
            <div>
              <div className="footer-logo-shell">
                <Image
                  src="/logo/logo-primary.png"
                  alt={`${churchInfo.legalName} logo`}
                  width={164}
                  height={123}
                  className="footer-logo-image"
                />
              </div>
              <h4>{churchInfo.shortName}</h4>
              <p>{churchInfo.tagline}</p>
              <p className="footer-note">{churchInfo.brandIdea}</p>
              <p className="footer-legal">{churchInfo.legalName}</p>
            </div>
            <div>
              <h4>Gather</h4>
              {churchInfo.weeklyRhythm.slice(0, 3).map((service) => (
                <p key={service.label}>{service.label} · {service.time}</p>
              ))}
            </div>
            <div>
              <h4>Visit</h4>
              <p>{churchInfo.venue}</p>
              <p>{churchInfo.addressLine1}</p>
              <p>{churchInfo.addressLine2}</p>
              <p>{churchInfo.addressLine3}</p>
              <a href={churchInfo.mapHref} target="_blank" rel="noreferrer">Get directions</a>
            </div>
            <div>
              <h4>Connect</h4>
              <a href={churchInfo.emailHref}>{churchInfo.email}</a>
              <a href={churchInfo.phoneHref}>{churchInfo.phoneDisplay}</a>
              <a href={churchInfo.whatsappHref} target="_blank" rel="noreferrer">WhatsApp us</a>
            </div>
            <div>
              <h4>Quick links</h4>
              {navLinks.slice(1).map(({ label, href }) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
            <div>
              <h4>Follow</h4>
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
