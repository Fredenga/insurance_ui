import { Component, OnInit } from '@angular/core';
import { InsuranceProduct, InsuranceProductsService } from '../../api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  category: string = '';
  products: InsuranceProduct[] = [];
  constructor(
    private service: InsuranceProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') || '';
    });

    if (this.category.length > 0) {
      this.service.apiInsuranceProductsGet().subscribe({
        next: (response) => {
          response.forEach((res) => {
            if (
              res.category?.toLocaleLowerCase() ==
              this.category.toLocaleLowerCase()
            ) {
              this.products.push(res);
            }
          });
        },
      });
    }
  }
}
