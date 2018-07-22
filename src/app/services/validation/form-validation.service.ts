import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface FormValidationInterface {
  email: FormControl;
  text_field: FormControl;
  getEmailErrorMessage: Function;
  getEmptyFieldErrorMessage: Function;
}

@Injectable({
  providedIn: 'root'
})
export class FormValidationService implements FormValidationInterface {
  email = new FormControl('', [Validators.required, Validators.email]);
  text_field = new FormControl('', Validators.required);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getEmptyFieldErrorMessage() {
    return this.text_field.hasError('required') ? 'You must enter a value' : '';
  }
}
