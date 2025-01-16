import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isTablet = false;
  isMobile = false;

  cols = 3;
  imageHeight = 4;
  rowspanContacts = 4;
  
  constructor(private breakpointObserver: BreakpointObserver) {}

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
  }
}
