import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';
  constructor(private router: Router, private authService: AuthService) {}
  onSubmit() {
    try {
      if (this.Email && this.Password) {
        this.authService
          .apiAuthLoginPost({
            email: this.Email,
            password: this.Password,
          })
          .subscribe({
            next(response) {
              console.log(response);
            },
            error() {
              throw new Error('Error occured during login');
            },
          });

        this.router.navigate(['/home']);
      } else {
        throw new Error('Form is invalid');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
