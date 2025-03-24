import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private isAdminUser = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      this.isAdminUser = true;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/']);
      return true;
    } else if (username === 'user' && password === 'userpassword') {
      // Dummy credentials for regular user
      this.isAuthenticated = true;
      this.isAdminUser = false;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.removeItem('isAdmin');
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.isAdminUser = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }
}
