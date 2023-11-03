import { Component } from '@angular/core';
import { LayoutComponent } from './00-problem copy 3/layout/layout.component';
import { ObservablePlaygroundComponent } from './04-observable/observable-playground/observable-playground.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [LayoutComponent, ObservablePlaygroundComponent]
})
export class AppComponent {
  title = 'rxjs';
}
