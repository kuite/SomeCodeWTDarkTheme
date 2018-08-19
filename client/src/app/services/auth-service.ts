import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from "rxjs"
import 'rxjs/add/operator/catch';


import { RequestsHelper } from '../utils/requests-helper'

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _isLoggedSource = new Subject();
  public isLoggedObservable$ = this._isLoggedSource.asObservable();
  private _isLogged = false;

  private loginUrl = "/account/login";
  private regUrl = "/account/RegisterUser"

  constructor(private http: HttpClient, private requests: RequestsHelper) { }

  IsLogged(): boolean {
    return this._isLogged;
  }

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

  login(): Observable<string> {
    console.log("accountSvc.login start");
    return new Observable<string>((observer) => {
      console.log("accountSvc.login inside observable");
      let login = "asdasd2@wp.pl";
      let password = "qwerty2";
      let loginVm = {
        Email: login,
        Password: password
      };
      let token = "";

      let request = this.requests.post(this.loginUrl, loginVm);


      request.subscribe(
        (userData: any) => {
          console.log("accountSvc.request.subscribe start");
          localStorage.setItem('userData', JSON.stringify(userData));
          this._isLogged = true;
          this._isLoggedSource.next();
          console.log("accountSvc.request.subscribe end");
          observer.next('ok');
        },
        (err) => {
          observer.next(err.error)
        });
      console.log("accountSvc.login end");
    });
  }

  logout() {

  }

}