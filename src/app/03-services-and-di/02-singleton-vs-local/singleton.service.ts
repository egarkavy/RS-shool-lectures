import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SingletonService {
  public serviceState = '';

  public static constructorCalls = 0;

  public users$ = new BehaviorSubject<string[]>([]);

  constructor() {
    SingletonService.constructorCalls++;

    console.log(`SingletonService constructor called ${SingletonService.constructorCalls} times`)
  }

  public getUsers(): void {
    // this.httpClient.get<string[]>('/users').subscribe((users) => {
    //   this.users$.next(users);
    // })
  }
}
