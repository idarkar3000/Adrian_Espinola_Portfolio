import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly langService = inject(LanguageService);

  protected readonly pips = [1, 2, 3, 4, 5];

  protected readonly cards = computed(() => this.langService.t().skills.cards);
  protected readonly levels = computed(() => this.langService.t().skills.levels);

  protected pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
