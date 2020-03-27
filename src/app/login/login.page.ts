import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';
import { ToastController, AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
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

  async buscarPolicial() {

    var dataParaEnvio = { "rg": this.rg, "data_nascimento": this.dataNascimento, "captcha": this.captcha };
    this.apiService.sendDados(dataParaEnvio).subscribe(async (dataReturnFromService) => {
      this.retornoVerificacao = dataReturnFromService;
      console.log("retorno: ", JSON.stringify(this.retornoVerificacao));

      if (this.retornoVerificacao.result === true) {

        this.storage.set('rg', this.rg).then(() => {
          this.storage.get('rg').then((rg) => {
            console.log('rg: ', rg);
          });
        });
        this.storage.set('dataNascimento', this.dataNascimento).then(() => {
          this.storage.get('dataNascimento').then((dataNascimento) => {
            console.log('dataNascimento: ', dataNascimento);
          });

          this.router.navigateByUrl('/questionario');
        });
	      //this.storage.set('captcha', this.captcha);

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
