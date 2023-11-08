import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/models/user.model';
import { ITERATIONS } from '../iterations.constant';
import { SecondChildArrayPageComponent } from "../second-child-array-page/second-child-array-page.component";
import { CHANGE_DETECTION_STRATEGY } from '../all-cd-strategy.constant';
import { UserWithFriends } from '../user-with-friends.model';

@Component({
    selector: 'app-first-child-array-page',
    standalone: true,
    templateUrl: './first-child-array-page.component.html',
    styleUrls: ['./first-child-array-page.component.scss'],
    imports: [CommonModule, SecondChildArrayPageComponent],
    changeDetection: CHANGE_DETECTION_STRATEGY
})
export class FirstChildArrayPageComponent {
  @Input() user: UserWithFriends | null = null;
}
