import { Component, OnInit } from '@angular/core';
import { InsuranceProduct, InsuranceProductsService } from '../../api';
import { ActivatedRoute } from '@angular/router';
import { CustomInsuranceService } from '../../services/custom-insurance.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent implements OnInit {
  productName: string = '';
  category: string = '';
  description: string = '';
  basePremium: number = 0;
  id: number = 0;
  newProduct: InsuranceProduct = {};
  access_token: string | null = '';

  constructor(
    private service: InsuranceProductsService,
    private route: ActivatedRoute,
    private customService: CustomInsuranceService
  ) {}

  ngOnInit(): void {
    this.access_token = localStorage.getItem('access_token');
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') || '0');
    });
    if (this.id > 0) {
      this.service.apiInsuranceProductsIdGet(this.id).subscribe({
        next: (response) => {
          this.productName = response.productName || '';
          this.category = response.category || '';
          this.description = response.description || '';
          this.basePremium = response.basePremium || 0;
        },
      });
    }
  }
  onSubmit() {
    if (this.id > 0 && this.access_token) {
      this.customService
        .updateInsuranceProduct(this.id, this.access_token, {
          productName: this.productName,
          basePremium: this.basePremium,
          category: this.category,
          description: this.description,
        })
        .subscribe();
    }
  }
}
