import { APP_INITIALIZER, Injectable, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class BaseClass {

}

class ConcreteClass extends BaseClass {

}

class Logger {
  log(): void {

  }
}

class LoggerA extends Logger {
  
}

class LoggerB extends Logger{
}

const INJECTION_TOKEN = new InjectionToken<BaseClass>('DESCRIPTION_OR_TOKEN');

const IS_PROD = new InjectionToken<boolean>('IS_PROD');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BaseClass,
    {
      provide: 'stringToken',
      useValue: 100,
    },
    {
      provide: BaseClass,
      useClass: ConcreteClass
    },
    {
      provide: INJECTION_TOKEN,
      useValue: new ConcreteClass(),
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (myInjectable: BaseClass) => {
        //do some stuff;
      },
      deps: [INJECTION_TOKEN],
      multi: true //This way provider will not replace the other one but Angular will create an array of all providers with this key (APP_INITIALIZER)
    },
    {
      provide: IS_PROD,
      useValue: false //or true if it is; https://angular.io/guide/build#configuring-application-environments
    },
    {
      provide: Logger,
      useFactory: (isProd: boolean) => isProd ? new LoggerA() : new LoggerB(),
      deps: [IS_PROD]
    }
    //CoreModule.forRoot(environment.isProduction)
  ]
})
export class ProvidersExampleModule { }
