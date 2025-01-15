import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  searchCategory: string = '';

  constructor(private router: Router) {}
  logOut() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
  onSearch() {
    console.log(this.searchCategory || 'hello world');
    if (this.searchCategory.length > 0) {
      this.router.navigate(['/search', this.searchCategory]);
    }
  }
}
