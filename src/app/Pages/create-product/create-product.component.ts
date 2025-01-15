import { Component, OnInit } from '@angular/core';
import { CustomInsuranceService } from '../../services/custom-insurance.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent implements OnInit {
  productName: string = '';
  category: string = '';
  description: string = '';
  basePremium: number = 0;
  access_token: string | null = '';

  constructor(private service: CustomInsuranceService) {}
  ngOnInit(): void {
    this.access_token = localStorage.getItem('access_token');
  }

  onSubmit() {
    if (
      this.productName &&
      this.category &&
      this.description &&
      this.basePremium > 0 &&
      this.access_token
    ) {
      this.service
        .createInsuranceProduct(this.access_token, {
          productName: this.productName,
          basePremium: this.basePremium,
          category: this.category,
          description: this.description,
        })
        .subscribe({
          next: (response) => {
            console.log(response);
          },
        });
    }
  }
}
