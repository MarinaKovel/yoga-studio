import { Component, Input } from '@angular/core';
import { Pose } from '../../../interfaces/pose.interface';
import { YogaPoseService } from '../../../share/services/yoga-pose.service';
import { Trainer } from '../../../interfaces/trainer.interface';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() progress = 0;
  @Input() currentPose = 0;
  @Input() poses: Pose[] = [];

  increaseProgress(amount: number) {
    this.progress = Math.min(this.progress + amount, 100);
  }
}
