import { TestBed, inject } from '@angular/core/testing';

import { SurveyServiceService } from './survey-service.service';

describe('SurveyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyServiceService]
    });
  });

  it('should be created', inject([SurveyServiceService], (service: SurveyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
