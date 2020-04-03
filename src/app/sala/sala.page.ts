import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';
import { Url, UrlObject } from 'url';


@Component({
  selector: 'app-sala',
  templateUrl: './sala.page.html',
  styleUrls: ['./sala.page.scss'],
  providers:[InAppBrowser]
})

export class SalaPage implements OnInit {

  private urlParameters: Array<any> = [];
  private token:any = "";
  private respostaAPI:any;
  private result:boolean = false;
  private msg:string = "";
  private redirect:string = "";

  constructor(public apiService: ApiService, private iab: InAppBrowser) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    if (document.URL.indexOf("?") > 0) {
      this.token = document.URL.split("?");
      console.log(this.token[1]);
    
      var dataParaEnvio = { "token": this.token[1] };
      this.apiService.sendToken(dataParaEnvio).subscribe(async (dataReturnFromService) => {
        this.respostaAPI = dataReturnFromService;
        this.result = this.respostaAPI.result;
        this.msg = this.respostaAPI.message;
        this.redirect = this.respostaAPI.redirect;

        if (this.result === true) {
          window.location.href = this.redirect;
        }else{
          alert("Este link está invalido ou expirado");
        }
      });
    }
  }
}
