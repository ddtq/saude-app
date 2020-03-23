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
  private data: String;
  retornoVerificacao: any;

  constructor(
    private router: Router,
    public storage: Storage,
    public alertController: AlertController,
    public apiService: ApiService) { }


  async buscarPolicial() {

    var dataParaEnvio = { "rg": this.rg, "data_nascimento": this.dataNascimento };
    this.apiService.send(dataParaEnvio).subscribe(async (dataReturnFromService) => {
      this.retornoVerificacao = dataReturnFromService;
      console.log("retorno: ", JSON.stringify(this.retornoVerificacao));

      if (this.retornoVerificacao.result == true) {

        this.storage.set('rg', this.rg);
        this.storage.set('dataNascimento', this.dataNascimento);
        //this.storage.set('captcha', this.captcha);

        this.storage.get('rg').then((rg) => {
          console.log('rg: ', rg);
        });

        this.storage.get('dataNascimento').then((dataNascimento) => {
          console.log('dataNascimento: ', dataNascimento);
        });

        //this.storage.get('captcha').then((captcha) => {
        //  console.log('captcha: ', captcha);
        // });

        this.router.navigateByUrl('/questionario');

      } else {

        const alert = await this.alertController.create({
          header: 'Aviso!!',
          message: 'Informe os dados para consulta!',
          buttons: ['OK']
        });

        await alert.present();
      }
    })
  }
}
