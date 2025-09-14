import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import BisleriImg from "../assets/Bisleri.jfif";

import Meta from "../components/Meta";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import useDarkMode from "../utils/useDarkMode";

function Blog() {
  useDarkMode();

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
        <PageHeader
          title="Engineering Insights"
          subtitle="Thoughts on engineering innovation, technology trends, and problem-solving approaches"
        />

        <Section className="blog-content">
          <div className="container">
            <div className="blog-single-layout">
              <article className="blog-article" id="post1">
                <header className="article-head">
                  <h1 className="article-title">It's Just Water... Right? Think Again. dY'\u0015</h1>
                  <div className="article-meta" aria-label="Post meta">
                    <span className="meta-item">January 23, 2025</span>
                    <span className="meta-sep">•</span>
                    <span className="meta-item">Business Strategy</span>
                    <span className="meta-sep">•</span>
                    <span className="meta-item">7 min read</span>
                  </div>
                </header>

                <figure className="article-hero">
                  <img src={BisleriImg} alt="Bisleri water bottles and business strategy" loading="lazy" />
                  <figcaption className="image-caption">Bisleri’s brand and distribution strategy</figcaption>
                </figure>

                <p className="article-dek">How Bisleri built one of India's most iconic brands by mastering supply chain excellence and strategic positioning.</p>

                <div className="article-body">
                  <p>The other night, I was sitting with my cousins talking about companies—how some grow fast, some burn out, and some evolve to last.</p>
                  <p>Somewhere in the middle, I asked: "Wait, how does Bisleri even make money? It's just water."</p>
                  <p>That question sent me down a rabbit hole. And what I found:</p>
                  <p><strong>Bisleri</strong>: They've built one of the smartest, quietest business empires in India.</p>
                  <h2>The Foundation Story</h2>
                  <p>In 1969, Parle bought the Italian brand Bisleri for ₹14 lakh. At the time, bottled water was a luxury, limited to fancy hotels.</p>
                  <p>But Parle didn't sell luxury. They sold trust. ₹15 bottles that made clean water accessible, reliable, and even aspirational.</p>
                  <h2>The Genius of Supply Chain Mastery</h2>
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
                  <h2>The Strategic Brilliance</h2>
                  <p>They didn't chase attention. They owned association. And that's how Bisleri became the default word for bottled water in India.</p>
                  <p>In a world obsessed with disruption, Bisleri built an empire by mastering the most basic product we all need.</p>
                  <p><strong>Sometimes, boring is brilliant.</strong></p>
                  <p className="blog-note"><em>What's your take on companies that build empires through operational excellence rather than flashy innovation? I'd love to hear your thoughts!</em></p>
                </div>

                <div className="post-tags">
                  <span className="tag">Business Strategy</span>
                  <span className="tag">Supply Chain</span>
                  <span className="tag">Brand Building</span>
                  <span className="tag">Indian Business</span>
                </div>
                
              </article>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default Blog;

