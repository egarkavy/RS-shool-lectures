import { Component, DestroyRef, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule, NgPluralCase } from '@angular/common';
import { BehaviorSubject, Observable, Subject, interval, of, timer, timeout, from, combineLatest, forkJoin, fromEvent  } from 'rxjs';
import { catchError, combineLatestWith, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, first, map, mapTo, retry, shareReplay, startWith, switchMap, take, takeUntil, tap, throttleTime, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-observable-playground',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './observable-playground.component.html',
  styleUrls: ['./observable-playground.component.scss']
})
export class ObservablePlaygroundComponent {
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    //00 - Defining custom async operation
    const observable = new Observable<string>((subscription) => {
      console.warn("Observable Being executed")

      // setTimeout(() => {
      //   subscription.next('hello from Obs');

      //   subscription.next('hello from Obs');

      //   subscription.next('hello from Obs');
      // }, 1000)

      setInterval(() => {
        subscription.next('hello from Obs interval');

        // subscription.complete();

        // subscription.next('hello after complete');
      }, 500)
    })

    
    // const promise = new Promise<string>((r) => {
    //   console.warn("Promise Being executed")
    //   setTimeout(() => {
    //     r('hello promise');
    //   }, 1000)
    // })
 // promise.then(console.log)


    // // observable.subscribe((value) => console.log('1', value));
  

    // // setTimeout(() => {
    // //   observable.subscribe((value) => console.log(value));

    // // }, 
    // // 3000)

    // // observable.subscribe((value) => console.log('1', value));

    // const unsubscribeSource = new Subject<void>();

    
    
    
    //---------------------- 01 - Pipes - a way to change original observable
    //---------------------- 02 - shareReplay - remember last emission and give it to new subs

    // const newObs = observable.pipe(
    //   shareReplay(1),
    //   takeUntilDestroyed(this.destroyRef)
    // );

    // newObs.subscribe((value) => console.log('1', value), null, () => {
    //   console.log('completed')
    // });
    // // newObs.subscribe((value) => console.log('2', value));

    // // observable.subscribe((value) => console.log('3', value));

    // setTimeout(() => {
    //   // newObs.subscribe((value) => console.log('4', value));

    //   unsubscribeSource.next();

    //   // newObs.subscribe((value) => console.log('1', value));
    // },
    // 2000)




    //---------------------- 03 - Obs creation - of, from, interval, timer

    // of([1, 2, 3]).subscribe(console.log)

    // from([1, 2, 3]).subscribe(console.log);

    // const beh = new BehaviorSubject(10);

    // const simpleSub = new Subject<number>();
    // const simpleSubWithInitial = simpleSub.pipe(
    //   startWith(1)
    // );

    // // beh.subscribe(console.log)
    // simpleSubWithInitial.subscribe(console.log)

    // timer(1000).subscribe(() => {
    //   // beh.next(20),
    //   simpleSub.next(30);

    //   console.log('-------------')

    //   // beh.subscribe(console.log)
    //   simpleSubWithInitial.subscribe(console.log)
    // })



    //---------------------- 04 - Subject and BehaviorSubject - a way to manipulate emission outsize of observable

    // const user$ = new Subject<{id: number; role: string}>();
    const user$ = new BehaviorSubject<{id: number; role: string}>({id: 1, role: 'no'});
    const requiredRoles$ = new Subject<string>();

    // timer(2000).subscribe(() => {
    //   requiredRoles$.next('admin')
    // })

    // timer(1500).subscribe(() => {
    //   user$.next({id: 1, role: 'admin'})
    // })

    
    //---------------------- 05 - combineLatestWith/combineLatest
    // const isValidRole$ = user$.pipe(
    //   combineLatestWith(requiredRoles$),
    //   map(([user, roles]) => {
    //     return user.role === roles
    //   })
    // );

    // isValidRole$.subscribe((isValid) => {
    //   console.log(isValid)
    // })

    // timer(2000).subscribe(() => {
    //   requiredRoles$.next('client'),
    //   requiredRoles$.next('client')

    //   // user$.next({id: 2, role: 'client'})
    // })

    // const rolesRequest$ = interval(1000).pipe(mapTo('client'), tap(() => {
    //   console.log('YES')
    // }));

    

    // const userRequest$ = timer(1500).pipe(map(() => ({id: 1, role: 'admin'})));

    // const isValidRole$ = forkJoin([userRequest$, rolesRequest$.pipe(first())]).pipe(
    //   // combineLatestWith(rolesRequest$),
    //   map(([user, roles]) => {
    //     return user.role === roles
    //   })
    // );

    // const sub = isValidRole$.subscribe(() => { 
    //   console.log(sub)
    // });

    // let counter = 0;
    

    //---------------------- 06 - map/switchMap/concatMap/exhaustMap - mutate original observable 
    // const errorObs$: Observable<{id: number; role: string} | {error: boolean}> = timer(1000).pipe(
    //   map((value) => {
    //     if (counter < 2) {
    //       counter++;

    //       throw new Error();
    //     }

    //     return {id: 4, role: 'admin'};
    //   }),
    //   catchError((error, caught) => {
    //     console.log(error);

    //     return caught;
    //   })
    // );

    // errorObs$.subscribe((value) => {
    //   console.log(value)
    // })

    // user$.next({id: 1, role: 'admin'})
    // user$.next({id: 1, role: 'admin'})

    let counter = 0;

    const errorObs$: Observable<{id: number; role: string}> = user$.pipe(
      startWith(null),
      filter((user): user is { id: number; role: string } => {
        if (user) {
          return true;
        }

        return false;
      }),
      distinctUntilChanged()
    );

    errorObs$.subscribe((value) => {
      console.log(value.id);
    })

    user$.next({id: 1, role: 'client'})
    user$.next({id: 1, role: 'client'})

    user$.next({id: 1, role: 'admin'})

    user$.next({id: 2, role: 'admin'})
  }

  private readonly httpClient = inject(HttpClient)

  private requestUser(): Observable<User> {
    // return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/todos/1');
    console.log('User begin');
    
    return timer(1500).pipe(map(() => {
      console.log('User received')
      return {
        id: 1
      }
    }))
  };

  private requestUserSubscriptions(userId: number): Observable<Subscription[]> {
    console.log('Subs begin')
    return timer(5000).pipe(map(() => {
      console.log('Subs received')

      return [
        {
          to: 'first'
        },
        {
          to: 'second'
        }
      ]
    }))
  };

  
  private requestSubsSource = new Subject<void>(); 

  public ngOnInit(): void {
    // this.requestSubsSource.pipe(
    //   throttleTime(500)
    // ).subscribe(() => {
    //   console.log('time to do a request');
    // });

    this.requestSubsSource.pipe(
      exhaustMap(() => this.requestUser()),
      exhaustMap((user) => {
        return this.requestUserSubscriptions(user.id)
      })
    ).subscribe();

    // interval(5).pipe(take(10)).subscribe(() => {
    //   this.requestSubsSource.next();  
    // }) 
  }

  handleClick(): void {
    this.requestSubsSource.next();    
  }
}

interface User {
  id: 1;
}

interface Subscription {
  to: string;
}