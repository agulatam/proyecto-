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

// Función para cerrar el lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
  lightbox.setAttribute('aria-hidden', 'true');
}

// Funciones para navegar entre imágenes
function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}

// Función para abrir el lightbox
function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  lightbox.setAttribute('aria-hidden', 'false');
  lbClose.focus();
}

// Función para actualizar el contenido del lightbox
function updateLightbox() {
  const image = images[currentIndex];
  lbImg.src = image.src;
  lbInfo.textContent = image.alt || '';
}

// Event listeners para los botones de navegación
lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', showPrev);
lbNext.addEventListener('click', showNext);

// Navegación con el teclado
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPrev();
        break;
      case 'ArrowRight':
        showNext();
        break;
    }
  }
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

// Modo oscuro
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const rootStyles = getComputedStyle(root);

const lightTheme = {
  '--bg-page': rootStyles.getPropertyValue('--bg-page').trim(),
  '--bg-header': rootStyles.getPropertyValue('--bg-header').trim(),
  '--bg-card': rootStyles.getPropertyValue('--bg-card').trim(),
  '--text-main': rootStyles.getPropertyValue('--text-main').trim(),
  '--accent-1': rootStyles.getPropertyValue('--accent-1').trim(),
  '--accent-2': rootStyles.getPropertyValue('--accent-2').trim(),
  '--shadow': rootStyles.getPropertyValue('--shadow').trim(),
  '--text-inverse': rootStyles.getPropertyValue('--text-inverse').trim()
};

const darkTheme = {
  '--bg-page': rootStyles.getPropertyValue('--bg-page-dark').trim(),
  '--bg-header': rootStyles.getPropertyValue('--bg-header-dark').trim(),
  '--bg-card': rootStyles.getPropertyValue('--bg-card-dark').trim(),
  '--text-main': rootStyles.getPropertyValue('--text-main-dark').trim(),
  '--accent-1': rootStyles.getPropertyValue('--accent-1-dark').trim(),
  '--accent-2': rootStyles.getPropertyValue('--accent-2-dark').trim(),
  '--shadow': rootStyles.getPropertyValue('--shadow-dark').trim(),
  '--text-inverse': rootStyles.getPropertyValue('--text-inverse-dark').trim()
};

themeToggle.addEventListener('click', (e) => {
  e.preventDefault();
  const isDark = document.body.classList.toggle('dark-mode');
  const theme = isDark ? darkTheme : lightTheme;
  Object.keys(theme).forEach(prop => {
    root.style.setProperty(prop, theme[prop]);
  });
});

