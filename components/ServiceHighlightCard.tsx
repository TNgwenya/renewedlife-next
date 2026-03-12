'use client';

import { useEffect, useRef, useState } from 'react';

type ServiceHighlightClip = {
  src: string;
  type: string;
  title: string;
  summary: string;
  poster: string;
};

type ServiceHighlightCardProps = {
  clip: ServiceHighlightClip;
};

export default function ServiceHighlightCard({ clip }: ServiceHighlightCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.45);
      },
      {
        threshold: [0.25, 0.45, 0.7],
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const shouldPlay = isHovered || isInView;

    if (shouldPlay) {
      const playPromise = video.play();

      if (playPromise) {
        playPromise.catch(() => {
          // Ignore autoplay rejections from stricter browsers.
        });
      }

      return;
    }

    video.pause();
  }, [isHovered, isInView]);

  return (
    <article className="info-card media-card service-highlight-card">
      <div
        className="media-frame video-showcase-frame homepage-service-highlight-frame"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <video
          ref={videoRef}
          className="video-cover"
          loop
          muted
          playsInline
          preload="metadata"
          poster={clip.poster}
          aria-label={clip.title}
        >
          <source src={clip.src} type={clip.type} />
        </video>
      </div>
    </article>
  );
}