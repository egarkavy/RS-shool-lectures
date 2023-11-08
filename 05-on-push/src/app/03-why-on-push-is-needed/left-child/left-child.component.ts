import { ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/models/user.model';
import { CHANGE_DETECTION_STRATEGY } from '../all-cd-strategy.constant';
import { ChildOfChildComponent } from "../child-of-child/child-of-child.component";
import { timer } from 'rxjs';

@Component({
    selector: 'app-left-child',
    standalone: true,
    templateUrl: './left-child.component.html',
    styleUrls: ['./left-child.component.scss'],
    changeDetection: CHANGE_DETECTION_STRATEGY,
    imports: [CommonModule, ChildOfChildComponent]
})
export class LeftChildComponent implements DoCheck {
  @Input() leftInput: User | null = null

  private oldUserName = ''; //2

  constructor(private readonly cdr: ChangeDetectorRef) { //2
    
  }

  public ngDoCheck(): void {
    if (this.oldUserName !== this.leftInput?.username) { //2
      this.cdr.markForCheck();

      this.oldUserName = this.leftInput?.username ?? '';
    } //2

    console.log('Left is asked if check is needed')    
  }
  
}
