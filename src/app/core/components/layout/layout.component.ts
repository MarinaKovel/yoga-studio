import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
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
