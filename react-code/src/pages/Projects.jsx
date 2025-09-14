import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Meta from "../components/Meta";
import Header from "../components/Header";
import useDarkMode from "../utils/useDarkMode";

const projectData = [
  {
    id: "stads",
    category: "aerospace",
    image: "/api/placeholder/800/500",
    alt: "Star Tracker-based Attitude Determination System",
    title: "Star Tracker-based Attitude Determination System (STADS)",
    summary: "Led the mechanical subsystem design for a CubeSat-compatible star tracker system, optimizing for size reduction while ensuring structural integrity and precision pointing accuracy.",
    tags: ["Aerospace Engineering", "Mechanical Design", "CubeSat Systems", "Structural Analysis"],
    details: [
      { h3: "Project Overview", p: "As part of IIT Bombay's Student Satellite Program, I spearheaded the mechanical design of the Star Tracker-based Attitude Determination System. This critical component enables precise spacecraft orientation control for mission-critical operations." },
      { h3: "Key Contributions", ul: [] },
      { h3: "Technical Achievements", p: "Successfully designed a robust mechanical system that meets stringent space-grade requirements while maintaining compatibility with standard CubeSat form factors. The design achieved optimal mass distribution and thermal management." },
      { h3: "Impact & Recognition", p: "This project contributed to IIT Bombay's ongoing satellite missions and provided valuable experience in space systems engineering. The design principles developed are being applied to future satellite projects." }
    ]
  },
  {
    id: "resin-vat",
    category: "mechanical research",
    image: "/api/placeholder/800/500",
    alt: "3D Printing Resin Vat Design",
    title: "High-Speed SLA 3D Printer Resin Vat System",
    summary: "Designed and optimized an innovative resin vat system for high-speed SLA 3D printing, solving critical challenges in beam intensity uniformity and material flow dynamics.",
    tags: ["3D Printing", "SOLIDWORKS", "Manufacturing", "Fluid Dynamics"],
    details: [
      { h3: "Project Challenge", p: "High-speed micro-SLA 3D printing faced significant challenges with uneven laser intensity distribution and resin leakage, limiting print quality and production efficiency. Traditional vat designs couldn't handle the increased processing speeds." },
      { h3: "Innovation & Design", ul: [] },
      { h3: "Technical Solutions", p: "The innovative design addressed beam intensity variations through precision-engineered leveling mechanisms while the advanced sealing system eliminated material waste. The modular approach enabled rapid prototyping and testing iterations." },
      { h3: "Results & Impact", p: "Achieved 90% improvement in beam intensity uniformity and eliminated resin leakage issues. The design enables consistent high-quality prints at increased processing speeds, contributing to more efficient additive manufacturing workflows." }
    ]
  },
  {
    id: "morse-speech",
    category: "software",
    image: "/api/placeholder/800/500",
    alt: "Morse to Synthesized Speech Application",
    title: "Morse to Synthesized Speech Application",
    summary: "Developed an accessible web application that converts morse code input to synthesized speech, empowering aphonic individuals with an innovative communication tool.",
    tags: ["Python", "Flask", "Accessibility", "Speech Synthesis"],
    details: [
      { h3: "Social Impact Mission", p: "This project addresses the communication challenges faced by aphonic individuals by providing an intuitive, technology-based solution that converts simple morse code inputs into clear synthesized speech." },
      { h3: "Technical Implementation", ul: [] },
      { h3: "User-Centered Design", p: "The application prioritizes ease of use with large, accessible buttons, clear visual feedback, and customizable speech parameters. The morse code system requires only simple space-bar interactions, making it accessible to users with varying physical capabilities." },
      { h3: "Technology Stack & Features", p: "Built using Python Flask framework with advanced speech synthesis libraries. Features include adjustable speech speed, volume control, custom voice selection, and morse code pattern visualization for learning and verification." }
    ]
  },
  // ...other projects (add the rest as needed)
];

const allCategories = [
  { label: "All Projects", value: "all" },
  { label: "Aerospace", value: "aerospace" },
  { label: "Mechanical Design", value: "mechanical" },
  { label: "Software", value: "software" },
  { label: "Research", value: "research" }
];

function Projects() {
  useDarkMode();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Sticky navbar and mobile menu toggle
    const navbar = document.getElementById('navbar');
    function handleScroll() {
      if (window.scrollY > 100) {
        navbar && navbar.classList.add('sticky');
      } else {
        navbar && navbar.classList.remove('sticky');
      }
    }
    window.addEventListener('scroll', handleScroll);
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('nav');
    function handleMobileToggle() {
      nav && nav.classList.toggle('active');
      mobileToggle && mobileToggle.classList.toggle('active');
    }
    mobileToggle && mobileToggle.addEventListener('click', handleMobileToggle);
    // Entrance animation
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 200);
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      mobileToggle && mobileToggle.removeEventListener('click', handleMobileToggle);
    };
  }, []);

  const filteredProjects = filter === "all"
    ? projectData
    : projectData.filter(p => p.category.includes(filter));

  return (
    <>
      <Meta
        title="Projects | Vaishnavi G Agarwal"
        description="Explore Vaishnavi G Agarwal's engineering projects including aerospace systems, satellite technology, and mechanical design innovations."
        ogTitle="Projects | Vaishnavi G Agarwal"
        ogDescription="Explore Vaishnavi G Agarwal's engineering projects including aerospace systems, satellite technology, and mechanical design innovations."
        ogImage="/api/placeholder/1200/630"
        ogUrl="https://vaishnaviagarwal.com/projects"
      />
      <Header activePage="projects" />

      <main>
        <section className="page-header">
          <div className="container">
            <h1>Engineering Projects</h1>
            <p>A showcase of my work across aerospace systems, mechanical design, and innovative engineering solutions</p>
          </div>
        </section>

        <section className="projects-gallery">
          <div className="container">
            <div className="filter-tabs">
              {allCategories.map(cat => (
                <button
                  key={cat.value}
                  className={`filter-btn${filter === cat.value ? ' active' : ''}`}
                  data-filter={cat.value}
                  onClick={() => setFilter(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div className="project-card fadeIn" data-category={project.category} id={project.id} key={project.id}>
                  <div className="project-image">
                    <img src={project.image} alt={project.alt} />
                  </div>
                  <div className="project-info">
                    <h2>{project.title}</h2>
                    <p className="project-summary">{project.summary}</p>
                    <div className="tags">
                      {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="project-details">
                      {project.details.map((detail, i) => (
                        <div className="detail-item" key={i}>
                          <h3>{detail.h3}</h3>
                          {detail.p && <p>{detail.p}</p>}
                          {detail.ul && <ul>{detail.ul.map((li, j) => <li key={j}>{li}</li>)}</ul>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Interested in Collaborating?</h2>
            <p>I'm always excited to work on challenging engineering projects that push the boundaries of innovation and create meaningful impact.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn primary">Get In Touch</Link>
              <Link to="/resume" className="btn secondary">View My Experience</Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">VA</div>
            <div className="footer-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/resume">Résumé</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Medium"><i className="fab fa-medium-m"></i></a>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Vaishnavi G Agarwal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Projects;
