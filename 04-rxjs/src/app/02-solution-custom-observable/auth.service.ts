import { Injectable } from '@angular/core';
import { Observable } from './observable';

export interface User {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated$ = new Observable<boolean>(false);
  public userInfo$ = new Observable<User | null>(null);

  public authorize(): void {
    this.isAuthenticated$.next(true)

    this.userInfo$.next({
      id: 1,
      username: 'happy_birthday'
    })
  }
}
