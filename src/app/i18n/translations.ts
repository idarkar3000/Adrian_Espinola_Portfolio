export type Lang = 'es' | 'en';

export interface SkillCard {
  icon: string;
  title: string;
  desc: string;
  pills: string[];
}

export interface ProjectTexts {
  subtitle: string;
  description: string;
  bullets: string[];
  ariaLabel: string;
  detail: {
    challenge: string;
    solution: string[];
    result: string;
  };
}

export interface Translations {
  nav: {
    home: string;
    profile: string;
    stack: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
    menuLabel: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    status: string;
    role: string;
    building: string;
    typedStrings: string[];
    explore: string;
    cv: string;
    scrollLabel: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    status: string;
    stats: { number: string; label: string }[];
  };
  skills: {
    badge: string;
    title: string;
    cards: SkillCard[];
  };
  experience: {
    badge: string;
    title: string;
    terminal: string;
    role: string;
    company: string;
    period: string;
    intro: string;
    achievements: { title: string; text: string }[];
  };
  projects: {
    badge: string;
    title: string;
    filters: { all: string; backend: string; fullstack: string; desktop: string };
    viewDetail: string;
    modal: {
      challenge: string;
      solution: string;
      result: string;
      stack: string;
      repo: string;
      close: string;
    };
  };
  education: {
    badge: string;
    title: string;
    entries: { icon: string; degree: string; school: string; period: string; detail: string; honors?: string }[];
  };
  contact: {
    badge: string;
    title: string;
    pitch: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  footer: {
    built: string;
    name: string;
    stack: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      profile: 'Perfil',
      stack: 'Stack',
      experience: 'Experiencia',
      projects: 'Proyectos',
      education: 'Formación',
      contact: 'Contacto',
      menuLabel: 'Navegación',
      menuOpen: 'Abrir menú de navegación',
      menuClose: 'Cerrar menú de navegación',
    },
    hero: {
      status: 'System Status: Operational // Madrid, ES',
      role: 'Backend Software Developer',
      building: 'Construyendo',
      typedStrings: [
        'Arquitecturas Backend en .NET & C#',
        'Microservicios y Patrón CQRS',
        'Aplicaciones Fullstack con Angular',
        'APIs Escalables y de Alto Rendimiento',
        'Sistemas Distribuidos y Asincronía',
        'Software con Metodologías Ágiles (Scrum)',
      ],
      explore: 'Explorar Proyectos',
      cv: 'Abrir CV',
      scrollLabel: 'Bajar a perfil',
    },
    about: {
      badge: '// 01. PERFIL PROFESIONAL',
      title: 'Ingeniería y Backend Escalable',
      p1: 'Graduado en <strong>Ingeniería en Diseño y Desarrollo de Videojuegos</strong> por la URJC, con formación técnica previa como <strong>Técnico Superior en Animación 3D, Juegos y Entornos Interactivos</strong> (IFP), donde obtuve el <strong>Premio a la Excelencia Académica</strong>. Mi especialización se centra en el ecosistema <strong>.NET / C#</strong>, aplicando principios de diseño robustos, patrones limpios y alto rendimiento en arquitecturas distribuidas.',
      p2: 'Experiencia profesional en <strong>EPAM Neoris</strong> migrando una plataforma corporativa legacy en PowerBuilder a microservicios con <strong>CQRS</strong>, <strong>Vertical Slice Architecture</strong> y <strong>Dapper</strong>, además de desarrollo fullstack con <strong>Angular</strong>, desktop en <strong>WPF</strong> (.NET 10) y adopción de <strong>herramientas de IA</strong> en el flujo diario de desarrollo.',
      status: 'Disponible para posiciones de Software & Backend Developer',
      stats: [
        { number: 'NEORIS', label: 'Migración de legacy a microservicios en producción' },
        { number: 'CQRS', label: 'Segregación estricta de Commands y Queries' },
        { number: 'URJC', label: 'Ingeniería en Diseño y Desarrollo de Videojuegos' },
        { number: 'CI/CD', label: 'Docker multi-stage, pipelines y testing unitario' },
      ],
    },
    skills: {
      badge: '// 02. COMPETENCIAS TÉCNICAS',
      title: 'Ecosistema & Herramientas',
      cards: [
        {
          icon: 'fa-solid fa-server',
          title: 'Backend & Microservicios',
          desc: 'Diseño de APIs asíncronas, modularidad por dominio y contratos consistentes.',
          pills: ['C#', '.NET 9 / 10', 'ASP.NET Core', 'Minimal APIs', 'Patrón CQRS', 'Vertical Slice', 'FluentValidation', 'Mapster', 'JWT', 'Async / Await'],
        },
        {
          icon: 'fa-solid fa-database',
          title: 'Persistencia & Datos',
          desc: 'Estrategias optimizadas de lectura/escritura y aislamiento transaccional.',
          pills: ['SQL Server', 'T-SQL', 'IBM Informix', 'PostgreSQL', 'Dapper (Micro-ORM)', 'Entity Framework Core', 'SQLite', 'Consultas Parametrizadas'],
        },
        {
          icon: 'fa-solid fa-diagram-project',
          title: 'Frontend & Integración',
          desc: 'Consumo de APIs REST, interfaces con estado reactivo y formateo de datos.',
          pills: ['Angular 22', 'Standalone Components', 'Signals', 'Angular Material', 'TypeScript', 'HTML5 / CSS3', 'JavaScript ES6+'],
        },
        {
          icon: 'fa-solid fa-cubes',
          title: 'Desktop & Arquitectura',
          desc: 'Interfaces reactivas y sistemas modulares orientados a objetos.',
          pills: ['WPF (.NET 10)', 'XAML', 'MVVM', 'PdfPig', 'PdfiumViewer', 'Inyección de Dep. (IoC)', 'Clean Architecture', 'SOLID'],
        },
        {
          icon: 'fa-solid fa-gears',
          title: 'DevOps, Testing & Gestión Ágil',
          desc: 'Control de calidad, automatización y trabajo coordinado en equipo.',
          pills: ['Scrum', 'Azure Boards', 'Git Flow & PRs', 'xUnit', 'FluentAssertions', 'Docker Multi-Stage', 'Azure DevOps', 'Serilog'],
        },
        {
          icon: 'fa-solid fa-robot',
          title: 'IA & Automatización',
          desc: 'Integración de modelos y asistencia de IA en el ciclo de desarrollo.',
          pills: ['Gemini REST API', 'Typst', 'Telegram.Bot SDK', 'IA asistida (tests, refactors)', 'Pipelines con IA'],
        },
      ],
    },
    experience: {
      badge: '// 03. TRAYECTORIA LABORAL',
      title: 'Experiencia Profesional',
      terminal: 'epam-neoris / backend-microservices',
      role: 'Desarrollador Backend .NET',
      company: 'EPAM Neoris',
      period: 'Marzo 2026 – Junio 2026',
      intro: 'Diseño e implementación de servicios backend para una plataforma modular de cliente basada en microservicios y arquitectura Vertical Slice, gestionando persistencia, lógica de dominio y despliegue por servicio.',
      achievements: [
        { title: 'Migración de legacy a microservicios:', text: 'plataforma corporativa cliente-servidor en PowerBuilder reescrita en C# / .NET con ASP.NET Core.' },
        { title: 'CQRS y Vertical Slice:', text: 'segregación de Commands y Queries por slice, con handlers, contratos e inyección de dependencias por microservicio.' },
        { title: 'Persistencia y rendimiento:', text: 'consultas SQL directas con Dapper sobre SQL Server e IBM Informix; timeouts de más de 60 s reducidos a menos de 10 s con estructuras indexadas en memoria.' },
        { title: 'Integración Frontend & Calidad:', text: 'estandarización de DTOs con MapsterConfig, consumo tolerante a fallos de las APIs REST en Angular, validación de entradas con FluentValidation, seguridad JWT, tests unitarios por slice y documentación con Swagger/OpenAPI.' },
        { title: 'DevOps y productividad:', text: 'Scrum con dailies en Azure DevOps, Git, pipelines CI/CD con Pull Requests y adopción de herramientas de IA para generar pruebas, refactorizar y depurar.' },
      ],
    },
    projects: {
      badge: '// 04. PROYECTOS TÉCNICOS (.NET)',
      title: 'Software & Repositorios',
      filters: { all: 'Todos', backend: 'Backend & Cloud', fullstack: 'Fullstack .NET + Angular', desktop: 'Desktop .NET' },
      viewDetail: 'Ver detalle →',
      modal: {
        challenge: 'Reto',
        solution: 'Solución',
        result: 'Resultado',
        stack: 'Stack tecnológico',
        repo: 'Ver repositorio',
        close: 'Cerrar detalle del proyecto',
      },
    },
    education: {
      badge: '// 05. FORMACIÓN',
      title: 'Académica',
      entries: [
        {
          icon: 'fa-solid fa-graduation-cap',
          degree: 'Grado en Ingeniería en Diseño y Desarrollo de Videojuegos',
          school: 'Universidad Rey Juan Carlos (URJC)',
          period: '2022 – 2026',
          detail: 'Asignaturas relevantes: Estructuras de Datos y Algoritmos Eficientes · Bases de Datos · Fundamentos de Programación',
        },
        {
          icon: 'fa-solid fa-certificate',
          degree: 'Técnico Superior en Animación 3D, Juegos y Entornos Interactivos',
          school: 'IFP',
          period: '2019 – 2021',
          detail: 'Formación técnica previa en animación 3D, diseño de juegos y entornos interactivos.',
          honors: 'Mención de Excelencia Académica',
        },
      ],
    },
    contact: {
      badge: '// 06. CONTACTO DIRECTO',
      title: 'Hablemos de Software',
      pitch: '¿Tienes una propuesta técnica o buscas reforzar tu equipo con un perfil backend centrado en .NET, calidad de código y microservicios? Conversemos.',
      email: 'Email',
      phone: 'Teléfono',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      built: 'Designed & Built with Clean Code by',
      name: 'Adrián Espínola Gumiel',
      stack: '.NET • C# • Angular • Modern Architecture',
    },
  },
  en: {
    nav: {
      home: 'Home',
      profile: 'About',
      stack: 'Stack',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      menuLabel: 'Navigation',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
    },
    hero: {
      status: 'System Status: Operational // Madrid, ES',
      role: 'Backend Software Developer',
      building: 'Building',
      typedStrings: [
        'Backend Architectures with .NET & C#',
        'Microservices and the CQRS Pattern',
        'Fullstack Apps with Angular',
        'Scalable, High-Performance APIs',
        'Distributed Systems and Async',
        'Software with Agile Practices (Scrum)',
      ],
      explore: 'Explore Projects',
      cv: 'Open CV',
      scrollLabel: 'Scroll to about',
    },
    about: {
      badge: '// 01. PROFILE',
      title: 'Engineering & Scalable Backend',
      p1: 'Graduated in <strong>Bachelor\'s Degree in Video Game Design and Development</strong> at URJC, with previous technical training as a <strong>Higher Technician in 3D Animation, Games and Interactive Environments</strong> (IFP), where I earned an <strong>Academic Excellence Award</strong>. My focus is the <strong>.NET / C#</strong> ecosystem, applying solid design principles, clean patterns and high performance in distributed architectures.',
      p2: 'Professional experience at <strong>EPAM Neoris</strong> migrating a legacy corporate PowerBuilder platform to microservices with <strong>CQRS</strong>, <strong>Vertical Slice Architecture</strong> and <strong>Dapper</strong>, plus fullstack development with <strong>Angular</strong>, desktop in <strong>WPF</strong> (.NET 10) and adoption of <strong>AI tooling</strong> in the daily development workflow.',
      status: 'Available for Software & Backend Developer positions',
      stats: [
        { number: 'EPAM', label: 'Legacy-to-microservices migration in production' },
        { number: 'CQRS', label: 'Strict segregation of Commands and Queries' },
        { number: 'URJC', label: 'BSc in Video Game Design and Development' },
        { number: 'CI/CD', label: 'Docker multi-stage, pipelines and unit testing' },
      ],
    },
    skills: {
      badge: '// 02. TECHNICAL SKILLS',
      title: 'Ecosystem & Tools',
      cards: [
        {
          icon: 'fa-solid fa-server',
          title: 'Backend & Microservices',
          desc: 'Design of async APIs, domain modularity and consistent contracts.',
          pills: ['C#', '.NET 9 / 10', 'ASP.NET Core', 'Minimal APIs', 'CQRS Pattern', 'Vertical Slice', 'FluentValidation', 'Mapster', 'JWT', 'Async / Await'],
        },
        {
          icon: 'fa-solid fa-database',
          title: 'Persistence & Data',
          desc: 'Optimized read/write strategies and transactional isolation.',
          pills: ['SQL Server', 'T-SQL', 'IBM Informix', 'PostgreSQL', 'Dapper (Micro-ORM)', 'Entity Framework Core', 'SQLite', 'Parameterized Queries'],
        },
        {
          icon: 'fa-solid fa-diagram-project',
          title: 'Frontend & Integration',
          desc: 'REST API consumption, reactive-state interfaces and data formatting.',
          pills: ['Angular 22', 'Standalone Components', 'Signals', 'Angular Material', 'TypeScript', 'HTML5 / CSS3', 'JavaScript ES6+'],
        },
        {
          icon: 'fa-solid fa-cubes',
          title: 'Desktop & Architecture',
          desc: 'Reactive interfaces and modular object-oriented systems.',
          pills: ['WPF (.NET 10)', 'XAML', 'MVVM', 'PdfPig', 'PdfiumViewer', 'DI (IoC)', 'Clean Architecture', 'SOLID'],
        },
        {
          icon: 'fa-solid fa-gears',
          title: 'DevOps, Testing & Agile',
          desc: 'Quality control, automation and coordinated teamwork.',
          pills: ['Scrum', 'Azure Boards', 'Git Flow & PRs', 'xUnit', 'FluentAssertions', 'Docker Multi-Stage', 'Azure DevOps', 'Serilog'],
        },
        {
          icon: 'fa-solid fa-robot',
          title: 'AI & Automation',
          desc: 'Model integration and AI assistance across the development cycle.',
          pills: ['Gemini REST API', 'Typst', 'Telegram.Bot SDK', 'AI-assisted (tests, refactors)', 'AI pipelines'],
        },
      ],
    },
    experience: {
      badge: '// 03. WORK EXPERIENCE',
      title: 'Professional Experience',
      terminal: 'epam-neoris / backend-microservices',
      role: '.NET Backend Developer',
      company: 'EPAM Neoris',
      period: 'March 2026 – June 2026',
      intro: 'Design and implementation of backend services for a client modular platform based on microservices and Vertical Slice Architecture, managing persistence, domain logic and per-service deployment.',
      achievements: [
        { title: 'Legacy-to-microservices migration:', text: 'client-server corporate platform in PowerBuilder rewritten in C# / .NET with ASP.NET Core.' },
        { title: 'CQRS and Vertical Slice:', text: 'Commands and Queries segregation per slice, with handlers, contracts and dependency injection per microservice.' },
        { title: 'Persistence and performance:', text: 'raw SQL queries with Dapper on SQL Server and IBM Informix; timeouts over 60 s reduced to under 10 s with in-memory indexed structures.' },
        { title: 'Frontend Integration & Quality:', text: 'DTO standardization with MapsterConfig, fault-tolerant consumption of the REST APIs in Angular, input validation with FluentValidation, JWT security, unit tests per slice and Swagger/OpenAPI documentation.' },
        { title: 'DevOps and productivity:', text: 'Scrum with daily stand-ups in Azure DevOps, Git, CI/CD pipelines with Pull Requests and adoption of AI tools to generate tests, refactor and debug.' },
      ],
    },
    projects: {
      badge: '// 04. TECHNICAL PROJECTS (.NET)',
      title: 'Software & Repositories',
      filters: { all: 'All', backend: 'Backend & Cloud', fullstack: 'Fullstack .NET + Angular', desktop: 'Desktop .NET' },
      viewDetail: 'View details →',
      modal: {
        challenge: 'Challenge',
        solution: 'Solution',
        result: 'Result',
        stack: 'Tech stack',
        repo: 'View repository',
        close: 'Close project details',
      },
    },
    education: {
      badge: '// 05. EDUCATION',
      title: 'Academic',
      entries: [
        {
          icon: 'fa-solid fa-graduation-cap',
          degree: 'BSc in Video Game Design and Development',
          school: 'Rey Juan Carlos University (URJC)',
          period: '2022 – 2026',
          detail: 'Relevant coursework: Data Structures & Efficient Algorithms · Databases · Programming Fundamentals',
        },
        {
          icon: 'fa-solid fa-certificate',
          degree: 'Higher Technician in 3D Animation, Games and Interactive Environments',
          school: 'IFP',
          period: '2019 – 2021',
          detail: 'Previous technical training in 3D animation, game design and interactive environments.',
          honors: 'Academic Excellence Award',
        },
      ],
    },
    contact: {
      badge: '// 06. DIRECT CONTACT',
      title: "Let's talk Software",
      pitch: 'Got a technical proposal or looking to strengthen your team with a backend profile focused on .NET, code quality and microservices? Let\u2019s talk.',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      built: 'Designed & Built with Clean Code by',
      name: 'Adrián Espínola Gumiel',
      stack: '.NET • C# • Angular • Modern Architecture',
    },
  },
};
