import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: "stads",
    image: "/api/placeholder/640/360",
    alt: "Star Tracker-based Attitude Determination System mechanical design",
    title: "Star Tracker-based Attitude Determination System (STADS)",
    blurb:
      "Led the mechanical subsystem design for a CubeSat-compatible star tracker system, optimizing for size reduction while ensuring structural integrity.",
    tags: ["Aerospace", "Mechanical Design", "Systems Engineering", "CubeSat"],
    href: "/projects#stads",
    category: "Aerospace",
  },
  {
    id: "morse",
    image: "/api/placeholder/640/360",
    alt: "Morse to Synthesized Speech application interface",
    title: "Morse to Synthesized Speech App",
    blurb:
      "Developed an accessible web application that converts morse code input to synthesized speech, empowering aphonic individuals with a new communication tool.",
    tags: ["Accessibility", "Python", "Flask", "Web"],
    href: "/projects#morse",
    category: "Software",
  },
  {
    id: "resin-vat",
    image: "/api/placeholder/640/360",
    alt: "3D printed resin vat tank design",
    title: "High-Speed 3D Printer Resin Vat",
    blurb:
      "Designed and optimized a resin vat system for SLA-based 3D printing, solving critical issues in beam intensity and material flow.",
    tags: ["3D Printing", "SOLIDWORKS", "Manufacturing", "Prototyping"],
    href: "/projects#3dprinting",
    category: "Manufacturing",
  },
];

function TagRow({ tags = [] }) {
  const shown = tags.slice(0, 3);
  const extra = Math.max(0, tags.length - shown.length);
  return (
    <div className="fp-tags" aria-label="tags">
      {shown.map((t) => (
        <span className="fp-tag" key={t}>{t}</span>
      ))}
      {extra > 0 && <span className="fp-tag fp-tag--more">+{extra}</span>}
    </div>
  );
}

function ProjectsPreview() {
  return (
    <div className="projects-preview-grid" role="list">
      {items.map((p) => (
        <article key={p.id} className="fp-card fadeIn" role="listitem" style={{ "--cat": "var(--primary-color)" }}>
          <Link to={p.href} className="fp-card__link" aria-label={`View case study: ${p.title}`}></Link>
          <div className="fp-media">
            <img
              src={p.image}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="fp-media__overlay" aria-hidden="true"></div>
          </div>
          <div className="fp-body">
            <h3 className="fp-title" title={p.title}>{p.title}</h3>
            <p className="fp-blurb">{p.blurb}</p>
            <TagRow tags={p.tags} />
            <div className="fp-cta">
              <span className="btn secondary">View Case Study →</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectsPreview;
