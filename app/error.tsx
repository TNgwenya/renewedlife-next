'use client';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  void error;

  return (
    <main className="page-error">
      <div className="container page-error-wrap">
        <div className="loading-card">
          <p className="eyebrow">Something went wrong</p>
          <h1>We hit a problem loading this page.</h1>
          <p>
            Please try again. If the issue continues, contact the church directly
            through the contact page or WhatsApp.
          </p>

          <div className="hero-actions">
            <button className="button" onClick={reset}>
              Try again
            </button>
            <a href="/contact" className="button button-ghost">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}