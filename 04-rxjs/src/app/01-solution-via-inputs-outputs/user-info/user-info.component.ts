import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent {
  @Input() isAuthenticated = false;
  @Input() userInfo: User | null = null;
}
