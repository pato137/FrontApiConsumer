// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-top-ten-courses',
//   templateUrl: './top-ten-courses.component.html',
//   styleUrls: ['./top-ten-courses.component.css']
// })
// export class TopTenCoursesComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/user.interface';
import { TopTenService } from 'src/app/services/top-ten.service';


@Component({
     selector: 'app-top-ten-courses',
     templateUrl: './top-ten-courses.component.html',
     styleUrls: ['./top-ten-courses.component.css']
   })
   export class TopTenCoursesComponent implements OnInit {

  public usersTop : Result[] = [];
  
  public search:string ='';
  
  // INJECTAMOS EL SERVICIO
  constructor( private topTenService : TopTenService) { }
  
    ngOnInit(): void {
    console.log("working ttcomponenet!!")    
     this.topTenService.getTopTenCoursesFinished()
      .subscribe( users => {
        this.usersTop = users;
        console.log( users);
      }) 

      
    }
}