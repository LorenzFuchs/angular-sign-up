import { Component, OnInit } from '@angular/core';
import { user, UserProfile } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { async } from '@firebase/util';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of, switchMap } from 'rxjs';
import { ProfileUser } from 'src/app/models/user.profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { AddNoticeComponent } from '../add-notice/add-notice.component';
import { EditNoticeComponent } from '../edit-notice/edit-notice.component';
@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;
  user: ProfileUser;
  allUsers: any;
  
  


  constructor(private route: ActivatedRoute, private firestore : AngularFirestore, private authService: AuthenticationService, public dialog: MatDialog, private usersService: UsersService) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddNoticeComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
   
  }

  editMenu(i: any, uid: any, task: any) {
   console.log(uid);
   
    const dialog = this.dialog.open(EditNoticeComponent);
    dialog.componentInstance.i = i;
    dialog.componentInstance.uid = uid;
    dialog.componentInstance.task = task;
    
  }

  delete(i: any, uid: any, task: any, user: ProfileUser) {
    console.log(user.tasks);
    user.tasks.splice(i, 1);
    console.log(user.tasks);
    this.firestore.collection('users').doc(uid).update(user);
    
    
  }

}
