import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-outlined-button',
  standalone: true,
  imports: [MatButton],
  templateUrl: './outlined-button.component.html',
  styleUrl: './outlined-button.component.scss'
})
export class OutlinedButtonComponent {
  @Input() text: string = '';
}
