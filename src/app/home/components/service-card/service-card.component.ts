import { Component, Input } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() text: string = '';

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
