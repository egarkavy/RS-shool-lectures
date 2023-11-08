import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { UsersPageComponent as Default} from './app/00-default-strategy/users-page/users-page.component';
import { UsersPageComponent as OnPushProblem } from './app/01-on-push-strategy-problem/users-page/users-page.component';
import { UsersPageComponent as OnPushGood } from './app/02-on-push-strategy-solution/users-page/users-page.component';
import { ParentComponent } from './app/03-why-on-push-is-needed/parent.component';
import { ParentArrayPageComponent } from './app/04-performance/parent-array-page.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '00',
        component: Default
      },
      {
        path: '01',
        component: OnPushProblem
      },
      {
        path: '02',
        component: OnPushGood
      },
      {
        path: '04',
        component: ParentComponent
      },
      {
        path: '05',
        component: ParentArrayPageComponent
      }
    ])
  ]
})
  .catch(err => console.error(err));
