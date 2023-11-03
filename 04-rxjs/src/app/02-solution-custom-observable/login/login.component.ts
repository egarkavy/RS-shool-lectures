import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Observable } from '../observable';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  
  private isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;

  public isAuthenticated = false;

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    })
  }

  public auth(): void {
    this.authService.authorize();
  }
}
