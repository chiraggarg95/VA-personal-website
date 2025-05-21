// JavaScript for Skills Flashcards
document.addEventListener('DOMContentLoaded', function() {
    // Select all skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Add click event listener to each card
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle the 'flipped' class on click
            this.classList.toggle('flipped');
        });
        
        // Make sure cards are keyboard accessible too
        card.setAttribute('tabindex', '0');
        
        // Add keyboard support (Enter and Space keys)
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('flipped');
            }
        });
    });
});