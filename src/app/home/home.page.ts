import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  brasaoPMPR: String = "../assets/image/pmprtransparente.png";

  constructor(
    private router: Router,
    public storage: Storage,
    public toastCtrl: ToastController,
    public alertController: AlertController, ) {
  }

  ngOnInit() {
    this.storage.clear();
  }

  verTermos() {
    this.router.navigateByUrl('/termos');
  }
}
