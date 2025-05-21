// Enhanced header and parallax scrolling effects
document.addEventListener('DOMContentLoaded', function() {
    // Transparent header that becomes sticky on scroll
    const header = document.querySelector('header');
    const hero = document.querySelector('.parallax-hero');
    let heroHeight;
    
    // Calculate hero height (accounting for mobile)
    function calculateHeroHeight() {
        heroHeight = hero.offsetHeight;
    }
    
    // Call once on load
    calculateHeroHeight();
    
    // Recalculate on resize
    window.addEventListener('resize', calculateHeroHeight);
    
    function updateHeaderAppearance() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            
            // Add padding to body to prevent content jump when header becomes fixed
            if (!document.body.style.paddingTop) {
                document.body.style.paddingTop = header.offsetHeight + 'px';
            }
        } else {
            header.classList.remove('scrolled');
            document.body.style.paddingTop = '0';
        }
    }
    
    // Initial call
    updateHeaderAppearance();
    
    // Add scroll event listener for header
    window.addEventListener('scroll', updateHeaderAppearance, { passive: true });
    
    // Parallax effect for background
    const parallaxBg = document.querySelector('.parallax-background');
    
    // Exit if no parallax background or if user prefers reduced motion
    if (!parallaxBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    // Variables for smooth parallax
    let ticking = false;
    
    // Function to update parallax position
    function updateParallax() {
        const scrollY = window.scrollY;
        const speed = 0.3; // Adjust for faster/slower effect
        
        // Only apply parallax if we're within the hero section
        if (scrollY <= heroHeight) {
            // Move background more slowly than the scroll
            parallaxBg.style.transform = `translateY(${scrollY * speed}px)`;
        }
        
        ticking = false;
    }
    
    // Throttle scroll events for better performance
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            
            ticking = true;
        }
    }
    
    // Add scroll event listener for parallax
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initialize parallax position
    updateParallax();
});