import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { BookService } from '../../../share/services/book.service';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.scss'
})
export class BannerSectionComponent {
  isTablet = false;

  constructor(
    private breakpointService: BreakpointObserver,
    public bookService: BookService
  ) {}

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
