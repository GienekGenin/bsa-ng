import {Component, OnInit} from '@angular/core';
import {FormsGuard} from '../guards/forms/forms.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public formsGuard: FormsGuard) {
  }

  ngOnInit() {
    this.formsGuard.state = false;
  }

}
