// React hook for dark mode toggle, based on darkmode.js
import { useEffect } from 'react';

export default function useDarkMode() {
  useEffect(() => {
    const toggleSwitch = document.querySelector('#checkbox');
    if (!toggleSwitch) return;
    // Check for saved theme preference in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.add(currentTheme);
      if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
      }
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
        localStorage.setItem('theme', 'dark-mode');
      }
    }
    function switchTheme(e) {
      if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
      }
    }
    toggleSwitch.addEventListener('change', switchTheme, false);
    return () => {
      toggleSwitch.removeEventListener('change', switchTheme, false);
    };
  }, []);
  return null;
}
