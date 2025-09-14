import React from "react";

export default function CarouselArrows({ canPrev, canNext, onPrev, onNext }) {
  if (!canPrev && !canNext) return null;
  return (
    <div className="t-arrows" aria-hidden="true">
      <button className="t-arrow t-arrow--prev" type="button" onClick={onPrev} disabled={!canPrev}>‹</button>
      <button className="t-arrow t-arrow--next" type="button" onClick={onNext} disabled={!canNext}>›</button>
    </div>
  );
}

