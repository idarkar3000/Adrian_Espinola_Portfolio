document.addEventListener("DOMContentLoaded", () => {
  // 1. Efecto mecanografía Typed.js
  if (document.getElementById("typing")) {
    new Typed("#typing", {
      strings: [
        "Arquitecturas Backend en .NET & C#",
        "Microservicios y Patrón CQRS",
        "APIs Escalables y de Alto Rendimiento",
        "Sistemas Distribuidos y Asincronía",
        "Software con Metodologías Ágiles (Scrum)",
        "Aplicaciones Desktop Modernas en WPF"
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1800,
      loop: true,
    });
  }

  // 2. tsParticles (Efecto de red neuronal / nodos backend)
  if (typeof tsParticles !== "undefined" && document.getElementById("particles-js")) {
    tsParticles.load("particles-js", {
      background: { color: "transparent" },
      particles: {
        number: { value: 50, density: { enable: true, area: 900 } },
        color: { value: ["#8b5cf6", "#10b981"] },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 2.2, random: true },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          distance: 130,
          color: "#8b5cf6",
          opacity: 0.18,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 120, links: { opacity: 0.45 } },
          push: { quantity: 2 },
        },
      },
    });
  }

  // 3. Navbar dinámico y menú móvil
  const navbar = document.querySelector(".navbar");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const navLinksAnchors = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      hamburgerMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
      hamburgerMenu.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
      );
    });
  }

  navLinksAnchors.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      if (hamburgerMenu) {
        hamburgerMenu.setAttribute("aria-expanded", "false");
        hamburgerMenu.setAttribute("aria-label", "Abrir menú de navegación");
      }
    });
  });

  // 4. Filtro interactivo de proyectos
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectBoxes = document.querySelectorAll(".project-box");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectBoxes.forEach((box) => {
        const category = box.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          box.classList.remove("hide");
        } else {
          box.classList.add("hide");
        }
      });
    });
  });

  // 5. Observer para destacar la sección activa en el menú
  const sections = document.querySelectorAll("section, header");
  const observerOptions = { threshold: 0.3 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinksAnchors.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});