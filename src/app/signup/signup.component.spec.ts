import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let formBuilder: FormBuilder;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],imports:[ReactiveFormsModule]
    })
    .compileComponents();
    formBuilder = TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid when all fields are filled out', () => {
    // Create a new FormGroup using the FormBuilder
    component.signupForm = formBuilder.group({
      email: ['test@example.com'],
      username: ['testuser'],
      password: ['password123'],
      firstName: ['Test'],
      lastName: ['User']
    });
    // Call the onSubmit method
    component.onSubmit();
    // Check if the form is valid
    expect(component.signupForm.valid).toBeTruthy();
  });

  it('form should be invalid when some fields are missing', () => {
    // Create a new FormGroup using the FormBuilder
    component.signupForm = formBuilder.group({
      email: ['sam@gmai.com'],
      username: ['testuser'],
      password: ['password123'],
      firstName: [],
      lastName: []
    });
    // Call the onSubmit method
    component.onSubmit();
    // Check if the form is invalid
    console.log(component.signupForm);
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let username = component.signupForm.controls['username'];
    expect(username.valid).toBeFalsy();
    username.setValue(null);
    expect(username.hasError('required')).toBeTruthy();
    username.setValue("A");
    expect(username.hasError('required')).toBeFalsy();
});

});
