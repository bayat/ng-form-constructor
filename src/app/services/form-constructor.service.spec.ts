/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormConstructorService } from './form-constructor.service';

describe('FormConstructorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormConstructorService]
    });
  });

  it('should ...', inject([FormConstructorService], (service: FormConstructorService) => {
    expect(service).toBeTruthy();
  }));
});
