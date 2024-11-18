import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordRe= control.get('passwordRe');
  
    return password?.value === passwordRe?.value ? null : { notmatched: true };
  };
  