import { Component } from '@angular/core';
import { CARDS_DATA } from '../../../share/constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  cards = CARDS_DATA;
}
