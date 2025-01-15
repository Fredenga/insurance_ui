import { CustomInsuranceService } from './../../services/custom-insurance.service';
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
  access_token: string | null = '';

  constructor(
    private router: Router,
    private service: InsuranceProductsService,
    private insuranceService: CustomInsuranceService
  ) {}
  ngOnInit(): void {
    this.access_token = localStorage.getItem('access_token');
    this.service.apiInsuranceProductsGet().subscribe({
      next: (response) => {
        response.forEach((res) => this.insuranceProducts.push(res));
      },
    });
  }
  handleUpdate(productId: number) {
    if (productId > 0) {
      this.router.navigate(['/update', productId]);
    }
  }
  handleCreate() {
    this.router.navigate(['/create']);
  }
  handleDelete(id: number) {
    if (id > 0 && this.access_token) {
      this.insuranceService
        .deleteInsuranceProduct(id, this.access_token)
        .subscribe({
          next: (response) => {
            console.log(response);
          },
        });
      window.location.reload();
    } else {
      console.log('first');
    }
  }
}
