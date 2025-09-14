
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import BisleriImg from "../assets/Bisleri.jfif";

import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useDarkMode from "../utils/useDarkMode";

function Blog() {
  useDarkMode();
  useEffect(() => {
    // Sticky navbar
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Mobile menu toggle
    const mobileToggle = document.querySelector(".mobile-toggle");
    const nav = document.querySelector("nav");
    if (mobileToggle && nav) {
      const toggleHandler = function () {
        nav.classList.toggle("active");
        this.classList.toggle("active");
      };
      mobileToggle.addEventListener("click", toggleHandler);
      // Clean up
      return () => {
        window.removeEventListener("scroll", handleScroll);
        mobileToggle.removeEventListener("click", toggleHandler);
      };
    } else {
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Meta
        title="Blog | Vaishnavi G Agarwal"
        description="Thoughts on engineering innovation, technology trends, and problem-solving approaches."
        ogTitle="Blog | Vaishnavi G Agarwal"
        ogDescription="Thoughts on engineering innovation, technology trends, and problem-solving approaches."
        ogImage="/api/placeholder/1200/630"
        ogUrl="https://vaishnaviagarwal.com/blog"
      />
      <Header activePage="blog" />

      <main>
        <section className="page-header">
          <div className="container">
            <h1>Engineering Insights</h1>
            <p>Thoughts on engineering innovation, technology trends, and problem-solving approaches</p>
          </div>
        </section>

        <section className="blog-content">
          <div className="container">
            <div className="blog-single-layout">
              <article className="blog-post" id="post1">
                <div className="post-image">
                  <img src={BisleriImg} alt="Bisleri water bottles and business strategy" />
                </div>
                <div className="post-meta">
                  <span className="post-date">January 23, 2025</span>
                  <span className="post-category">Business Strategy</span>
                </div>
                <h2 className="post-title">It's Just Water... Right? Think Again. 💧</h2>
                <p className="post-excerpt">How Bisleri built one of India's most iconic brands by mastering supply chain excellence and strategic positioning.</p>
                <div className="post-content">
                  <p>The other night, I was sitting with my cousins talking about companies—how some grow fast, some burn out, and some evolve to last.</p>
                  <p>Somewhere in the middle, I asked: "Wait, how does Bisleri even make money? It's just water."</p>
                  <p>That question sent me down a rabbit hole. And what I found:</p>
                  <p><strong>Bisleri</strong>: They've built one of the smartest, quietest business empires in India.</p>
                  <h3>The Foundation Story</h3>
                  <p>In 1969, Parle bought the Italian brand Bisleri for ₹4 lakh. At the time, bottled water was a luxury, limited to fancy hotels.</p>
                  <p>But Parle didn't sell luxury. They sold trust. ₹5 bottles that made clean water accessible, reliable, and even aspirational.</p>
                  <h3>The Genius of Supply Chain Mastery</h3>
                  <p>Over the years, Bisleri didn't just stick to water. They rolled out premium (Vedica), soda (high-margin gold), soft drinks (Spyci), same packaging system.</p>
                  <p>But every new product rode the same supply chain—same trucks, same shelves, same retail.</p>
                  <p><strong>So, how does Bisleri really make money?</strong></p>
                  <blockquote>
                    <p>Not all obvious are equal. Their biggest profits come from: The supply chain they own, not just the water they sell.</p>
                  </blockquote>
                  <p>Here are the key revenue streams:</p>
                  <ul>
                    <li><strong>The green cap you trust</strong></li>
                    <li><strong>A star Parle Ki Bottle Bisleri Nahi Hai?</strong></li>
                    <li><strong>150+ plants, 6,000+ distributors</strong></li>
                    <li><strong>Multilingual reach, Bisleri presence</strong></li>
                  </ul>
                  <h3>The Strategic Brilliance</h3>
                  <p>They didn't chase attention. They owned association. And that's how Bisleri became the default word for bottled water in India.</p>
                  <p>In a world obsessed with disruption, Bisleri built an empire by mastering the most basic product we all need.</p>
                  <p><strong>Sometimes, boring is brilliant.</strong> 🔥</p>
                  <p className="blog-note"><em>What's your take on companies that build empires through operational excellence rather than flashy innovation? I'd love to hear your thoughts!</em></p>
                </div>
                <div className="tags">
                  <span>Business Strategy</span>
                  <span>Supply Chain</span>
                  <span>Brand Building</span>
                  <span>Indian Business</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

  <Footer />
    </>
  );
}

export default Blog;
