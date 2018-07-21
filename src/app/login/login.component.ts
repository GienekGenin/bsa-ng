import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormValidationService} from '../services/validation/form-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl;
  getErrorMessage: Function;
  hidePass = true;

  constructor(public formValidation: FormValidationService) {
    this.email = this.formValidation.email;
    this.getErrorMessage = this.formValidation.getErrorMessage;
  }
  ngOnInit() {
  }

}
