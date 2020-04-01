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

  ngOnInit() {}

  abreQUestionario(){
    this.router.navigateByUrl('/questionario');
  }









  
}
