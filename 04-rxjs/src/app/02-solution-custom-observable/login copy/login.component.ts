import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  private authService = inject(AuthService);
  
  public isAuthenticated = this.authService.isAuthenticated$;

  public auth(): void {
    this.authService.authorize();
  }
}
