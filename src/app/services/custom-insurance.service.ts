import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InsuranceProduct } from '../api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomInsuranceService {
  constructor(private httpClient: HttpClient) {}
  createInsuranceProduct(
    access_token: string,
    product: InsuranceProduct
  ): Observable<InsuranceProduct> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${access_token}`,
    });
    return this.httpClient.post(
      'http://localhost:5031/api/InsuranceProducts',
      {
        productName: product.productName,
        basePremium: product.basePremium,
        category: product.category,
        description: product.description,
      },
      { headers }
    );
  }

  deleteInsuranceProduct(id: number, access_token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${access_token}`,
    });
    return this.httpClient.delete(
      `http://localhost:5031/api/InsuranceProducts/${id}`,
      { headers }
    );
  }

  updateInsuranceProduct(
    id: number,
    access_token: string,
    product: InsuranceProduct
  ) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${access_token}`,
    });
    return this.httpClient.put(
      `http://localhost:5031/api/InsuranceProducts/${id}`,
      {
        productName: product.productName,
        basePremium: product.basePremium,
        category: product.category,
        description: product.description,
      },
      { headers }
    );
  }
}
