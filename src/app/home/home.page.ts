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

    brasaoPMPR: String = "../assets/image/pmprtransparente.png";

    mostaTermo: any;
    mostraCampoTermo: boolean = false;
    aceitoTermo: any;
    mostraBotaoContinua: boolean = false;
    escondeCampoTermo: boolean = false;
  
  constructor(private router: Router, public storage:Storage, public toastCtrl: ToastController ) {
    this.mostaTermo = "false";
    this.mostraCampoTermo = false;
    this.aceitoTermo = "false";
    this.escondeCampoTermo = true;
  }

  ngOnInit() {
    this.storage.clear();
  }

  mostrarTermos():void{
console.log(this.mostraCampoTermo);

    if (this.mostaTermo == "true") {
      this.mostraCampoTermo = true;
      console.log("dentro do if: ", this.mostraCampoTermo);
      this.escondeTermo();
    } else {
      this.mostraCampoTermo = false;
    }
  }


  aceitarTermos():void{

    if (this.aceitoTermo == "true") {
      this.mostraBotaoContinua = true;
      this.escondeTermo();
    } else {
      this.mostraBotaoContinua = false;
    }
  }

  escondeTermo(): void{
    this.escondeCampoTermo = false;
  }

  direcionaLogin(){
    this.router.navigateByUrl('/login'); 

  }
}
