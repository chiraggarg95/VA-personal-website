import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import useDarkMode from "../utils/useDarkMode";
import Meta from "../components/Meta";
import Header from "../components/Header";
import SectionDivider from "../components/SectionDivider";
import IntroGrid from "../components/IntroGrid";
import ProjectsPreview from "../components/ProjectsPreview";
import ExperienceCards from "../components/ExperienceCards";
import SkillsColumns from "../components/SkillsColumns";
import CertificationsGrid from "../components/CertificationsGrid";
import Footer from "../components/Footer";
import TestimonialsCarousel, { testimonials } from "../components/TestimonialsCarousel";

function Home() {
  useDarkMode();
  useEffect(() => {
    // Sticky navbar, mobile menu, parallax, testimonial carousel, and fade-in logic
    const navbar = document.getElementById('navbar');
    function handleScroll() {
      if (window.scrollY > 100) {
        navbar && navbar.classList.add('sticky');
      } else {
        navbar && navbar.classList.remove('sticky');
      }
    }
    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('nav');
    function handleMobileToggle() {
      nav && nav.classList.toggle('active');
      mobileToggle && mobileToggle.classList.toggle('active');
    }
    mobileToggle && mobileToggle.addEventListener('click', handleMobileToggle);

    // Parallax effect for divider layers
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
    function onParallaxScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onParallaxScroll);
    updateParallax();

    // Fade-in animation for elements
    const fadeElements = document.querySelectorAll('.intro-card, .project-card, .experience-card, .skills-column, .education-main, .certifications-grid');
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

    // Testimonial carousel logic (if present)
    let currentTestimonial = 0;
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    function showTestimonial(index) {
      const track = document.querySelector('.testimonials-track');
      currentTestimonial = index;
      if (testimonialCards.length === 0 || !track) return;
      if (currentTestimonial < 0) currentTestimonial = testimonialCards.length - 1;
      if (currentTestimonial >= testimonialCards.length) currentTestimonial = 0;
      track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentTestimonial);
      });
    }
    function moveTestimonial(direction) {
      showTestimonial(currentTestimonial + direction);
    }
    function jumpToTestimonial(index) {
      showTestimonial(index);
    }
    let testimonialInterval = setInterval(() => moveTestimonial(1), 5000);
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
      carousel.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => moveTestimonial(1), 5000);
      });
    }
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', onParallaxScroll);
      mobileToggle && mobileToggle.removeEventListener('click', handleMobileToggle);
      clearInterval(testimonialInterval);
    };
  }, []);

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
        <section className="hero parallax-hero">
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
        </section>

  {/* Section Divider 1 */}
  <SectionDivider />

        {/* Home Intro Section */}
        <section className="home-intro">
          <div className="container">
            <h2>Turning Complex Challenges into Elegant Solutions</h2>
            <p className="section-intro">I bridge technical expertise with a people-first approach to create solutions that deliver real impact across aerospace, satellite technology, and beyond.</p>
            <IntroGrid />
          </div>
        </section>

  {/* Section Divider 2 */}
  <SectionDivider blueprint />

        {/* Featured Work Section */}
        <section className="featured-work">
          <div className="container">
            <h2>Featured Projects</h2>
            <p className="section-intro">A selection of work that demonstrates my approach to solving complex challenges.</p>
            <ProjectsPreview />
            <div className="center-btn">
              <Link to="/projects" className="btn secondary">View All Projects</Link>
            </div>
          </div>
        </section>

  {/* Section Divider 3 */}
  <SectionDivider roadmap />

        {/* Experience Highlights Section */}
        <section className="experience-highlights">
          <div className="container">
            <h2>Professional Experience</h2>
            <ExperienceCards />
            <div className="center-btn">
              <Link to="/resume" className="btn secondary">View Full Résumé</Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="container">
            <h2>Core Competencies</h2>
            <div className="skills-container">
              <SkillsColumns />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="container">
            <h2>What Colleagues Say</h2>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section">
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
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Let's Connect</h2>
            <p>I'm interested in opportunities that leverage my technical expertise and problem-solving approach to create impactful solutions.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn primary">Get In Touch</Link>
              <Link to="/resume" className="btn secondary">View My Background</Link>
            </div>
          </div>
        </section>
      </main>

  <Footer />
    </>
  );
}

export default Home;
