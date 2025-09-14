import React, { useEffect, useRef, useState } from "react";

// Generic carousel with auto-advance and pause-on-hover.
// Pass class names to match existing CSS exactly.
function Carousel({
  items = [],
  renderItem,
  interval = 5000,
  containerClass = 'testimonials-carousel',
  trackClass = 'testimonials-track',
  itemClass = 'testimonial-card',
  indicatorClass = 'indicator',
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const showIndex = (i) => {
    if (!items.length) return;
    let next = i;
    if (next < 0) next = items.length - 1;
    if (next >= items.length) next = 0;
    setIndex(next);
  };

  const start = () => {
    clear();
    timerRef.current = setInterval(() => {
      showIndex(index + 1);
    }, interval);
  };

  const clear = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    start();
    return () => clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onEnter = () => clear();
    const onLeave = () => start();
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current]);

  return (
    <div className={containerClass} ref={containerRef}>
      <div className={trackClass} ref={trackRef}>
        {items.map((item, i) => (
          <div className={itemClass} key={i}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
      <div className="indicators">
        {items.map((_, i) => (
          <button
            key={i}
            className={`${indicatorClass}${i === index ? ' active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => showIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

