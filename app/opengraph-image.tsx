import { ImageResponse } from 'next/og';
import { churchInfo } from '../lib/siteContent';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
          background:
            'linear-gradient(135deg, #17120d 0%, #2e2217 45%, #956430 100%)',
          color: '#f8f4ed',
          fontFamily: 'Arial',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f1dec2',
              color: '#956430',
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            RL
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span>{churchInfo.legalName}</span>
            <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: '0.16em', opacity: 0.88 }}>
              {churchInfo.city}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: 820 }}>
          <div style={{ fontSize: 74, lineHeight: 1, fontWeight: 800, letterSpacing: '-0.05em' }}>
            {churchInfo.tagline}
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: '#efe2cf' }}>
            {`Join us for worship, the Word, prayer, and life-giving community at ${churchInfo.venue}.`}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#efe2cf',
          }}
        >
          <span>{`Sunday Service ${churchInfo.serviceTimes[0]?.time}`}</span>
          <span>{churchInfo.websiteHref.replace(/^https?:\/\//, '')}</span>
        </div>
      </div>
    ),
    size
  );
}