import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YogaClasses } from '../../../interfaces/yoga-classes.interface';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrl: './class-item.component.scss'
})
export class ClassItemComponent {
  sessionStatus: 'Completed' | 'In Progress' | 'Not Started' = 'Not Started'

  @Input() classData!: YogaClasses;
  @Output() book = new EventEmitter<string>();

  bookClass() {
    this.book.emit(this.classData.name);
    this.sessionStatus = 'In Progress'
  }
}
