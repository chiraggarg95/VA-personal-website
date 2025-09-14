import React from "react";
import { Link } from "react-router-dom";

import useDarkMode from "../utils/useDarkMode";
import Meta from "../components/Meta";
import Header from "../components/layout/Header";
import SectionDivider from "../components/SectionDivider";
import IntroGrid from "../components/IntroGrid";
import ProjectsPreview from "../components/ProjectsPreview";
import ExperienceCards from "../components/ExperienceCards";
// import SkillsColumns from "../components/SkillsColumns";
import SkillsSection from "../components/skills/SkillsSection";
import CertificationsGrid from "../components/CertificationsGrid";
import Footer from "../components/layout/Footer";
import TestimonialsCarousel, { testimonials } from "../components/home/TestimonialsCarousel";
import useIntersectionFade from "../hooks/useIntersectionFade";
import useParallax from "../hooks/useParallax";
import Section from "../components/layout/Section";

function Home() {
  useDarkMode();
  useParallax();
  useIntersectionFade('.intro-card, .project-card, .experience-card, .skills-column, .education-main, .certifications-grid');

  return (
    <>
      <Meta
        title="Home | Vaishnavi G Agarwal"
        description="Vaishnavi G Agarwal - Mechanical Engineer with experience in aerospace systems integration, satellite technology, and cross-functional project leadership."
        ogTitle="Home | Vaishnavi G Agarwal"
        ogDescription="Mechanical Engineer with experience in aerospace systems integration, satellite technology, and cross-functional project leadership."
        ogImage="/api/placeholder/1200/630"
        ogUrl="https://vaishnaviagarwal.com/"
      />
      <Header activePage="home" />

      <main>
        {/* Hero Section */}
        <Section className="hero parallax-hero">
          <div className="parallax-background"></div>
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Vaishnavi G Agarwal</h1>
              <p className="tagline">Bridging Engineering Excellence with User-Centered Solutions</p>
              <div className="hero-cta">
                <Link to="/projects" className="btn primary">Explore My Work</Link>
                <Link to="/contact" className="btn secondary">Let's Connect</Link>
              </div>
            </div>
          </div>
        </Section>

  {/* Section Divider 1 */}
  <SectionDivider />

        {/* Home Intro Section */}
        <Section className="home-intro">
          <div className="container">
            <h2>Turning Complex Challenges into Elegant Solutions</h2>
            <p className="section-intro">I bridge technical expertise with a people-first approach to create solutions that deliver real impact across aerospace, satellite technology, and beyond.</p>
            <IntroGrid />
          </div>
        </Section>

  {/* Section Divider 2 */}
  <SectionDivider blueprint />

        {/* Featured Work Section */}
        <Section className="featured-work">
          <div className="container">
            <h2>Featured Projects</h2>
            <p className="section-intro">A selection of work that demonstrates my approach to solving complex challenges.</p>
            <ProjectsPreview />
            <div className="center-btn">
              <Link to="/projects" className="btn secondary">View All Projects</Link>
            </div>
          </div>
        </Section>

  {/* Section Divider 3 */}
  <SectionDivider roadmap />

        {/* Experience Highlights Section */}
        <Section className="experience-highlights">
          <div className="container">
            <h2>Professional Experience</h2>
            <ExperienceCards />
            <div className="center-btn">
              <Link to="/resume" className="btn secondary">View Full Résumé</Link>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Testimonials Section */}
        <Section className="testimonials">
          <div className="container">
            <h2>What Colleagues Say</h2>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </Section>

        {/* Education Section */}
        <Section className="education-section">
          <div className="container">
            <h2>Education & Continuous Learning</h2>
            <div className="education-flex">
              <div className="education-main fadeIn">
                <div className="education-degree">
                  <div className="education-icon"><i className="fas fa-graduation-cap"></i></div>
                  <div className="education-details"></div>
                </div>
              </div>
              <CertificationsGrid />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="cta-section">
          <div className="container">
            <h2>Let's Connect</h2>
            <p>I'm interested in opportunities that leverage my technical expertise and problem-solving approach to create impactful solutions.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn primary">Get In Touch</Link>
              <Link to="/resume" className="btn secondary">View My Background</Link>
            </div>
          </div>
        </Section>
      </main>

  <Footer />
    </>
  );
}

export default Home;
