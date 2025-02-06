import { Component, Input } from '@angular/core';
import { Pose } from '../../../interfaces/pose.interface';
import { FetchDataService } from '../../../share/services/fetch-data.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() progress = 0;
  @Input() currentPose = 0;

  poses: Pose[] = [];

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit() {
    this.fetchDataService.fetchPoses().subscribe(
      (poses) => this.poses = poses
    )
  }

  increaseProgress(amount: number) {
    this.progress = Math.min(this.progress + amount, 100);
  }
}
