import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { RequestsHelper } from '../utils/requests-helper'

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  public IsLogged = false;

  private loginUrl = "/account/login2";
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
    let login = "username";
    let password = "password";
    let token = "";

    let request = this.requests.get(this.loginUrl);

    request.subscribe((data: any) => {
      token = data;
      console.log(data);
    });

    return "oddaje tokena"
  }

}