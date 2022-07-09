import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-linkedin-login-response',
  templateUrl: './linkedin-login-response.component.html',
  styleUrls: ['./linkedin-login-response.component.scss']
})
export class LinkedinLoginResponseComponent implements OnInit {

  linkedInToken = "";
  linkedInResponseToken 

  constructor(private route: ActivatedRoute,private _http:HttpClient) { }

  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
   const url = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${this.linkedInToken}&redirect_uri=http://localhost:4200/loginResponse&client_id=775c6oqtohy3pl&client_secret=6BYQrAet7PV9mSO4`
    // this._http.get(url).subscribe((posREs)=>{
    //   this.linkedInResponseToken = posREs
    //   console.log(`the respone is: `,this.linkedInResponseToken)
    // },(err)=>{
    //   console.log(err)
    // })
    console.log(url)
  }

}
