import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/user.interface';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../popup/popup.component';
import { PopupService } from 'src/app/services/popup.service';
import { ResultCourses } from '../../../interfaces/user.interface';

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
  public curses : any = [];
  public urlCourses : string = 'http://localhost:8083/user-course-activity/';
  
  
  // INJECTAMOS EL SERVICIO
  constructor( private userService : UserService
    ,    public dialog : MatDialog,
    private popUpService : PopupService
    ) { }

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
    public openDialog() : void {
      const dialogRef = this.dialog.open(PopupComponent, {
         width: '80%',
         data: 'mostrando Dialog'
        });
        this.popUpService.getCoursesActivity(this.urlCourses)
     .subscribe  ( resp => {
       console.log(resp.results, "get start!!");
     this.curses = resp.results;
    
   });
        dialogRef.afterClosed().subscribe(res => {
          console.log("Open Working!!")
      })


     }
}
