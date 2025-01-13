import { Component } from '@angular/core';
import { CLASSES_DATA } from '../../../share/constants';

@Component({
  selector: 'app-classes-section',
  templateUrl: './classes-section.component.html',
  styleUrl: './classes-section.component.scss',
})
export class ClassesSectionComponent {
 classesData = CLASSES_DATA
}
