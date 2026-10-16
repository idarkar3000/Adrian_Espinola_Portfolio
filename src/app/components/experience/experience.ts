import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language';

@Component({
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly langService = inject(LanguageService);
}
