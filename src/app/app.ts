import { AfterViewInit, Component, inject } from '@angular/core';
import { LanguageService } from './core/i18n/language.service';
import { SoundService } from './core/services/sound.service';
import { EggsService } from './core/services/eggs.service';
import { Navbar } from './core/layout/navbar/navbar';
import { Footer } from './core/layout/footer/footer';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Experience } from './features/experience/experience';
import { Projects } from './features/projects/projects';
import { Education } from './features/education/education';
import { Contact } from './features/contact/contact';

@Component({
  imports: [Navbar, Footer, Hero, About, Skills, Experience, Projects, Education, Contact],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements AfterViewInit {
  protected readonly langService = inject(LanguageService);
  protected readonly eggs = inject(EggsService);
  private readonly sound = inject(SoundService);

  ngAfterViewInit(): void {
    this.sound.initDelegation();
    this.eggs.start();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));
  }
}
