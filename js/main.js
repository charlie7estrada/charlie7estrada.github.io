// header scroll effect
const header = document.querySelector('header');
let scrollTicking = false;

window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 0);
        scrollTicking = false;
    });
}, { passive: true });

// automatic year update in footer
document.getElementById('year').textContent = new Date().getFullYear();

// dark mode
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});