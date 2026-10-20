import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { EggsService } from '../../services/eggs.service';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly langService = inject(LanguageService);
  protected readonly eggs = inject(EggsService);
}
