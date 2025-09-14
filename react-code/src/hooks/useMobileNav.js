import { useEffect } from "react";

export default function useMobileNav() {
  useEffect(() => {
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('nav');
    if (!toggle || !nav) return;

    const setExpanded = (expanded) => {
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    };

    const open = () => {
      nav.classList.add('active');
      toggle.classList.add('active');
      setExpanded(true);
    };

    const close = () => {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      setExpanded(false);
    };

    const toggleMenu = () => {
      const isActive = nav.classList.contains('active');
      if (isActive) close(); else open();
    };

    const onClick = () => toggleMenu();
    const onKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
      if (e.key === 'Escape') {
        close();
      }
    };

    toggle.addEventListener('click', onClick);
    toggle.addEventListener('keydown', onKeyDown);
    // Ensure ARIA state is correct on mount
    setExpanded(nav.classList.contains('active'));

    return () => {
      toggle.removeEventListener('click', onClick);
      toggle.removeEventListener('keydown', onKeyDown);
    };
  }, []);
}

