import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/user.interface';
import { UserService } from '../../../services/user.service';


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
  public maxPages: number = UserService.length;
  
  // INJECTAMOS EL SERVICIO
  constructor( private userService : UserService) { }

    ngOnInit(): void {
     this.userService.getAllUser(this.page)
      .subscribe( users => {
        this.users = users;
      })

      this.userService.getTotalPages()
      .subscribe( (resp:any) => {
        this.maxPages = resp.totalPages.length;
      });
    }

    nextPage(){
      this.page+=10;
      // le pasamos al service getAllUser un parametro que sea la sgte pagina
      this.userService.getAllUser(this.page)
      .subscribe( users => {
        this.users = users;
      })
    }
    prevPage(){
      if( this.page > 0){
        this.page-=10;
        this.userService.getAllUser(this.page)
      .subscribe( users => {
        this.users = users;
      })
      }
    }
    onSearchUser(search:string){
      this.search= search;
    }

}
