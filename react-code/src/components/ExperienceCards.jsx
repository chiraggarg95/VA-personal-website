
import React from "react";
import { Link } from "react-router-dom";
import AirbusLogo from "../assets/AirbusLogo.png";
import IITBombayLogo from "../assets/IITBombayLogo.jfif";
import TataLogo from "../assets/Bisleri.jfif"; // Placeholder, replace with actual Tata logo if available

function ExperienceCards() {
  return (
    <div className="experience-cards">
      <div className="experience-card fadeIn">
        <div className="experience-header">
          <div className="experience-logo">
            <img src={AirbusLogo} alt="Airbus logo" />
          </div>
          <div className="experience-title">
            <h3>Engineer</h3>
            <p className="company">Airbus, Bengaluru</p>
            <p className="date">April 2025 - Present</p>
          </div>
        </div>
        <div className="experience-description">
          <p>Working on electrical system installation for CAF 929 Single Aisle CI aircraft using CATIA and ESI tools.</p>
          <div className="experience-highlights-list">
            <span className="highlight-tag">Systems Integration</span>
            <span className="highlight-tag">Electrical Engineering</span>
            <span className="highlight-tag">CAD Tools</span>
          </div>
        </div>
      </div>
      <div className="experience-card fadeIn">
        <div className="experience-header">
          <div className="experience-logo">
            <img src={IITBombayLogo} alt="IIT Bombay Student Satellite Program logo" />
          </div>
          <div className="experience-title">
            <h3>Mechanical Engineer - STADS</h3>
            <p className="company">Student Satellite Program, IIT Bombay</p>
            <p className="date">April 2021 - November 2021</p>
          </div>
        </div>
        <div className="experience-description">
          <p>Designed the CubeSat-compatible Star Tracker system and implemented PCB strategy to reduce overall size.</p>
          <div className="experience-highlights-list">
            <span className="highlight-tag">Mechanical Design</span>
            <span className="highlight-tag">Structural Analysis</span>
            <span className="highlight-tag">Space Systems</span>
          </div>
        </div>
      </div>
      <div className="experience-card fadeIn">
        <div className="experience-header">
          <div className="experience-logo">
            <img src={TataLogo} alt="Tata Projects logo (placeholder)" />
          </div>
          <div className="experience-title">
            <h3>Executive Trainee</h3>
            <p className="company">Tata Projects, Mumbai</p>
            <p className="date">May 2022 - July 2022</p>
          </div>
        </div>
        <div className="experience-description">
          <p>Conducted productivity analysis for MEP tasks and implemented quantitative take-offs at the Taj-Ginger Hotel site.</p>
          <div className="experience-highlights-list">
            <span className="highlight-tag">Project Management</span>
            <span className="highlight-tag">Quantity Analysis</span>
            <span className="highlight-tag">Construction</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCards;
