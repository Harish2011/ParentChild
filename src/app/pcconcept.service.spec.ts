import { TestBed } from '@angular/core/testing';

import { PCconceptService } from './pcconcept.service';

describe('PCconceptService', () => {
  let service: PCconceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PCconceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
