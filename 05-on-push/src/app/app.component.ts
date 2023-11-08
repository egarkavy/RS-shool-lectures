import { Component } from '@angular/core';
import { UserListComponent } from './00-default-strategy/user-list/user-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    UserListComponent,
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'on-push';
}
