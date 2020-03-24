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


  public teste: string;

  mostraCampo: boolean;
  dataInicioSintomas: Date;
  cidade: String;
  telefone: String;
  onde: String;

  suspeito: any;
  confirmado: any;

  respostas: any;
  retornoVerificacao: any;

  perguntas = [
    {
      pergunta: 'Cansaço',
      pergunta_id: 1,
      selected: false
    },
    {
      pergunta: 'Congestão Nasal',
      pergunta_id: 2,
      selected: false
    },
    {
      pergunta: 'Corrimento Nasal (Coriza)',
      pergunta_id: 3,
      selected: false
    },
    {
      pergunta: 'Dificuldade para respirar',
      pergunta_id: 4,
      selected: false
    },
    {
      pergunta: 'Dor de cabeça',
      pergunta_id: 5,
      selected: false
    },
    {
      pergunta: 'Dor de garganta',
      pergunta_id: 6,
      selected: false
    },
    {
      pergunta: 'Dores pelo corpo',
      pergunta_id: 7,
      selected: false
    },
    {
      pergunta: 'Febre',
      pergunta_id: 8,
      selected: false
    },
    {
      pergunta: 'Mal estar geral',
      pergunta_id: 9,
      selected: false
    },
    {
      pergunta: 'Tosse',
      pergunta_id: 10,
      selected: false
    },
  ];
 
  /* contatoSuspeito = [
    {
      contatoSuspeito: 'Sim',
      pergunta_id: 11,
      selected: false
    },
    {
      contatoSuspeito: 'Não',
      pergunta_id: 11,
      selected: false
    },
  ];
  contatoConfirmado = [
    {
      contatoConfirmado: 'Sim',
      pergunta_id: 12,
      selected: false
    },
    {
      contatoConfirmado: 'Não',
      pergunta_id: 12,
      selected: false
    },
  ];
  */
 
  outroPais = [
    {
      outroPais: 'Sim',
      pergunta_id: 13,
      selected: false
    },
    {
      outroPais: 'Não',
      pergunta_id: 13,
      selected: false
    },
  ];  
  
  alertController: any;

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

    var confirmadoBoolean: boolean;
    var suspeitoBoolean: boolean;

    if(this.confirmado == "true"){
      confirmadoBoolean = true;
    }else{
      confirmadoBoolean = false;
    }

    if(this.suspeito == "true"){
      suspeitoBoolean = true;
    }else{
      suspeitoBoolean = false;
    }
    
    this.respostas = {
      "respostas": this.perguntas,
      "pergunta_id 11": suspeitoBoolean,
      "pergunta_id 12": confirmadoBoolean,
      "pergunta_id 13": this.mostraCampo,
      "pergunta_id 14": this.onde,
      "pergunta_id 15": this.dataInicioSintomas,
      "pergunta_id 16": this.cidade,
      "pergunta_id 17": this.telefone
    }

    console.log(this.respostas);


    var dataParaEnvio = {
      "respostas:": this.perguntas,
      "pergunta_id 11": this.suspeito,
      "pergunta_id 12": this.confirmado,
      "pergunta_id 13": this.mostraCampo,
      "pergunta_id 14": this.onde,
      "pergunta_id 15": this.dataInicioSintomas,
      "pergunta_id 16": this.cidade,
      "pergunta_id 17": this.telefone
    };

   /* this.apiService.sendRespostas(dataParaEnvio).subscribe(async (dataReturnFromService) => {
      this.retornoVerificacao = dataReturnFromService;
      console.log("retorno: ", JSON.stringify(this.retornoVerificacao));
    })*/    
  }
}
