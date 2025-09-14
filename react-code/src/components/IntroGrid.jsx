import React from "react";

function IntroGrid() {
  return (
    <div className="intro-grid">
      <div className="intro-card fadeIn">
        <div className="icon"><i className="fas fa-cogs"></i></div>
        <h3>Systems Integration</h3>
        <p>At Airbus, I work on electrical system integration for aircraft, applying rigorous engineering principles while ensuring seamless integration across multiple subsystems.</p>
      </div>
      <div className="intro-card fadeIn">
        <div className="icon"><i className="fas fa-users"></i></div>
        <h3>Cross-Functional Leadership</h3>
        <p>From leading satellite subsystem teams to organizing campus-wide initiatives, I excel at bringing diverse stakeholders together to achieve common goals.</p>
      </div>
      <div className="intro-card fadeIn">
        <div className="icon"><i className="fas fa-lightbulb"></i></div>
        <h3>User-Centered Approach</h3>
        <p>My experience mentoring students and developing educational tools has refined my ability to understand user needs and create accessible, intuitive solutions.</p>
      </div>
    </div>
  );
}

export default IntroGrid;
