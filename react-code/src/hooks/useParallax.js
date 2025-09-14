import { useEffect } from "react";

// Applies parallax to elements with classes: parallax-layer-1/2/3
export default function useParallax() {
  useEffect(() => {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    if (parallaxLayers.length === 0) return;

    let ticking = false;
    function updateParallax() {
      const scrollY = window.scrollY;
      parallaxLayers.forEach((layer) => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          const is1 = layer.classList.contains('parallax-layer-1');
          const is2 = layer.classList.contains('parallax-layer-2');
          const is3 = layer.classList.contains('parallax-layer-3');
          const speed = is1 ? 0.4 : is2 ? 0.25 : is3 ? 0.1 : 0;
          const yOffset = scrollY * speed;
          layer.style.transform = `translateY(${yOffset}px)`;
        }
      });
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll);
    updateParallax();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}

