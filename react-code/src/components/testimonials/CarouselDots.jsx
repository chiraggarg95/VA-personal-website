import React from "react";

export default function CarouselDots({ count, index, onSelect }) {
  if (count <= 1) return null;
  return (
    <div className="indicators" role="tablist" aria-label="Testimonials pagination">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          className={`indicator${i === index ? ' active' : ''}`}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === index ? 'true' : 'false'}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}

