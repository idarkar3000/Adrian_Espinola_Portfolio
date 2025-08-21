// --- Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    const scrollPosition = window.scrollY;

    const newBackground = scrollPosition > 50 ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)';
    navbar.style.backgroundColor = newBackground;

    if (scrollPosition > 100) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});

/* ============================
    Carrusel: imágenes y videos
    ============================ */
const carousel = document.querySelector('.carousel');
let items;
let n;
let currentIndex = 0;

if (carousel) {
    items = Array.from(carousel.querySelectorAll('img, video'));
    n = items.length;

    function updateCarousel() {
        if (n === 0) return;

        items.forEach((el, idx) => {
            el.classList.remove('center', 'left', 'right', 'hidden');
            if (el.tagName === 'VIDEO') {
                el.pause();
                el.currentTime = 0;
            }

            if (idx === currentIndex) {
                el.classList.add('center');
                if (el.tagName === 'VIDEO') {
                    el.play();
                }
            } else if (n > 1) {
                const prev = (currentIndex - 1 + n) % n;
                const next = (currentIndex + 1) % n;
                if (idx === prev) {
                    el.classList.add('left');
                } else if (idx === next) {
                    el.classList.add('right');
                } else {
                    el.classList.add('hidden');
                }
            } else {
                el.classList.add('hidden');
            }
        });
    }

    // Navegación con clics en las imágenes
    carousel.addEventListener('click', (e) => {
        const clicked = e.target;
        if (!['IMG', 'VIDEO'].includes(clicked.tagName)) return;
        const idx = items.indexOf(clicked);
        if (idx !== -1 && idx !== currentIndex) {
            currentIndex = idx;
            updateCarousel();
        }
    });

    // --- Navegación táctil (swipes) ---
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    });

    function handleSwipeGesture() {
        const minSwipeDistance = 50;
        if (touchEndX < touchStartX - minSwipeDistance) {
            // Deslizamiento hacia la izquierda (avanzar)
            currentIndex = (currentIndex + 1) % n;
            updateCarousel();
        } else if (touchEndX > touchStartX + minSwipeDistance) {
            // Deslizamiento hacia la derecha (retroceder)
            currentIndex = (currentIndex - 1 + n) % n;
            updateCarousel();
        }
    }

    // Doble-click para abrir modal con descripción
    carousel.addEventListener('dblclick', (e) => {
        const clicked = e.target;
        if (!['IMG', 'VIDEO'].includes(clicked.tagName)) return;
        const idx = items.indexOf(clicked);
        openProjectModal(idx);
    });

    // Teclas flecha para navegar
    window.addEventListener('keydown', (e) => {
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
    Modal (Lightbox) con descripción
    ============================ */
function openProjectModal(initialIndex) {
    const existingModal = document.querySelector('.project-lightbox');
    if (existingModal) existingModal.remove();

    let currentModalIndex = initialIndex;

    const lightbox = document.createElement('div');
    lightbox.className = 'project-lightbox';

    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => {
        lightbox.remove();
        document.body.style.overflow = '';
    };

    const prevButton = document.createElement('span');
    prevButton.className = 'nav-button prev-button';
    prevButton.innerHTML = '&#10094;';
    prevButton.onclick = (e) => {
        e.stopPropagation();
        currentModalIndex = (currentModalIndex - 1 + n) % n;
        updateModalContent();
    };

    const nextButton = document.createElement('span');
    nextButton.className = 'nav-button next-button';
    nextButton.innerHTML = '&#10095;';
    nextButton.onclick = (e) => {
        e.stopPropagation();
        currentModalIndex = (currentModalIndex + 1) % n;
        updateModalContent();
    };

    const contentContainer = document.createElement('div');
    contentContainer.className = 'lightbox-content';
    lightbox.appendChild(contentContainer);
    lightbox.appendChild(closeButton);
    lightbox.appendChild(prevButton);
    lightbox.appendChild(nextButton);

    function updateModalContent() {
        const currentItem = items[currentModalIndex];
        const src = currentItem.src || currentItem.currentSrc;
        const description = currentItem.dataset.description || 'No hay descripción disponible para este proyecto.';
        const type = currentItem.tagName;

        contentContainer.innerHTML = '';

        let mediaElement;
        if (type === 'IMG') {
            mediaElement = document.createElement('img');
            mediaElement.src = src;
        } else if (type === 'VIDEO') {
            mediaElement = document.createElement('video');
            mediaElement.src = src;
            mediaElement.controls = true;
            mediaElement.autoplay = true;
            mediaElement.loop = true;
        }

        const descriptionBox = document.createElement('div');
        descriptionBox.className = 'description-box';

        const descriptionItems = description.split('•').filter(item => item.trim() !== '');
        let descriptionContent = '';
        if (descriptionItems.length > 0) {
            descriptionContent += '<ul>';
            descriptionItems.forEach(item => {
                descriptionContent += `<li>${item.trim()}</li>`;
            });
            descriptionContent += '</ul>';
        } else {
            descriptionContent += `<p>${description}</p>`;
        }
        descriptionBox.innerHTML = descriptionContent;

        if (mediaElement) contentContainer.appendChild(mediaElement);
        contentContainer.appendChild(descriptionBox);

        // Asegurarse de que el video se reproduzca
        if (mediaElement && mediaElement.tagName === 'VIDEO') {
            mediaElement.play().catch(e => console.error("Error al reproducir video:", e));
        }
    }

    updateModalContent();
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
}

/* ============================
    Resaltado dinámico en navbar
    ============================ */


sections.forEach((section) => observer.observe(section));