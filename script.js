const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Show the first slide
slides.forEach((slide, i) => slide.style.display = i === 0 ? 'block' : 'none');

// Next / Prev buttons
document.getElementById('next').addEventListener('click', () => {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
});

document.getElementById('prev').addEventListener('click', () => {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
});

// Optional: Arrow keys navigation
document.addEventListener('keydown', (e) => {
  if (e.key === "ArrowRight") document.getElementById('next').click();
  if (e.key === "ArrowLeft") document.getElementById('prev').click();
});
