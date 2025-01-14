import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  Email: string = '';
  Username: string = '';
  Password: string = '';
  constructor(private router: Router, private authService: AuthService) {}
  onSubmit() {
    if (this.Username && this.Email && this.Password) {
      console.log('Username:', this.Username);
      console.log('Email:', this.Email);
      console.log('Password:', this.Password);

      this.authService
        .apiAuthRegisterPost({
          email: this.Email,
          username: this.Username,
          password: this.Password,
        })
        .subscribe({
          next(response) {},
          error() {
            throw new Error('Error occured during registration');
          },
        });

      this.router.navigate(['/login']);
    } else {
      throw new Error('Form is invalid!');
    }
  }
}
