import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from "../user-list/user-list.component";
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'app-users-page',
    standalone: true,
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss'],
    imports: [CommonModule, UserListComponent]
})
export class UsersPageComponent {
  public users: User[] = [
    {
      id: 1,
      username: 'hello'
    },
    {
      id: 2,
      username: 'world'
    }
  ]

  public addUser(): void {
    this.users.push({
      id: Math.floor(Math.random() * 100),
      username: 'user'
    })

    this.users[0].id = Math.floor(Math.random() * 100);
  }
}
