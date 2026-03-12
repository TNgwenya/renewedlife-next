type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  subtitle?: string;
  children: React.ReactNode;
  muted?: boolean;
  dark?: boolean;
  warm?: boolean;
  compact?: boolean;
};

export default function Section({
  eyebrow,
  title,
  intro,
  subtitle,
  children,
  muted = false,
  dark = false,
  warm = false,
  compact = false,
}: SectionProps) {
  const resolvedIntro = intro ?? subtitle;
  const className = [
    'section',
    muted ? 'section-muted' : '',
    dark ? 'section-dark' : '',
    warm ? 'section-warm' : '',
    compact ? 'section-compact' : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={className}>
      <div className="container">
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {resolvedIntro ? <p className="section-copy">{resolvedIntro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
