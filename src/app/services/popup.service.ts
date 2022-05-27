import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FetchAllCoursesActivity, ResultCourses } from '../interfaces/user.interface';
import { core } from '@angular/compiler';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PopupService {

  // coursesActivity : any = [];
  private urlCourses : string = 'http://localhost:8083/user-course-activity/search/?email=';
  // public urlCourses = '/user-course-activity/search/';

  constructor( 
    private dialog : MatDialog,
    private http : HttpClient) { }


    // DEFINIMOS EL METODO
getCoursesActivity(userEmail : string){
    
  console.log(this.getCoursesActivity , "GetCuorsesActivity!!")
   return this.http.get<FetchAllCoursesActivity>(this.urlCourses+userEmail)
      .pipe(
        map(
          this.TransformResultUserCoursesActivity
        )
      )
  
 }

 private TransformResultUserCoursesActivity (resp : FetchAllCoursesActivity) : ResultCourses[]{
   const coursesList : ResultCourses[] = resp.results.map( cours => {
    return {
      user_name:   cours.user_name,                 
      user_surname: cours.user_surname,               
      user_email:   cours.user_email,                
      course_title: cours.course_title,
      completion_ratio:  cours.completion_ratio,
      num_video_consumed_minutes:   cours.num_video_consumed_minutes,
      course_enroll_date:  cours.course_enroll_date,
      course_start_date:   cours.course_start_date,
      course_completion_date: cours.course_completion_date,
      course_last_accessed_date:   cours.course_last_accessed_date
    }

   })
   return coursesList;
 }

}
