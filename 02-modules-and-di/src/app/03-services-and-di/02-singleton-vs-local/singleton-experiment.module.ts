import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentWithServiceComponent } from './component-with-service/component-with-service.component';



@NgModule({
  declarations: [
    ComponentWithServiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentWithServiceComponent
  ]
})
export class SingletonExperimentModule { }
