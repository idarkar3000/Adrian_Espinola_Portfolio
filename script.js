/* ============================
   script.js completo (corregido)
   ============================ */

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  navbar.style.backgroundColor = window.scrollY > 50 ? 'rgba(10,10,10,0.98)' : 'rgba(10,10,10,0.95)';
});


/* ============================
   Carrusel: solo 3 visibles con caption siempre visible
   ============================ */
const carousel = document.querySelector('.carousel');

if (carousel) {
  const images = Array.from(carousel.querySelectorAll('img'));
  let currentIndex = 0;
  const n = images.length;

  // Crear div para el caption
  const captionDiv = document.createElement('div');
  captionDiv.className = 'carousel-caption';
  captionDiv.style.position = 'absolute';
  captionDiv.style.bottom = '60px';
  captionDiv.style.left = '50%';
  captionDiv.style.transform = 'translateX(-50%)';
  captionDiv.style.color = 'var(--text)';
  captionDiv.style.fontSize = '1.2rem';
  captionDiv.style.textAlign = 'center';
  captionDiv.style.padding = '0.25rem 0.5rem';
  captionDiv.style.background = 'rgba(0,0,0,0.3)';
  captionDiv.style.borderRadius = '6px';
  captionDiv.style.transition = 'opacity 0.3s';
  captionDiv.style.pointerEvents = 'none';
  captionDiv.style.opacity = 1;
  carousel.parentElement.appendChild(captionDiv);

  // Manejo cuando hay 0,1 o 2 imágenes
  function updateEdgeCases() {
    if (n === 0) return;
    if (n === 1) {
      images[0].className = 'center';
      captionDiv.textContent = images[0].dataset.caption || images[0].alt || '';
      return;
    }
    if (n === 2) {
      images.forEach((img, i) => img.className = (i === 0) ? 'center' : 'right');
      captionDiv.textContent = images[0].dataset.caption || images[0].alt || '';
      return;
    }
  }

  function updateCarousel() {
    if (n <= 2) { updateEdgeCases(); return; }

    const prev = (currentIndex - 1 + n) % n;
    const next = (currentIndex + 1) % n;

    images.forEach((img, idx) => {
      img.classList.remove('center','left','right','hidden');
      if (idx === currentIndex) {
        img.classList.add('center');
      } else if (idx === prev) {
        img.classList.add('left');
      } else if (idx === next) {
        img.classList.add('right');
      } else {
        img.classList.add('hidden');
      }
    });

    const centerImg = images[currentIndex];
    captionDiv.textContent = centerImg.dataset.caption || centerImg.alt || '';
  }

  // click simple: poner la imagen clicada como centro (si es visible)
  carousel.addEventListener('click', (e) => {
    const clicked = e.target;
    if (clicked.tagName !== 'IMG') return;
    if (clicked.classList.contains('hidden')) return;

    const idx = images.indexOf(clicked);
    if (idx !== -1 && idx !== currentIndex) {
      currentIndex = idx;
      updateCarousel();
    }
  });

  // doble-click: abrir lightbox
  carousel.addEventListener('dblclick', (e) => {
    const clicked = e.target;
    if (clicked.tagName !== 'IMG') return;
    if (clicked.classList.contains('hidden')) return;

    openLightbox(clicked.src, clicked.dataset.caption || clicked.alt || '');
  });

  // teclas flecha para navegar
  window.addEventListener('keydown', (e) => {
    if (!carousel.matches(':hover') && !document.querySelector('.carousel img.center')) return;
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + n) % n;
      updateCarousel();
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % n;
      updateCarousel();
    }
  });

  // inicializa
  updateCarousel();
}


/* ============================
   Lightbox (función reutilizable)
   ============================ */
function openLightbox(src, alt) {
  const lightbox = document.createElement('div');
  lightbox.style.position = 'fixed';
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.background = 'rgba(0,0,0,0.9)';
  lightbox.style.display = 'flex';
  lightbox.style.alignItems = 'center';
  lightbox.style.justifyContent = 'center';
  lightbox.style.zIndex = 9999;
  lightbox.style.cursor = 'zoom-out';

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.style.maxWidth = '92%';
  img.style.maxHeight = '92%';
  img.style.borderRadius = '12px';
  img.style.boxShadow = '0 20px 60px rgba(0,0,0,0.7)';
  img.style.userSelect = 'none';

  lightbox.appendChild(img);

  lightbox.addEventListener('click', () => document.body.removeChild(lightbox));
  window.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape' && document.body.contains(lightbox)) {
      document.body.removeChild(lightbox);
      window.removeEventListener('keydown', escHandler);
    }
  });

  document.body.appendChild(lightbox);
}


/* ============================
   Resaltado dinámico en navbar
   ============================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const options = {
  threshold: 0.5, // el 50% de la sección debe estar visible
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});


