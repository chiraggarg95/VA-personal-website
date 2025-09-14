import React from "react";
import Section from "../layout/Section";
import SkillsCard from "./SkillsCard";

const defaultSkills = {
  tech: [
    { label: "CAD & Design Tools", value: 90 },
    { label: "Python Programming", value: 85 },
    { label: "Systems Engineering", value: 92 },
    { label: "3D Printing & Manufacturing", value: 80 },
  ],
  transferable: [
    { label: "Problem Solving", value: 95 },
    { label: "Cross-functional Collaboration", value: 90 },
    { label: "Leadership & Mentoring", value: 85 },
    { label: "User-Centered Design", value: 82 },
  ],
};

function SkillsSection({ skills = defaultSkills }) {
  return (
    <Section className="skills-competencies">
      <div className="container">
        <h2 className="skills-competencies__title">Core Competencies</h2>
        <div className="skills-grid">
          <SkillsCard title="Technical Skills" items={skills.tech} />
          <SkillsCard title="Transferable Skills" items={skills.transferable} />
        </div>
      </div>
    </Section>
  );
}

export default SkillsSection;
