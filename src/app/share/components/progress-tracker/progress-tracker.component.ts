import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BreathPipe } from '../../pipes/breath.pipe';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-progress-tracker',
  standalone: true,
  imports: [CommonModule, BreathPipe, MatButton],
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressTrackerComponent {
  meditation: boolean = false;
  progress: number = 0;
  sessionDuration: number = 300;
  intervalId: ReturnType<typeof setTimeout> | undefined;
  breath: number = 1;

  constructor(private cdr: ChangeDetectorRef) {}

  startMeditation(): void {
    this.meditation = true;
    this.startSession();
  }

  startSession(): void {
    let secondsCounter = 0;
    this.intervalId = setInterval(() => {
      this.progress += (100 / this.sessionDuration);
      secondsCounter++;

      if (secondsCounter % 3 === 0) {
        this.breath = this.breath === 1 ? 2 : 1;
      }

      if (this.progress >= 100) {
        this.progress = 100;
        this.breath = 3
        clearInterval(this.intervalId);
      }

      // Manually trigger change detection
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
