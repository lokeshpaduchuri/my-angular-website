import { TestBed } from '@angular/core/testing';

import { AmplifyPhotoService } from './amplify-photo.service';

describe('AmplifyPhotoService', () => {
  let service: AmplifyPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmplifyPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
