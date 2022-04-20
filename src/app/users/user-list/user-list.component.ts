import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users/services/user.service';
import { Result} from '../../users/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users : Result[] = [];
  public page  : number   = 0;
  public pageurl: number =0;
  public search:string ='';
  // INJECTAMOS EL SERVICIO
  constructor( private userService : UserService) { }

    ngOnInit(): void {
     this.userService.getAllUser(this.pageurl)
      .subscribe( users => {
        this.users = users;
        console.log( users);
      }) 
    }

    nextPage(){
    //  this.page += 10;
      this.pageurl+=1;
      // le pasamos al service getAllUser un parametro que sea la sgte pagina
      this.userService.getAllUser(this.pageurl)
      .subscribe( users => {
        this.users = users;
        console.log( users);
      })
      console.log(" " + this.pageurl)
    }

    prevPage(){
      if( this.pageurl > 0){
       // this.page -= 10;
        this.pageurl-=1;
        this.userService.getAllUser(this.pageurl)
      .subscribe( users => {
        this.users = users;
        console.log( users);
      })
        console.log(" " + this.pageurl)
      }
    }

    onSearchUser(search:string){
      this.search= search;
    }

}
