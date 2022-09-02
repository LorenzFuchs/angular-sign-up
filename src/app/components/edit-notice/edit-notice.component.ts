import { Component, OnInit } from '@angular/core';
import { User, user } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfileUser } from 'src/app/models/user.profile';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.scss']
})
export class EditNoticeComponent implements OnInit {
  task: any;
  i: any;
  uid: any;
  user$ = this.usersService.currentUserProfile$;
  newTask: any;
  
  
 
  constructor(private firestore: AngularFirestore, private usersService: UsersService, public dialogRef: MatDialogRef<EditNoticeComponent>) { }

  ngOnInit(): void {
    
  }
close() {
  this.dialogRef.close();
}

save(user: ProfileUser) {
  
 
  user.tasks[this.i] = this.newTask;
 console.log(user);
 this.firestore.collection('users').doc(this.uid).update(user);
 this.dialogRef.close();

}
}
