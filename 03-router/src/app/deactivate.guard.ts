import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const deactivateGuard: CanActivateFn = (route, state) => {
  // const userService = inject(UserService);
  // const router = inject(Router);

  // const allowAnonym = route.data['allowAnonymous'];

  // if (userService.isAuthorized || allowAnonym) {
  //   return true;
  // }

  return false;
};
