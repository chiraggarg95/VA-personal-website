import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import AboutPic from "../assets/about pic.jpg";

import Meta from "../components/Meta";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import FlipCard from "../components/ui/FlipCard";
import useDarkMode from "../utils/useDarkMode";
import useIntersectionFade from "../hooks/useIntersectionFade";
import Section from "../components/layout/Section";
import EducationSection from "../components/education/EducationSection";
import EducationItem from "../components/education/EducationItem";

function About() {
  useDarkMode();
  useIntersectionFade(['.experience-item', '.education-item', '.certification-item', '.project-card', '.fadeIn']);

  return (
    <>
      <Meta
        title="About Me | Vaishnavi G Agarwal"
        description="Learn about Vaishnavi G Agarwal's background as a Mechanical Engineer at Airbus and IIT Bombay with expertise in aerospace systems and cross-functional collaboration."
        ogTitle="About Me | Vaishnavi G Agarwal"
        ogDescription="Engineer with expertise in aerospace systems, satellite technology, and user-centered problem solving. Discover my journey from IIT Bombay to Airbus."
        ogImage="/api/placeholder/1200/630"
        ogUrl="https://vaishnaviagarwal.com/about"
      />
      <Header activePage="about" />

      <main>
        <PageHeader title="About Me" subtitle="Engineer with a passion for impactful solutions" />

        <Section className="about-content">
          <div className="container">
            <div className="about-grid">
              <div className="about-image">
                <img src={AboutPic} alt="Vaishnavi G Agarwal professional headshot" />
              </div>
              <div className="about-bio">
                <h2>My Journey</h2>
                <p>With a Mechanical Engineering degree from IIT Bombay and current experience at Airbus in electrical systems integration, I've developed a strong foundation in complex problem-solving, cross-functional collaboration, and delivering real-world impact. My work at Airbus involves electrical system installation on CAF 929 Single Aisle CI, where precision and systems thinking are paramount.</p>
                <p>My academic journey at IIT Bombay was enriched by hands-on experience with the Student Satellite Program, where I designed mechanical subsystems for the Star Tracker-based Attitude Determination System (STADS). This experience, combined with my roles as a Student Mentor and Department Academic Mentor, cultivated my ability to understand user needs and create solutions that balance technical constraints with practical implementation.</p>
                <p>I'm drawn to work that sits at the intersection of engineering, design, and strategy. Whether I'm integrating electrical systems, designing satellite components, or developing user-friendly applications, I approach challenges with both analytical rigor and a keen focus on the end-user experience.</p>
                <div className="core-values">
                  <h3>Core Principles</h3>
                  <ul>
                    <li><strong>Technical Excellence with User Focus</strong> — Applying engineering precision while maintaining awareness of how solutions impact end users</li>
                    <li><strong>Cross-Functional Collaboration</strong> — Experience working across disciplines at Airbus and in academic projects to deliver integrated solutions</li>
                    <li><strong>Structured Problem-Solving</strong> — Breaking down complex challenges through methodical analysis and creative thinking</li>
                    <li><strong>Continuous Learning</strong> — Actively expanding my skills through professional experience and online courses in psychology, algorithms, and programming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="experience exp-section">
          <div className="container">
            <h2>Professional Experience</h2>
            <p className="section-intro">My career has spanned various roles that have shaped my approach to engineering and problem-solving.</p>
            <div className="experience-grid exp-grid">
              <article className="experience-card exp-card fadeIn" tabIndex="0" aria-label="Airbus Engineer role">
                <div className="exp-card__icon" aria-hidden="true"><i className="fas fa-plane"></i></div>
                <h3 className="exp-card__title">Airbus Engineer</h3>
                <div className="exp-card__meta" aria-hidden="true">
                  <span className="tag">2023—Present</span>
                  <span className="tag">Bengaluru</span>
                </div>
                <p className="exp-card__body">Currently working as an Engineer at Airbus in Bengaluru, focusing on electrical system installation for aircraft. Previously served as Associate Engineer in Physical Design and Integration (PDI), working with CATIA and ESI tools on mission-critical systems.</p>
              </article>
              <article className="experience-card exp-card fadeIn" tabIndex="0" aria-label="Satellite Systems experience">
                <div className="exp-card__icon" aria-hidden="true"><i className="fas fa-satellite"></i></div>
                <h3 className="exp-card__title">Satellite Systems</h3>
                <div className="exp-card__meta" aria-hidden="true">
                  <span className="tag">IIT Bombay</span>
                  <span className="tag">Student Satellite Program</span>
                </div>
                <p className="exp-card__body">Led the mechanical subsystem for Star Tracker-based Attitude Determination System (STADS) at IIT Bombay's Student Satellite Program. Also contributed to the Communication Subsystem team, designing experiments for ESO's PS2V Orbital Platform.</p>
              </article>
              <article className="experience-card exp-card fadeIn" tabIndex="0" aria-label="Technical Research roles">
                <div className="exp-card__icon" aria-hidden="true"><i className="fas fa-tools"></i></div>
                <h3 className="exp-card__title">Technical Research</h3>
                <div className="exp-card__meta" aria-hidden="true">
                  <span className="tag">Research</span>
                  <span className="tag">Prototyping</span>
                </div>
                <p className="exp-card__body">Completed multiple research internships, including projects on resin vat design for high-speed 3D printing and harmonic drive testing. Designed and integrated models for complex components and recommended optimizations based on empirical analysis.</p>
              </article>
              <article className="experience-card exp-card fadeIn" tabIndex="0" aria-label="Leadership roles">
                <div className="exp-card__icon" aria-hidden="true"><i className="fas fa-users"></i></div>
                <h3 className="exp-card__title">Leadership Roles</h3>
                <div className="exp-card__meta" aria-hidden="true">
                  <span className="tag">IIT Bombay</span>
                  <span className="tag">Mentorship & Clubs</span>
                </div>
                <p className="exp-card__body">Served as Institute Student Mentor, Department Academic Mentor, and Cultural Secretary at IIT Bombay. Experience mentoring students, organizing events for 500+ participants, and managing teams to execute large-scale initiatives.</p>
              </article>
            </div>
          </div>
        </Section>

        <EducationSection title="Educational Background">
          <EducationItem
            className="fadeIn"
            icon={<i className="fas fa-university"></i>}
            degree="Bachelor of Technology - B.Tech, Mechanical Engineering"
            institution="Indian Institute of Technology, Bombay"
            dates="2019 - 2023"
            grade="8.1/10 | B.Tech Project: 9/10"
            highlights={[
              "Team member of Student Satellite Program, developing Communications and Mechanical sub-systems for space applications",
              "Member of National Cadet Corps, Ham Radio Club, and Suman Mashruwala Advanced Micro Engineering Lab",
              "Contributed to various Social Activities bodies, developing leadership and teamwork skills",
              "Actively participated in activities of Cultural Clubs, acquiring stage performance skills",
            ]}
          />
          <EducationItem
            className="fadeIn"
            icon={<i className="fas fa-school"></i>}
            degree="Higher Secondary Education"
            institution="Sri Chaitanya Junior College, Pune (Maharashtra HSC)"
            dates="2017 - 2019"
            grade="89.69%"
            highlights={[
              "JEE Advance: 2250, JEE Mains: 3286",
              "MHCET: Rank 50 (in Maharashtra), Girl's rank: 6 (in Maharashtra)",
              "RMO: Rank 25 (in Maharshtra and Goa region)",
            ]}
          />
          <EducationItem
            className="fadeIn"
            icon={<i className="fas fa-book"></i>}
            degree="Secondary Education"
            institution="DAV Public School, Aundh, Pune (CBSE)"
            dates="2011 - 2017"
            grade="97.40% CGPA: 10.0 | Perfect scores in Mathematics and Sanskrit"
            highlights={[
              "Two-time silver medalist in Inter-House Basketball",
              "Grade A in Elementary and Intermediate Drawing Examinations",
              "Active participation in Dance, Drama, and Art activities",
            ]}
          />
        </EducationSection>

        <Section className="skills-section">
          <div className="container">
            <h2>Skills & Capabilities</h2>
            <div className="skills-content">
              <div className="skills-cards">
                <div className="skill-category">
                  <h3>Technical Expertise</h3>
                  <div className="skills-card-grid">
                    {/* Engineering Design */}
                    <FlipCard
                      front={(
                        <>
                          <div className="skill-icon"><i className="fas fa-drafting-compass"></i></div>
                          <h4>Engineering Design</h4>
                          <p className="skill-brief">CAD tools and design methodologies</p>
                        </>
                      )}
                      back={(
                        <>
                          <h4>Engineering Design</h4>
                          <ul className="skill-details-list">
                            <li>CATIA and ESI for aircraft systems</li>
                            <li>SOLIDWORKS for mechanical design</li>
                            <li>PCB implementation strategy</li>
                            <li>Structural analysis and optimization</li>
                            <li>3D component modeling and assembly</li>
                          </ul>
                        </>
                      )}
                    />
                    {/* Software & Programming */}
                    <FlipCard
                      front={(
                        <>
                          <div className="skill-icon"><i className="fas fa-code"></i></div>
                          <h4>Software & Programming</h4>
                          <p className="skill-brief">Development and algorithmic skills</p>
                        </>
                      )}
                      back={(
                        <>
                          <h4>Software & Programming</h4>
                          <ul className="skill-details-list">
                            <li>Python for application development</li>
                            <li>Flask web framework implementation</li>
                            <li>Data structures and algorithms</li>
                            <li>Speech synthesis frameworks</li>
                            <li>Microcontroller programming</li>
                          </ul>
                        </>
                      )}
                    />
                    {/* Aerospace & Communications */}
                    <FlipCard
                      front={(
                        <>
                          <div className="skill-icon"><i className="fas fa-satellite"></i></div>
                          <h4>Aerospace & Communications</h4>
                          <p className="skill-brief">Satellite systems and protocols</p>
                        </>
                      )}
                      back={(
                        <>
                          <h4>Aerospace & Communications</h4>
                          <ul className="skill-details-list">
                            <li>Satellite communications (SATCOM)</li>
                            <li>Aircraft electrical system installation</li>
                            <li>Amateur radio operations</li>
                            <li>UART and SPI protocols</li>
                            <li>Signal processing and transmission</li>
                          </ul>
                        </>
                      )}
                    />
                    {/* Manufacturing & Prototyping */}
                    <FlipCard
                      front={(
                        <>
                          <div className="skill-icon"><i className="fas fa-print"></i></div>
                          <h4>Manufacturing & Prototyping</h4>
                          <p className="skill-brief">3D printing and rapid prototyping</p>
                        </>
                      )}
                      back={(
                        <>
                          <h4>Manufacturing & Prototyping</h4>
                          <ul className="skill-details-list">
                            <li>SLA-based 3D printing techniques</li>
                            <li>Resin tank optimization</li>
                            <li>Mechanical component fabrication</li>
                            <li>Material selection and testing</li>
                            <li>Assembly design and optimization</li>
                          </ul>
                        </>
                      )}
                    />
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Project & People Skills</h3>
                  <div className="skills-card-grid">
                    {/* Leadership & Teamwork */}
                    <FlipCard
                      front={(
                        <>
                          <div className="skill-icon"><i className="fas fa-users"></i></div>
                          <h4>Leadership & Teamwork</h4>
                          <p className="skill-brief">Leading teams to success</p>
                        </>
                      )}
                      back={(
                        <>
                          <h4>Leadership & Teamwork</h4>
                          <ul className="skill-details-list">
                            <li>Mentoring students and junior team members</li>
                            <li>Cross-functional team coordination</li>
                            <li>Event management for 500+ participants</li>
                            <li>Leading technical initiatives</li>
                            <li>Cultural and technical leadership</li>
                          </ul>
                        </>
                      )}
                    />
                    {/* Project Management */}
                    <FlipCard
                      front={(
                        <>
                          <div className="skill-icon"><i className="fas fa-tasks"></i></div>
                          <h4>Project Management</h4>
                          <p className="skill-brief">Organizing and executing projects</p>
                        </>
                      )}
                      back={(
                        <>
                          <h4>Project Management</h4>
                          <ul className="skill-details-list">
                            <li>Requirements analysis and documentation</li>
                            <li>Stakeholder management and communication</li>
                            <li>Timeline planning and execution</li>
                            <li>Resource allocation and optimization</li>
                            <li>Risk assessment and mitigation</li>
                          </ul>
                        </>
                      )}
                    />
                    {/* Communication */}
                    <FlipCard
                      front={(
                        <>
                          <div className="skill-icon"><i className="fas fa-comment-dots"></i></div>
                          <h4>Communication</h4>
                          <p className="skill-brief">Clear and effective communication</p>
                        </>
                      )}
                      back={(
                        <>
                          <h4>Communication</h4>
                          <ul className="skill-details-list"></ul>
                        </>
                      )}
                    />
                    {/* Problem Solving */}
                    <FlipCard
                      front={(
                        <>
                          <div className="skill-icon"><i className="fas fa-lightbulb"></i></div>
                          <h4>Problem Solving</h4>
                          <p className="skill-brief">Analytical and creative solutions</p>
                        </>
                      )}
                      back={(
                        <>
                          <h4>Problem Solving</h4>
                        </>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="certifications">
                <h3>Certifications & Continuing Education</h3>
                <div className="certification-cards">
                  <div className="certification-card fadeIn">
                    <div className="certification-logo">
                      <img src="/api/placeholder/60/60" alt="Yale University logo" />
                    </div>
                    <div className="certification-details">
                      <h4>Introduction to Psychology</h4>
                      <p className="institution">Yale University</p>
                      <p className="cert-description">Understanding human behavior and cognitive processes</p>
                    </div>
                  </div>
                  <div className="certification-card fadeIn">
                    <div className="certification-logo">
                      <img src="/api/placeholder/60/60" alt="UC San Diego logo" />
                    </div>
                    <div className="certification-details"></div>
                  </div>
                  <div className="certification-card fadeIn">
                    <div className="certification-logo"></div>
                    <div className="certification-details"></div>
                  </div>
                  <div className="certification-card fadeIn"></div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="projects-highlight">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-mini-grid">
              <div className="project-mini-card fadeIn">
                <h3>Wire Fin Heat Exchanger Design</h3>
                <p>Comprehensive analysis of heat transfer scenarios and economic optimization for novel heat exchanger design.</p>
                <Link to="/projects#heat-exchanger" className="btn text-btn">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
              <div className="project-mini-card fadeIn">
                <h3>Morse to Synthesized Speech App</h3>
                <p>Web application enabling aphonic individuals to communicate through morse code input converted to synthesized speech.</p>
                <Link to="/projects#morse-speech" className="btn text-btn">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
              <div className="project-mini-card fadeIn">
                <h3>3D Printing Resin Vat Design</h3>
                <p>Optimized resin tank design for high-speed SLA 3D printing with innovative solutions for common technical challenges.</p>
                <Link to="/projects#resin-vat" className="btn text-btn">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="center-btn">
              <Link to="/projects" className="btn secondary">View All Projects</Link>
            </div>
          </div>
        </Section>

        <Section className="cta-section">
          <div className="container">
            <h2>Looking to Connect</h2>
            <p>I'm interested in collaborative opportunities where I can apply my technical expertise and user-centered approach to solve challenging problems.</p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn primary">Explore My Work</Link>
              <Link to="/contact" className="btn secondary">Get In Touch</Link>
            </div>
          </div>
        </Section>
      </main>

  <Footer />
    </>
  );
}

export default About;
