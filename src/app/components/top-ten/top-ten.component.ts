import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/user.interface';
import { TopTenService } from 'src/app/services/top-ten.service';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {

  public usersTop : Result[] = [];
  
  public search:string ='';
  
  // INJECTAMOS EL SERVICIO
  constructor( private topTenService : TopTenService) { }
  
    ngOnInit(): void {
    console.log("working ttcomponenet!!")    
     this.topTenService.getAllUserTop()
      .subscribe( users => {
        this.usersTop = users;
        console.log( users);
      }) 

      
    }
}
