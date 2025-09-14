import React from "react";
import Navbar from "../nav/Navbar";
import MobileNav from "../nav/MobileNav";
import useStickyNav from "../../hooks/useStickyNav";
import useMobileNav from "../../hooks/useMobileNav";

function Header({ activePage }) {
  useStickyNav();
  useMobileNav();
  return (
    <header className="site-header">
      <div className="logo">VA</div>
      <Navbar activePage={activePage} />
      <MobileNav />
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
