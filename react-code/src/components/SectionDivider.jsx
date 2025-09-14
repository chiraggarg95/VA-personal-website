import React from "react";

function SectionDivider({ children, blueprint, roadmap }) {
  return (
    <div className="section-divider">
      <div className="divider-parallax">
        <div className={`parallax-layer parallax-layer-1 ${blueprint ? 'parallax-blueprint' : ''} ${roadmap ? 'parallax-roadmap' : ''}`}></div>
        <div className="parallax-layer parallax-layer-2"></div>
        <div className="parallax-layer parallax-layer-3"></div>
      </div>
      <div className="divider-content">
        <div className="divider-line"></div>
        {children}
      </div>
    </div>
  );
}

export default SectionDivider;
