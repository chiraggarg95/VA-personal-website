
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";

import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useDarkMode from "../utils/useDarkMode";

import MichiganLogo from "../assets/MichiganLogo.jfif";
import YaleLogo from "../assets/YaleLogo.png";
import SanDiegoLogo from "../assets/SanDiegoLogo.png";

function Resume() {
  useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    // Sticky navbar
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Mobile menu toggle
    const mobileToggle = document.querySelector(".mobile-toggle");
    const nav = document.querySelector("nav");
    if (mobileToggle && nav) {
      const toggleHandler = function () {
        nav.classList.toggle("active");
        this.classList.toggle("active");
      };
      mobileToggle.addEventListener("click", toggleHandler);
      // Clean up
      return () => {
        window.removeEventListener("scroll", handleScroll);
        mobileToggle.removeEventListener("click", toggleHandler);
      };
    } else {
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    // Parallax effect
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    let ticking = false;
    function updateParallax() {
      const scrollY = window.scrollY;
      parallaxLayers.forEach((layer, index) => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          const speed = index * 0.2;
          const yOffset = scrollY * speed;
          if (layer.classList.contains('parallax-layer-1')) {
            layer.style.transform = `translateY(${yOffset * 0.4}px)`;
          } else if (layer.classList.contains('parallax-layer-2')) {
            layer.style.transform = `translateY(${yOffset * 0.25}px)`;
          } else if (layer.classList.contains('parallax-layer-3')) {
            layer.style.transform = `translateY(${yOffset * 0.1}px)`;
          }
        }
      });
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll);
    updateParallax();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    // Fade in animation for resume items and certifications
    const fadeElements = document.querySelectorAll('.resume-item, .certification-item');
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
        }
      });
    }, { threshold: 0.1 });
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // For dark mode, assume global logic is handled elsewhere (e.g., useDarkMode hook)

  return (
    <>
      <Meta
        title="Résumé | Vaishnavi G Agarwal"
        description="Vaishnavi Gaurav Agarwal's professional qualifications and experience in mechanical engineering and systems integration."
        ogTitle="Résumé | Vaishnavi G Agarwal"
        ogDescription="Vaishnavi Gaurav Agarwal's professional qualifications and experience in mechanical engineering and systems integration."
        ogImage="/api/placeholder/1200/630"
        ogUrl="https://vaishnaviagarwal.com/resume"
      />
      <Header activePage="resume" />

      <main>
        <section className="page-header parallax-wrapper">
          <div className="parallax-layer parallax-layer-1 parallax-blueprint"></div>
          <div className="parallax-layer parallax-layer-2"></div>
          <div className="parallax-layer parallax-layer-3 parallax-roadmap"></div>
          <div className="container">
            <h1>Professional Experience</h1>
            <p>My qualifications, skills, and career journey</p>
          </div>
        </section>

        <section className="resume-section">
          <div className="container">
            <div className="resume-intro">
              <p>Mechanical Engineering graduate from IIT Bombay with experience at Airbus in electrical systems integration, combining technical expertise with cross-functional collaboration skills. Focused on creating user-centered solutions through systematic problem-solving and analytical rigor.</p>
              <div className="resume-actions">
                <a href="https://drive.google.com/file/d/163Vd69i3sMWpG17ev4fSZ3EYT5cxyVjY/view?usp=sharing" className="btn primary" id="download-resume" target="_blank" rel="noopener noreferrer"><i className="fas fa-download"></i> Download PDF Résumé</a>
              </div>
            </div>

            <div className="resume-grid">
              <div className="resume-main">
                <div className="resume-block">
                  <h2>Work Experience</h2>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Associate Engineer, Physical Design & Integration</h3>
                      <span className="company">Airbus India Pvt. Ltd.</span>
                      <span className="date">July 2023 - Present</span>
                    </div>
                    <div className="resume-item-content">
                      <ul>
                        <li>Conducted 2D/3D checks on 30+ electrical harness installation designs for the centre aft fuselage of Single Aisle aircraft.</li>
                        <li>Co-developing an internal chatbot consolidating A320 series design principles and resources.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Executive Trainee Intern</h3>
                      <span className="company">TATA Projects Ltd. (Taj-Ginger, Mumbai)</span>
                      <span className="date">May 2022 - July 2022</span>
                    </div>
                    <div className="resume-item-content">
                      <ul>
                        <li>Performed a 20-day productivity audit for mechanical, electrical & plumbing (MEP) tasks of hotel mock-up room.</li>
                        <li>Executed quantitative take-off for 250+ MEP & firefighting materials across 350+ rooms using construction drawings.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Research Intern (FTLE & LCS)</h3>
                      <span className="company">University of Colorado, Boulder</span>
                      <span className="date">May 2022 - July 2022</span>
                    </div>
                    <div className="resume-item-content">
                      <ul>
                        <li>Analyzed deformation gradients to compute FTLE velocity fields for time-dependent 2-D fluid-flow systems.</li>
                        <li>Evaluated and improved existing Python scripts to generate coherent-structure visualizations.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Research Intern, High-speed micro-SLA 3D Printing</h3>
                      <span className="company">IIT Bombay</span>
                      <span className="date">May 2021 - September 2021</span>
                    </div>
                    <div className="resume-item-content">
                      <ul>
                        <li>Designed 15+ resin-vat-tank components in SolidWorks for a high-speed micro-SLA printer prototype.</li>
                        <li>Integrated 3-point levelling & PTFE O-ring to ensure uniform laser intensity and prevent resin leakage.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="resume-block">
                  <h2>Key Projects</h2>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Bachelor's Thesis – Kinematic Modelling & Analysis of Harmonic Drives</h3>
                      <span className="date">January 2022 - June 2022</span>
                    </div>
                    <div className="resume-item-content">
                      <p>Developed MATLAB code to model flexspline/circular-spline motion, compare wave-generator profiles & synthesise conjugate tooth profiles.</p>
                    </div>
                  </div>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Airline Revenue Optimisation (Course Project)</h3>
                      <span className="date">January 2022 - April 2022</span>
                    </div>
                    <div className="resume-item-content">
                      <p>Led team of 4; built AMPL/Python pricing models, simulating 7 schemes across 5+ parameters & constraints to benchmark existing airline strategies.</p>
                    </div>
                  </div>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Morse-to-Synthesised-Speech Web App</h3>
                      <span className="date">April 2021 - July 2021</span>
                    </div>
                    <div className="resume-item-content">
                      <p>Created Flask application converting space-bar Morse input to text, then synthesising speech via a 3-phase TTS pipeline.</p>
                    </div>
                  </div>
                </div>

                <div className="resume-block">
                  <h2>Leadership & Responsibility</h2>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Institute Student Mentor & Department Academic Mentor</h3>
                      <span className="company">IIT Bombay</span>
                      <span className="date">May 2022 - May 2023</span>
                    </div>
                    <div className="resume-item-content">
                      <p>Guided 6 sophomores & incoming freshmen; contributed course/project reviews on D-AMP blog.</p>
                    </div>
                  </div>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Convenor, Ham Radio Club</h3>
                      <span className="company">IIT Bombay</span>
                      <span className="date">February 2020 - November 2021</span>
                    </div>
                    <div className="resume-item-content">
                      <p>Organised amateur-radio activities for 600+ students; delivered SSTV YouTube lecture to 900+ viewers; authored 25+ articles.</p>
                    </div>
                  </div>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Cultural Secretary, NCC</h3>
                      <span className="company">IIT Bombay</span>
                      <span className="date">May 2020 - June 2021</span>
                    </div>
                    <div className="resume-item-content">
                      <p>Executed 10+ championships & 7+ workshops involving 550+ cadets; introduced an institute-wide online cooking competition.</p>
                    </div>
                  </div>
                </div>

                <div className="resume-block">
                  <h2>Education</h2>
                  <div className="resume-item fadeIn">
                    <div className="resume-item-header">
                      <h3>Bachelor of Technology (B.Tech) in Mechanical Engineering</h3>
                      <span className="institution">Indian Institute of Technology, Bombay</span>
                      <span className="date">2019 - 2023</span>
                    </div>
                    <div className="resume-item-content">
                      <p><strong>CPI:</strong> 8.1/10</p>
                      <p><strong>Additional Qualification:</strong> CFA Level I (Attempted 2023)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume-sidebar">
                <div className="contact-block">
                  <h2>Contact Information</h2>
                  <ul className="contact-list">
                    <li><i className="fas fa-envelope"></i> vaishnaviagarwal.iitb@gmail.com</li>
                  </ul>
                </div>
                <div className="skills-block">
                  <h2>Technical Skills</h2>
                  <div className="skill-category">
                    <h3>Software & Tools</h3>
                    <div className="skill-items">
                      <div className="skill-item">
                        <span className="skill-name">CATIA</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">SOLIDWORKS</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">AutoCAD</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">ANSYS</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">Adams</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h3>Programming</h3>
                    <div className="skill-items">
                      <div className="skill-item">
                        <span className="skill-name">Python</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">MATLAB</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">C/C++</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">AMPL</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">HTML</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">LaTeX</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="achievements-block">
                  <h2>Achievements</h2>
                  <ul className="achievements-list">
                    <li>Rank 25, Regional Mathematics Olympiad (Maharashtra & Goa)</li>
                    <li>Undergraduate Teaching Assistant for Biology (BB 101)</li>
                    <li>NCC 'B' & 'C' Certificates (Grade A)</li>
                    <li>Silver medal in 0.22-rifle shooting</li>
                    <li>Gold medal, Institute Girls' Inter-Hostel Crossy Championship</li>
                  </ul>
                </div>
                <div className="certifications-block">
                  <h2>Certifications</h2>
                  <div className="certification-grid">
                    <div className="certification-item">
                      <div className="certification-logo">
                        <img src={MichiganLogo} alt="University of Michigan logo" />
                      </div>
                      <div className="certification-details">
                        <h4>Python for Everybody</h4>
                        <p className="institution">University of Michigan</p>
                      </div>
                    </div>
                    <div className="certification-item">
                      <div className="certification-logo">
                        <img src={YaleLogo} alt="Yale University logo" />
                      </div>
                      <div className="certification-details">
                        <h4>Introduction to Psychology</h4>
                        <p className="institution">Yale University</p>
                      </div>
                    </div>
                    <div className="certification-item">
                      <div className="certification-logo">
                        <img src={SanDiegoLogo} alt="UC San Diego logo" />
                      </div>
                      <div className="certification-details">
                        <h4>Python DSA Toolbox</h4>
                        <p className="institution">UC San Diego</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section parallax-wrapper">
          <div className="parallax-layer parallax-layer-1 parallax-dots"></div>
          <div className="parallax-layer parallax-layer-2"></div>
          <div className="parallax-layer parallax-layer-3 parallax-roadmap"></div>
          <div className="container">
            <h2>Interested in Working Together?</h2>
            <p>Let's connect and discuss how my technical expertise and analytical approach could benefit your team.</p>
            <Link to="/contact" className="btn primary">Get In Touch</Link>
          </div>
        </section>
      </main>

  <Footer />
    </>
  );
}

export default Resume;
