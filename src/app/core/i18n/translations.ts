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

export interface JobTexts {
  terminal: string;
  role: string;
  company: string;
  period: string;
  intro: string;
  achievements: { title: string; text: string }[];
  tags: string[];
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
    cvFile: string;
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
    jobs: JobTexts[];
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
        'automatizaciones que trabajan mientras duermo',
        'interfaces en Angular hechas con cuidado',
        'consultas SQL que no hacen esperar al usuario',
        'aprendiendo algo nuevo cada semana',
        'código pensado para que otros lo mantengan',
      ],
      explore: 'Explorar Proyectos',
      cv: 'Abrir CV',
      cvFile: 'CV_Adrian_Espinola_Gumiel.pdf',
      scrollLabel: 'Bajar a perfil',
    },
    about: {
      badge: '// 01. PERFIL PROFESIONAL',
      title: 'Backend con base de ingeniería',
      p1: '<strong>Grado en Diseño y Desarrollo de Videojuegos</strong> (rama de Ingeniería, URJC), con formación fuerte en <strong>estructuras de datos, algoritmos y bases de datos</strong>, y <strong>Técnico Superior en Animación 3D, Juegos y Entornos Interactivos</strong> (iFP, 9,33/10 y Premio a la Excelencia Académica). Con los años mi foco se ha movido al <strong>backend</strong>: APIs, bases de datos y arquitectura, donde el software se pone serio.',
      p2: 'En <strong>EPAM NEORIS</strong> pasé cuatro meses de prácticas en un equipo backend que estaba migrando una plataforma legacy de PowerBuilder a microservicios con <strong>CQRS</strong>, <strong>Vertical Slice</strong> y <strong>Dapper</strong>: implementé los endpoints y handlers que se me asignaron y bajé las consultas sobre Informix de más de 60 segundos a menos de 10. Antes estuve catorce meses en <strong>Three Golden Monkeys</strong>, donde entré con las prácticas de FP y seguí en el mismo proyecto de tienda online. También integro <strong>IA</strong> en el día a día: tests, refactorizaciones y tareas repetitivas.',
      status: 'Disponible para posiciones de Software & Backend Developer',
      stats: [
        {
          number: '60 s → 10 s',
          label: 'Consultas sobre Informix en alta concurrencia (EPAM NEORIS)',
        },
        {
          number: '18 meses',
          label: 'De experiencia: 14 en Three Golden Monkeys y 4 en EPAM NEORIS',
        },
        {
          number: 'URJC',
          label: 'Grado en Diseño y Desarrollo de Videojuegos (Ingeniería)',
        },
        {
          number: 'CI/CD',
          label: 'GitHub Actions y Docker multi-stage; Azure DevOps y Pull Requests en equipo',
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
          desc: 'Aplicaciones WPF en .NET con vistas separadas y comandos propios.',
          pills: [
            'WPF (.NET 10)',
            'XAML',
            'RelayCommand (ICommand)',
            'PdfPig',
            'PdfiumViewer',
            'Inyección de Dep. (IoC)',
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
      jobs: [
        {
          terminal: 'epam-neoris / backend-microservices',
          role: 'Desarrollador Backend .NET — Prácticas',
          company: 'EPAM NEORIS',
          period: 'Marzo 2026 – Junio 2026 · 4 meses',
          intro:
            'Prácticas en un equipo backend que estaba migrando una plataforma legacy de PowerBuilder a microservicios en C# / .NET con CQRS y Vertical Slice. La estructura ya estaba definida por el equipo; yo implementaba dentro de ella.',
          achievements: [
            {
              title: 'Rendimiento en Informix:',
              text: 'bajé las consultas de más de 60 segundos a menos de 10 en un entorno de alta concurrencia.',
            },
            {
              title: 'Endpoints y handlers:',
              text: 'implementé los que se me asignaron con sus handlers de lectura y escritura (Commands/Queries).',
            },
            {
              title: 'Esquemas y DTOs:',
              text: 'configuré los esquemas de cada contexto de dominio y centralicé el mapeo con Mapster.',
            },
            {
              title: 'Frontend y calidad:',
              text: 'ajusté la capa de servicios en Angular para consumir las nuevas APIs REST, con validación en FluentValidation, seguridad JWT y Swagger.',
            },
            {
              title: 'Día a día:',
              text: 'Scrum, Azure DevOps, Git con Pull Requests e IA para tests y refactorizaciones.',
            },
          ],
          tags: [
            'C#',
            '.NET',
            'ASP.NET Core',
            'CQRS',
            'Vertical Slice',
            'Dapper',
            'Informix',
            'SQL Server',
            'Mapster',
            'Angular',
            'Azure DevOps',
          ],
        },
        {
          terminal: 'three-golden-monkeys / tienda-online',
          role: 'Desarrollador Backend .NET',
          company: 'Three Golden Monkeys',
          period: 'Marzo 2021 – Abril 2022 · 14 meses',
          intro:
            'Tienda online para un cliente de la empresa. Entré con las prácticas de FP y continué diez meses más en el mismo proyecto.',
          achievements: [
            {
              title: 'Endpoints y lógica de negocio:',
              text: 'desarrollé en C# / .NET el flujo de la tienda.',
            },
            {
              title: 'Esquema y consultas:',
              text: 'modelé el esquema relacional y escribí las consultas con Dapper sobre SQL Server.',
            },
            {
              title: 'Contratos y pruebas:',
              text: 'documenté la API con Swagger y escribí pruebas unitarias sobre la lógica del servicio.',
            },
          ],
          tags: ['C#', '.NET', 'ASP.NET Core', 'SQL Server', 'Dapper', 'Swagger', 'Scrum'],
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
          degree: 'Grado en Diseño y Desarrollo de Videojuegos',
          school: 'Universidad Rey Juan Carlos (URJC)',
          period: '2022 – 2026',
          detail:
            'Rama de Ingeniería. Asignaturas relevantes: Estructuras de Datos y Algoritmos Eficientes · Bases de Datos · Fundamentos de Programación',
        },
        {
          icon: 'fa-solid fa-certificate',
          degree: 'Técnico Superior en Animación 3D, Juegos y Entornos Interactivos',
          school: 'iFP',
          period: '2019 – 2021',
          detail:
            'Premio a la Excelencia Académica. Módulos de animación, modelado 3D y entornos interactivos.',
          honors: '9,33/10',
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
        'automations that work while I sleep',
        'carefully crafted Angular interfaces',
        'SQL queries that do not keep users waiting',
        'learning something new every week',
        'code written to last and to be read by others',
      ],
      explore: 'Explore Projects',
      cv: 'Open CV',
      cvFile: 'CV_Adrian_Espinola_Gumiel_EN.pdf',
      scrollLabel: 'Scroll to about',
    },
    about: {
      badge: '// 01. PROFILE',
      title: 'Engineering-backed backend',
      p1: '<strong>BSc in Video Game Design and Development</strong> (Engineering branch, URJC), with a strong foundation in <strong>data structures, algorithms and databases</strong>, and <strong>Higher Technician in 3D Animation, Games and Interactive Environments</strong> (iFP, 9.33/10 and Academic Excellence Award). Over time my focus has shifted to the <strong>backend</strong>: APIs, databases and architecture, where software gets serious.',
      p2: 'At <strong>EPAM NEORIS</strong> I spent four months as an intern on a backend team that was migrating a PowerBuilder legacy to microservices with <strong>CQRS</strong>, <strong>Vertical Slice</strong> and <strong>Dapper</strong>: I implemented the endpoints and handlers I was assigned and brought Informix queries down from over 60 seconds to under 10. Before that I spent fourteen months at <strong>Three Golden Monkeys</strong>, where I joined through my vocational training internship and stayed on the same online store project. I also integrate <strong>AI</strong> into my daily work: tests, refactoring and repetitive tasks.',
      status: 'Available for Software & Backend Developer positions',
      stats: [
        {
          number: '60 s → 10 s',
          label: 'Informix queries under high concurrency (EPAM NEORIS)',
        },
        {
          number: '18 months',
          label: 'Of experience: 14 at Three Golden Monkeys and 4 at EPAM NEORIS',
        },
        {
          number: 'URJC',
          label: 'BSc in Video Game Design and Development (Engineering)',
        },
        {
          number: 'CI/CD',
          label: 'GitHub Actions and multi-stage Docker; Azure DevOps and Pull Requests in a team',
        },
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
          desc: 'WPF applications in .NET with separated views and custom commands.',
          pills: [
            'WPF (.NET 10)',
            'XAML',
            'RelayCommand (ICommand)',
            'PdfPig',
            'PdfiumViewer',
            'DI (IoC)',
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
      jobs: [
        {
          terminal: 'epam-neoris / backend-microservices',
          role: '.NET Backend Developer — Internship',
          company: 'EPAM NEORIS',
          period: 'March 2026 – June 2026 · 4 months',
          intro:
            'Internship on a backend team that was migrating a PowerBuilder legacy to C# / .NET microservices with CQRS and Vertical Slice. The structure was already defined by the team; I implemented within it.',
          achievements: [
            {
              title: 'Informix performance:',
              text: 'brought queries down from over 60 seconds to under 10 in a high-concurrency environment.',
            },
            {
              title: 'Endpoints and handlers:',
              text: 'implemented the ones I was assigned with their read and write handlers (Commands/Queries).',
            },
            {
              title: 'Schemas and DTOs:',
              text: 'configured the schema for each domain context and centralized mapping with Mapster.',
            },
            {
              title: 'Frontend and quality:',
              text: 'adjusted the Angular service layer to consume the new REST APIs, with FluentValidation checks, JWT security and Swagger.',
            },
            {
              title: 'Day to day:',
              text: 'Scrum, Azure DevOps, Git with Pull Requests and AI for tests and refactoring.',
            },
          ],
          tags: [
            'C#',
            '.NET',
            'ASP.NET Core',
            'CQRS',
            'Vertical Slice',
            'Dapper',
            'Informix',
            'SQL Server',
            'Mapster',
            'Angular',
            'Azure DevOps',
          ],
        },
        {
          terminal: 'three-golden-monkeys / online-store',
          role: '.NET Backend Developer',
          company: 'Three Golden Monkeys',
          period: 'March 2021 – April 2022 · 14 months',
          intro:
            'Online store for one of the company clients. I joined through my vocational training internship and stayed on the same project for ten more months.',
          achievements: [
            {
              title: 'Endpoints and business logic:',
              text: 'built the store flow in C# / .NET.',
            },
            {
              title: 'Schema and queries:',
              text: 'modelled the relational schema and wrote the queries with Dapper on SQL Server.',
            },
            {
              title: 'Contracts and tests:',
              text: 'documented the API with Swagger and wrote unit tests for the service logic.',
            },
          ],
          tags: ['C#', '.NET', 'ASP.NET Core', 'SQL Server', 'Dapper', 'Swagger', 'Scrum'],
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
            'Engineering branch. Relevant coursework: Data Structures & Efficient Algorithms · Databases · Programming Fundamentals',
        },
        {
          icon: 'fa-solid fa-certificate',
          degree: 'Higher Technician in 3D Animation, Games and Interactive Environments',
          school: 'iFP',
          period: '2019 – 2021',
          detail:
            'Academic Excellence Award. Modules in animation, 3D modelling and interactive environments.',
          honors: '9.33/10',
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
