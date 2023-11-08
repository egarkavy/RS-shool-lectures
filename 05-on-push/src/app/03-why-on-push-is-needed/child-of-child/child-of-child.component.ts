import { Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHANGE_DETECTION_STRATEGY } from '../all-cd-strategy.constant';

@Component({
  selector: 'app-child-of-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-of-child.component.html',
  styleUrls: ['./child-of-child.component.scss'],
  changeDetection: CHANGE_DETECTION_STRATEGY
})
export class ChildOfChildComponent implements DoCheck {
  public static deepNumber = 1;

  public id: number;

  constructor() {
    this.id = ChildOfChildComponent.deepNumber;
    ChildOfChildComponent.deepNumber++;
  }

  public ngDoCheck(): void {
    console.log(`Deep Child ${this.id} is asked`)
  }
}
