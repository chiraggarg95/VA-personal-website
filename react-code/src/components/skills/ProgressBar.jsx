import React, { useEffect, useRef } from "react";

function clamp(v) {
  const n = Number.isFinite(v) ? v : 0;
  if (n < 0) return 0;
  if (n > 100) return 100;
  return n;
}

function ProgressBar({ id, value = 0, animate = false }) {
  const fillRef = useRef(null);
  const width = clamp(value);

  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fill = fillRef.current;
    if (!fill) return;
    if (animate && !reduced) {
      requestAnimationFrame(() => {
        fill.style.width = width + '%';
      });
    } else {
      fill.style.width = width + '%';
    }
  }, [animate, width]);

  return (
    <div className="skill-track" role="progressbar" aria-labelledby={id} aria-valuemin="0" aria-valuemax="100" aria-valuenow={width}>
      <div className="skill-fill" ref={fillRef} style={{ width: animate ? 0 : width + '%' }} />
    </div>
  );
}

export default ProgressBar;

