import { Injectable, signal } from '@angular/core';

type SoundKind = 'hover' | 'click' | 'toggle' | 'achieve' | 'boot';

const STORAGE_KEY = 'portfolio-sound';

@Injectable({ providedIn: 'root' })
export class SoundService {
  readonly enabled = signal<boolean>(loadEnabled());

  private ctx: AudioContext | null = null;
  private lastHover: Element | null = null;

  initDelegation(): void {
    document.addEventListener('pointerover', (e) => {
      const target = (e.target as Element | null)?.closest('a, button, [role="button"]');
      if (!target || target === this.lastHover) {
        return;
      }
      this.lastHover = target;
      this.play('hover');
    });
    document.addEventListener('pointerdown', () => {
      this.unlockContext();
    });
    document.addEventListener('click', () => this.play('click'));
  }

  toggle(): void {
    this.enabled.update((v) => !v);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, String(this.enabled()));
    }
    if (this.enabled()) {
      this.play('toggle');
    }
  }

  play(kind: SoundKind): void {
    if (!this.enabled()) {
      return;
    }
    const ctx = this.unlockContext();
    if (!ctx) {
      return;
    }
    const now = ctx.currentTime;
    switch (kind) {
      case 'hover':
        this.blip(ctx, now, 540, 'sine', 0.028, 0.05);
        break;
      case 'click':
        this.blip(ctx, now, 320, 'square', 0.035, 0.07);
        this.blip(ctx, now + 0.04, 240, 'square', 0.03, 0.06);
        break;
      case 'toggle':
        this.blip(ctx, now, 440, 'sine', 0.05, 0.09);
        this.blip(ctx, now + 0.1, 660, 'sine', 0.05, 0.1);
        break;
      case 'boot':
        this.blip(ctx, now, 880, 'sine', 0.05, 0.09);
        this.blip(ctx, now + 0.12, 620, 'sine', 0.04, 0.1);
        break;
      case 'achieve': {
        const notes = [523.25, 659.25, 783.99];
        notes.forEach((freq, i) => this.blip(ctx, now + i * 0.12, freq, 'triangle', 0.07, 0.16));
        break;
      }
    }
  }

  private blip(
    ctx: AudioContext,
    start: number,
    freq: number,
    type: OscillatorType,
    volume: number,
    duration: number,
  ): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(volume, start + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.02);
  }

  private unlockContext(): AudioContext | null {
    if (!this.enabled()) {
      return null;
    }
    if (!this.ctx) {
      const Ctor: typeof AudioContext | undefined =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) {
        return null;
      }
      this.ctx = new Ctor();
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
    return this.ctx;
  }
}

function loadEnabled(): boolean {
  if (typeof localStorage === 'undefined') {
    return false;
  }
  return localStorage.getItem(STORAGE_KEY) === 'true';
}
