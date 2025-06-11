// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbInfo = document.getElementById('lb-info');
const lbClose = document.querySelector('.lb-close');
const lbPrev = document.querySelector('.lb-prev');
const lbNext = document.querySelector('.lb-next');

// Array de imágenes y sus descripciones
const images = [
  { src: 'static/img/pregunta 1.jpg', info: 'Panorámica de mina a cielo abierto' },
  { src: 'static/img/pregunta 2.jpeg', info: 'Métodos de extracción' },
  { src: 'static/img/pregunta 3.jpg', info: 'Exploración geológica' },
  { src: 'static/img/pregunta 4.jpg', info: 'Transporte de mineral' },
  { src: 'static/img/pregunta 5.jpg', info: 'Planta de beneficio' },
  { src: 'static/img/pregunta 6.jpg', info: 'Seguridad geotécnica' },
  { src: 'static/img/pregunta 7.jpg', info: 'Impacto ambiental' },
  { src: 'static/img/pregunta 8.jpg', info: 'Impacto social' },
  { src: 'static/img/pregunta 9.jpg', info: 'Minería 4.0' },
  { src: 'static/img/imagen 10.jpg', info: 'Usos de metales' }
];

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
  lbInfo.textContent = image.info;
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
document.querySelectorAll('.question img').forEach((img, index) => {
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