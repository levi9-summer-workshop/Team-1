import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionResultComponent } from './question-result.component';

describe('QuestionResultComponent', () => {
  let component: QuestionResultComponent;
  let fixture: ComponentFixture<QuestionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
