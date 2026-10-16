import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language';

@Component({
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly langService = inject(LanguageService);
}
