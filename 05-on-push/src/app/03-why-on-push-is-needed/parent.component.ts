import { Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';
import { LeftChildComponent } from "./left-child/left-child.component";
import { RightChildComponent } from "./right-child/right-child.component";
import { CHANGE_DETECTION_STRATEGY } from './all-cd-strategy.constant';

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    imports: [CommonModule, LeftChildComponent, RightChildComponent],
    changeDetection: CHANGE_DETECTION_STRATEGY
})
export class ParentComponent implements DoCheck {
  public left: User = {id: 1, username: 'left'};
  public right: User = {id: 100, username: 'right'};

  public ngDoCheck(): void {
    console.log('Parent is asked if check is needed')
  }

  public changeLeftUsername(): void {
    this.left.username += '2'
  }

  public changeLeftId(): void {
    this.left.id += 1;
  }

  public changeRight(): void {
    this.right.username += '2'
  }
}
