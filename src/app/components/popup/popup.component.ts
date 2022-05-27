import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopupService } from '../../services/popup.service';
import { UserListComponent } from '../users/user-list/user-list.component';





@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

 
  public urlCourses : string = 'http://localhost:8083/user-course-activity/';
  // public coursesActivity : any = this.userList.courses;
   public courseActivity : any = '';

  constructor(
    public dialogRef : MatDialogRef<PopupComponent>
  , private dialog : MatDialog,
    public popUpService : PopupService,
   
   ){}
  
   ngOnInit(): void {
   
  }
  onClickNO(){
    this.dialogRef.close();
   
  }

  
//   public openDialog(userEmail : String) : void {
//     const dialogRef = this.dialog.open(PopupComponent, {
//        width: '80%',
//        data: 'mostrando Dialog'
//       });
//       this.popUpService.getCoursesActivity(this.urlCourses)
//    .subscribe  ( resp => {
//      console.log(resp, "get start!!");
//    this.courseActivity = resp;
  
//  });
//  dialogRef.afterClosed().subscribe(res => {
//   console.log("Open Working!!")
// })


// }

}
