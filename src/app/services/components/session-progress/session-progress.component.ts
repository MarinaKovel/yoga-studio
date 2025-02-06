import { Component, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { Pose } from '../../../interfaces/pose.interface';
import { FetchDataService } from '../../../share/services/fetch-data.service';

@Component({
  selector: 'app-session-progress',
  templateUrl: './session-progress.component.html',
  styleUrl: './session-progress.component.scss'
})
export class SessionProgressComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild(ProgressBarComponent) progressBar!: ProgressBarComponent;

  private previousProgress = 0;
  poses: Pose[] = [];
  start: boolean = false;
  showNext: boolean = true;

  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit() {
    this.fetchDataService.fetchPoses().subscribe(
      (poses) => this.poses = poses
    )
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called. Initial progress value:', this.progressBar?.progress);
  }

  ngAfterViewChecked() {
    if (this.progressBar && this.progressBar.progress !== this.previousProgress) {
      console.log(`Progress changed from ${this.previousProgress}% to ${this.progressBar.progress}%`);
      this.previousProgress = this.progressBar.progress;
    }
  }

  increaseProgress() {
    const increaseBy = this.poses[this.progressBar.currentPose].duration * 10;
    this.progressBar.increaseProgress(increaseBy);

    if (this.progressBar.currentPose < this.poses.length - 1) {
      this.progressBar.currentPose++
    } else {
      this.showNext = false;
    }
  }

  startSession() {
    this.start = true;
  }
}
