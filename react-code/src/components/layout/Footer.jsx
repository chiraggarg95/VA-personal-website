import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">VA</div>
          <div className="footer-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/resume">Résumé</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Medium"><i className="fab fa-medium-m"></i></a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Vaishnavi G Agarwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
 
