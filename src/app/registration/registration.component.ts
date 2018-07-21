import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import * as moment from 'node_modules/moment/moment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() {
  }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
    console.log(moment());
  }

}
