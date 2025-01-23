import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appBreathAnimation]',
})
export class BreathAnimationDirective implements OnInit, OnDestroy {
  private duration: number = 3000;
  private timeout: number = 300000;
  private intervalId: ReturnType<typeof setTimeout> | undefined;
  private timeoutId: ReturnType<typeof setTimeout> | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initializeBreathAnimation();
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  private initializeBreathAnimation(): void {
    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'transition', `transform ${this.duration / 1000}s ease-in-out`);
    this.renderer.setStyle(element, 'width', '160px');
    this.renderer.setStyle(element, 'height', '160px');

    let isExpanding = true;

    this.intervalId = setInterval(() => {
      if (isExpanding) {
        this.renderer.setStyle(element, 'transform', 'scale(1.5)');
        if (element) {
          this.renderer.setProperty(element, 'innerText', 'Breath In...');
        }
      } else {
        this.renderer.setStyle(element, 'transform', 'scale(1)');
        if (element) {
          this.renderer.setProperty(element, 'innerText', 'Breath Out...');
        }
      }
      isExpanding = !isExpanding;
    }, this.duration);

    this.timeoutId = setTimeout(() => {
      this.stopAnimation(element, element);
    }, this.timeout);
  }

  private stopAnimation(element: HTMLElement, textElement: HTMLElement | null): void {
    this.clearTimers();

    this.renderer.setStyle(element, 'transform', 'scale(1)');
    if (textElement) {
      this.renderer.setProperty(textElement, 'innerText', 'Well Done!');
    }
  }

  private clearTimers(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }

}
