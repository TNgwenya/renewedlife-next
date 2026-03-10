export default function Loading() {
  return (
    <main className="page-loading" aria-busy="true" aria-label="Loading next page">
      <div className="container page-loading-wrap">
        <div className="loading-card loading-card-premium">
          <div className="loading-brand">
            <span className="loading-mark" aria-hidden="true" />
            <div>
              <p className="eyebrow">Renewed Life International</p>
              <h2>Opening the next page</h2>
            </div>
          </div>

          <div className="loading-lines" aria-hidden="true">
            <span className="loading-line loading-line-long" />
            <span className="loading-line" />
            <span className="loading-line loading-line-short" />
          </div>
        </div>
      </div>
    </main>
  );
}