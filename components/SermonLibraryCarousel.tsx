'use client';

import { useEffect, useRef, useState } from 'react';
import SermonCard from './SermonCard';

type SermonLibraryItem = {
  title: string;
  speaker: string;
  date: string;
  series: string;
  type: string;
  summary: string;
  href: string;
  thumbnail?: string;
};

type SermonLibraryCarouselProps = {
  sermons: SermonLibraryItem[];
};

export default function SermonLibraryCarousel({ sermons }: SermonLibraryCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const updateActiveIndex = () => {
      const slides = Array.from(track.querySelectorAll<HTMLElement>('[data-sermon-slide]'));

      if (!slides.length) {
        return;
      }

      const closestIndex = slides.reduce(
        (bestIndex, slide, index) => {
          const bestDistance = Math.abs(slides[bestIndex].offsetLeft - track.scrollLeft);
          const currentDistance = Math.abs(slide.offsetLeft - track.scrollLeft);

          return currentDistance < bestDistance ? index : bestIndex;
        },
        0,
      );

      setActiveIndex(closestIndex);
    };

    updateActiveIndex();
    track.addEventListener('scroll', updateActiveIndex, { passive: true });
    window.addEventListener('resize', updateActiveIndex);

    return () => {
      track.removeEventListener('scroll', updateActiveIndex);
      window.removeEventListener('resize', updateActiveIndex);
    };
  }, [sermons.length]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const slides = Array.from(track.querySelectorAll<HTMLElement>('[data-sermon-slide]'));
    const target = slides[index];

    if (!target) {
      return;
    }

    track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <div className="sermon-library-carousel">
      <div className="sermon-library-carousel-head">
        <p className="sermon-library-carousel-status">
          Showing {activeIndex + 1} of {sermons.length}
        </p>

        <div className="sermon-library-carousel-controls">
          <button
            type="button"
            className="sermon-library-carousel-button"
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label="Show previous sermon"
          >
            Prev
          </button>
          <button
            type="button"
            className="sermon-library-carousel-button"
            onClick={() => scrollToIndex(Math.min(sermons.length - 1, activeIndex + 1))}
            disabled={activeIndex === sermons.length - 1}
            aria-label="Show next sermon"
          >
            Next
          </button>
        </div>
      </div>

      <div className="sermon-library-carousel-track" ref={trackRef}>
        {sermons.map((sermon) => (
          <div
            className="sermon-library-carousel-slide"
            data-sermon-slide
            key={`${sermon.title}-${sermon.date}-carousel`}
          >
            <SermonCard
              title={sermon.title}
              speaker={sermon.speaker}
              date={sermon.date}
              series={sermon.series}
              type={sermon.type}
              summary={sermon.summary}
              href={sermon.href}
              thumbnail={sermon.thumbnail}
              compact
            />
          </div>
        ))}
      </div>

      <div className="sermon-library-carousel-dots" aria-label="Sermon library navigation">
        {sermons.map((sermon, index) => (
          <button
            key={`${sermon.title}-dot`}
            type="button"
            className={`sermon-library-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Show ${sermon.title}`}
          />
        ))}
      </div>
    </div>
  );
}