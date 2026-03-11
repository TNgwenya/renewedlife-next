import Image from 'next/image';

type SermonCardProps = {
  title: string;
  speaker: string;
  date: string;
  series: string;
  type: string;
  summary: string;
  href: string;
  thumbnail?: string;
  compact?: boolean;
};

export default function SermonCard({
  title,
  speaker,
  date,
  series,
  type,
  summary,
  href,
  thumbnail,
  compact = false,
}: SermonCardProps) {
  return (
    <article className={`panel sermon-card${compact ? ' sermon-card-compact' : ''}`}>
      {thumbnail ? (
        <div className="media-frame sermon-thumb-frame">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="media-cover"
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        </div>
      ) : null}
      <p className="card-label">{type}</p>
      <h3>{title}</h3>
      <p className="sermon-summary">{summary}</p>
      <div className="sermon-card-footer">
        <div className="meta-list sermon-card-meta">
          <span><strong>Speaker:</strong> {speaker}</span>
          <span><strong>Date:</strong> {date}</span>
          <span><strong>Series:</strong> {series}</span>
        </div>
        <a href={href} className="button button-secondary button-sm" target="_blank" rel="noreferrer">
          Watch this message
        </a>
      </div>
    </article>
  );
}
