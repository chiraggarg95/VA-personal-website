import React from "react";
import AirbusLogo from "../assets/AirbusLogo.png";
import IITBombayLogo from "../assets/IITBombayLogo.jfif";
import StudentLogo from "../assets/home pic.jpg";

// Example testimonials array (now with author image, name, and company)
export const testimonials = [
	{
		content: `It has been my distinct pleasure to lead Vaishnavi on the ESI team for the past two years. From the moment she joined, her exceptional talent and remarkable ability to quickly grasp complex processes were evident. Within a remarkably short timeframe, Vaishnavi became a vital contributor, providing crucial support during peak periods.
    Beyond her individual contributions, Vaishnavi has consistently demonstrated strong collaborative spirit and leadership potential. She has been instrumental in onboarding new team members, proactively taking the initiative to conduct training sessions and provide ongoing guidance. Her dedication to fostering a supportive team environment is truly commendable.
    Vaishnavi possesses a strong work ethic, consistently tackling new challenges with enthusiasm and meticulous attention to detail. Her proactive approach and commitment to delivering error-free results make her an invaluable asset to our team. I am genuinely delighted to have her on the ESI team.`,
		author: {
			name: "Vinay Joshi (Team Lead)",
			company: "Airbus, Bengaluru",
			image: AirbusLogo
		}
	},
	{
		content: `Her work on the Star Tracker project was pivotal for our satellite mission. She brings rigor, creativity, and a collaborative spirit to every challenge.`,
		author: {
			name: "Prof. S. Rao",
			company: "IIT Bombay",
			image: IITBombayLogo
		}
	},
	{
		content: `Vaishnavi's mentorship and leadership have made a real difference to our student teams. She is a role model for aspiring engineers.`,
		author: {
			name: "K. Mehta",
			company: "Student Satellite Program",
			image: StudentLogo
		}
	}
];

function TestimonialsCarousel({ testimonials }) {
	return (
		<div className="testimonials-carousel">
			<div className="testimonials-track">
				{testimonials.map((t, idx) => (
					<div className="testimonial-card" key={idx}>
						<div className="testimonial-content">
							<p>{t.content}</p>
						</div>
						<div className="testimonial-author">
							<div className="author-image">
								<img
									src={t.author.image}
									alt="Testimonial author portrait"
								/>
							</div>
							<div className="author-info">
								<h4>{t.author.name}</h4>
								<p>{t.author.company}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* Controls and indicators can be added here if needed */}
		</div>
	);
}

export default TestimonialsCarousel;
