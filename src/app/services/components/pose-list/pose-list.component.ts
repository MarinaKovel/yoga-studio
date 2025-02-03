import { Component } from '@angular/core';
import { YogaPoseNameService } from '../../../share/services/yoga-pose-name.service';
import { Pose } from '../../../interfaces/pose.interface';
import { BeginerPosesService } from '../../../share/services/beginner-poses.service';

@Component({
  selector: 'app-pose-list',
  templateUrl: './pose-list.component.html',
  styleUrl: './pose-list.component.scss'
})
export class PoseListComponent {
  poseNames: string[] = [];
  beginnerPoses: Pose[] = [];

  constructor(private yogaPoseNameService: YogaPoseNameService, private beginnerPosesService: BeginerPosesService) {}

  ngOnInit() {
    this.yogaPoseNameService.getPoseNames().subscribe(
      (names) => this.poseNames = names
    )

    this.beginnerPosesService.getBeginnerPoses().subscribe(
      (poses) => this.beginnerPoses = poses
    )
  }
}
