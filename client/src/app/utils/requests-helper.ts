import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RequestsHelper {

    constructor(private http: HttpClient) { }

    get(url): Observable<any> {
        let request = this.http.get(environment.apiUrl + url, { responseType: 'text' });
        return request;
    }

    post(url, postObject): Observable<any> {
        let request = this.http.post(environment.apiUrl + url, postObject, { responseType: 'text' })
        return request;
    }

}