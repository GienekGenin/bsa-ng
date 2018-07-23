import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormValidationService} from '../../services/validation/form-validation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-child-forget-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent implements OnInit {
  email: FormControl;
  getErrorMessage: Function;
  hidePass = true;

  constructor(public formValidation: FormValidationService, public router: Router) {
    this.email = this.formValidation.email;
    this.getErrorMessage = this.formValidation.getEmailErrorMessage;
  }

  ngOnInit() {
  }

  changePass(email, password) {
    if (!email.invalid && password.length >= 3) {
      const users = JSON.parse(localStorage.getItem('users'));
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email.value) {
          users[i].password = password;
          localStorage.setItem('users', JSON.stringify(users));
          alert('Password changed');
          this.router.navigate(['login']);
        }
      }
    } else {
      alert('email or password incorrect');
    }
  }
}
