import { Component } from '@angular/core';
import { YogaPoseService } from '../../../share/services/yoga-pose.service';
import { Pose } from '../../../interfaces/pose.interface';

@Component({
  selector: 'app-pose-list',
  templateUrl: './pose-list.component.html',
  styleUrl: './pose-list.component.scss'
})
export class PoseListComponent {
  poseNames: string[] = [];
  beginnerPoses: Pose[] = [];
  userPoses: Pose[] = [];

  constructor(private yogaPoseService: YogaPoseService) {}

  ngOnInit() {
    this.yogaPoseService.getPoseNames().subscribe(
      (names) => this.poseNames = names
    )

    this.yogaPoseService.getBeginnerPoses().subscribe(
      (poses) => this.beginnerPoses = poses
    )

    this.yogaPoseService.getUserPreferredPoses().subscribe(
      (poses) => this.userPoses = poses
    )

    this.yogaPoseService.getPosesAndCategories().subscribe(
      (res) => console.log(res)
    )
  }
}
