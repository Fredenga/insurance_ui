import { Component, OnInit } from '@angular/core';
import { InsuranceProductsService } from '../../api';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private service: InsuranceProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
  onSubmit() {}
}
