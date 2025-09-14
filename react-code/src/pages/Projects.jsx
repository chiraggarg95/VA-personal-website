import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Meta from "../components/Meta";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import FilterTabs from "../components/ui/FilterTabs";
import useDarkMode from "../utils/useDarkMode";
import useIntersectionFade from "../hooks/useIntersectionFade";
import projectData from "../data/projects.json";

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
  useIntersectionFade('.project-card');

  const filteredProjects = projectData.filter(project => {
    if (filter === 'all') return true;
    return (project.category || '').toLowerCase().includes(filter);
  });

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
        <PageHeader
          title="Engineering Projects"
          subtitle="A showcase of my work across aerospace systems, mechanical design, and innovative engineering solutions"
        />

        <Section className="projects-gallery">
          <div className="container">
            <FilterTabs categories={allCategories} active={filter} onChange={setFilter} />
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
        </Section>

        <Section className="cta-section">
          <div className="container">
            <h2>Interested in Collaborating?</h2>
            <p>I'm always excited to work on challenging engineering projects that push the boundaries of innovation and create meaningful impact.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn primary">Get In Touch</Link>
              <Link to="/resume" className="btn secondary">View My Experience</Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default Projects;
