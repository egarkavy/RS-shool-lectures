import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent {
  public authService = inject(AuthService);

  public isAuthenticated = this.authService.isAuthenticated;
  public userInfo = this.authService.userInfo;

  public auth(): void {
    this.authService.authorize();
  }
}
