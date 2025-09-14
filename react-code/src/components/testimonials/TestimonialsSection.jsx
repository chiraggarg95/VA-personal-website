import React from "react";
import Section from "../layout/Section";
import TestimonialsCarousel from "./TestimonialsCarousel";
import data from "../../data/testimonials.json";
import AirbusLogo from "../../assets/AirbusLogo.png";
import IITBombayLogo from "../../assets/IITBombayLogo.jfif";
import StudentLogo from "../../assets/home pic.jpg";

export default function TestimonialsSection({ title = "What Colleagues Say", subtitle, items = data, ...props }) {
  const mapped = items.map((t) => {
    if (t.id === 't1') return { ...t, author: { ...t.author, avatarUrl: t.author.avatarUrl || AirbusLogo }, orgLogoUrl: AirbusLogo };
    if (t.id === 't2') return { ...t, author: { ...t.author, avatarUrl: t.author.avatarUrl || IITBombayLogo }, orgLogoUrl: IITBombayLogo };
    if (t.id === 't3') return { ...t, author: { ...t.author, avatarUrl: t.author.avatarUrl || StudentLogo }, orgLogoUrl: StudentLogo };
    return t;
  });
  return (
    <Section className="testimonials">
      <div className="container">
        <h2>{title}</h2>
        {subtitle && <p className="section-intro">{subtitle}</p>}
        <TestimonialsCarousel items={mapped} autoPlay interval={7000} showDots showArrows readFullEnabled clampLines={6} {...props} />
      </div>
    </Section>
  );
}
