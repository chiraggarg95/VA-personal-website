import React, { useEffect, useRef, useState } from "react";

// Generic carousel with auto-advance and pause-on-hover.
// Pass class names to match existing CSS exactly.
function Carousel({
  items = [],
  renderItem,
  interval = 5000,
  containerClass = 'testimonials-carousel',
  viewportClass,
  trackClass = 'testimonials-track',
  itemClass = 'testimonial-card',
  indicatorClass = 'indicator',
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const viewportRef = useRef(null);

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

  const applyTransform = (activeIndex) => {
    const track = trackRef.current;
    if (!track) return;
    const vp = viewportRef.current;
    if (vp) {
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.gap || styles.columnGap || '0') || 0;
      const slideWidth = vp.clientWidth;
      const offset = activeIndex * (slideWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
    } else {
      track.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  };

  useEffect(() => {
    applyTransform(index);
    // sync height after movement
    requestAnimationFrame(syncViewportHeight);
  }, [index]);

  const syncViewportHeight = () => {
    const track = trackRef.current;
    const vp = viewportRef.current;
    if (!track || !vp) return;
    const cards = track.querySelectorAll(`.${itemClass}`);
    const active = cards[index];
    if (active && vp) {
      vp.style.height = `${active.offsetHeight}px`;
    }
  };

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

  useEffect(() => {
    // Set initial height and update on resize
    syncViewportHeight();
    const onResize = () => {
      applyTransform(index);
      syncViewportHeight();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={containerClass} ref={containerRef}>
      { /* viewport wrapper for centering and height control */ }
      <div className={viewportClass || ''} ref={viewportRef}>
        <div className={trackClass} ref={trackRef}>
          {items.map((item, i) => (
            <div className={itemClass} key={i}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>
      <div className="indicators" role="tablist" aria-label="Testimonials pagination">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${indicatorClass}${i === index ? ' active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : 'false'}
            onClick={() => showIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
