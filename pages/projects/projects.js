// CAROUSEL APP

const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(carouselTrack.children);
const rightBtn = document.querySelector('.carousel-button-right');
const leftBtn = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide, targetDot, targetIndex) => {
  const currentDot = dotsNav.querySelector('.current-slide');
  carouselTrack.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');

  if (targetIndex === 0) {
    leftBtn.classList.add('carousel-btn-hidden');
    rightBtn.classList.remove('carousel-btn-hidden');
  } else if (targetIndex == slides.length - 1) {
    leftBtn.classList.remove('carousel-btn-hidden');
    rightBtn.classList.add('carousel-btn-hidden');
  } else {
    leftBtn.classList.remove('carousel-btn-hidden');
    rightBtn.classList.remove('carousel-btn-hidden');
  }
};

leftBtn.addEventListener('click', (e) => {
  const currentSlide = carouselTrack.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const slideIndex = slides.findIndex((slide) => slide === prevSlide);
  const targetDot = dots[slideIndex];

  moveToSlide(currentSlide, prevSlide, targetDot, slideIndex);
  if (prevSlide == currentSlide) {
    leftBtn.classlist.add('carousel-btn-hidden');
    moveToSlide(currentSlide, prevSlide, targetDot);
  }
});

rightBtn.addEventListener('click', (e) => {
  const currentSlide = carouselTrack.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const slideIndex = slides.findIndex((slide) => slide === nextSlide);
  const targetDot = dots[slideIndex];

  if (slideIndex != -1)
    moveToSlide(currentSlide, nextSlide, targetDot, slideIndex);
});

dotsNav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = carouselTrack.querySelector('.current-slide');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(currentSlide, targetSlide, targetDot, targetIndex);
});
