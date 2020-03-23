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

  pais = [
    {
      pais: 'Alemanha',
      selected: false
    },
    {
      pais: 'Autrália',
      selected: false
    },
    {
      pais: 'Camboja',
      selected: false
    },
    {
      pais: 'China',
      selected: false
    },
    {
      pais: 'Coréia do Norte',
      selected: false
    },
    {
      pais: 'Coréia do Sul',
      selected: false
    },
    {
      pais: 'Emirados Árabes Unidos',
      selected: false
    },
    {
      pais: 'Filipinas',
      selected: false
    },
    {
      pais: 'França',
      selected: false
    },
    {
      pais: 'Irã',
      selected: false
    },
    {
      pais: 'Itália',
      selected: false
    },
    {
      pais: 'Japão',
      selected: false
    },
    {
      pais: 'Malásia',
      selected: false
    },
    {
      pais: 'Singapura',
      selected: false
    },
    {
      pais: 'Tailândia',
      selected: false
    },
    {
      pais: 'Vietnam',
      selected: false
    },

  ]

  mostraCampo: boolean;

  constructor(
    private router: Router,
    public storage: Storage) { }

  ngOnInit() {
  }

  onclick(check) {
    //this.storage.set('outroPais', check);

    localStorage.setItem('outroPais', check);

    console.log("++++++++: ", check.outroPais);

    if (check.outroPais == "Sim") {
      this.mostraCampo = true;
    } else {
      this.mostraCampo = false;
    }
  }

  onclickPais(checkPais) {
    //this.storage.set('outroPais', check);

    localStorage.setItem('pais', checkPais);

    console.log("==========: ", checkPais.pais);

  }


  salvarPais() {
    this.router.navigateByUrl('/json');
  }


}
