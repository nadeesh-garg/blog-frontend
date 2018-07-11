import { TestBed, inject } from '@angular/core/testing';

import { BlogindexService } from './blogindex.service';

describe('BlogindexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogindexService]
    });
  });

  it('should be created', inject([BlogindexService], (service: BlogindexService) => {
    expect(service).toBeTruthy();
  }));
});
