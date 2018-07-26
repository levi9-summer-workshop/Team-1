import { TestBed, inject } from '@angular/core/testing';

import { CreateSurveyService } from './create-survey.service';

describe('CreateSurveyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateSurveyService]
    });
  });

  it('should be created', inject([CreateSurveyService], (service: CreateSurveyService) => {
    expect(service).toBeTruthy();
  }));
});
