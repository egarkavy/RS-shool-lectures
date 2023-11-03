import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../auth.service';
import { Observable } from '../observable';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {
  

  public authService = inject(AuthService);

  private isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;
  public isAuthenticated = false;

  public userInfo$ = this.authService.userInfo$;
  public userInfo: User | null = null;

  public ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    })

    this.userInfo$.subscribe((userInfo) => {
      this.userInfo = userInfo;
    })
  }
}
