import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormValidationService} from '../../services/validation/form-validation.service';

@Component({
  selector: 'app-child-forget-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent implements OnInit {
  email: FormControl;
  getErrorMessage: Function;
  hidePass = true;

  constructor(public formValidation: FormValidationService) {
    this.email = this.formValidation.email;
    this.getErrorMessage = this.formValidation.getEmailErrorMessage;
  }
  ngOnInit() {
  }

}
