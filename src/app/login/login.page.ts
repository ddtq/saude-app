import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { ApiService } from './api.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {

  private rg: String;
  private dataNascimento: Date;
  private retornoVerificacao: any;
  private captcha: String;

  constructor(
    private router: Router,
    public storage: Storage,
    public alertController: AlertController,
    public apiService: ApiService) { }


  normalizaRg(){
    for(var x = 0; x<=this.rg.length; x++){
      this.rg = this.rg.replace(".","");
      this.rg = this.rg.replace("-","");
    }
  }

  async buscarPolicial() {

    this.normalizaRg();  

    var dataParaEnvio = { "rg": this.rg, "data_nascimento": this.dataNascimento, "captcha": this.captcha };
    this.apiService.sendDados(dataParaEnvio).subscribe(async (dataReturnFromService) => {
      this.retornoVerificacao = dataReturnFromService;
      console.log("retorno: ", JSON.stringify(this.retornoVerificacao));

      if (this.retornoVerificacao.result === true) {

        this.storage.set('rg', this.rg).then(() => {
          this.storage.get('rg').then((rg) => {
          });
        });
        this.storage.set('dataNascimento', this.dataNascimento).then(() => {
          this.storage.get('dataNascimento').then((dataNascimento) => {
          });

          this.router.navigateByUrl('/questionario');
        });

      } else {
        const alert = await this.alertController.create({
          header: 'Atenção!',
          message: 'Dados incorretos',
          buttons: [{
            text: 'OK',
            handler: () => {
              location.reload();
            }
        }]
        });
        await alert.present();  
      }
    })
  }
}
