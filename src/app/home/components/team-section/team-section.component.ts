import { Component } from '@angular/core';
import { Trainer } from '../../../interfaces/trainer.interface';
import { TRAINERS } from '../../../share/constants';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {
  trainers: Trainer[] = TRAINERS;

  isTablet = false;

  constructor(private breakpointService: BreakpointObserver, private router: Router) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isTablet = false;

        if (result.matches) {
          this.isTablet = true;
        }
      })
  }

  redirectToAbout() {
    this.router.navigate(['/about']);
  }
}
