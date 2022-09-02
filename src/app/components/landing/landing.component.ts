import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<LandingComponent>) { }

  ngOnInit(): void {
  }
login() {
  this.router.navigate(['/login']);
  this.dialogRef.close();

}
}
