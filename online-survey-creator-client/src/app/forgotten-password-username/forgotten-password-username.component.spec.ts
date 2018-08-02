import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenPasswordUsernameComponent } from './forgotten-password-username.component';

describe('ForgottenPasswordUsernameComponent', () => {
  let component: ForgottenPasswordUsernameComponent;
  let fixture: ComponentFixture<ForgottenPasswordUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgottenPasswordUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottenPasswordUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
