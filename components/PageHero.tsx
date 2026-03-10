type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  asideTitle?: string;
  asideBody?: string;
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  asideTitle,
  asideBody,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy-block">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="page-title">{title}</h1>
          <p className="page-copy">{description}</p>
          {children ? <div className="page-hero-actions">{children}</div> : null}
        </div>
        {asideTitle || asideBody ? (
          <aside className="glass-card page-aside page-hero-aside">
            {asideTitle ? <p className="card-label">{asideTitle}</p> : null}
            {asideBody ? <p>{asideBody}</p> : null}
          </aside>
        ) : null}
      </div>
    </section>
  );
}
