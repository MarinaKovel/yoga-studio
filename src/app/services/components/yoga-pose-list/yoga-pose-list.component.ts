import { Component } from '@angular/core';

@Component({
  selector: 'app-yoga-pose-list',
  templateUrl: './yoga-pose-list.component.html',
  styleUrl: './yoga-pose-list.component.scss'
})
export class YogaPoseListComponent {
  poses: string[] = ['Downward Dog', 'Warrior I', 'Tree Pose', 'Child’s Pose'];
}
