import { Component } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent {
  productName: string = 'Sample Product';
  category: string = 'Electronics';
  description: string = 'This is a description of the product.';
  basePremium: number = 199.99;

  onSubmit() {}
}
