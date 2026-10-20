import { AfterViewInit, Component, HostListener, inject, signal } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { SoundService } from '../../services/sound.service';
import { EggsService } from '../../services/eggs.service';

@Component({
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements AfterViewInit {
  protected readonly langService = inject(LanguageService);
  protected readonly sound = inject(SoundService);
  protected readonly eggs = inject(EggsService);

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

  toggleSound(): void {
    this.sound.toggle();
  }

  onLogoClick(): void {
    this.eggs.onLogoClick();
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
      { threshold: 0.3 },
    );

    document.querySelectorAll('section, header').forEach((el) => observer.observe(el));
  }
}
