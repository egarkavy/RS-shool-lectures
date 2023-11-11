import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor() { }

  public create(): Observable<boolean> {
    return timer(3000).pipe(
      map(() => true)
    )
  }
}
