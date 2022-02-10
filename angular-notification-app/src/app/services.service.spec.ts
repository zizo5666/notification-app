import { TestBed } from '@angular/core/testing';

import { Services } from './services.service';

describe('Services', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Services = TestBed.get(Services);
    expect(service).toBeTruthy();
  });
});
