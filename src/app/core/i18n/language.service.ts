import { Injectable, computed, effect, signal } from '@angular/core';
import { Lang, TRANSLATIONS, Translations, ProjectTexts } from './translations';

const STORAGE_KEY = 'portfolio-lang';

function initialLang(): 'es' | 'en' {
  if (typeof localStorage === 'undefined') {
    return 'es';
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'en' ? 'en' : 'es';
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<'es' | 'en'>(initialLang());
  readonly t: () => Translations = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      const meta = this.t().meta;
      document.documentElement.lang = lang;

      document.title = meta.title;
      this.setMeta('name', 'description', meta.description);
      this.setMeta('property', 'og:title', meta.title);
      this.setMeta('property', 'og:description', meta.description);
      this.setMeta('property', 'og:locale', meta.ogLocale);
      this.setMeta('name', 'twitter:title', meta.title);
      this.setMeta('name', 'twitter:description', meta.description);

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, lang);
      }
    });
  }

  setLang(lang: 'es' | 'en'): void {
    if (lang === this.lang()) {
      return;
    }
    const apply = () => this.lang.set(lang);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && typeof document.startViewTransition === 'function') {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }

  private setMeta(attr: 'name' | 'property', key: string, content: string): void {
    const el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (el) {
      el.content = content;
    }
  }
}

export type { Lang, Translations, ProjectTexts };
