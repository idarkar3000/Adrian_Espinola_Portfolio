import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language';

@Component({
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  protected readonly langService = inject(LanguageService);
}
