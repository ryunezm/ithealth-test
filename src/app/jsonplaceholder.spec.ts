import { TestBed } from '@angular/core/testing';

import { Jsonplaceholder } from './jsonplaceholder';

describe('Jsonplaceholder', () => {
  let service: Jsonplaceholder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jsonplaceholder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
