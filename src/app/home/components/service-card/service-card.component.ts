import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
}
