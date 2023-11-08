import { Component, DoCheck, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/models/user.model';
import { CHANGE_DETECTION_STRATEGY } from '../all-cd-strategy.constant';

@Component({
  selector: 'app-second-child-array-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-child-array-page.component.html',
  styleUrls: ['./second-child-array-page.component.scss'],
  changeDetection: CHANGE_DETECTION_STRATEGY
})
export class SecondChildArrayPageComponent implements DoCheck {
  @Input() friend: User | null = null;

  ngDoCheck(): void {
    console.log('Do check in Child')
  }
}
