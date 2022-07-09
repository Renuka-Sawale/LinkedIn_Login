import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token:any=localStorage.getItem('token');
  public url= `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${this.token}&redirect_uri=http://localhost:4200/loginResponse&client_id=775c6oqtohy3pl&client_secret=6BYQrAet7PV9mSO4`

  constructor(private http:HttpClient) { }
  public login(){
    this.http.get(this.url)
  }
}
