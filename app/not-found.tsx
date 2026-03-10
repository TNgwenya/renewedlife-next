import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container not-found-wrap">
        <div>
          <p className="eyebrow">Page not found</p>
          <h1>We could not find that page.</h1>
          <p className="not-found-copy">
            The page may have moved, the link may be outdated, or the address may
            be incorrect. Use one of the options below to keep exploring Renewed
            Life International.
          </p>

          <div className="hero-actions">
            <Link href="/" className="button">
              Go to homepage
            </Link>
            <Link href="/plan-your-visit" className="button button-ghost">
              Plan your visit
            </Link>
            <Link href="/contact" className="button button-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}