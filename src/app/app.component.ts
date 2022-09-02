import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  user$ = this.usersService.currentUserProfile$;

  constructor(private authService: AuthenticationService, private router: Router, private usersService: UsersService, public dialog: MatDialog){

  }

  logout() {
    this.authService.logout().subscribe(()=> {
      this.dialog.open(LandingComponent);
    })
  }
}
