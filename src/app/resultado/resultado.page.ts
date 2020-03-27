import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pais',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  private titulo:any;
  private msg:any;

  constructor(private router: Router, public storage: Storage) { }


  ngOnInit() {

    this.storage.get('rg').then((rg) => {
      if(rg == null){
        this.router.navigateByUrl('/home');
      } 
    });

    this.titulo = this.storage.get('titulo').then((titulo) => {
      console.log('titulo é ', titulo);
      
    });

    this.titulo = this.storage.get('msg').then((msg) => {
      console.log('msg é ', msg);
    });

    this.titulo = this.storage.get('titulo');

    this.msg = this.storage.get('msg');

    console.log("pagina resultado -> titulo ", this.titulo + " msg " + this.msg.result);

    this.storage.clear();

  }

}
