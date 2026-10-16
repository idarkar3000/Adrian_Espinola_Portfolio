import { AfterViewInit, Component, HostListener, inject, signal } from '@angular/core';
import { LanguageService } from './i18n/language';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';

@Component({
  imports: [Hero, About, Skills, Experience, Projects, Education, Contact],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements AfterViewInit {
  protected readonly langService = inject(LanguageService);
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly activeSection = signal('intro');

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              this.activeSection.set(id);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section, header').forEach((el) => observer.observe(el));
  }
}
