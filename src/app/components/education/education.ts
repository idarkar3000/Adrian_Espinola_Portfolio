import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language';

@Component({
  selector: 'app-education',
  styleUrl: './education.css',
  templateUrl: './education.html',
})
export class Education {
  protected readonly langService = inject(LanguageService);
}
