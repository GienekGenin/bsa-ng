import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {ForgotPassComponent} from './forget-pass/forgot-pass.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewPassComponent} from './forget-pass/new-pass/new-pass.component';
import {CaptchaComponent} from './forget-pass/captcha/captcha.component';
import {NewPassGuard} from './guards/new-pass-guard/new-pass.guard';
import {DashboardGuard} from './guards/dashboard/dashboard.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard]},
  {path: 'content', component: ContentComponent},
  {
    path: 'forget-pass',
    component: ForgotPassComponent,
    children: [
      {path: '', component: CaptchaComponent},
      {path: 'new-pass', component: NewPassComponent, canActivate: [NewPassGuard]}]
  },
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
