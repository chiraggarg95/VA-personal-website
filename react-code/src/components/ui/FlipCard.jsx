import React from "react";
import useFlipCard from "../../hooks/useFlipCard";

function FlipCard({ front, back, className = '' }) {
  const { onClick } = useFlipCard();
  return (
    <div className={`skill-card ${className}`.trim()} tabIndex={0} onClick={onClick}>
      <div className="skill-card-inner">
        <div className="skill-card-front">
          {front}
        </div>
        <div className="skill-card-back">
          {back}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;

