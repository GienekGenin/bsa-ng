import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {

  constructor(public router: Router) {
  }

  checkCaptcha(event) {
    if (event.target.value === `don't type`) {
      this.router.navigate(['forget-pass/new-pass']);
    }
  }

  ngOnInit() {
  }

}
