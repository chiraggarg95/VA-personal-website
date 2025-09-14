import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Meta from "../components/Meta";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import useDarkMode from "../utils/useDarkMode";

function Contact() {
  useDarkMode();

  return (
    <>
      <Meta
        title="Contact | Vaishnavi G Agarwal"
        description="Get in touch with Vaishnavi G Agarwal, experienced engineer for collaboration opportunities."
        ogTitle="Contact | Vaishnavi G Agarwal"
        ogDescription="Get in touch with Vaishnavi G Agarwal, experienced engineer for collaboration opportunities."
        ogImage="/api/placeholder/1200/630"
        ogUrl="https://vaishnaviagarwal.com/contact"
      />
      <Header activePage="contact" />

      <main>
        <PageHeader
          title="Let's Connect"
          subtitle="I'm always open to discussing engineering projects, career opportunities, or new collaborations"
        />

        <Section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-block">
                  <h2>Get in Touch</h2>
                  <p>Whether you're looking to collaborate on a project, have questions about my work, or just want to connect, feel free to reach out through any of the following channels:</p>
                  <div className="contact-methods">
                    <div className="contact-method">
                      <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-details">
                        <h3>Email</h3>
                        <a href="mailto:vaishnaviagarwal.iitb@gmail.com">vaishnaviagarwal.iitb@gmail.com</a>
                      </div>
                    </div>
                    <div className="contact-method">
                      <div className="contact-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </div>
                      <div className="contact-details">
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/vaishnavi-a-5774321a9/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vaishnavi-agarwal</a>
                      </div>
                    </div>
                    <div className="contact-method">
                      <div className="contact-icon">
                        <i className="fab fa-github"></i>
                      </div>
                      <div className="contact-details">
                        <h3>GitHub</h3>
                        <a href="#" target="_blank">github.com/vaishnavi-agarwal</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="faq-block">
                  <h2>Frequently Asked Questions</h2>
                  <div className="faq-item">
                    <h3>Are you available for consulting?</h3>
                    <p>Yes, I'm open to select consulting opportunities, particularly in aerospace, mechanical engineering, and systems integration projects where I can provide meaningful technical guidance.</p>
                  </div>
                  <div className="faq-item">
                    <h3>Do you speak at events?</h3>
                    <p>I regularly speak at engineering conferences and technical meetups on topics including aerospace systems, satellite technology, and cross-functional engineering collaboration.</p>
                  </div>
                  <div className="faq-item">
                    <h3>What's your availability for new roles?</h3>
                    <p>While I'm content in my current position at Airbus, I'm always open to discussing compelling opportunities that align with my career goals in aerospace and engineering.</p>
                  </div>
                  <div className="faq-item">
                    <h3>What types of projects interest you most?</h3>
                    <p>I'm particularly interested in aerospace systems, satellite technology, mechanical design projects, and cross-functional engineering challenges that require both technical expertise and user-centered thinking.</p>
                  </div>
                </div>
              </div>
              <div className="contact-form-container">
                <h2>Send Me a Message</h2>
                <p className="form-description">Use the form below to send me a message directly. I'll get back to you as soon as possible!</p>
                <div className="google-form-container">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSef6vfWTHRXJSug7Gw7lqydB9t4pWI8IkHm3I8-kRY92sqjpQ/viewform?embedded=true"
                    width="640"
                    height="906"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Contact Form"
                  >Loading…</iframe>
                </div>
                <div className="form-fallback">
                  <p>Having trouble with the form above? <a href="https://forms.gle/xLtbHHWc3hmZwQZq6" target="_blank" rel="noopener noreferrer">Open it in a new tab</a></p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="location-section">
          <div className="container">
            <h2>Based in Bengaluru</h2>
            <div className="location-content">
              <div className="location-map">
                <img src="/api/placeholder/600/400" alt="Bengaluru location" />
              </div>
              <div className="location-info">
                <p>While I'm based in Bengaluru, Karnataka, I collaborate with teams globally. Whether you're local or international, I'm comfortable working across time zones and cultural contexts.</p>
                <p>For local connections, I'm often at engineering meetups and tech events around the city. Feel free to reach out if you'd like to connect in person!</p>
                <div className="location-details">
                  <div className="location-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Bengaluru, Karnataka, India</span>
                  </div>
                  <div className="location-item">
                    <i className="fas fa-clock"></i>
                    <span>IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
