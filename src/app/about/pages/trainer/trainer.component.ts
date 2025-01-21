import { Component } from '@angular/core';
import { FetchDataService } from '../../../share/services/fetch-data.service';
import { Trainer } from '../../../interfaces/trainer.interface';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {
  trainerData: Trainer | undefined;
  trainderId: number;

  isTablet = false;
  isMobile = false;

  cols = 3;
  imageHeight = 4;
  rowspanContacts = 4;

  constructor(
    public fetchDataService: FetchDataService, 
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) {
    const urlParts = this.router.url.split('/')
    this.trainderId = +urlParts[urlParts.length - 1];
  }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
          this.isTablet = false;
          this.isMobile = false;
    
          this.cols = 3;
          this.rowspanContacts = 4;
          this.imageHeight = 4;
    
            if (result.breakpoints[Breakpoints.Small]) {
              this.isTablet = true;
              this.imageHeight = 2;
              this.cols = 1;
              this.rowspanContacts = 3;
            }
    
            if (result.breakpoints[Breakpoints.XSmall]) {
              this.isTablet = true;
              this.isMobile = true;
              this.cols = 1;
            }
        });

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
