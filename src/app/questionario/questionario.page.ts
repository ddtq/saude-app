import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss'],
})
export class QuestionarioPage implements OnInit {

  respostas = [
    {
      autoAvaliacao: 'Cansaço',
      selected: false
    },
    {
      autoAvaliacao: 'Congestão Nasal',
      selected: false
    },
    {
      autoAvaliacao: 'Corrimento Nasal (Coriza)',
      selected: false
    },
    {
      autoAvaliacao: 'Dificuldade para respirar',
      selected: false
    },
    {
      autoAvaliacao: 'Dor de cabeça',
      selected: false
    },
    {
      autoAvaliacao: 'Dor de garganta',
      selected: false
    },
    {
      autoAvaliacao: 'Dores pelo corpo',
      selected: false
    },
    {
      autoAvaliacao: 'Febre',
      selected: false
    },
    {
      autoAvaliacao: 'Mal estar geral',
      selected: false
    },
    {
      autoAvaliacao: 'Tosse',
      selected: false
    },
  ];

  contatoSuspeito = [
    {
      contatoSuspeito: 'Sim',
      selected: false
    },
    {
      contatoSuspeito: 'Não',
      selected: false
    },

  ]

  contatoConfirmado = [
    {
      contatoConfirmado: 'Sim',
      selected: false
    },
    {
      contatoConfirmado: 'Não',
      selected: false
    },

  ]

  dataInicioSintomas: Date;
  cidade: String;
  telefone: String;

  constructor(private router: Router,
    public storage: Storage) { }

  ngOnInit() {
  }

  onclick(check) {
    this.storage.set('autoAvaliacao', check);
    this.storage.set('contatoSuspeito', check);
    this.storage.set('contatoConfirmado', check);
   // this.storage.set('cidade', this.cidade);
    //localStorage.setItem('autoAvaliacao', check);
    //localStorage.setItem('contatoSuspeito', check);
    //localStorage.setItem('contatoConfirmado', check);
    console.log(check);

  }

  salvarEstadoSaude() {
    this.router.navigateByUrl('/pais');
  }

}
