import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySurveyWrapperComponent } from './survey-survey-wrapper.component';

describe('SurveySurveyWrapperComponent', () => {
  let component: SurveySurveyWrapperComponent;
  let fixture: ComponentFixture<SurveySurveyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySurveyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySurveyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
