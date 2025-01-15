import { TestBed } from '@angular/core/testing';

import { CustomInsuranceServiceService } from './custom-insurance.service';

describe('CustomInsuranceServiceService', () => {
  let service: CustomInsuranceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomInsuranceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
