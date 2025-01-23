import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { PoseTrackerComponent } from '../../components/pose-tracker/pose-tracker.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild(PoseTrackerComponent) yogaPoseList!: PoseTrackerComponent;

  ngAfterViewInit() {
    console.log('ngAfterViewInit called with Initial poses:', this.yogaPoseList.poses);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
}
