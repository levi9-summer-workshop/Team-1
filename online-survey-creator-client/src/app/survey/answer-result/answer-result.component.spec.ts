import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerResultComponent } from './answer-result.component';

describe('AnswerResultComponent', () => {
  let component: AnswerResultComponent;
  let fixture: ComponentFixture<AnswerResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
