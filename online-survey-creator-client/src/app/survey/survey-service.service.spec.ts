import { TestBed, inject } from '@angular/core/testing';

import { SurveyService } from './survey-service.service';

describe('SurveyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyService]
    });
  });

  it('should be created', inject([SurveyService], (service: SurveyService) => {
    expect(service).toBeTruthy();
  }));
});
