import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],imports:[ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when email and password are empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should be invalid when email is invalid', () => {
    component.form.controls?.['email'].setValue('invalid-email');
    expect(component.form.valid).toBeFalsy();
  });

  it('should be invalid when password is too short', () => {
    component.form.controls?.['password'].setValue('123');
    expect(component.form.valid).toBeFalsy();
  });

  it('should be valid when email and password are valid', () => {
    component.form.controls?.['email'].setValue('test@example.com');
    component.form.controls?.['password'].setValue('password123');
    expect(component.form.valid).toBeTruthy();
  });
});
