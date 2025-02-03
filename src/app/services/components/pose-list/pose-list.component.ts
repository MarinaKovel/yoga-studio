import { Component } from '@angular/core';
import { YogaPoseNameService } from '../../../share/services/yoga-pose-name.service';

@Component({
  selector: 'app-pose-list',
  templateUrl: './pose-list.component.html',
  styleUrl: './pose-list.component.scss'
})
export class PoseListComponent {
  poseNames: string[] = [];

  constructor(private yogaPoseNameService: YogaPoseNameService) {}

  ngOnInit() {
    this.yogaPoseNameService.getPoseNames().subscribe(
          (names) => this.poseNames = names
        )
  }
}
