import { useEffect } from "react";

/**
 * Custom hook for sticky navbar and mobile menu toggle logic.
 * Usage: call useStickyNavAndMobileMenu() at the top of your component.
 */
const useStickyNavAndMobileMenu = () => {
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
    let toggleHandler;
    if (mobileToggle && nav) {
      toggleHandler = function () {
        nav.classList.toggle("active");
        this.classList.toggle("active");
      };
      mobileToggle.addEventListener("click", toggleHandler);
    }

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (mobileToggle && toggleHandler) {
        mobileToggle.removeEventListener("click", toggleHandler);
      }
    };
  }, []);
};

export default useStickyNavAndMobileMenu;
