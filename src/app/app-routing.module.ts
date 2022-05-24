import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { TopTenComponent } from './components/top-ten/top-ten.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PopupComponent } from './components/popup/popup.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';

const routes: Routes = [
  {path:'users' , component:UserListComponent},
  {path:'upload-file' , component:UploadFilesComponent},
  {path: 'top-ten', component:TopTenComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'popup', component: PopupComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
