import React from "react";
import Section from "../layout/Section";

function EducationSection({ title, subtitle, children }) {
  return (
    <Section className="education edu-section">
      <div className="container">
        {title && <h2>{title}</h2>}
        {subtitle && <p className="section-intro">{subtitle}</p>}
        <div className="edu-grid">
          {children}
        </div>
      </div>
    </Section>
  );
}

export default EducationSection;

