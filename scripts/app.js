const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Optional: Hide navbar on scroll down, show on scroll up
/* 
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar');
    
    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.style.top = '-60px'; // Hide navbar (height of navbar)
    } else {
        // Scroll up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
*/