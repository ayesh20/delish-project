
const slider = document.getElementById('gallery-slider');
const slides = slider.children;
const slideCount = slides.length;
let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 16; // 16px margin (8px each side)
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

document.getElementById('gallery-prev').onclick = function() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
};

document.getElementById('gallery-next').onclick = function() {
  if (currentIndex < slideCount - 3) { // Show 3 at a time
    currentIndex++;
    updateSlider();
  }
};

// Responsive: recalculate on resize
window.addEventListener('resize', updateSlider);
