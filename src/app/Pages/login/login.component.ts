import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';
  onSubmit() {
    if (this.Email && this.Password) {
      console.log('Email:', this.Email);
      console.log('Password:', this.Password);
      // Here you can add the logic to authenticate the user
    } else {
      console.log('Form is invalid!');
    }
  }
}
