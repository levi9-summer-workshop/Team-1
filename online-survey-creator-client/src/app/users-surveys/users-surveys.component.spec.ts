import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSurveysComponent } from './users-surveys.component';

describe('UsersSurveysComponent', () => {
  let component: UsersSurveysComponent;
  let fixture: ComponentFixture<UsersSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
