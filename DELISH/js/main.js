// Burger menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Dropdowns for mobile
const dropdowns = document.querySelectorAll('.dropdown > a');
dropdowns.forEach(drop => {
  drop.addEventListener('click', function(e) {
    if (window.innerWidth <= 500) {
      e.preventDefault();
      const menu = this.nextElementSibling;
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  });
});
