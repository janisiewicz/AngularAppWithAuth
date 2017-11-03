import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  template: `
    <mat-card>
      <mat-input-container>
        <input type="email" matInput [(ngModel)]="loginData.email" placeholder="Email">
      </mat-input-container>
      <mat-input-container>
        <input type="password" matInput [(ngModel)]="loginData.password" placeholder="Password">
      </mat-input-container>
      <button mat-raised-button color="primary" (click)="login()">Login</button>
    </mat-card>
  `
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  loginData = {
    email: '',
    password: ''
  }

  login() {
    this.auth.login(this.loginData);
  }
}
