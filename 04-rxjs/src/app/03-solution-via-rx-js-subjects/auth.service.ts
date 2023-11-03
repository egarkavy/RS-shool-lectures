import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSource.asObservable();

  private userInfoSource = new BehaviorSubject<User | null>(null);
  public userInfo$ = this.userInfoSource.asObservable();

  public authorize(): void {
    this.isAuthenticatedSource.next(true)

    this.userInfoSource.next({
      id: 1,
      username: 'happy_birthday'
    })
  }
}
