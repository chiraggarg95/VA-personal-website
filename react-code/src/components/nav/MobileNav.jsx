import React from "react";

function MobileNav() {
  return (
    <div
      className="mobile-toggle"
      aria-label="Toggle navigation menu"
      role="button"
      aria-expanded="false"
      tabIndex={0}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default MobileNav;

