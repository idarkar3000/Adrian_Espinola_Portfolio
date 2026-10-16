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
      document.documentElement.lang = lang;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, lang);
      }
    });
  }

  setLang(lang: 'es' | 'en'): void {
    this.lang.set(lang);
  }
}

export type { Lang, Translations, ProjectTexts };
