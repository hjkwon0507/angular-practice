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
            <mat-error *ngIf="registerForm.controls['email'].invalid">
              {{
                registerForm.controls["email"].hasError("required")
                ? "이메일을 입력해주세요."
                : "이메일 형식에 맞게 적어주세요."
              }}
            </mat-error>
          </mat-form-field>
          <br/>
          <br/>
          <mat-form-field appearance="outline">
            <mat-label>Enter your password</mat-label>
            <input type="password" matInput formControlName="password" />
            <mat-error *ngIf="registerForm.controls['password'].invalid">
              {{
                registerForm.controls["password"].hasError("required")
                ? "비밀번호를 입력해주세요."
                : "최소 6글자 이상 입력해주세요."
              }}
            </mat-error>
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
