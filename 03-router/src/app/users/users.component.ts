import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user-details.resolver';
import { USERS_DATA_KEY } from '../common/constants/routing/root-routs.const';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  private readonly userService = inject(UserService);

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  public users: User = this.activatedRoute.snapshot.data[USERS_DATA_KEY]

  public ngOnInit(): void {
    // if (!this.userService.isAuthorized) {
    //   this.router.navigate(['/login']);
    // }
  }
}
