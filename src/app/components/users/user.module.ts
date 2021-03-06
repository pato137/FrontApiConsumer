import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FiltroPipe } from '../../pipes/filtro.pipe';

@NgModule({
  declarations: [
   UserListComponent,
   FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
   UserListComponent
  ]
})
export class UserModule { }
