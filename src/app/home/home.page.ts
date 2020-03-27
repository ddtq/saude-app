import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    rg: string;
    dataNascimento: Date;
  
  constructor(private router: Router, public storage:Storage, public toastCtrl: ToastController ) {

  }

  ngOnInit() {

    this.storage.clear();

  }

  direcionaLogin(){
    this.router.navigateByUrl('/login'); 

  }
}
