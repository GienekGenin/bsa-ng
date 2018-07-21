import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewPassGuard} from '../../guards/new-pass-guard/new-pass.guard';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {

  constructor(public router: Router, public newPassGuard: NewPassGuard) {
  }

  checkCaptcha(event) {
    if (event.target.value === `don't type`) {
      this.newPassGuard.state = true;
      this.router.navigate(['forget-pass/new-pass']);
    }
  }

  ngOnInit() {
  }

}
