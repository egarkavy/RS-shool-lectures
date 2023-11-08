import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';
import { FirstChildArrayPageComponent } from "./first-child-array-page/first-child-array-page.component";
import { ITERATIONS } from './iterations.constant';
import { CHANGE_DETECTION_STRATEGY } from './all-cd-strategy.constant';
import { UserWithFriends } from './user-with-friends.model';

@Component({
    selector: 'app-parent-array-page',
    standalone: true,
    templateUrl: './parent-array-page.component.html',
    styleUrls: ['./parent-array-page.component.scss'],
    imports: [CommonModule, FirstChildArrayPageComponent],
    changeDetection: CHANGE_DETECTION_STRATEGY
})
export class ParentArrayPageComponent implements OnInit {
  public users: UserWithFriends[] = [];

  public ngOnInit(): void {
    this.users = Array(ITERATIONS).fill(0).map((_, index) => {
      return {
        id: index,
        username: `user${index}`,
        friends: Array.from(Array(ITERATIONS).fill(0).map((_, index) => {
          return {
            id: index,
            username: `friend: ${index}`
          }
        }))
      }
    })
  }

  public changeFirstUser(): void {
    this.users = [
      {
        ...this.users[0],
        username: `${Math.floor(Math.random() * 100)}` 
      },
      ...this.users.slice(1)
    ]
  }
}
