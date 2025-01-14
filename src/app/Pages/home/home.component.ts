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
  insuranceProducts: Array<InsuranceProduct> = [];
  constructor(
    private router: Router,
    private service: InsuranceProductsService
  ) {}
  ngOnInit(): void {
    this.service.apiInsuranceProductsGet().subscribe({
      next: (response) => {
        response.forEach((res) => this.insuranceProducts.push(res));
      },
    });
    console.log(this.insuranceProducts);
  }
  handleUpdate() {
    this.router.navigate(['/update']);
  }
  handleCreate() {
    this.router.navigate(['/create']);
  }
  handleDelete() {}
}
