import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyLabel',
  standalone: true
})
export class DifficultyLabelPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1: return 'Beginner';
      case 2: return 'Intermediate';
      case 3: return 'Advanced';
      default: return 'Unknown';
    }
  }

}
