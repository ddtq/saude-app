import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {

  outroPais = [
    {
      outroPais: 'Sim',
      selected: false


    },
    {
      outroPais: 'Não',
      selected: false
    },
  ]

  escondeCampo: false;

  constructor(private router: Router,
    public storage: Storage) { }

  ngOnInit() {
  }

  onclick(check) {
    //this.storage.set('outroPais', check);

    localStorage.setItem('outroPais', check);
    console.log(check);
  }


  salvarPais() {
    //this.router.navigateByUrl('/json');
  }


}
