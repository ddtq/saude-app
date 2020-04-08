import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.page.html',
  styleUrls: ['./apresentacao.page.scss'],
})

export class ApresentacaoPage implements OnInit {

  constructor(
    private router: Router,
    public storage: Storage) {


    }

  ngOnInit() {
    this.storage.get('aceitoTermo').then((aceitoTermo)=>{
      if(aceitoTermo != "true"){
        this.router.navigateByUrl('/home');
      }
    });
  }

  abreQuestionario(){
    this.router.navigateByUrl('/questionario');
  }









  
}
