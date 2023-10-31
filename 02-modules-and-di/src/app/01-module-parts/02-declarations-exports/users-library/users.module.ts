import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicUserListComponent } from './public-user-list/public-user-list.component';
import { PrivateUserCardComponent } from './private-user-card/private-user-card.component';



@NgModule({
  declarations: [
    PublicUserListComponent,
    PrivateUserCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ //Other modules can only use PublicUserListComponent. PrivateUserCardComponent remains private
    PublicUserListComponent
  ]
})
export class UsersModule { }
