import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language';

@Component({
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly langService = inject(LanguageService);
}
