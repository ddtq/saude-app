import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';
import { ToastController, AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {

  rg: String;
  dataNascimento: Date;

  constructor(private router: Router, public storage: Storage, public alertController: AlertController) { }

  async buscarPolicial() {

    if (this.rg != "123") {

      const alert = await this.alertController.create({
        header: 'Aviso!!',
        message: 'Policial não encontrado, tente novamente',
        buttons: ['OK']
      });

      await alert.present();

    } else {

      this.storage.set('rg', this.rg);
      this.storage.set('dataNascimento', this.dataNascimento);

      this.storage.get('rg').then((rg) => {
        console.log('rg: ', rg);
      });

      this.storage.get('dataNascimento').then((dataNascimento) => {
        console.log('dataNascimento: ', dataNascimento);
      });

      this.router.navigateByUrl('/questionario');

    }
  }
}
