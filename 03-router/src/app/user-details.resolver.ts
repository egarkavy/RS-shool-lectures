import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of, timer } from 'rxjs';

export interface User {
  username: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<User[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return timer(1000).pipe(
      map(() => {
        return [{
          id: 1,
          username: 'test'
        }, 
        {
          id: 2,
          username: 'test2'
        }]
      })
    )
  }
}
