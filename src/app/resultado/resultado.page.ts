import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  private resultado:string;
  private orientacao:string;

  constructor(private router: Router, public storage: Storage) { }

  ngOnInit() {


    this.storage.get('rg').then((rg) => {
      if(rg == null){
        this.router.navigateByUrl('/home');
      } 
    });

  
    this.storage.get('titulo').then((titulo) => {
      this.resultado = titulo;
    });

    this.storage.get('msg').then((msg) => {
      this.orientacao = msg;
    });
    
    this.storage.clear();

  }
}
