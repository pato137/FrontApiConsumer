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
  public search:any;
  public maxPages: number = UserService.length;
  public totalRecords: string ='';
  
  // INJECTAMOS EL SERVICIO
  constructor( private userService : UserService) { }

    ngOnInit(): void {
     this.userService.getAllUser(this.page)
      .subscribe( users => {
        this.users = users;
      })
    }

    //método para search
    onSearchUser(search:string){
      this.search= search;
    }
    //método para orderBy
    key ='name';
    reverse :boolean = true;
    sort(key: string){
      this.key=key;
      this.reverse = !this.reverse;
    }
}
