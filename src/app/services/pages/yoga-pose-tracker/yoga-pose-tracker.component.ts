import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { PoseTrackerComponent } from '../../components/pose-tracker/pose-tracker.component';

@Component({
  selector: 'app-yoga-pose-tracker',
  templateUrl: './yoga-pose-tracker.component.html',
  styleUrl: './yoga-pose-tracker.component.scss'
})
export class YogaPoseTrackerComponent implements AfterViewInit, AfterViewChecked {
@ViewChild(PoseTrackerComponent) yogaPoseList!: PoseTrackerComponent;

  ngAfterViewInit() {
    console.log('ngAfterViewInit called with Initial poses:', this.yogaPoseList.poses);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
}
