export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  dark = false,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <section className={dark ? `section section-dark${compact ? ' section-compact' : ''}` : `section${compact ? ' section-compact' : ''}`}>
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title">{title}</h2>
        {subtitle ? <p className="section-copy">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}
