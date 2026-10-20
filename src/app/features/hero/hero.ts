import { Component, afterNextRender, effect, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { EggsService } from '../../core/services/eggs.service';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

@Component({
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly langService = inject(LanguageService);
  protected readonly eggs = inject(EggsService);

  private typeToken = 0;
  private started = false;

  constructor() {
    afterNextRender(() => {
      this.started = true;
      void this.runTyping(this.langService.t().hero.typedStrings);
    });

    effect(() => {
      const strings = this.langService.t().hero.typedStrings;
      if (this.started) {
        void this.runTyping(strings);
      }
    });
  }

  private async runTyping(strings: string[]): Promise<void> {
    const token = ++this.typeToken;
    const el = document.getElementById('typing');
    if (!el) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = strings[0] ?? '';
      return;
    }

    while (token === this.typeToken) {
      for (const str of strings) {
        if (token !== this.typeToken) {
          return;
        }
        for (let i = 1; i <= str.length; i++) {
          if (token !== this.typeToken) {
            return;
          }
          el.textContent = str.slice(0, i);
          await sleep(42);
        }
        await sleep(2000);
        for (let i = str.length; i >= 0; i--) {
          if (token !== this.typeToken) {
            return;
          }
          el.textContent = str.slice(0, i);
          await sleep(18);
        }
        await sleep(350);
      }
    }
  }
}
