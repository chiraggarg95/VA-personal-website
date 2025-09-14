// Enhanced header and parallax scrolling effects (to be refactored into React hooks)
document.addEventListener('DOMContentLoaded', function() {
    // Transparent header that becomes sticky on scroll
    const header = document.querySelector('header');
    const hero = document.querySelector('.parallax-hero');
    let heroHeight;
    // Calculate hero height (accounting for mobile)
    function calculateHeroHeight() { /* ... */ }
    // Call once on load
    calculateHeroHeight();
    // Recalculate on resize
    window.addEventListener('resize', calculateHeroHeight);
});
