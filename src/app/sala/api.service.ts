import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(public http: HttpClient) { }

    sendToken(token) {
        var url = "http://35.202.59.185/saude/sala";
        return this.http.post(url, token, {
            headers: new HttpHeaders({"Content-Type":"application/json"})
        })
    }

}
