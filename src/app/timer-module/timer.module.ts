import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TimerComponent],
  exports: [
    TimerComponent
  ]
})
export class TimerModule { }
