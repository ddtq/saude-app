import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(public http: HttpClient) { }

    send(dataParaEnvio) {
        var url = "http://146.148.88.190/saude/policial_verify";
        return this.http.post(url, dataParaEnvio, {
            headers: new HttpHeaders({"Content-Type":"application/json"})
        })
    }
}