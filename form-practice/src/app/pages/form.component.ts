import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
      <form [formGroup]="formGroup">
        <div class="container"> 
        <input formControlName="name"/>
        <input formControlName="budget"/>
        <input formControlName="city"/>
        <input type="date" formControlName="birth"/>
        <label>
         <input type="radio" value="true" formControlName="ownHouse">
           <span>무</span>
         </label>
         <label>
         <input type="radio" value="false" formControlName="ownHouse">
           <span>유</span>
        </label>
        <input *ngIf="inputAddressVisible" type="address" formControlName="address"/>
        </div>
        </form>
      <button (click)="printValue()">Get Value</button>
      <p class="code">{{formGroup.value | json}}<p>
      <p> isValid: {{formGroup.valid}} </p>
      <p class="red">{{errors}}</p>
      <p> budget: {{formGroup.value.budget | currency}}원 </p>
  `,
  styles: [
    `
    .container {
      display: flex;
      flex-direction: column;
    }
    .red {
      color: red
    }
    .code {
      white-space: pre
    }
    .ng-invalid:focus {
      border: 1px solid red;
      outline: none
    }
    `
  ]
})
export class FormComponent {

  errors = ''

  inputAddressVisible = true
  
  formGroup: UntypedFormGroup

  constructor(formBuilder: FormBuilder){
    this.formGroup = formBuilder.group( {
      name: ['Brandon', Validators.required],
      city: [undefined, Validators.required],
      budget: [0],
      birth: [undefined, Validators.required],
      ownHouse: [undefined, Validators.required],
      address: [undefined, Validators.required]
    })

    this.formGroup.valueChanges.subscribe(changes =>{
      const ctrl = this.formGroup.get('address')!
      console.log('value changed')
    })

    this.formGroup.get('ownHouse')?.valueChanges.subscribe((v) => {
      const ctrl = this.formGroup.get('address')!
      const required = v === "false"
      this.inputAddressVisible = required
      if(required) {
        ctrl.addValidators(Validators.required)
      } else {
        ctrl.removeValidators(Validators.required)
      }
    })
  }

  printValue() {
    console.log(this.formGroup.value)
  //   this.print = this.nameControl.value
  //   this.isValid = this.nameControl.valid
  //   this.errors = JSON.stringify(this.nameControl.errors, null, 2)
  }
}
