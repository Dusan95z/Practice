// HEADER ARROW FUNCTIONALITY

const headerArrow = document.querySelector('.header-arrow');
if (window.pageYOffset === 0) {
  headerArrow.style.animationName = 'none';
}
document.addEventListener('scroll', (e) => {
  if (window.pageYOffset === 0) {
    headerArrow.style.animationName = 'none';
  } else {
    headerArrow.style.animationName = 'pulsatingArrow';
  }
});

headerArrow.addEventListener('click', (e) => {
  window.scrollTo(0, 0);
});

// RESPONSIVE NAVIGATION BURGER MENU

const header = document.querySelector('.header');
const nav = document.querySelector('.header-nav');
const burgerMenu = document.querySelector('.header-burgerMenu');
const closeBurgerMenu = document.querySelector('.header-closeBurgerMenu');

burgerMenu.addEventListener('click', (e) => {
  header.classList.add('header-active');
  nav.classList.add('nav-active');
  burgerMenu.style.display = 'none';
  closeBurgerMenu.style.display = 'flex';
});

closeBurgerMenu.addEventListener('click', (e) => {
  header.classList.remove('header-active');
  nav.classList.remove('nav-active');
  burgerMenu.style.display = 'flex';
  closeBurgerMenu.style.display = 'none';
});

