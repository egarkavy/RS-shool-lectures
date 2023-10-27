import { Injectable } from '@angular/core';

@Injectable() //Local service hasn't provideIn property
export class LocalService {
  public serviceState = '';

  public static constructorCalls = 0;

  constructor() {
    LocalService.constructorCalls++;

    console.log(`LocalService constructor called ${LocalService.constructorCalls} times`)
   }
}
