import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

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

  constructor(private breakpointService: BreakpointObserver, private router: Router) { }

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

  redirectToServices() {
    this.router.navigate(['/services'])
  }
}
