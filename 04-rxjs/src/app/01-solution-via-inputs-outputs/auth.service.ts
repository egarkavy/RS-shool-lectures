import { Injectable } from '@angular/core';

export interface User {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = false;
  public userInfo: User | null = null;

  public authorize(): void {
    this.isAuthenticated = true;

    this.userInfo = {
      id: 1,
      username: 'happy_birthday'
    }
  }
}
