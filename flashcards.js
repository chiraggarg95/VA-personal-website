// Updated flashcards.js - Enhanced skill card functionality with fixed structure

document.addEventListener('DOMContentLoaded', function() {
    // Ensure toggleSkillDetails function exists globally
    if (typeof window.toggleSkillDetails !== 'function') {
        window.toggleSkillDetails = function(card) {
            if (card) {
                card.classList.toggle('flipped');
                
                // Update ARIA attributes for accessibility
                const isFlipped = card.classList.contains('flipped');
                card.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
                
                // Add a small delay for screen readers
                if (isFlipped) {
                    setTimeout(() => {
                        const backContent = card.querySelector('.skill-card-back h4');
                        if (backContent) {
                            backContent.setAttribute('aria-live', 'polite');
                        }
                    }, 300);
                }
            }
        };
        console.log('Fixed toggleSkillDetails function');
    }

    // Add click event listeners to all skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        // Add click event listener
        card.addEventListener('click', function(e) {
            // Prevent double-triggering if onclick is also present
            e.stopPropagation();
            this.classList.toggle('flipped');
            
            // Update ARIA attributes
            const isFlipped = this.classList.contains('flipped');
            this.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
        });
        
        // Add keyboard accessibility
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('flipped');
                
                // Update ARIA attributes
                const isFlipped = this.classList.contains('flipped');
                this.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
            }
            
            // Allow ESC to flip back to front
            if (e.key === 'Escape' && this.classList.contains('flipped')) {
                this.classList.remove('flipped');
                this.setAttribute('aria-pressed', 'false');
            }
        });
        
        // Make sure card is focusable
        if (!card.hasAttribute('tabindex')) {
            card.setAttribute('tabindex', '0');
        }
        
        // Add ARIA attributes for accessibility
        card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');
        card.setAttribute('aria-label', 'Flip card to see details');
        
        // Add title attribute for better UX
        const frontTitle = card.querySelector('.skill-card-front h4');
        if (frontTitle) {
            card.setAttribute('title', `Click to see details about ${frontTitle.textContent}`);
        }
    });
    
    // Add visual enhancements for better user experience
    document.querySelectorAll('.skill-card').forEach(card => {
        // Add focus outline for keyboard navigation
        card.addEventListener('focus', function() {
            this.style.outline = '3px solid var(--primary-light)';
            this.style.outlineOffset = '3px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
        
        // Add subtle hover effect that doesn't interfere with flip animation
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('flipped')) {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('flipped')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });
    
    // Add instruction text for better UX
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection && !skillsSection.querySelector('.skills-instruction')) {
        const instruction = document.createElement('p');
        instruction.className = 'skills-instruction';
        instruction.textContent = 'Click on any skill card to see detailed information';
        instruction.style.textAlign = 'center';
        instruction.style.color = 'var(--dark-gray)';
        instruction.style.marginBottom = 'var(--space-lg)';
        instruction.style.fontSize = '1rem';
        instruction.style.fontStyle = 'italic';
        
        const skillsContent = skillsSection.querySelector('.skills-content');
        if (skillsContent) {
            skillsContent.insertBefore(instruction, skillsContent.firstChild);
        }
    }
    
    // Handle card height consistency
    function adjustCardHeights() {
        document.querySelectorAll('.skills-card-grid').forEach(grid => {
            const cards = grid.querySelectorAll('.skill-card');
            let maxHeight = 0;
            
            // Reset heights first
            cards.forEach(card => {
                card.style.height = 'auto';
            });
            
            // Find the maximum height
            cards.forEach(card => {
                const height = card.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            
            // Set all cards to the same height
            cards.forEach(card => {
                card.style.height = maxHeight + 'px';
            });
        });
    }
    
    // Adjust heights on load and resize
    adjustCardHeights();
    window.addEventListener('resize', adjustCardHeights);
    
    // Add smooth animations for better experience
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        // Add staggered entrance animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Log successful initialization
    console.log('Skill cards initialized successfully');
    console.log(`Found ${document.querySelectorAll('.skill-card').length} skill cards`);
});

// Additional utility function to flip all cards back to front
function resetAllSkillCards() {
    document.querySelectorAll('.skill-card.flipped').forEach(card => {
        card.classList.remove('flipped');
        card.setAttribute('aria-pressed', 'false');
    });
}

// Function to flip a specific card by index
function flipSkillCard(index) {
    const cards = document.querySelectorAll('.skill-card');
    if (cards[index]) {
        cards[index].classList.toggle('flipped');
        const isFlipped = cards[index].classList.contains('flipped');
        cards[index].setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
    }
}

// Export functions for potential external use
window.resetAllSkillCards = resetAllSkillCards;
window.flipSkillCard = flipSkillCard;