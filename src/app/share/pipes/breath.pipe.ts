import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breath',
  standalone: true
})
export class BreathPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1: return 'Breath in...';
      case 2: return 'Breath out...';
      case 3: return 'Well Done!';
      default: return 'Unknown';
    }
  }

}
