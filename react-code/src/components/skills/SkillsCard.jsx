import React from "react";
import SkillRow from "./SkillRow";

function SkillsCard({ title, items = [] }) {
  return (
    <article className="skills-card">
      <h3 className="skills-card__title">{title}</h3>
      <div className="skills-card__divider" aria-hidden="true"></div>
      <div className="skills-card__body">
        {items.map((s, i) => (
          <SkillRow key={i} label={s.label} value={s.value} />
        ))}
      </div>
    </article>
  );
}

export default SkillsCard;

