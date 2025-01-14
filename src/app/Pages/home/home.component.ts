import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InsuranceProduct, InsuranceProductsService } from '../../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  insurance: InsuranceProduct = {
    productName: 'Sample Product',
    category: 'Electronics',
    description: 'This is a description of the product.',
    basePremium: 199.99,
  };
  constructor(
    private router: Router,
    private service: InsuranceProductsService
  ) {}
  ngOnInit(): void {
    this.service.apiInsuranceProductsGet().subscribe({
      next(response) {
        console.log(response);
      },
    });
  }
  handleUpdate() {
    this.router.navigate(['/update']);
  }
  handleCreate() {
    this.router.navigate(['/create']);
  }
  handleDelete() {}
}
