import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiveRequestsService {
  private activeRequestsCount = 0;

  increment(): void {
    this.activeRequestsCount++;
  }

  decrement(): void {
    if (this.activeRequestsCount > 0) {
      this.activeRequestsCount--;
    }
  }

  isZero(): boolean {
    return this.activeRequestsCount === 0;
  }
}
