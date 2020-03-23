import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiService } from '../login/api.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss']
})

export class QuestionarioPage implements OnInit {

  mostraCampo: boolean;
  dataInicioSintomas: Date;
  cidade: String;
  telefone: String;
  onde: String;

  contato: any;

  respostas: any;
  retornoVerificacao: any;

  perguntas = [
    {
      pergunta: 'Cansaço',
      selected: false
    },
    {
      pergunta: 'Congestão Nasal',
      selected: false
    },
    {
      pergunta: 'Corrimento Nasal (Coriza)',
      selected: false
    },
    {
      pergunta: 'Dificuldade para respirar',
      selected: false
    },
    {
      pergunta: 'Dor de cabeça',
      selected: false
    },
    {
      pergunta: 'Dor de garganta',
      selected: false
    },
    {
      pergunta: 'Dores pelo corpo',
      selected: false
    },
    {
      pergunta: 'Febre',
      selected: false
    },
    {
      pergunta: 'Mal estar geral',
      selected: false
    },
    {
      pergunta: 'Tosse',
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
  ];
  contatoConfirmado = [
    {
      contatoConfirmado: 'Sim',
      selected: false
    },
    {
      contatoConfirmado: 'Não',
      selected: false
    },
  ];
  outroPais = [
    {
      outroPais: 'Sim',
      selected: false
    },
    {
      outroPais: 'Não',
      selected: false
    },
  ];
  alertController: any;
  /*pais = [
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

  ];*/

  dataInicioSintomas: Date;
  cidade: String;
  telefone: String;

  constructor(private router: Router,
    public storage: Storage, public apiService: ApiService) { }

  ngOnInit() { }

  async onclick(check) {
    
    if (check.outroPais == "Sim") {
      this.mostraCampo = true;
    } else {
      this.mostraCampo = false;
    }
  }

  async salvarEstadoSaude() {

    this.respostas = {
      "respostas:": this.perguntas,
      "contatoSuspeito:": this.contatoSuspeito,
      "contatoConfirmado:": this.contatoConfirmado,
      "visitouOutroPais:": this.mostraCampo,
      "Onde:": this.onde,
      "dataInicioSintomas:": this.dataInicioSintomas,
      "cidade:": this.cidade,
      "telefone:": this.telefone
    }

    console.log(this.respostas);


    var dataParaEnvio = {
      "respostas:": this.perguntas,
      "contatoSuspeito:": this.contatoSuspeito,
      "contatoConfirmado:": this.contatoConfirmado,
      "visitouOutroPais:": this.outroPais,
      "Onde:": this.onde,
      "dataInicioSintomas:": this.dataInicioSintomas,
      "cidade:": this.cidade,
      "telefone:": this.telefone
    };

    /*this.apiService.sendRespostas(dataParaEnvio).subscribe(async (dataReturnFromService) => {
      this.retornoVerificacao = dataReturnFromService;
      console.log("retorno: ", JSON.stringify(this.retornoVerificacao));
    })*/

    console.log("CONTATO: ", this.contato);
    
  }
}
