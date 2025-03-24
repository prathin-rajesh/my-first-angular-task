import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './app-menu-bar.component.html',
  styleUrls: ['./app-menu-bar.component.css'],
})
export class AppMenuBarComponent {
  constructor(public authService: AuthService) {}
  isLoggedIn(): boolean {
    return this.authService.isAdmin();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  logout() {
    this.authService.logout();
  }
}
