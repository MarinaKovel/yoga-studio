import { Component } from '@angular/core';
import { Trainer } from '../../../interfaces/trainer.interface';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { FetchDataService } from '../../../share/services/fetch-data.service';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {
  trainers: Trainer[] = [];

  isTablet = false;

  constructor(
    private breakpointService: BreakpointObserver, 
    private router: Router,
    private fetchDataService: FetchDataService,
  ) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isTablet = false;

        if (result.matches) {
          this.isTablet = true;
        }
      })

    this.loadTeam();
  }

  redirectToAbout() {
    this.router.navigate(['/about']);
  }

  private loadTeam() {
      this.fetchDataService.fetchData('?limit=6&page=1').subscribe(
      (response) => {
        this.trainers = response
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    )
  }
}
