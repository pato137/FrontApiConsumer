import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { TopTenComponent } from './components/top-ten/top-ten.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PopupComponent } from './components/popup/popup.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { TopTenCoursesComponent } from './components/top-ten-courses/top-ten-courses.component';
import { DownloadReportsComponent } from './components/download-reports/download-reports.component';

const routes: Routes = [
  {path:'users' , component:UserListComponent},
  {path:'upload-file' , component:UploadFilesComponent},
  {path: 'top_ten', component:TopTenComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'popup', component: PopupComponent},
  {path: 'top_ten_courses', component: TopTenCoursesComponent },
  {path: 'download-report', component:DownloadReportsComponent}
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
