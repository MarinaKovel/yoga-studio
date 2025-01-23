import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-outlined-button',
  standalone: true,
  imports: [MatButton],
  templateUrl: './outlined-button.component.html',
  styleUrl: './outlined-button.component.scss'
})
export class OutlinedButtonComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  @Input() text: string = '';

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}
