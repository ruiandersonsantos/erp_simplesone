import { TestBed, inject } from '@angular/core/testing';

import { ConfigTablesService } from './config-tables.service';

describe('ConfigTablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigTablesService]
    });
  });

  it('should be created', inject([ConfigTablesService], (service: ConfigTablesService) => {
    expect(service).toBeTruthy();
  }));
});
