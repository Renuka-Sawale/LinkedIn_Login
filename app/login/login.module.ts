import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkedinLoginComponent } from './linkedin-login/linkedin-login.component';
import { LinkedinLoginResponseComponent } from './linkedin-login-response/linkedin-login-response.component';


@NgModule({
  declarations: [
    LinkedinLoginComponent,
    LinkedinLoginResponseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinkedinLoginComponent,
    LinkedinLoginResponseComponent
  ]
})
export class LoginModule { }
