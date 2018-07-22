import {Component} from '@angular/core';
import {DatePickerService} from '../services/date-picker-service/date-picker.service';
import {FormValidationService} from '../services/validation/form-validation.service';
import {FormControl} from '@angular/forms';
import {UserService} from '../services/user-service/user.service';
import {DashboardGuard} from '../guards/dashboard/dashboard.guard';
import {Router} from '@angular/router';

interface RegistrationComponentInterface {
  minDate: Date;
  maxDate: Date;
  email: FormControl;
  getErrorMessage: Function;
  userData: Function;
  hidePass: boolean;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements RegistrationComponentInterface {
  minDate: Date;
  maxDate: Date;
  email: FormControl;
  getErrorMessage: Function;
  hidePass = true;

  constructor(public datePicker: DatePickerService, public formValidation: FormValidationService,
              public userService: UserService, public dashboardGuard: DashboardGuard,
              public router: Router) {
    this.minDate = this.datePicker.minDate;
    this.maxDate = this.datePicker.maxDate;
    this.email = this.formValidation.email;
    this.getErrorMessage = this.formValidation.getEmailErrorMessage;
  }

  userData(name, surname, email, date, password) {
    const user = {name, surname, email, date, password, id: null};
    this.userService.pushUserToLocalStorage(user);
    this.dashboardGuard.state = true;
    this.router.navigate(['dashboard']);
  }
}
