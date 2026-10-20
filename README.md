# Adrián Espínola Gumiel — Portfolio

Portfolio personal de **Adrián Espínola Gumiel**, desarrollador backend especializado en **.NET / C#**. SPA construida con **Angular 22** (componentes standalone y signals), con estética editorial oscura, soporte **ES/EN**, easter eggs jugables y despliegue automático en GitHub Pages.

## Stack

- **Angular 22** — standalone components, signals, `@if` / `@for` de control flow.
- **TypeScript 5.x** y CSS modular (design system en `src/styles/`).
- **Font Awesome** (CDN) y **Google Fonts** (Cinzel, Plus Jakarta Sans, Fira Code).
- **GitHub Actions** → GitHub Pages (`baseHref: /Adrian_Espinola_Portfolio/`).

## Requisitos

- Node.js 22+ (probado con Node 24)
- npm 10+

## Comandos

```bash
npm ci              # instalar dependencias (CI reproducible)
npx ng serve        # servidor de desarrollo en http://localhost:4200/
npx ng build        # build de producción → dist/portfolio-site/browser
npx prettier --write <archivos>   # formatear
```

> `ng` no está instalado globalmente en este entorno; usa `npx ng ...`.

## Estructura

```
src/
├── app/
│   ├── core/
│   │   ├── i18n/         # LanguageService + translations.ts (todos los textos ES/EN)
│   │   ├── layout/       # navbar y footer
│   │   └── services/     # SoundService (WebAudio) y EggsService (logros)
│   ├── features/         # hero, about, skills, experience, projects, education, contact
│   ├── app.ts / app.html # shell: reveal-on-scroll + capa de toasts
│   └── app.config.ts
├── styles/               # design system: tokens, base, layout, components, hollow
├── public/               # CV, foto, favicon, robots.txt, sitemap.xml, 404.html
└── index.html            # metadatos SEO/Open Graph y fuentes
```

## Internacionalización

Todo el texto vive en `src/app/core/i18n/translations.ts`. `LanguageService` expone `lang` (signal) y `t()` (computed), persiste la preferencia en `localStorage`, actualiza `<html lang>`, el `<title>` y los metadatos Open Graph al cambiar de idioma.

## Accesibilidad

- Navegación por teclado con foco visible (`:focus-visible`).
- Modal de proyectos con `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, focus-trap y restauración del foco al cerrar.
- Respeta `prefers-reduced-motion` (desactiva typewriter, reveal y transiciones).

## Despliegue

El workflow `.github/workflows/deploy.yml` compila en cada push a `main` y publica en GitHub Pages. `public/404.html` redirige rutas profundas al SPA.

## Notas

- Los `*.css` de los componentes de `features/` son intencionadamente mínimos: el estilo reside en el design system global (`src/styles/`).
