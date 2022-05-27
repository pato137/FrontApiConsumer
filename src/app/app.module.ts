import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './components/users/user.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { PathLearningComponent } from './components/path-learning/path-learning.component';
import { TopTenComponent } from './components/top-ten/top-ten.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PopupComponent } from './components/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { TopTenCoursesComponent } from './components/top-ten-courses/top-ten-courses.component';
import { DownloadReportsComponent } from './components/download-reports/download-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    PathLearningComponent,
    TopTenComponent,
    CoursesComponent,
    PopupComponent,
    UploadFilesComponent,
    TopTenCoursesComponent,
    DownloadReportsComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
