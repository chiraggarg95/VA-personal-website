// Dark Mode Toggle JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle checkbox
    const toggleSwitch = document.querySelector('#checkbox');
    
    // Check for saved theme preference in localStorage
    const currentTheme = localStorage.getItem('theme');
    
    // If a preference exists in localStorage
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        
        // Update the toggle switch if dark mode is saved
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    } else {
        // Check if user's system prefers dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            toggleSwitch.checked = true;
            localStorage.setItem('theme', 'dark-mode');
        }
    }
    
    // Function to switch theme
    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }    
    }
    
    // Add event listener to toggle switch
    toggleSwitch.addEventListener('change', switchTheme, false);
});