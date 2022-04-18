import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
//import { UserModule } from './user.module';



@NgModule({
  declarations: [
   UserListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   UserListComponent
  ]
})
export class UserModule { }
