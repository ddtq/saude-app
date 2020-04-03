import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'termos.page.html',
  styleUrls: ['termos.page.scss'],
})
export class TermosPage {

  brasaoPMPR: String = "../assets/image/pmprtransparente.png";

  aceitoTermo: any;
  escondeCampoTermo: boolean = false;

  constructor(
    private router: Router,
    public storage: Storage,
    public toastCtrl: ToastController,
    public alertController: AlertController, ) {
  }

  ngOnInit() {
    this.storage.clear();
  }

  async aceitarTermos(): Promise<void> {

    if (this.aceitoTermo == "true") {

      this.router.navigateByUrl('/login');

    } else {

      const alert = await this.alertController.create({
        header: 'Atenção!',
        message: 'Para continuar clique em "Aceito termos"',
        buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      location.reload();
                    }
                  },
                  {
                    text: 'Sair',
                    handler: () => {
                      this.router.navigateByUrl('/home');
                    }
                  }
                ]
      });
      await alert.present();
    }
  }
}
