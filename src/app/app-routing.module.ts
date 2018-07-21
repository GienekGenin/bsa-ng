import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {ForgetPassComponent} from './forget-pass/forget-pass.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
  {path: 'content', component: ContentComponent},
  {path: 'forget-pass', component: ForgetPassComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
