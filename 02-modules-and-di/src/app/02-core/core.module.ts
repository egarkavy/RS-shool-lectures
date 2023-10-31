import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { 
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule, 
      providers: [
        {
          provide: 'baseUrl',
          useValue: '/api'
        }
      ]
    }
  }

  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
