import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isAuthorized = false;

  public authorize(): void {
    this.isAuthorized = true;
  }
}
