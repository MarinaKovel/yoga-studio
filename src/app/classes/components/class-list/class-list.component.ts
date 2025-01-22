import { Component } from '@angular/core';
import { CLASSES_DATA } from '../../../share/constants';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.scss'
})
export class ClassListComponent {
  classes = CLASSES_DATA;

  bookedClass: string | null = null;

  handleBooking(className: string) {
    this.bookedClass = className;
  }
}
