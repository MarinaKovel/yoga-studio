import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.scss'
})
export class BannerSectionComponent {
  isTablet = false;

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isTablet = false;
        
        if (result.matches) {
          this.isTablet = true;
        }
      })
  }

}
