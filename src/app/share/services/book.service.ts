import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private router: Router) {}

  redirectToBooking(): void {
    this.router.navigate(['/booking'])
  }
}
