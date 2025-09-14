import React from "react";

export default function PlayPauseToggle({ playing, onToggle }) {
  return (
    <button
      className="t-toggle"
      type="button"
      aria-pressed={playing ? 'true' : 'false'}
      aria-label={playing ? 'Pause autoplay' : 'Play autoplay'}
      onClick={onToggle}
    >
      {playing ? 'Pause' : 'Play'}
    </button>
  );
}

