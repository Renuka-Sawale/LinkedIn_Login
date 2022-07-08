import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-linkedin-login',
  templateUrl: './linkedin-login.component.html',
  styleUrls: ['./linkedin-login.component.scss'],
})
export class LinkedinLoginComponent {
  linkedInCredentials = {
    clientId: '775c6oqtohy3pl',
    redirectUrl: 'http://localhost:4200/loginResponse',
    scope: 'r_liteprofile%20r_emailaddress%20w_member_social',
  };

  constructor(private http: HttpClient) {}

  login() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${this.linkedInCredentials.clientId}&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope=${this.linkedInCredentials.scope}`;
  }
}
