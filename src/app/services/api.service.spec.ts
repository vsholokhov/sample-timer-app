import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientTestingModule, provideHttpClientTesting} from "@angular/common/http/testing";

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

