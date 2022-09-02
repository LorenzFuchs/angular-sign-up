import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProfileUser} from 'src/app/models/user.profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { addDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { from } from 'rxjs';
@UntilDestroy()
@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent implements OnInit {
  
  
  user$ = this.usersService.currentUserProfile$;
  profileform: any = new FormGroup({
    task:new FormControl('', Validators.required),
    
  })
    
    
  
  
  
  constructor(private firestore: AngularFirestore,  private route: ActivatedRoute, private usersService: UsersService, private toast: HotToastService, private authService: AuthenticationService, public dialogRef: MatDialogRef<AddNoticeComponent>) { }

  ngOnInit(): void {
    
    
  }

  get task() {
    return this.profileform.get('task');
  }

close() {
  this.dialogRef.close();
}
saveTask(user: ProfileUser) {
  if(!this.profileform.valid) return;
const task = this.profileform.value;


console.log(task.task);

  user.tasks.push(task.task);
this.firestore.collection('users').doc(user.uid).update(user);
this.dialogRef.close();
  
  
}
}
