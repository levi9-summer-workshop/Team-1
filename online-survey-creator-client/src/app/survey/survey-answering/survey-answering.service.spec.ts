import { TestBed, inject } from '@angular/core/testing';

import { SurveyAnsweringService } from './survey-answering.service';

describe('SurveyAnsweringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyAnsweringService]
    });
  });

  it('should be created', inject([SurveyAnsweringService], (service: SurveyAnsweringService) => {
    expect(service).toBeTruthy();
  }));
});
