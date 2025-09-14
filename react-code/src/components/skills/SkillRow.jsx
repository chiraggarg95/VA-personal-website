import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";

function SkillRow({ label, value }) {
  const rowRef = useRef(null);
  const [inView, setInView] = useState(false);
  const labelId = `skill-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setInView(true); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pct = Math.max(0, Math.min(100, Number(value) || 0));

  return (
    <div className="skill-row" ref={rowRef}>
      <div className="skill-top">
        <span className="skill-label" id={labelId}>{label}</span>
        <span className="skill-value">{pct}%</span>
      </div>
      <ProgressBar id={labelId} value={pct} animate={inView} />
    </div>
  );
}

export default SkillRow;

