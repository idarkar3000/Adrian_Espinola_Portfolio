import {
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { LanguageService, ProjectTexts } from '../../core/i18n/language.service';

type ProjectCategory = 'backend' | 'fullstack' | 'desktop';

interface Project {
  title: string;
  tags: string[];
  url: string;
  demo?: string;
  category: ProjectCategory;
  es: ProjectTexts;
  en: ProjectTexts;
}

const PROJECTS: Project[] = [
  {
    title: 'HomeHub',
    tags: [
      'C#',
      'ASP.NET Core',
      'Minimal APIs',
      'Dapper',
      'PostgreSQL',
      'SignalR',
      'JWT',
      'Angular 22',
      'xUnit',
    ],
    url: 'https://github.com/idarkar3000/HomeHub',
    demo: 'https://home-hub-pearl.vercel.app',
    category: 'fullstack',
    es: {
      subtitle: 'Aplicación full-stack de gestión del hogar',
      description:
        'API REST en .NET 10 con Minimal APIs, Dapper y PostgreSQL, JWT con BCrypt y rate limiting, junto a una SPA en Angular 22 (standalone, signals) con actualización en tiempo real por SignalR.',
      bullets: [
        'Aislamiento por usuario en todas las consultas y <strong>rate limiting</strong> por IP en autenticación.',
        'Tiempo real con <strong>SignalR</strong> por grupos de usuario; PWA instalable y modo oscuro.',
        'Tests de integración con <strong>xUnit</strong> y <code>WebApplicationFactory</code>, con CI en <strong>GitHub Actions</strong>.',
      ],
      ariaLabel: 'Ver repositorio de HomeHub en GitHub',
      detail: {
        challenge:
          'Unificar habitaciones, tareas con recurrencia, notas y lista de la compra en una sola aplicación usable desde el móvil, con un backend que se pudiera probar de extremo a extremo sin tocar una base de datos real.',
        solution: [
          'API REST en .NET 10 con <strong>Minimal APIs</strong>, <strong>Dapper</strong> y <strong>PostgreSQL</strong>, organizada en <code>Endpoints / Repositories / Models</code>.',
          'Autenticación con <strong>JWT</strong> y contraseñas hasheadas con <strong>BCrypt</strong>, más <strong>rate limiting</strong> por IP en los endpoints de autenticación.',
          'Cambios en tiempo real con <strong>SignalR</strong> y grupos por usuario: los avisos solo viajan a los dispositivos de la misma cuenta.',
          'SPA con <strong>Angular 22</strong> (standalone y signals), <strong>Angular Material</strong> y calendario con arrastrar y soltar sobre <strong>FullCalendar</strong>.',
          'Tests de integración con <strong>xUnit</strong> y <code>WebApplicationFactory</code>, sustituyendo los repositorios por fakes; CI en <strong>GitHub Actions</strong>.',
        ],
        result:
          'API documentada con Swagger/OpenAPI y cubierta por tests de integración, con demo pública desplegada en Vercel.',
      },
    },
    en: {
      subtitle: 'Full-stack home management application',
      description:
        '.NET 10 REST API with Minimal APIs, Dapper and PostgreSQL, JWT with BCrypt and rate limiting, plus an Angular 22 SPA (standalone, signals) with real-time updates over SignalR.',
      bullets: [
        'Per-user isolation on every query and IP <strong>rate limiting</strong> on authentication.',
        'Real-time updates with <strong>SignalR</strong> per user group; installable PWA and dark mode.',
        'Integration tests with <strong>xUnit</strong> and <code>WebApplicationFactory</code>, with CI on <strong>GitHub Actions</strong>.',
      ],
      ariaLabel: 'View HomeHub repository on GitHub',
      detail: {
        challenge:
          'Unify rooms, recurring tasks, notes and a shopping list into a single mobile-friendly application, with a backend that could be tested end-to-end without touching a real database.',
        solution: [
          '.NET 10 REST API with <strong>Minimal APIs</strong>, <strong>Dapper</strong> and <strong>PostgreSQL</strong>, layered as <code>Endpoints / Repositories / Models</code>.',
          'Authentication with <strong>JWT</strong> and passwords hashed with <strong>BCrypt</strong>, plus per-IP <strong>rate limiting</strong> on the authentication endpoints.',
          'Real-time changes with <strong>SignalR</strong> and per-user groups: notifications only travel to devices on the same account.',
          'SPA built with <strong>Angular 22</strong> (standalone components and signals), <strong>Angular Material</strong> and a drag-and-drop calendar on <strong>FullCalendar</strong>.',
          'Integration tests with <strong>xUnit</strong> and <code>WebApplicationFactory</code>, swapping repositories for fakes; CI on <strong>GitHub Actions</strong>.',
        ],
        result:
          'API documented with Swagger/OpenAPI and covered by integration tests, with a public demo deployed on Vercel.',
      },
    },
  },
  {
    title: 'RadarChollos',
    tags: ['C#', '.NET 9', 'EF Core', 'SQLite', 'xUnit', 'Docker', 'Telegram.Bot', 'Serilog'],
    url: 'https://github.com/idarkar3000/RadarChollos',
    category: 'backend',
    es: {
      subtitle: 'Bot de Telegram que vigila ofertas y avisa con alertas por patrón',
      description:
        'Worker en .NET 9 que consulta el feed de Chollometro cada minuto, descarta ofertas caducadas o repetidas y evalúa alertas con sintaxis propia —términos, precio máximo y tienda—, avisando por Telegram con un enlace directo a la tienda.',
      bullets: [
        'Sintaxis de alertas escrita en el chat: <code>+</code> obliga, <code>|</code> alterna, <code>-</code> excluye, <code>&lt;</code> limita precio y <code>@</code> filtra tienda.',
        'Índice único sobre el enlace en <strong>SQLite</strong>, no en memoria: sobrevive a reinicios y despliegues.',
        'Resuelve la redirección de Chollometro para enlazar a la tienda real, no al salto intermedio.',
        'Tests con <strong>xUnit</strong>, logging con <strong>Serilog</strong> y despliegue con <strong>Docker</strong> multi-stage.',
      ],
      ariaLabel: 'Ver repositorio de RadarChollos en GitHub',
      detail: {
        challenge:
          'Perseguir una oferta concreta a mano es agotador: entras, miras, no está, vuelves en dos horas. El bot tenía que hacer ese trabajo solo y avisar únicamente cuando hubiera algo que mereciera la pena.',
        solution: [
          'Worker en <strong>C# / .NET 9</strong> que consulta el RSS de Chollometro cada minuto y descarta las ofertas caducadas, agotadas o finalizadas antes de notificar.',
          'Alertas guardadas en <strong>SQLite</strong> con <strong>Entity Framework Core</strong> y editables en caliente desde el chat con <code>/add</code>, <code>/list</code> y <code>/delete</code>.',
          'Índice único sobre el enlace en la base de datos, en lugar de un <code>HashSet</code> en memoria que se perdería en cada reinicio.',
          'Resolución de la redirección de Chollometro con un <code>HttpClient</code> que no sigue redirecciones, para quedarse con la URL real de la tienda.',
          'Tests con <strong>xUnit</strong> y <strong>FluentAssertions</strong>; <strong>Docker</strong> multi-stage y logging con <strong>Serilog</strong> a consola y fichero con rotación diaria.',
        ],
        result:
          'Aviso en menos de un minuto con enlace directo a la tienda y alertas gestionables desde el chat sin reiniciar el servicio. El despliegue está parado ahora mismo: se apagó para no consumir la cuota gratuita.',
      },
    },
    en: {
      subtitle: 'Telegram bot that watches deals and alerts on saved patterns',
      description:
        '.NET 9 worker that polls the Chollometro feed every minute, drops expired or duplicate deals and evaluates alerts written in its own syntax — terms, maximum price and store — then notifies through Telegram with a direct link to the store.',
      bullets: [
        'Alert syntax written straight in the chat: <code>+</code> requires, <code>|</code> alternates, <code>-</code> excludes, <code>&lt;</code> caps price and <code>@</code> filters store.',
        'Unique index on the link in <strong>SQLite</strong>, not in memory: it survives restarts and deployments.',
        'Resolves the Chollometro redirect so the alert links to the real store, not to the intermediate hop.',
        'Tests with <strong>xUnit</strong>, logging with <strong>Serilog</strong> and multi-stage <strong>Docker</strong> deployment.',
      ],
      ariaLabel: 'View RadarChollos repository on GitHub',
      detail: {
        challenge:
          'Tracking a specific deal by hand is exhausting: you go in, look, it is not there, you come back two hours later. The bot had to do that work on its own and only interrupt when something was actually worth it.',
        solution: [
          '<strong>C# / .NET 9</strong> worker that polls the Chollometro RSS feed every minute and drops expired, sold-out or finished deals before notifying.',
          'Alerts stored in <strong>SQLite</strong> with <strong>Entity Framework Core</strong> and editable on the fly from the chat with <code>/add</code>, <code>/list</code> and <code>/delete</code>.',
          'Unique index on the link in the database instead of an in-memory <code>HashSet</code> that would lose state on every restart.',
          'Chollometro redirect resolution using an <code>HttpClient</code> that does not follow redirects, keeping the real store URL.',
          'Tests with <strong>xUnit</strong> and <strong>FluentAssertions</strong>; multi-stage <strong>Docker</strong> and <strong>Serilog</strong> logging to console and rotating file.',
        ],
        result:
          'Alert in under a minute with a direct link to the store, and alerts managed from the chat without restarting the service. The deployment is stopped right now: it was shut down to avoid burning the free tier quota.',
      },
    },
  },
  {
    title: 'CareerCopilot',
    tags: ['C#', '.NET 10', 'Gemini', 'SQLite', 'Typst', 'Telegram.Bot', 'xUnit'],
    url: 'https://github.com/idarkar3000/CareerCopilot',
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
    tags: ['C#', 'WPF (.NET 10)', 'XAML', 'RelayCommand', 'PdfPig', 'PdfiumViewer'],
    url: 'https://github.com/idarkar3000/Pdf_Signer',
    category: 'desktop',
    es: {
      subtitle: 'Visor PDF y estampado vectorial de firmas manuscritas',
      description:
        'Aplicación de escritorio en C# y WPF sobre .NET 10 para previsualizar PDFs y estampar firmas manuscritas de forma vectorial, sin imprimir ni escanear nada.',
      bullets: [
        'Lienzo de firma con grosor ajustable y borrado por trazos.',
        'Firma colocable y reescalable sobre el documento, con Deshacer/Rehacer (Ctrl+Z / Ctrl+Y).',
        'PdfiumViewer para el renderizado y PdfPig para el estampado vectorial sin pérdida.',
      ],
      ariaLabel: 'Ver repositorio de Pdf_Signer en GitHub',
      detail: {
        challenge:
          'Firmar un PDF exigía imprimir, escanear o recurrir a suites pesadas de pago; se buscaba un flujo fluido en el escritorio con fidelidad vectorial.',
        solution: [
          'Aplicación de escritorio en <strong>C# / WPF / .NET 10</strong> con vistas separadas y comandos propios mediante <code>RelayCommand</code> (<code>ICommand</code>).',
          'Visor PDF con <strong>PdfiumViewer</strong>: zoom, navegación por páginas y salto a una página concreta.',
          'Lienzo de firma con trazo libre, borrado por trazos y grosor configurable, más apertura de documentos arrastrando el PDF sobre la ventana.',
          'Motor de <strong>Deshacer/Rehacer</strong> (Ctrl+Z / Ctrl+Y) tanto para el dibujo de la firma como para su posición sobre el documento.',
          'Exportación vectorial con <strong>PdfPig</strong>, conservando la transparencia de la firma y la integridad del PDF.',
        ],
        result:
          'Estampado vectorial sin pérdida de fidelidad y un flujo de una sola ventana. No es una firma digital criptográfica: estampa una firma manuscrita, no firma con certificado.',
      },
    },
    en: {
      subtitle: 'PDF viewer with vector stamping of handwritten signatures',
      description:
        'Desktop application built in C# and WPF on .NET 10 to preview PDFs and stamp handwritten signatures as vectors, without printing or scanning anything.',
      bullets: [
        'Signature canvas with adjustable stroke width and per-stroke erasing.',
        'Signature can be moved and rescaled over the document, with Undo/Redo (Ctrl+Z / Ctrl+Y).',
        'PdfiumViewer for rendering and PdfPig for lossless vector stamping.',
      ],
      ariaLabel: 'View Pdf_Signer repository on GitHub',
      detail: {
        challenge:
          'Signing a PDF meant printing, scanning or resorting to heavy paid suites; the goal was a smooth desktop flow with vector fidelity.',
        solution: [
          'Desktop app in <strong>C# / WPF / .NET 10</strong> with separated views and custom commands through <code>RelayCommand</code> (<code>ICommand</code>).',
          'PDF viewer built on <strong>PdfiumViewer</strong>: zoom, page navigation and jump to a specific page.',
          'Signature canvas with freehand drawing, per-stroke erasing and configurable width, plus document opening by dragging a PDF onto the window.',
          '<strong>Undo/Redo</strong> engine (Ctrl+Z / Ctrl+Y) for both the signature drawing and its position on the document.',
          'Vector export with <strong>PdfPig</strong>, preserving signature transparency and PDF integrity.',
        ],
        result:
          'Vector stamping with no fidelity loss and a single-window flow. It is not a cryptographic digital signature: it stamps a handwritten signature, it does not sign with a certificate.',
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

  private readonly modalRef = viewChild<ElementRef<HTMLElement>>('modalPanel');
  private lastFocused: HTMLElement | null = null;

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
    this.lastFocused = document.activeElement as HTMLElement | null;
    this.selected.set(project);
    document.body.style.overflow = 'hidden';
    queueMicrotask(() => this.focusFirstInModal());
  }

  protected closeDetail(): void {
    this.selected.set(null);
    document.body.style.overflow = '';
    this.lastFocused?.focus();
    this.lastFocused = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selected()) {
      this.closeDetail();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onTab(event: KeyboardEvent): void {
    if (event.key !== 'Tab' || !this.selected()) {
      return;
    }
    const panel = this.modalRef()?.nativeElement;
    if (!panel) {
      return;
    }
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable.length) {
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private focusFirstInModal(): void {
    const panel = this.modalRef()?.nativeElement;
    if (!panel) {
      return;
    }
    const target =
      panel.querySelector<HTMLElement>('.modal-close') ??
      panel.querySelector<HTMLElement>('a, button');
    target?.focus();
  }

  protected texts(project: Project): ProjectTexts {
    return project[this.langService.lang()];
  }
}
