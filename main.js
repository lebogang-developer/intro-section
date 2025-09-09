const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('open-icon');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});
