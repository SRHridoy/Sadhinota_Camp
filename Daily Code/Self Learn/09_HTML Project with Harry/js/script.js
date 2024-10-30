// Animation for input focus
const searchInput = document.querySelector('main input');

searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0 0 10px 2px #ff4d4d'; // Red glow
});

searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = 'none';
});

// Fade-in effect for the main content
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    mainContent.style.transition = 'opacity 1.5s ease-in-out';
    
    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 500); // Delay to add some effect
});
