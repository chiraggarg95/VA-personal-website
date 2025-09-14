import { useEffect } from "react";

export default function useStickyNav() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;
      if (window.scrollY > 100) navbar.classList.add("sticky");
      else navbar.classList.remove("sticky");
    };
    window.addEventListener("scroll", handleScroll);
    // Run once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

