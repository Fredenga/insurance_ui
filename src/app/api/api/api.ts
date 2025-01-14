export * from './auth.service';
import { AuthService } from './auth.service';
export * from './customers.service';
import { CustomersService } from './customers.service';
export * from './insuranceProducts.service';
import { InsuranceProductsService } from './insuranceProducts.service';
export const APIS = [AuthService, CustomersService, InsuranceProductsService];
