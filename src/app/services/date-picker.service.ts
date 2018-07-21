import {Injectable} from '@angular/core';

export interface DateTimePickerInterface {
  minDate: Date;
  maxDate: Date;
}

@Injectable({
  providedIn: 'root'
})

export class DatePickerService implements DateTimePickerInterface {
  minDate = new Date();
  maxDate = new Date();

  constructor() {
    this.minDate.setFullYear(this.minDate.getFullYear() - 100);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
}
