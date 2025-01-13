import { Component, Input } from '@angular/core';
import { YogaClasses } from '../../../interfaces/yoga-classes.interface';

@Component({
  selector: 'app-classes-tab',
  templateUrl: './classes-tab.component.html',
  styleUrl: './classes-tab.component.scss'
})
export class ClassesTabComponent {
  @Input() data!: YogaClasses;
}
