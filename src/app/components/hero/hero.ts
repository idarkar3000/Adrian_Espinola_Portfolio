import { Component, afterNextRender, effect, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language';

declare const Typed: any;
declare const tsParticles: any;

const CDN_SCRIPTS = [
  'https://cdn.jsdelivr.net/npm/typed.js@2.0.12',
  'https://cdn.jsdelivr.net/npm/tsparticles@2.11.1/tsparticles.bundle.min.js',
];

@Component({
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly langService = inject(LanguageService);

  private typedInstance: any = null;

  constructor() {
    afterNextRender(() => {
      this.loadCdnScripts().then(() => {
        this.initTyped(this.langService.t().hero.typedStrings);
        this.initParticles();
      });
    });

    effect(() => {
      const strings = this.langService.t().hero.typedStrings;
      if (typeof Typed === 'undefined' || !document.getElementById('typing')) {
        return;
      }
      if (this.typedInstance) {
        this.typedInstance.destroy();
        this.typedInstance = null;
      }
      this.initTyped(strings);
    });
  }

  private loadCdnScripts(): Promise<void> {
    const loads = CDN_SCRIPTS.map(
      (src) =>
        new Promise<void>((resolve) => {
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => resolve();
          document.body.appendChild(script);
        })
    );
    return Promise.all(loads).then(() => undefined);
  }

  private initTyped(strings: string[]): void {
    const target = document.getElementById('typing');
    if (!target || typeof Typed === 'undefined') {
      return;
    }
    this.typedInstance = new Typed('#typing', {
      strings,
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1800,
      loop: true,
    });
  }

  private initParticles(): void {
    if (typeof tsParticles === 'undefined' || !document.getElementById('particles-js')) {
      return;
    }
    tsParticles.load('particles-js', {
      background: { color: 'transparent' },
      particles: {
        number: { value: 50, density: { enable: true, area: 900 } },
        color: { value: ['#8b5cf6', '#10b981'] },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 2.2, random: true },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          outModes: { default: 'out' },
        },
        links: {
          enable: true,
          distance: 130,
          color: '#8b5cf6',
          opacity: 0.18,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
        },
        modes: {
          grab: { distance: 120, links: { opacity: 0.45 } },
          push: { quantity: 2 },
        },
      },
    });
  }
}
