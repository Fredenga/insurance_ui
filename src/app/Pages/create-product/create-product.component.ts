import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  productName: string = '';
  category: string = '';
  description: string = '';
  basePremium: number = 0;

  onSubmit() {}
}
