import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  Email: string = '';
  Username: string = '';
  Password: string = '';
  constructor(private router: Router) {}
  onSubmit() {
    if (this.Username && this.Email && this.Password) {
      console.log('Username:', this.Username);
      console.log('Email:', this.Email);
      console.log('Password:', this.Password);
      // Registration logic here (e.g., send data to API)
      // After successful registration, you can redirect to login or home page:
      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid!');
    }
  }
}
