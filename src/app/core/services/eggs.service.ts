import { Injectable, inject, signal } from '@angular/core';
import { LanguageService } from '../i18n/language.service';
import { SoundService } from './sound.service';

export type EggId = 'konami' | 'logo' | 'avatar' | 'hollowOff' | 'hollowWord' | 'footer';

interface Toast {
  id: EggId;
  key: number;
}

const STORAGE_KEY = 'portfolio-eggs';

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const SECRET_WORD = 'hollow';

@Injectable({ providedIn: 'root' })
export class EggsService {
  private readonly langService = inject(LanguageService);
  private readonly sound = inject(SoundService);

  readonly toasts = signal<Toast[]>([]);
  readonly hollowMode = signal<boolean>(false);

  private unlocked = new Set<EggId>();
  private sequence: string[] = [];
  private letters: string[] = [];
  private logoClicks = 0;
  private avatarClicks = 0;
  private toastKey = 0;

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        stored
          .split(',')
          .filter(Boolean)
          .forEach((id) => this.unlocked.add(id as EggId));
      }
      this.hollowMode.set(
        this.unlocked.has('konami') && localStorage.getItem('portfolio-hollow') === 'true',
      );
    }
    if (this.hollowMode()) {
      document.body?.classList.add('hollow-mode');
    }
  }

  start(): void {
    window.addEventListener('keydown', (e) => this.onKey(e));
  }

  text(id: EggId): { title: string; desc: string } {
    const eggs = this.langService.t().eggs;
    if (id === 'hollowOff') {
      return eggs.hollowOff;
    }
    return eggs[id];
  }

  onLogoClick(): void {
    this.logoClicks++;
    if (this.logoClicks >= 5) {
      this.logoClicks = 0;
      this.unlock('logo');
    }
  }

  onAvatarClick(): void {
    this.avatarClicks++;
    if (this.avatarClicks >= 4) {
      this.avatarClicks = 0;
      this.unlock('avatar');
    }
  }

  onSealClick(): void {
    this.unlock('footer');
  }

  private onKey(e: KeyboardEvent): void {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    this.sequence.push(key);
    if (this.sequence.length > KONAMI.length) {
      this.sequence.shift();
    }
    if (this.sequence.join('|') === KONAMI.join('|')) {
      this.sequence = [];
      this.toggleHollow();
    }

    if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
      this.letters.push(key);
      if (this.letters.length > SECRET_WORD.length) {
        this.letters.shift();
      }
      if (this.letters.join('') === SECRET_WORD) {
        this.letters = [];
        this.unlock('hollowWord');
      }
    }
  }

  private toggleHollow(): void {
    const next = !this.hollowMode();
    this.hollowMode.set(next);
    document.body.classList.toggle('hollow-mode', next);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('portfolio-hollow', String(next));
    }
    if (next) {
      this.unlock('konami');
    } else if (this.unlocked.has('konami')) {
      this.pushToast('hollowOff');
    }
  }

  private unlock(id: EggId): void {
    if (this.unlocked.has(id)) {
      return;
    }
    this.unlocked.add(id);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, Array.from(this.unlocked).join(','));
    }
    this.pushToast(id);
  }

  private pushToast(id: EggId): void {
    this.sound.play('achieve');
    this.toastKey++;
    const key = this.toastKey;
    this.toasts.update((list) => [...list, { id, key }]);
    setTimeout(() => {
      this.toasts.update((list) => list.filter((t) => t.key !== key));
    }, 5200);
  }
}
