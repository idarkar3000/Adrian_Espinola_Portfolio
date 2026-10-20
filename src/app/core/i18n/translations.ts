export type Lang = 'es' | 'en';

export interface SkillCard {
  icon: string;
  title: string;
  level: number;
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

export interface EggText {
  title: string;
  desc: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
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
    soundOn: string;
    soundOff: string;
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
    levels: string[];
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
      demo: string;
      close: string;
    };
  };
  education: {
    badge: string;
    title: string;
    entries: {
      icon: string;
      degree: string;
      school: string;
      period: string;
      detail: string;
      honors?: string;
    }[];
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
  eggs: {
    unlocked: string;
    konami: EggText;
    logo: EggText;
    avatar: EggText;
    hollowOff: EggText;
    hollowWord: EggText;
    footer: EggText;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  es: {
    meta: {
      title: 'Adrián Espínola Gumiel | Backend Developer .NET & C#',
      description:
        'Portfolio de Adrián Espínola Gumiel, desarrollador backend especializado en .NET y C#. Microservicios, CQRS, Minimal APIs y arquitecturas escalables. Disponible para incorporación inmediata.',
      ogLocale: 'es_ES',
    },
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
      soundOn: 'Silenciar sonidos de la interfaz',
      soundOff: 'Activar sonidos de la interfaz',
    },
    hero: {
      status: '> disponible para trabajar // Madrid, ES',
      role: 'Backend Software Developer · .NET & C#',
      building: 'Ahora mismo estoy construyendo:',
      typedStrings: [
        'APIs en .NET con tests que las sostienen',
        'microservicios con CQRS y arquitectura por dominios',
        'interfaces en Angular hechas con cuidado',
        'consultas SQL que no hacen esperar al usuario',
        'aprendiendo algo nuevo cada semana',
        'código pensado para que otros lo mantengan',
      ],
      explore: 'Explorar Proyectos',
      cv: 'Abrir CV',
      scrollLabel: 'Bajar a perfil',
    },
    about: {
      badge: '// 01. PERFIL PROFESIONAL',
      title: 'Backend con base de ingeniería',
      p1: 'Graduado en <strong>Ingeniería en Diseño y Desarrollo de Videojuegos</strong> (URJC), con formación fuerte en <strong>estructuras de datos, algoritmos y bases de datos</strong>, y <strong>Técnico Superior en Animación 3D, Juegos y Entornos Interactivos</strong> (IFP), con <strong>Premio a la Excelencia Académica</strong>. Con los años mi foco se ha movido al <strong>backend</strong>: APIs, bases de datos y arquitectura, donde el software se pone serio.',
      p2: 'En <strong>EPAM Neoris</strong> reescribí un legacy de PowerBuilder como microservicios con <strong>CQRS</strong>, <strong>Vertical Slice</strong> y <strong>Dapper</strong>, y seguí por el lado del cliente con <strong>Angular</strong> y escritorio en <strong>WPF</strong> (.NET 10). También integro <strong>IA</strong> en el día a día: generación de tests, refactorizaciones y tareas repetitivas.',
      status: 'Disponible para posiciones de Software & Backend Developer',
      stats: [
        {
          number: 'EPAM NEORIS',
          label: 'Legacy de PowerBuilder migrado a microservicios en producción (prácticas)',
        },
        { number: 'CQRS', label: 'Commands y Queries separados por slice y caso de uso' },
        { number: 'URJC', label: 'Ingeniería en Diseño y Desarrollo de Videojuegos' },
        {
          number: 'CI/CD',
          label: 'Docker multi-stage, pipelines de Azure DevOps y tests unitarios',
        },
      ],
    },
    skills: {
      badge: '// 02. COMPETENCIAS TÉCNICAS',
      title: 'Stack técnico',
      levels: ['Básico', 'Familiar', 'En práctica', 'Sólido', 'En producción'],
      cards: [
        {
          icon: 'fa-solid fa-server',
          title: 'Backend & Microservicios',
          level: 5,
          desc: 'APIs asíncronas, modularidad por dominio y contratos explícitos.',
          pills: [
            'C#',
            '.NET 9 / 10',
            'ASP.NET Core',
            'Minimal APIs',
            'Patrón CQRS',
            'Vertical Slice',
            'FluentValidation',
            'Mapster',
            'JWT',
            'Async / Await',
          ],
        },
        {
          icon: 'fa-solid fa-database',
          title: 'Persistencia & Datos',
          level: 4,
          desc: 'Lecturas y escrituras optimizadas, con consultas parametrizadas e índices revisados.',
          pills: [
            'SQL Server',
            'T-SQL',
            'IBM Informix',
            'PostgreSQL',
            'Dapper (Micro-ORM)',
            'Entity Framework Core',
            'SQLite',
            'Consultas Parametrizadas',
          ],
        },
        {
          icon: 'fa-solid fa-diagram-project',
          title: 'Frontend & Integración',
          level: 4,
          desc: 'Consumo de APIs REST, estado reactivo y formularios bien validados.',
          pills: [
            'Angular 22',
            'Standalone Components',
            'Signals',
            'Angular Material',
            'TypeScript',
            'HTML5 / CSS3',
            'JavaScript ES6+',
          ],
        },
        {
          icon: 'fa-solid fa-cubes',
          title: 'Desktop & Arquitectura',
          level: 4,
          desc: 'Interfaces reactivas con MVVM y sistemas modulares fáciles de mantener.',
          pills: [
            'WPF (.NET 10)',
            'XAML',
            'MVVM',
            'PdfPig',
            'PdfiumViewer',
            'Inyección de Dep. (IoC)',
            'Clean Architecture',
            'SOLID',
          ],
        },
        {
          icon: 'fa-solid fa-gears',
          title: 'DevOps, Testing & Gestión Ágil',
          level: 3,
          desc: 'Control de calidad, automatización y Scrum con dailies y tableros reales.',
          pills: [
            'Scrum',
            'Azure Boards',
            'Git Flow & PRs',
            'xUnit',
            'FluentAssertions',
            'Docker Multi-Stage',
            'Azure DevOps',
            'Serilog',
          ],
        },
        {
          icon: 'fa-solid fa-robot',
          title: 'IA & Automatización',
          level: 3,
          desc: 'IA en el ciclo de desarrollo donde aporta: tests, refactorizaciones y tareas repetitivas.',
          pills: [
            'Gemini REST API',
            'Typst',
            'Telegram.Bot SDK',
            'IA asistida (tests, refactors)',
            'Pipelines con IA',
          ],
        },
      ],
    },
    experience: {
      badge: '// 03. TRAYECTORIA LABORAL',
      title: 'Experiencia Profesional',
      terminal: 'epam-neoris / backend-microservices',
      role: 'Desarrollador Backend .NET — Prácticas universitarias',
      company: 'EPAM Neoris',
      period: 'Marzo 2026 – Junio 2026',
      intro:
        'Prácticas universitarias en el equipo backend: migración de un legacy de PowerBuilder a microservicios en C# / .NET, con CQRS, arquitectura por dominios y persistencia optimizada sobre SQL Server e IBM Informix.',
      achievements: [
        {
          title: 'Migración de legacy a microservicios:',
          text: 'la plataforma cliente-servidor en PowerBuilder que nadie quería tocar, reescrita en C# / .NET con ASP.NET Core.',
        },
        {
          title: 'CQRS y Vertical Slice:',
          text: 'Commands y Queries separados por slice, con handlers, contratos e inyección de dependencias por microservicio. Nada de carpetas "utils" infinitas.',
        },
        {
          title: 'Persistencia y rendimiento:',
          text: 'SQL directo con Dapper sobre SQL Server e IBM Informix; timeouts de más de 60 s bajados a menos de 10 s con estructuras indexadas en memoria.',
        },
        {
          title: 'Integración Frontend & Calidad:',
          text: 'DTOs estandarizados con MapsterConfig, consumo tolerante a fallos de las APIs en Angular, validación con FluentValidation, seguridad JWT, tests unitarios por slice y documentación con Swagger/OpenAPI.',
        },
        {
          title: 'DevOps y productividad:',
          text: 'Scrum diario en Azure DevOps, Git con Pull Requests e IA donde suma de verdad: generar pruebas, refactorizar y depurar.',
        },
      ],
    },
    projects: {
      badge: '// 04. PROYECTOS TÉCNICOS (.NET)',
      title: 'Software & Repositorios',
      filters: {
        all: 'Todos',
        backend: 'Backend & Cloud',
        fullstack: 'Fullstack .NET + Angular',
        desktop: 'Desktop .NET',
      },
      viewDetail: 'Ver detalle →',
      modal: {
        challenge: 'Reto',
        solution: 'Solución',
        result: 'Resultado',
        stack: 'Stack tecnológico',
        repo: 'Ver repositorio',
        demo: 'Ver demo',
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
          detail:
            'Asignaturas relevantes: Estructuras de Datos y Algoritmos Eficientes · Bases de Datos · Fundamentos de Programación',
        },
        {
          icon: 'fa-solid fa-certificate',
          degree: 'Técnico Superior en Animación 3D, Juegos y Entornos Interactivos',
          school: 'IFP',
          period: '2019 – 2021',
          detail: 'Módulos de animación, modelado 3D y entornos interactivos.',
          honors: 'Mención de Excelencia Académica',
        },
      ],
    },
    contact: {
      badge: '// 06. CONTACTO DIRECTO',
      title: '¿Hablamos?',
      pitch:
        'Si has llegado hasta aquí, algo te ha interesado. Ya sea una propuesta técnica, una vacante o simplemente curiosear cómo está hecho esto: escríbeme y te contesto persona a persona.',
      email: 'Email',
      phone: 'Teléfono',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      built: 'Diseñado y programado a mano por',
      name: 'Adrián Espínola Gumiel',
      stack: '.NET • C# • Angular • y mucho café',
    },
    eggs: {
      unlocked: 'LOGRO DESBLOQUEADO',
      konami: {
        title: 'Código de la Ceniza',
        desc: 'Activaste el Modo Hollow. El abismo, por su parte, sigue esperando.',
      },
      logo: {
        title: 'Firma persistente',
        desc: 'Has pulsado mi nombre cinco veces. La curiosidad sí que te corre por las venas.',
      },
      avatar: {
        title: 'Retrato de un espectro',
        desc: 'Cuatro clics a la foto y ni un rasguño. Esto es temple.',
      },
      hollowOff: {
        title: 'Vuelta a la luz',
        desc: 'Sales del Modo Hollow. El abismo quedará para otra visita.',
      },
      hollowWord: {
        title: 'Susurro del abismo',
        desc: 'Escribiste HOLLOW. El mapa no lo marca, pero algo te ha oído.',
      },
      footer: {
        title: 'Sello del gremio',
        desc: 'Ese rombo no era decoración. Ya formas parte de la casa.',
      },
    },
  },
  en: {
    meta: {
      title: 'Adrián Espínola Gumiel | .NET & C# Backend Developer',
      description:
        "Adrián Espínola Gumiel's portfolio, a backend developer specialized in .NET and C#. Microservices, CQRS, Minimal APIs and scalable architectures. Available to start immediately.",
      ogLocale: 'en_US',
    },
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
      soundOn: 'Mute interface sounds',
      soundOff: 'Unmute interface sounds',
    },
    hero: {
      status: '> open to work // Madrid, ES',
      role: 'Backend Software Developer · .NET & C#',
      building: 'Right now I am building:',
      typedStrings: [
        '.NET APIs backed by tests',
        'microservices with CQRS and domain-driven structure',
        'carefully crafted Angular interfaces',
        'SQL queries that do not keep users waiting',
        'learning something new every week',
        'code written to last and to be read by others',
      ],
      explore: 'Explore Projects',
      cv: 'Open CV',
      scrollLabel: 'Scroll to about',
    },
    about: {
      badge: '// 01. PROFILE',
      title: 'Engineering-backed backend',
      p1: 'Graduate in <strong>Video Game Design and Development Engineering</strong> (URJC), with a strong foundation in <strong>data structures, algorithms and databases</strong>, and <strong>Higher Technician in 3D Animation, Games and Interactive Environments</strong> (IFP), with an <strong>Academic Excellence Award</strong>. Over time my focus has shifted to the <strong>backend</strong>: APIs, databases and architecture, where software gets serious.',
      p2: 'At <strong>EPAM Neoris</strong> I rewrote a PowerBuilder legacy as microservices with <strong>CQRS</strong>, <strong>Vertical Slice</strong> and <strong>Dapper</strong>, then kept going on the client side with <strong>Angular</strong> and desktop in <strong>WPF</strong> (.NET 10). I also integrate <strong>AI</strong> into my daily work: generating tests, refactoring and repetitive tasks.',
      status: 'Available for Software & Backend Developer positions',
      stats: [
        {
          number: 'EPAM NEORIS',
          label: 'PowerBuilder legacy migrated to microservices in production (internship)',
        },
        { number: 'CQRS', label: 'Commands and Queries split by slice and use case' },
        { number: 'URJC', label: 'BSc in Video Game Design and Development Engineering' },
        { number: 'CI/CD', label: 'Multi-stage Docker, Azure DevOps pipelines and unit tests' },
      ],
    },
    skills: {
      badge: '// 02. TECHNICAL SKILLS',
      title: 'Technical stack',
      levels: ['Basics', 'Familiar', 'Hands-on', 'Solid', 'In production'],
      cards: [
        {
          icon: 'fa-solid fa-server',
          title: 'Backend & Microservices',
          level: 5,
          desc: 'Async APIs, domain modularity and explicit contracts.',
          pills: [
            'C#',
            '.NET 9 / 10',
            'ASP.NET Core',
            'Minimal APIs',
            'CQRS Pattern',
            'Vertical Slice',
            'FluentValidation',
            'Mapster',
            'JWT',
            'Async / Await',
          ],
        },
        {
          icon: 'fa-solid fa-database',
          title: 'Persistence & Data',
          level: 4,
          desc: 'Optimized reads and writes, with parameterized queries and well-chosen indexes.',
          pills: [
            'SQL Server',
            'T-SQL',
            'IBM Informix',
            'PostgreSQL',
            'Dapper (Micro-ORM)',
            'Entity Framework Core',
            'SQLite',
            'Parameterized Queries',
          ],
        },
        {
          icon: 'fa-solid fa-diagram-project',
          title: 'Frontend & Integration',
          level: 4,
          desc: 'REST API consumption, reactive state and well-validated forms.',
          pills: [
            'Angular 22',
            'Standalone Components',
            'Signals',
            'Angular Material',
            'TypeScript',
            'HTML5 / CSS3',
            'JavaScript ES6+',
          ],
        },
        {
          icon: 'fa-solid fa-cubes',
          title: 'Desktop & Architecture',
          level: 4,
          desc: 'Reactive interfaces with MVVM and modular systems that are easy to maintain.',
          pills: [
            'WPF (.NET 10)',
            'XAML',
            'MVVM',
            'PdfPig',
            'PdfiumViewer',
            'DI (IoC)',
            'Clean Architecture',
            'SOLID',
          ],
        },
        {
          icon: 'fa-solid fa-gears',
          title: 'DevOps, Testing & Agile',
          level: 3,
          desc: 'Quality control, automation and Scrum with stand-ups and real boards.',
          pills: [
            'Scrum',
            'Azure Boards',
            'Git Flow & PRs',
            'xUnit',
            'FluentAssertions',
            'Docker Multi-Stage',
            'Azure DevOps',
            'Serilog',
          ],
        },
        {
          icon: 'fa-solid fa-robot',
          title: 'AI & Automation',
          level: 3,
          desc: 'AI in the dev cycle where it helps: tests, refactors and repetitive chores.',
          pills: [
            'Gemini REST API',
            'Typst',
            'Telegram.Bot SDK',
            'AI-assisted (tests, refactors)',
            'AI pipelines',
          ],
        },
      ],
    },
    experience: {
      badge: '// 03. WORK EXPERIENCE',
      title: 'Professional Experience',
      terminal: 'epam-neoris / backend-microservices',
      role: '.NET Backend Developer — University internship',
      company: 'EPAM Neoris',
      period: 'March 2026 – June 2026',
      intro:
        'University internship on the backend team: migration of a PowerBuilder legacy to C# / .NET microservices, with CQRS, domain-driven structure and optimized persistence on SQL Server and IBM Informix.',
      achievements: [
        {
          title: 'Legacy-to-microservices migration:',
          text: 'the client-server corporate platform nobody wanted to touch, rewritten in C# / .NET with ASP.NET Core.',
        },
        {
          title: 'CQRS and Vertical Slice:',
          text: 'Commands and Queries segregated per slice, with handlers, contracts and dependency injection per microservice. No endless "utils" folders.',
        },
        {
          title: 'Persistence and performance:',
          text: 'raw SQL with Dapper on SQL Server and IBM Informix; timeouts over 60 s reduced to under 10 s with in-memory indexed structures.',
        },
        {
          title: 'Frontend Integration & Quality:',
          text: 'DTO standardization with MapsterConfig, fault-tolerant consumption of the REST APIs in Angular, input validation with FluentValidation, JWT security, unit tests per slice and Swagger/OpenAPI documentation.',
        },
        {
          title: 'DevOps and productivity:',
          text: 'daily Scrum in Azure DevOps, Git with Pull Requests and AI where it truly pays off: generating tests, refactoring and debugging.',
        },
      ],
    },
    projects: {
      badge: '// 04. TECHNICAL PROJECTS (.NET)',
      title: 'Software & Repositories',
      filters: {
        all: 'All',
        backend: 'Backend & Cloud',
        fullstack: 'Fullstack .NET + Angular',
        desktop: 'Desktop .NET',
      },
      viewDetail: 'View details →',
      modal: {
        challenge: 'Challenge',
        solution: 'Solution',
        result: 'Result',
        stack: 'Tech stack',
        repo: 'View repository',
        demo: 'View live demo',
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
          detail:
            'Relevant coursework: Data Structures & Efficient Algorithms · Databases · Programming Fundamentals',
        },
        {
          icon: 'fa-solid fa-certificate',
          degree: 'Higher Technician in 3D Animation, Games and Interactive Environments',
          school: 'IFP',
          period: '2019 – 2021',
          detail: 'Modules in animation, 3D modelling and interactive environments.',
          honors: 'Academic Excellence Award',
        },
      ],
    },
    contact: {
      badge: '// 06. DIRECT CONTACT',
      title: 'Shall we talk?',
      pitch:
        'You made it this far, so something caught your eye. Whether it is a technical proposal, a role, or just curiosity about how this was built: write to me and I will answer as a person.',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      built: 'Designed and hand-coded by',
      name: 'Adrián Espínola Gumiel',
      stack: '.NET • C# • Angular • and plenty of coffee',
    },
    eggs: {
      unlocked: 'ACHIEVEMENT UNLOCKED',
      konami: {
        title: 'Ashen Code',
        desc: 'You activated Hollow Mode. The abyss, meanwhile, keeps waiting.',
      },
      logo: {
        title: 'Persistent signature',
        desc: 'You clicked my name five times. Curiosity really runs in your veins.',
      },
      avatar: {
        title: 'Portrait of a spirit',
        desc: 'Four clicks on the photo and not a scratch. That is grit.',
      },
      hollowOff: {
        title: 'Back to the light',
        desc: 'You step out of Hollow Mode. The abyss remains for another visit.',
      },
      hollowWord: {
        title: 'Whisper of the abyss',
        desc: 'You typed HOLLOW. The map does not mark it, but something heard you.',
      },
      footer: {
        title: 'Guild seal',
        desc: 'That diamond was not just decoration. You are part of the house now.',
      },
    },
  },
};
