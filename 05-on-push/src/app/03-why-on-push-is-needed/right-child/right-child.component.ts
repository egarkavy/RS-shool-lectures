import { Component, DoCheck, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/models/user.model';
import { CHANGE_DETECTION_STRATEGY } from '../all-cd-strategy.constant';
import { ChildOfChildComponent } from "../child-of-child/child-of-child.component";

@Component({
    selector: 'app-right-child',
    standalone: true,
    templateUrl: './right-child.component.html',
    styleUrls: ['./right-child.component.scss'],
    changeDetection: CHANGE_DETECTION_STRATEGY,
    imports: [CommonModule, ChildOfChildComponent]
})
export class RightChildComponent implements DoCheck {
  @Input() rightInput: User | null = null

  public ngDoCheck(): void {
    console.log('Right is asked if check is needed')
  }
}
