import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {
  public authService = inject(AuthService);

  public isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;

  public userInfo$ = this.authService.userInfo$;

  public ngOnInit(): void {
    
  }
}
