import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <div class="container">
      <div class="form-container">
        <div class="title">Register Here</div>
        <br/><br/>
        <form [formGroup]="registerForm">
          <mat-form-field appearance="outline">
            <mat-label>Enter your email</mat-label>
            <input matInput formControlName="email" />
          </mat-form-field>
          <br/>
          <br/>
          <mat-form-field appearance="outline">
            <mat-label>Enter your password</mat-label>
            <input type="password" matInput formControlName="password" />
          </mat-form-field>
        </form>
        <div class="buttons-container">
          <button
            mat-raised-button
            class="register-button"
            [disabled]="registerForm.invalid"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    
  ]
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email],],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
}
