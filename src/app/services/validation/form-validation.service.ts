import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface FormValidationInterface {
  email: FormControl;
  getErrorMessage: Function;
}

@Injectable({
  providedIn: 'root'
})
export class FormValidationService implements FormValidationInterface {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
