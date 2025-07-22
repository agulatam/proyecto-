'use strict';

// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbInfo = document.getElementById('lb-info');
const lbClose = document.querySelector('.lb-close');
const lbPrev = document.querySelector('.lb-prev');
const lbNext = document.querySelector('.lb-next');

// Colección de imágenes de las tarjetas
const images = Array.from(document.querySelectorAll('.question img'));

let currentIndex = 0;

// Función para abrir el lightbox
function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Función para actualizar el contenido del lightbox
function updateLightbox() {
  const image = images[currentIndex];
  lbImg.src = image.src;
  lbInfo.textContent = image.alt || '';
}

// Event listeners para los botones de navegación
lbClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
});

lbPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
});

lbNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
});

// Event listeners para las imágenes
images.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

// Botón de scroll to top
const topButton = document.querySelector('.floating-button.top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    topButton.style.display = 'flex';
  } else {
    topButton.style.display = 'none';
  }
});

topButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}); 