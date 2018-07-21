import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DatePickerService} from '../services/date-picker.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  constructor(public datePickerService: DatePickerService) {
    this.minDate = this.datePickerService.minDate;
    this.maxDate = this.datePickerService.maxDate;
  }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
    console.log(`Min date: ${this.minDate}, Max date: ${this.maxDate}`);
  }

}
