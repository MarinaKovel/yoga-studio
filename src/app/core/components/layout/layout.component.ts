import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BookService } from '../../../share/services/book.service';
import { AuthService } from '../../../share/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isTablet = false;
  isLoggedIn = false;

  constructor(
    private breakpointService: BreakpointObserver,
    public bookService: BookService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isTablet = false;

        if (result.matches) {
          this.isTablet = true;
        }
      })

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
