// Mobile menu toggle functionality
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});



