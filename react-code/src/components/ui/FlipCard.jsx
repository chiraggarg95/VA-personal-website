import React from "react";
import useFlipCard from "../../hooks/useFlipCard";


function FlipCard({ front, back, className = '', canFlip = true }) {
  const { onClick } = useFlipCard();
  const handleClick = canFlip ? onClick : undefined;
  return (
    <div
      className={`skill-card${canFlip ? '' : ' no-flip'} ${className}`.trim()}
      tabIndex={0}
      onClick={handleClick}
      style={canFlip ? undefined : { cursor: 'default' }}
    >
      <div className="skill-card-inner">
        <div className="skill-card-front">
          {front}
        </div>
        {back && (
          <div className="skill-card-back">
            {back}
          </div>
        )}
      </div>
    </div>
  );
}

export default FlipCard;

