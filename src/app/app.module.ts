import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './02-core/core.module';
import { SingletonExperimentModule } from './03-services-and-di/02-singleton-vs-local/singleton-experiment.module';
import { ChildComponent } from './03-services-and-di/04-inject-component-instances/child/child.component';
import { ParentComponent } from './03-services-and-di/04-inject-component-instances/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SingletonExperimentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
