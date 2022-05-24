import { Component, OnInit } from '@angular/core';
import { TopTenService } from '../../services/top-ten.service';
import { Result } from '../../interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userTopTenCourses: Result[] = [];
  public urlTopTen : String = '';
  constructor(private topTenService : TopTenService) { }

  ngOnInit(): void {
    
   }
// alarma(){
//   alert(" working!!");
//   this.urlTopTen ="urltoptenminutes";
//   console.log(this.urlTopTen);
//   return console.log(this.topTenServiocio.Prueba= " de servicioen servicio");
topTenCourses(){
  this.topTenService.getTopTenCoursesFinished()
  .subscribe( users => {
    this.userTopTenCourses = users;
    console.log( users);
    alert("Working!!")
  }) 
}
  
// }
// topTenCourses(){
//   alert("Top Ten By Courses!!")
 }


