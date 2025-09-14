import { useEffect } from "react";

// selectors: string | string[]
export default function useIntersectionFade(selectors, options = { threshold: 0.1 }) {
  useEffect(() => {
    const sels = Array.isArray(selectors) ? selectors : [selectors];
    const elements = sels
      .flatMap((sel) => Array.from(document.querySelectorAll(sel)))
      .filter(Boolean);
    if (elements.length === 0) return;

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [JSON.stringify(selectors)]);
}

