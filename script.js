const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}
