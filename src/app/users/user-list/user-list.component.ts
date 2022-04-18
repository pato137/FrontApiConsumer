import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Result} from '../interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users : Result[] = [];

  // INJECTAMOS EL SERVICIO
  constructor( private userService : UserService) { }

  ngOnInit(): void {

    this.userService.getAllUser()
      .subscribe( users => {
        this.users = users;
       
       
       // console.log( users);
      })
  }

}
