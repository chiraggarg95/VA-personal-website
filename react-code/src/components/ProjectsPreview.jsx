import React from "react";
import { Link } from "react-router-dom";

function ProjectsPreview() {
  return (
    <div className="projects-preview">
      <div className="project-card fadeIn">
        <div className="project-image">
          <img src="/api/placeholder/600/400" alt="Star Tracker-based Attitude Determination System mechanical design" />
        </div>
        <div className="project-info">
          <h3>Star Tracker-based Attitude Determination System (STADS)</h3>
          <p>Led the mechanical subsystem design for a CubeSat-compatible star tracker system, optimizing for size reduction while ensuring structural integrity.</p>
          <div className="tags">
            <span>Aerospace</span>
            <span>Mechanical Design</span>
            <span>Systems Engineering</span>
          </div>
          <Link to="/projects#stads" className="btn text-btn">View Case Study <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>
      <div className="project-card fadeIn">
        <div className="project-image">
          <img src="/api/placeholder/600/400" alt="Morse to Synthesized Speech application interface" />
        </div>
        <div className="project-info">
          <h3>Morse to Synthesized Speech App</h3>
          <p>Developed an accessible web application that converts morse code input to synthesized speech, empowering aphonic individuals with a new communication tool.</p>
          <div className="tags">
            <span>Accessibility</span>
            <span>Python</span>
            <span>Flask</span>
          </div>
          <Link to="/projects#morse" className="btn text-btn">View Case Study <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>
      <div className="project-card fadeIn">
        <div className="project-image">
          <img src="/api/placeholder/600/400" alt="3D printed resin vat tank design" />
        </div>
        <div className="project-info">
          <h3>High-Speed 3D Printer Resin Vat</h3>
          <p>Designed and optimized a resin vat system for SLA-based 3D printing, solving critical issues in beam intensity and material flow.</p>
          <div className="tags">
            <span>3D Printing</span>
            <span>SOLIDWORKS</span>
            <span>Manufacturing</span>
          </div>
          <Link to="/projects#3dprinting" className="btn text-btn">View Case Study <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPreview;
