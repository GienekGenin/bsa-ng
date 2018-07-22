import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormValidationService} from '../services/validation/form-validation.service';
import {UserService} from '../services/user-service/user.service';
import {Router} from '@angular/router';
import {DashboardGuard} from '../guards/dashboard/dashboard.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl;
  getErrorMessage: Function;
  hidePass = true;

  constructor(public formValidation: FormValidationService, public userService: UserService, public loggedInGuard: DashboardGuard,
              public router: Router) {
    this.email = this.formValidation.email;
    this.getErrorMessage = this.formValidation.getErrorMessage;
  }

  ngOnInit() {
  }

  login(email, password) {
    const users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && password === users[i].password) {
        this.userService.setUserLoggedIn(users[i]);
        this.loggedInGuard.state = true;
        this.router.navigate(['dashboard']);
        return;
      }
    }
    alert('Email or password incorrect');
  }
}
