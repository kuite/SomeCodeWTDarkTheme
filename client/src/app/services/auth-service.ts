import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestsHelper } from '../utils/requests-helper'

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public IsLogged = false;

  private loginUrl = "/account/login";
  private regUrl = "/account/RegisterUser"

  constructor(private http: HttpClient, private requests: RequestsHelper) { }

  registerUser() {
    let email = "asdasd2@wp.pl";
    let password = "qwerty";
    let firstname = "jan";
    let lastname = "kowalsky";
    let regvm = {
      Firsname: firstname,
      Lastname: lastname,
      Password: password,
      Email: email
    };

    let req = this.requests.post(this.regUrl, regvm);
    let response;
    req.subscribe((data: any) => {
      response = data;
      console.log(data);
    });
    return response;
  }

  login(): string {
    let login = "asdasd2@wp.pl";
    let password = "qwerty";
    let loginVm = {
        Email: login,
        Password: password
    };
    let token = "";

    let request = this.requests.post(this.loginUrl, loginVm);

    request.subscribe((data: any) => {
      token = data;
      console.log("accountSvc.request.subscribe");
      console.log(data);
    });

    console.log("accountSvc.login");
    return "oddaje tokena"
  }

  logout(){

  }

}