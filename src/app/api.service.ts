import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(public http: HttpClient) { }

    sendToken(token) {
        var url = environment.saudeApi + "/saude/sala";
        return this.http.post(url, token, {
            headers: new HttpHeaders({"Content-Type":"application/json"})
        })
    }

    sendRespostas(dataRespostas) {
        var url = environment.saudeApi + "/saude/policial_verify";
        return this.http.post(url, dataRespostas, {
            headers: new HttpHeaders({"Content-Type":"application/json"})
        })
    }

    sendDados(dataParaEnvio) {
        var url = environment.saudeApi + "/saude/policial_verify";
        return this.http.post(url, dataParaEnvio, {
            headers: new HttpHeaders({"Content-Type":"application/json"})
        })
    }

}