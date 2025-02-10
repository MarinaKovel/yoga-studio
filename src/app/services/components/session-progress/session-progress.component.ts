import { Component, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { Pose } from '../../../interfaces/pose.interface';
import { FetchDataService } from '../../../share/services/fetch-data.service';
import { YogaPoseService } from '../../../share/services/yoga-pose.service';

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
  userLevel: number = 1;
  rate: number = 0;

  constructor(private fetchDataService: FetchDataService, private yogaPoseService: YogaPoseService) { }

  ngOnInit() {
    this.yogaPoseService.getUser().subscribe(
      (user) => this.userLevel = user.level
    )

    this.fetchDataService.fetchPoses().subscribe(
      (poses) => {
        this.poses = poses.filter((pose: Pose) => pose.level === this.userLevel);
        this.rate = 100 / this.poses.reduce((acc, curValue) => acc + curValue.duration, 0);
      }
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
    console.log(this.rate);
    
    const increaseBy = this.poses[this.progressBar.currentPose].duration * this.rate;
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
