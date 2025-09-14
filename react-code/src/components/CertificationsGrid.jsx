import React from "react";

function CertificationsGrid() {
  return (
    <div className="certifications-grid fadeIn">
      <div className="certification-badge">
        <div className="certification-logo"></div>
        <h4>Introduction to Psychology</h4>
        <p>Yale University</p>
      </div>
      <div className="certification-badge">
        <div className="certification-logo"></div>
        <h4>Algorithmic Toolbox</h4>
        <p>UC San Diego</p>
      </div>
      <div className="certification-badge">
        <div className="certification-logo"></div>
        <h4>Python Programming</h4>
        <p>University of Michigan</p>
      </div>
      <div className="certification-badge">
        <div className="certification-logo"></div>
        <h4>Python Data Structures</h4>
        <p>University of Michigan</p>
      </div>
    </div>
  );
}

export default CertificationsGrid;
