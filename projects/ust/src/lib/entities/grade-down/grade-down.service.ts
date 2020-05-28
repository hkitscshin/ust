import { Injectable } from '@angular/core';
import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GradeDownService {

  constructor() { }
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any } => {
      if (!control.value) {
        return null;
      }

      const valid = regex.test(control.value);

      return valid ? null : error;
    }
  }

  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('regPassword').value;
    const confirmPassword: string = control.get('regConfirm').value;

    if (password !== confirmPassword) {
      control.get('regConfirm').setErrors({NoPasswordMatch: true});
    }
  }
}
