import React from "react";
import Navbar from "./Navbar";

function Header({ activePage }) {
  return (
    <header>
      <div className="logo">VA</div>
      <Navbar activePage={activePage} />
      <div className="mobile-toggle" aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider"></div>
        </label>
      </div>
    </header>
  );
}

export default Header;