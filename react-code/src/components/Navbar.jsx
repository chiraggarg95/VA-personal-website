import React from "react";
import { Link } from "react-router-dom";

function Navbar({ activePage }) {
  return (
    <nav id="navbar">
      <ul>
        <li className={activePage === "home" ? "active" : ""}><Link to="/">Home</Link></li>
        <li className={activePage === "about" ? "active" : ""}><Link to="/about">About Me</Link></li>
        <li className={activePage === "projects" ? "active" : ""}><Link to="/projects">Projects</Link></li>
        <li className={activePage === "blog" ? "active" : ""}><Link to="/blog">Blog</Link></li>
        <li className={activePage === "resume" ? "active" : ""}><Link to="/resume">Résumé</Link></li>
        <li className={activePage === "contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
