import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { LanguageService, ProjectTexts } from '../../i18n/language';

type ProjectCategory = 'backend' | 'fullstack' | 'desktop';

interface Project {
  title: string;
  tags: string[];
  url: string;
  urlLabel: string;
  category: ProjectCategory;
  es: ProjectTexts;
  en: ProjectTexts;
}

const PROJECTS: Project[] = [
  {
    title: 'HomeHub',
    tags: ['C#', 'ASP.NET Core', 'Minimal APIs', 'Dapper', 'PostgreSQL', 'Angular 22', 'xUnit'],
    url: 'https://github.com/idarkar3000/HomeHub',
    urlLabel: 'github.com/idarkar3000/HomeHub',
    category: 'fullstack',
    es: {
      subtitle: 'Aplicación fullstack de gestión del hogar',
      description:
        'API REST en .NET con Minimal APIs, Dapper y PostgreSQL junto a una SPA en Angular 22 (standalone, signals) con navegación mobile-first, calendario con arrastrar y soltar y lista de la compra.',
      bullets: [
        'Backend por capas (<code>Endpoints / Repositories / Models</code>) con toggles <code>PATCH</code> y borrado en cascada.',
        'Frontend con <strong>Angular Material</strong>, <strong>FullCalendar</strong> y estado reactivo mediante señales.',
        'Tests de integración de la API con <strong>xUnit</strong> y <code>WebApplicationFactory</code> usando repositorios falsos.',
      ],
      ariaLabel: 'Ver repositorio de HomeHub en GitHub',
      detail: {
        challenge:
          'Unificar habitaciones, tareas con recurrencia y lista de la compra en una sola aplicación usable desde el móvil, con un backend que se pudiera probar de extremo a extremo sin tocar una base de datos real.',
        solution: [
          'API REST en .NET con <strong>Minimal APIs</strong>, <strong>Dapper</strong> y <strong>PostgreSQL</strong>, organizada por capas <code>Endpoints / Repositories / Models</code> con borrado en cascada y toggles <code>PATCH</code>.',
          'SPA con <strong>Angular 22</strong> (componentes standalone y señales), <strong>Angular Material</strong> y navegación mobile-first con barra inferior estilo app nativa.',
          'Calendario interactivo con <strong>FullCalendar</strong> y arrastrar y soltar para tareas de día completo o franja horaria, con recurrencia diaria, semanal y mensual.',
          'Tests de integración de la API con <strong>xUnit</strong> y <code>WebApplicationFactory</code>, usando repositorios falsos para aislar la persistencia.',
        ],
        result:
          'API documentada con Swagger/OpenAPI y cubierta por tests de integración; SPA con navegación tipo app nativa y estado reactivo. Código disponible en GitHub.',
      },
    },
    en: {
      subtitle: 'Fullstack home-management application',
      description:
        '.NET REST API with Minimal APIs, Dapper and PostgreSQL plus an Angular 22 SPA (standalone, signals) with mobile-first navigation, drag-and-drop calendar and shopping list.',
      bullets: [
        'Layered backend (<code>Endpoints / Repositories / Models</code>) with <code>PATCH</code> toggles and cascading deletes.',
        'Frontend with <strong>Angular Material</strong>, <strong>FullCalendar</strong> and reactive state via signals.',
        'API integration tests with <strong>xUnit</strong> and <code>WebApplicationFactory</code> using fake repositories.',
      ],
      ariaLabel: 'View HomeHub repository on GitHub',
      detail: {
        challenge:
          'Unify rooms, recurring tasks and a shopping list into a single mobile-friendly application, with a backend that could be tested end-to-end without touching a real database.',
        solution: [
          '.NET REST API with <strong>Minimal APIs</strong>, <strong>Dapper</strong> and <strong>PostgreSQL</strong>, layered as <code>Endpoints / Repositories / Models</code> with cascading deletes and <code>PATCH</code> toggles.',
          'SPA built with <strong>Angular 22</strong> (standalone components and signals), <strong>Angular Material</strong> and mobile-first navigation with a native-app-style bottom bar.',
          'Interactive <strong>FullCalendar</strong> with drag and drop for full-day or time-range tasks, with daily, weekly and monthly recurrence.',
          'API integration tests with <strong>xUnit</strong> and <code>WebApplicationFactory</code>, using fake repositories to isolate persistence.',
        ],
        result:
          'API documented with Swagger/OpenAPI and covered by integration tests; SPA with native-app-style navigation and reactive state. Code available on GitHub.',
      },
    },
  },
  {
    title: 'RadarChollos',
    tags: ['C#', '.NET 9', 'EF Core', 'SQLite', 'xUnit', 'Docker', 'Telegram.Bot'],
    url: 'https://github.com/idarkar3000/RadarChollos',
    urlLabel: 'github.com/idarkar3000/RadarChollos',
    category: 'backend',
    es: {
      subtitle: 'Servicio de rastreo automatizado de ofertas y bot de Telegram',
      description:
        'Servicio backend continuo en .NET 9 que rastrea publicaciones de Chollometro, descarta duplicados, normaliza comercios y evalúa reglas de filtrado dinámicas almacenadas en SQLite con EF Core, enviando alertas inmediatas por Telegram.',
      bullets: [
        'Ejecución en segundo plano con <code>IHostedService</code> y Minimal APIs para Health Checks cloud.',
        'Respuesta a comandos de Telegram en <strong>menos de 1 segundo</strong>.',
        'Suite completa de tests unitarios automatizados con <strong>xUnit</strong> y <strong>FluentAssertions</strong>.',
        'Contenerización multi-stage en <strong>Docker</strong> y despliegue en Render monitorizado con UptimeRobot.',
      ],
      ariaLabel: 'Ver repositorio de RadarChollos en GitHub',
      detail: {
        challenge:
          'Seguir ofertas manualmente consume horas y se pierden chollos; se necesitaba un servicio que trabajase solo en segundo plano y avisase al momento, sin reiniciar para cambiar filtros.',
        solution: [
          'Servicio permanente en <strong>C# / .NET 9</strong> con <code>IHostedService</code> y rastreo concurrente que descarta duplicados y normaliza comercios.',
          'Persistencia relacional con <strong>SQLite</strong> y <strong>Entity Framework Core</strong>, con índices anti-duplicados y reciclaje de identificadores.',
          'Comandos de Telegram (<code>/add</code>, <code>/list</code>, <code>/delete</code>) en caliente y restringidos a un usuario verificado, con alertas en menos de 1 s.',
          'Despliegue en <strong>Render</strong> con <strong>Docker</strong> multi-stage y keep-alive de <strong>UptimeRobot</strong>; suite de tests con <strong>xUnit</strong> y <strong>FluentAssertions</strong>.',
        ],
        result:
          'Alertas en menos de 1 segundo y gestión de filtros en caliente sin reiniciar el servicio. Desplegado y supervisado 24/7.',
      },
    },
    en: {
      subtitle: 'Automated deal-tracking service and Telegram bot',
      description:
        'Continuous .NET 9 backend service that tracks Chollometro posts, discards duplicates, normalizes stores and evaluates dynamic filtering rules stored in SQLite with EF Core, sending instant Telegram alerts.',
      bullets: [
        'Background execution with <code>IHostedService</code> and Minimal APIs for cloud Health Checks.',
        'Telegram command responses in <strong>under 1 second</strong>.',
        'Full unit-test suite with <strong>xUnit</strong> and <strong>FluentAssertions</strong>.',
        'Multi-stage <strong>Docker</strong> containerization and Render deployment monitored with UptimeRobot.',
      ],
      ariaLabel: 'View RadarChollos repository on GitHub',
      detail: {
        challenge:
          'Tracking deals by hand takes hours and good ones slip away; the service had to work unattended in the background and alert instantly, without restarts to change filters.',
        solution: [
          'Permanent <strong>C# / .NET 9</strong> service with <code>IHostedService</code> and concurrent crawling that discards duplicates and normalizes stores.',
          'Relational storage with <strong>SQLite</strong> and <strong>Entity Framework Core</strong>, with anti-duplicate indexes and ID recycling.',
          'Hot-reloadable Telegram commands (<code>/add</code>, <code>/list</code>, <code>/delete</code>) restricted to a verified user, with alerts in under 1 s.',
          '<strong>Render</strong> deployment with multi-stage <strong>Docker</strong> and <strong>UptimeRobot</strong> keep-alive; test suite with <strong>xUnit</strong> and <strong>FluentAssertions</strong>.',
        ],
        result:
          'Alerts in under one second and hot filter management with no service restarts. Deployed and monitored 24/7.',
      },
    },
  },
  {
    title: 'CareerCopilot',
    tags: ['C#', '.NET 10', 'Gemini', 'SQLite', 'Typst', 'Telegram.Bot', 'xUnit'],
    url: 'https://github.com/idarkar3000/CareerCopilot',
    urlLabel: 'github.com/idarkar3000/CareerCopilot',
    category: 'backend',
    es: {
      subtitle: 'Pipeline de prospección de empleo con IA',
      description:
        'Pipeline en .NET 10 que recopila ofertas, las deduplica en SQLite y las evalúa con la API REST de Gemini; genera un CV adaptado a cada oferta y lo compila a PDF A4 de una sola página con Typst.',
      bullets: [
        'Fallback entre modelos y reintentos ante 429/503 respetando <code>Retry-After</code>.',
        'Guardarraíl anti-alucinaciones que valida cada tecnología del CV contra un perfil fuente.',
        'Pruebas de humo que compilan el CV con <strong>Typst</strong> y verifican con <strong>PdfPig</strong> que ocupa exactamente una página.',
        'Bot de <strong>Telegram</strong> con comandos en caliente para regenerar CVs y gestionar filtros.',
      ],
      ariaLabel: 'Ver repositorio de CareerCopilot en GitHub',
      detail: {
        challenge:
          'Cada oferta pide un CV distinto; adaptarlo a mano a cada una es lento y propenso a exagerar tecnologías para encajar en el filtro.',
        solution: [
          'Pipeline en <strong>C# / .NET 10</strong>: scraping de ofertas, deduplicación en <strong>SQLite</strong> y evaluación con la <strong>API REST de Gemini</strong>.',
          '<strong>Guardarraíl anti-alucinaciones</strong> que elimina del CV cualquier tecnología no respaldada por el perfil fuente.',
          'Compilación a <strong>PDF A4 de exactamente una página</strong> con <strong>Typst</strong>, ajustando el contenido por prioridad y verificando el número de páginas con <strong>PdfPig</strong> en pruebas de humo.',
          'Bot de <strong>Telegram</strong> con comandos en caliente y modo local de respaldo que monta el CV sin consumir cuota de IA.',
        ],
        result:
          'Un CV en PDF A4 de una sola página por oferta, sin tecnologías inventadas, con respaldo local cuando se agota la cuota de IA.',
      },
    },
    en: {
      subtitle: 'AI-powered job-prospecting pipeline',
      description:
        '.NET 10 pipeline that collects offers, deduplicates them in SQLite and evaluates them with the Gemini REST API; generates a tailored CV per offer and compiles it to a one-page A4 PDF with Typst.',
      bullets: [
        'Model fallback and retries on 429/503 respecting <code>Retry-After</code>.',
        'Anti-hallucination guardrail validating every CV technology against a source profile.',
        'Smoke tests compiling the CV with <strong>Typst</strong> and verifying with <strong>PdfPig</strong> that it fits exactly one page.',
        '<strong>Telegram</strong> bot with hot commands to regenerate CVs and manage filters.',
      ],
      ariaLabel: 'View CareerCopilot repository on GitHub',
      detail: {
        challenge:
          'Every job offer asks for a different CV; tailoring it by hand is slow and tempts you to overstate technologies just to pass the filter.',
        solution: [
          '<strong>C# / .NET 10</strong> pipeline: offer scraping, <strong>SQLite</strong> deduplication and evaluation with the <strong>Gemini REST API</strong>.',
          '<strong>Anti-hallucination guardrail</strong> that strips from the CV any technology not backed by the source profile.',
          'Compilation to an <strong>exactly one-page A4 PDF</strong> with <strong>Typst</strong>, priority-based trimming and page-count verification with <strong>PdfPig</strong> in smoke tests.',
          '<strong>Telegram</strong> bot with hot commands and a local fallback mode that builds the CV without spending AI quota.',
        ],
        result:
          'One A4 one-page PDF CV per offer, with no invented technologies, plus a local fallback when the AI quota runs out.',
      },
    },
  },
  {
    title: 'Pdf_Signer',
    tags: ['C#', 'WPF (.NET 10)', 'MVVM', 'PdfPig', 'PdfiumViewer', 'XAML'],
    url: 'https://github.com/idarkar3000/Pdf_Signer',
    urlLabel: 'github.com/idarkar3000/Pdf_Signer',
    category: 'desktop',
    es: {
      subtitle: 'Visor PDF y estampado interactivo vectorial de firmas manuscritas',
      description:
        'Aplicación de escritorio desarrollada en C# y WPF (.NET 10) para previsualizar PDFs y estampar firmas de manera fluida, precisa y con fidelidad vectorial.',
      bullets: [
        'Canvas interactivo con grosor ajustable, borrado por trazos y soporte Drag & Drop.',
        'Estampado dinámico con posicionamiento en tiempo real e historial Deshacer/Rehacer (Ctrl+Z / Ctrl+Y).',
        'Integración de PdfiumViewer para renderizado ágil y PdfPig para manipulación y exportación sin pérdida.',
      ],
      ariaLabel: 'Ver repositorio de Pdf_Signer en GitHub',
      detail: {
        challenge:
          'Firmar un PDF exigía imprimir, escanear o recurrir a suites pesadas de pago; se buscaba un flujo fluido en el escritorio con fidelidad vectorial.',
        solution: [
          'Aplicación de escritorio en <strong>C# / WPF / .NET 10</strong> bajo patrón <strong>MVVM</strong> y <strong>XAML</strong>.',
          'Visor PDF interactivo con <strong>PdfiumViewer</strong> y lienzo de firma con trazo libre, borrado por trazos y grosor personalizable.',
          'Motor de comandos <strong>Undo/Redo</strong> (Ctrl+Z / Ctrl+Y) para el dibujo y el posicionamiento, con <strong>Drag & Drop</strong> de documentos.',
          'Exportación vectorial de la firma estamada con <strong>PdfPig</strong> optimizando buffers de memoria.',
        ],
        result:
          'Estampado preciso sin pérdida de fidelidad, con memoria optimizada durante la exportación y un flujo de una sola ventana.',
      },
    },
    en: {
      subtitle: 'PDF viewer with interactive vector stamping of handwritten signatures',
      description:
        'Desktop application built in C# and WPF (.NET 10) to preview PDFs and stamp signatures smoothly, precisely and with vector fidelity.',
      bullets: [
        'Interactive canvas with adjustable stroke width, per-stroke erasing and Drag & Drop support.',
        'Dynamic stamping with real-time positioning and Undo/Redo history (Ctrl+Z / Ctrl+Y).',
        'PdfiumViewer for fast rendering and PdfPig for lossless manipulation and export.',
      ],
      ariaLabel: 'View Pdf_Signer repository on GitHub',
      detail: {
        challenge:
          'Signing a PDF meant printing, scanning or resorting to heavy paid suites; the goal was a smooth desktop flow with vector fidelity.',
        solution: [
          'Desktop app in <strong>C# / WPF / .NET 10</strong> following the <strong>MVVM</strong> pattern with <strong>XAML</strong>.',
          'Interactive PDF viewer with <strong>PdfiumViewer</strong> and a signature canvas with freehand drawing, per-stroke erasing and adjustable width.',
          '<strong>Undo/Redo</strong> command engine (Ctrl+Z / Ctrl+Y) for drawing and positioning, with document <strong>Drag & Drop</strong>.',
          'Vector export of the stamped signature with <strong>PdfPig</strong>, optimizing memory buffers.',
        ],
        result:
          'Precise stamping with no fidelity loss, memory-optimized export and a single-window flow.',
      },
    },
  },
];

const FILTER_KEYS = ['all', 'backend', 'fullstack', 'desktop'] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

@Component({
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly langService = inject(LanguageService);
  protected readonly projects = PROJECTS;
  protected readonly activeFilter = signal<FilterKey>('all');
  protected readonly selected = signal<Project | null>(null);

  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === filter);
  });

  protected readonly filterLabels: Record<FilterKey, () => string> = {
    all: () => this.langService.t().projects.filters.all,
    backend: () => this.langService.t().projects.filters.backend,
    fullstack: () => this.langService.t().projects.filters.fullstack,
    desktop: () => this.langService.t().projects.filters.desktop,
  };

  protected readonly filterKeys = FILTER_KEYS;

  protected setFilter(filter: FilterKey): void {
    this.activeFilter.set(filter);
  }

  protected openDetail(project: Project): void {
    this.selected.set(project);
    document.body.style.overflow = 'hidden';
  }

  protected closeDetail(): void {
    this.selected.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selected()) {
      this.closeDetail();
    }
  }

  protected texts(project: Project): ProjectTexts {
    return project[this.langService.lang()];
  }
}
