import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RequestsHelper {

    loginUrl = "chuj";

    constructor(private http: HttpClient) { }

    get(url): any {
        let request = this.http.get(environment.apiUrl + url, { responseType: 'text' });
        return request;
    }

    post(url, postObject): any {
        let request = this.http.post(environment.apiUrl + url, postObject, { responseType: 'text' });
        return request;
    }

    login(): string {
        let login = "username";
        let password = "password";
        let token = "";

        let loginRequest = this.http.get(this.loginUrl, { responseType: 'text' });

        loginRequest.subscribe((data: any) => {
            token = data;
            console.log(data);
        });

        return "oddaje tokena"
    }

}