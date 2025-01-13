import { Component } from '@angular/core';
import { Trainer } from '../../../interfaces/trainer.interface';
import { TRAINERS } from '../../../share/constants';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {
  trainers: Trainer[] = TRAINERS;
}
