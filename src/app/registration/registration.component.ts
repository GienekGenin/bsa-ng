import {Component, OnInit} from '@angular/core';
import {DatePickerService} from '../services/date-picker-service/date-picker.service';
import {FormValidationService} from '../services/validation/form-validation.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  email: FormControl;
  getErrorMessage: Function;
  hide = true;
  constructor(public datePicker: DatePickerService, public formValidation: FormValidationService) {
    this.minDate = this.datePicker.minDate;
    this.maxDate = this.datePicker.maxDate;
    this.email = this.formValidation.email;
    this.getErrorMessage = this.formValidation.getErrorMessage;
  }

  ngOnInit() {
    console.log(`Min date: ${this.minDate}, Max date: ${this.maxDate}`);
  }

}
