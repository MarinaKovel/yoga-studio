import { Component, Input } from '@angular/core';
import { Pose } from '../../../interfaces/pose.interface';
import { YOGA_POSES } from '../../../share/constants';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() progress = 0;
  @Input() currentPose = 0;

  poses: Pose[] = YOGA_POSES;

  increaseProgress(amount: number) {
    this.progress = Math.min(this.progress + amount, 100);
  }
}
