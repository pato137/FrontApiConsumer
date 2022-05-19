import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FetchAllCoursesActivity } from '../interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})
export class PopupService {

  
  constructor( private dialog : MatDialog,
    private http : HttpClient) { }


getCoursesActivity(urlCourses : string){
    
  console.log(this.getCoursesActivity , "GetCuorsesActivity!!")
   return this.http.get<FetchAllCoursesActivity>(urlCourses)
  
 }

}
