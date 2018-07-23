import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {ForgotPassComponent} from './forget-pass/forgot-pass.component';
import {ContentComponent} from './content/content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DatePickerService} from './services/date-picker-service/date-picker.service';
import {RecaptchaModule} from 'ng-recaptcha';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPassComponent } from './forget-pass/new-pass/new-pass.component';
import { CaptchaComponent } from './forget-pass/captcha/captcha.component';
import {FormValidationService} from './services/validation/form-validation.service';
import {NewPassGuard} from './guards/new-pass-guard/new-pass.guard';
import {UserService} from './services/user-service/user.service';
import {FormsGuard} from './guards/forms/forms.guard';
import {DashboardGuard} from './guards/dashboard/dashboard.guard';
import {TimerModule} from './timer-module/timer.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPassComponent,
    ContentComponent,
    DashboardComponent,
    NewPassComponent,
    CaptchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    TimerModule
  ],
  providers: [DatePickerService, FormValidationService, NewPassGuard, UserService, FormsGuard, DashboardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
