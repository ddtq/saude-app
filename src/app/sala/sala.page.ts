import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.page.html',
  styleUrls: ['./sala.page.scss']
})

export class SalaPage implements OnInit {

  private token:any = "";
  private respostaAPI:any;
  private result:boolean = false;
  private msg:string = "";
  private redirect:string = "";

  constructor(public apiService: ApiService) { }

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

        if (this.result === true) {
          this.redirect = this.respostaAPI.redirect;
          this.msg = this.respostaAPI.message;
          window.location.href = this.redirect;
        }else{
          this.redirect = "#";
          this.msg = "Este link está invalido ou expirado";
          alert(this.msg);
        }

      });
    }
  }
}