import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLoggedIn());

  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  checkLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  login(userData: User): void {
    localStorage.setItem('user', JSON.stringify(userData));
    this.isLoggedInSubject.next(true); // Notify subscribers
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(false);
  }
}
