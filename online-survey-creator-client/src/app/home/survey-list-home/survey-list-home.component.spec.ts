import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListHomeComponent } from './survey-list-home.component';

describe('SurveyListHomeComponent', () => {
  let component: SurveyListHomeComponent;
  let fixture: ComponentFixture<SurveyListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
