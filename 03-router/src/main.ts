import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { authorizeGuard } from './app/authorize.guard';
import { UserDetailsResolver } from './app/user-details.resolver';
import { deactivateGuard } from './app/deactivate.guard';
import { USERS_DATA_KEY } from './app/common/constants/routing/root-routs.const';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        // redirectTo: 'login'
        loadComponent: () => import('./app/welcome/welcome.component').then(m => m.WelcomeComponent)
      },
      {
        path: 'login',
        loadComponent: () => import('./app/login/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'users',
        loadComponent: () => import('./app/users/users.component').then(m => m.UsersComponent),
        children: [
          {
            path: ':id',
            loadComponent: () => import('./app/user-details/user-details.component').then(m => m.UserDetailsComponent),
          }
        ],
        canActivate: [authorizeGuard],
        canDeactivate: [deactivateGuard],
        resolve: {
          [USERS_DATA_KEY]: UserDetailsResolver
        },
        data: {
          'allowAnonymous': true
        }
      },
      {
        path: 'orders',
        loadChildren: () => import('./app/orders/orders-lib.routes').then(m => m.routers),
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ], withComponentInputBinding())
  ]
})
  .catch(err => console.error(err));
