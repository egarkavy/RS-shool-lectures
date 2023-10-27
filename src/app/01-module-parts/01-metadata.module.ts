import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [], //What is mine and private
  exports: [], //What I let other modules to use
  imports: [ //What I need for my 'declarations' to work
    CommonModule
  ],
  providers: [], //Services and other DI'able elements which can be injected in my 'declarations' and other 'providers'
  bootstrap: [] //If I am the main/root module, what component bootstraps the application?  
})
export class MetadataModule { }
