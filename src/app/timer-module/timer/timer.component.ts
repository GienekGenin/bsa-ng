import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  default_time = 10;
  hide = false;

  constructor() {
  }

  myVar;

  myStopFunction() {
    clearInterval(this.myVar);
  }

  timer(command, timeInput) {
    if (command === 'start') {
      this.hide = true;
      this.myVar = setInterval(function () {
        myTimer(timeInput);
      }, 1000);
    } else if (command === 'stop') {
      this.hide = false;
      this.myStopFunction();
    } else if (command === 'reset') {
      this.hide = false;
      this.myStopFunction();
      timeInput.value = this.default_time;
    }
  }

  ngOnInit() {
  }
}

function myTimer(timeInput) {
  let time = timeInput.value;
  time = time - 1;
  if (time >= 0) {
    timeInput.value = time;
  } else {
    this.myStopFunction();
  }
}
