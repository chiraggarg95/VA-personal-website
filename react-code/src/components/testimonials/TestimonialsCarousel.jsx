import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import CarouselDots from "./CarouselDots";
import CarouselArrows from "./CarouselArrows";
import PlayPauseToggle from "./PlayPauseToggle";
import ReadFullModal from "./ReadFullModal";

function useVisibilityPause(isPlaying, pause, resume) {
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) pause(); else resume();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [pause, resume]);
}

export default function TestimonialsCarousel({
  items = [],
  autoPlay = true,
  interval = 7000,
  showDots = true,
  showArrows = true,
  readFullEnabled = false,
  clampLines = 6,
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const [modal, setModal] = useState({ open: false, quote: '', author: '' });
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const resizeObs = useRef(null);

  const count = items.length;

  const clampIndex = (i) => {
    if (count === 0) return 0;
    let n = i % count; if (n < 0) n += count; return n;
  };

  const goTo = (i) => setIndex(clampIndex(i));
  const next = () => setIndex((i) => clampIndex(i + 1));
  const prev = () => setIndex((i) => clampIndex(i - 1));

  const clear = () => { if (timerRef.current) clearInterval(timerRef.current); timerRef.current = null; };
  const start = () => {
    clear();
    if (!playing || count <= 1) return;
    timerRef.current = setInterval(() => { next(); }, interval);
  };

  // autoplay control
  useEffect(() => { start(); return clear; }, [playing, interval, count]);
  useVisibilityPause(playing, () => setPlaying(false), () => setPlaying(true));

  // pause on hover/focus inside container
  useEffect(() => {
    const el = viewportRef.current?.parentElement; if (!el) return;
    const pause = () => setPlaying(false);
    const resume = () => setPlaying(true);
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', resume);
    return () => {
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', resume);
    };
  }, []);

  // height sync using ResizeObserver
  useEffect(() => {
    const vp = viewportRef.current; const track = trackRef.current; if (!vp || !track) return;
    const sync = () => {
      const cards = track.querySelectorAll('.t-card');
      const active = cards[index];
      if (active && vp) vp.style.height = `${active.offsetHeight}px`;
    };
    sync();
    resizeObs.current = new ResizeObserver(sync);
    const cards = track.querySelectorAll('.t-card');
    cards.forEach((c) => resizeObs.current.observe(c));
    window.addEventListener('resize', sync);
    return () => {
      cards.forEach((c) => resizeObs.current?.unobserve(c));
      resizeObs.current?.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, [index, items]);

  // transform update
  useEffect(() => {
    const track = trackRef.current; const vp = viewportRef.current; if (!track || !vp) return;
    const gap = parseFloat(getComputedStyle(track).gap || '0');
    const offset = index * (vp.clientWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }, [index]);

  const onTogglePlay = () => setPlaying((p) => !p);

  const openModal = (quote, author) => setModal({ open: true, quote, author });
  const closeModal = () => setModal({ open: false, quote: '', author: '' });

  if (count === 0) return null;

  const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  useEffect(() => { if (reduced) setPlaying(false); }, [reduced]);

  return (
    <section className="testimonials-carousel" role="region" aria-label="Testimonials">
      <div className="testimonials-viewport" ref={viewportRef}>
        <div className="testimonials-track" ref={trackRef} style={{ transition: reduced ? 'none' : 'transform 150ms ease-out' }}>
          {items.map((t, i) => (
            <div className="testimonial-card" key={t.id || i} aria-label={`Slide ${i + 1} of ${count}`}>
              <TestimonialCard
                item={t}
                clampLines={clampLines}
                showReadFull={readFullEnabled && (t.quote?.length || 0) > 260}
                onReadFull={readFullEnabled ? () => openModal(t.quote, t.author?.name) : undefined}
              />
            </div>
          ))}
        </div>
      </div>
      {showDots && <CarouselDots count={count} index={index} onSelect={goTo} />}
      {showArrows && <CarouselArrows canPrev={count > 1} canNext={count > 1} onPrev={prev} onNext={next} />}
      <PlayPauseToggle playing={playing} onToggle={onTogglePlay} />
      <ReadFullModal open={modal.open} onClose={closeModal} quote={modal.quote} authorName={modal.author} />
    </section>
  );
}

