import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-json',
  templateUrl: './json.page.html',
  styleUrls: ['./json.page.scss'],
})
export class JsonPage implements OnInit {

  dados = [];
  rg;
  dataNasc;
  
  constructor(public storage: Storage) { }

  ngOnInit() {
    this.json();      
  }

  json(){

    this.rg = this.storage.get("rg").then((rg) => {
      console.log("rg recuperado: " , rg);
    });  
    this.dataNasc = this.storage.get("dataNascimento").then((dataNasc) => {
      console.log("dataNasc recuperado: " , dataNasc);
    });
   
    let d = {
      rg:this.rg,
      dataNasc:this.dataNasc
    };
    this.dados.push(d);

    console.log(this.dados);

  }  
}
