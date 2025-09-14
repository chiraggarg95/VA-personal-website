import React from "react";
import BulletList from "./BulletList";

function slugify(text) {
  return String(text || "edu")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function EducationItem({
  icon,
  degree,
  institution,
  institutionUrl,
  location,
  dates,
  grade,
  highlights = [],
  variant = "card",
  className = "",
}) {
  const id = `edu-${slugify(degree)}`;
  return (
    <article className={`edu-card ${className}`.trim()} aria-labelledby={id}>
      <header className="edu-head">
        <div className="edu-badge" aria-hidden="true">{icon}</div>
        <div>
          <h3 id={id} className="edu-title">{degree}</h3>
          <div className="edu-inst">
            {institutionUrl ? (
              <a href={institutionUrl} target="_blank" rel="noreferrer">{institution}</a>
            ) : (
              <span>{institution}</span>
            )}
          </div>
          <div className="edu-meta">
            {dates && <span className="chip">{dates}</span>}
            {location && <span className="chip">{location}</span>}
            {grade && <span className="chip">Grade: {grade}</span>}
          </div>
        </div>
      </header>

      <BulletList items={highlights} />
    </article>
  );
}

export default EducationItem;

