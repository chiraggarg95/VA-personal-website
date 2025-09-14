import React from "react";
import Carousel from "../ui/Carousel";
import AirbusLogo from "../../assets/AirbusLogo.png";
import IITBombayLogo from "../../assets/IITBombayLogo.jfif";
import StudentLogo from "../../assets/home pic.jpg";
import testimonialsData from "../../data/testimonials.json";

const imageMap = {
  AirbusLogo: AirbusLogo,
  IITBombayLogo: IITBombayLogo,
  StudentLogo: StudentLogo,
};

export const testimonials = testimonialsData.map((t) => ({
  ...t,
  author: {
    ...t.author,
    image: imageMap[t.author.imageKey] || t.author.imageKey,
  },
}));

function TestimonialsCarousel({ testimonials }) {
  return (
    <Carousel
      items={testimonials}
      viewportClass="testimonials-viewport"
      renderItem={(t) => (
        <>
          <div className="testimonial-content">
            <p>{t.content}</p>
          </div>
          <div className="testimonial-author">
            <div className="author-image">
              <img src={t.author.image} alt="Testimonial author portrait" />
            </div>
            <div className="author-info">
              <h4>{t.author.name}</h4>
              <p>{t.author.company}</p>
            </div>
          </div>
        </>
      )}
    />
  );
}

export default TestimonialsCarousel;
