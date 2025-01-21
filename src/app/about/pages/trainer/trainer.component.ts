import { Component } from '@angular/core';
import { FetchDataService } from '../../../share/services/fetch-data.service';
import { Trainer } from '../../../interfaces/trainer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {
  trainerData: Trainer | undefined;
  trainderId: number;

  constructor(public fetchDataService: FetchDataService, private router: Router) {
    const urlParts = this.router.url.split('/')
    this.trainderId = +urlParts[urlParts.length - 1];
  }

  ngOnInit() {
    this.fetchDataService.fetchData(`/${this.trainderId}`).subscribe(
      (response) => {
        this.trainerData = response
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    )
  }

}
