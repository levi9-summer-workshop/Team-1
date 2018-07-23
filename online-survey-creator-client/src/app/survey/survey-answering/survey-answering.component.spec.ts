import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnsweringComponent } from './survey-answering.component';

describe('SurveyAnsweringComponent', () => {
  let component: SurveyAnsweringComponent;
  let fixture: ComponentFixture<SurveyAnsweringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAnsweringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAnsweringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
