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
