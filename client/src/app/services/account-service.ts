import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  private loginUrl = "http://localhost:50647/account/login2";

  constructor(private http: HttpClient) { }

  registerUser(){
      console.log('registerUser');
  }

  login(): string{
    let login = "username";
    let password = "password";

    let loginRequest = this.http.get(this.loginUrl);
    let token = loginRequest.subscribe();
    
    return "oddaje tokena"
  }

}