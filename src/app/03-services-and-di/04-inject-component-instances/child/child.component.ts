import { Component, Optional } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  constructor(@Optional() private readonly parent?: ParentComponent) {
    parent?.state && parent.state++;
  }
}
