import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, LoginComponent, UserInfoComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
  public authService = inject(AuthService);

  public isAuthenticated: boolean = false;
  public userInfo: User | null = null;



  public auth(): void { 
    this.authService.authorize();

    this.isAuthenticated = this.authService.isAuthenticated;
    this.userInfo = this.authService.userInfo;
  }
}
