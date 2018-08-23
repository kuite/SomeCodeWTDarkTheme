import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from "rxjs"
import 'rxjs/add/operator/catch'

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RequestsHelper {

    constructor(private http: HttpClient) { }

    // get(url): Observable<any> {
    //     let request = this.http.get(environment.apiUrl + url, { responseType: 'text' });
    //     return request;
    // }

    get<T>(url): Observable<T> {
        let request = this.http.get<T>(environment.apiUrl + url);
        return request;
    }

    post(url, postObject): Observable<any> {
        let request = this.http.post(environment.apiUrl + url, postObject, { responseType: 'text' })
        return request;
    }

}