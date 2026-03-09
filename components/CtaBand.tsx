import Link from "next/link";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaBand({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">{description}</p>
          </div>
          <div className="cta-band-actions">
            <Link href={primaryHref} className="button">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref} className="button button-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
