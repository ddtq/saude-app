import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(public http: HttpClient) { }


    sendRespostas(dataRespostas) {
        var url = "http://146.148.88.190/saude/respostas";
        return this.http.post(url, dataRespostas, {
            headers: new HttpHeaders({"Content-Type":"application/json"})
        })
    }

}