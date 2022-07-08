import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { LinkedinLoginResponseComponent } from './login/linkedin-login-response/linkedin-login-response.component';
import { LinkedinLoginComponent } from './login/linkedin-login/linkedin-login.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full" },
  {path: "login", component:LinkedinLoginComponent},
  {path: "loginResponse", component:LinkedinLoginResponseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
