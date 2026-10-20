import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-education',
  styleUrl: './education.css',
  templateUrl: './education.html',
})
export class Education {
  protected readonly langService = inject(LanguageService);
}
