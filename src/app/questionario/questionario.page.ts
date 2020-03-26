import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiService } from './api.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss'],
})

export class QuestionarioPage implements OnInit {

  
  private retornoRespostas: any;
  private msgTitulo: string;
  private msgMensagem: string;

  mostraCampo: boolean = false;
  dataInicioSintomas: Date = new Date();
  cidade: String = "";
  telefone: String ="";
  onde: String ="";
  suspeito: any;
  confirmado: any;
  visitouPais: any;
  respostas: any;

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

  constructor(
    public apiService: ApiService, 
    private router: Router,
    public storage: Storage) {

      this.visitouPais = "false";

    }

  ngOnInit() {
  }

  visitouSimNao():void{

    if (this.visitouPais == "true") {
      this.mostraCampo = true;
    } else {
      this.mostraCampo = false;
    }
  }

  salvarEstadoSaude(){

    this.storage.get('rg').then((rg) => {
      
      if(rg == null){
        this.router.navigateByUrl('/home');
  
      }else{  
        this.preparaParaEnvioRespostas();
  
        var dataParaEnvio = { "resposta": this.respostas, "rg":rg};
        this.apiService.sendRespostas(dataParaEnvio).subscribe(async (dataReturnFromService) => {
  
        this.retornoRespostas = dataReturnFromService;
        this.msgTitulo = JSON.stringify(this.retornoRespostas.result);
        this.msgMensagem = JSON.stringify(this.retornoRespostas.mensagem);
  
        console.log("retorno respostas titulo ", this.msgTitulo + " retorno msg" + this.msgMensagem);
        console.log("rg buscado no storage", this.storage.get('rg'));
        console.log(this.retornoRespostas);
  
        this.storage.set('titulo', this.msgTitulo);
        this.storage.set('msg', this.msgMensagem);
        this.router.navigateByUrl('/resultado');
      })
    }
    }); 

  }   

  preparaParaEnvioRespostas(){
    var confirmadoBoolean: boolean;
    var suspeitoBoolean: boolean;

    if (this.confirmado == "true") {
      confirmadoBoolean = true;
    } else {
      confirmadoBoolean = false;
    }

    if (this.suspeito == "true") {
      suspeitoBoolean = true;
    } else {
      suspeitoBoolean = false;
    }

    this.respostas = [
      {"respostas": this.perguntas},
      {"pergunta_id": 11, "inicio sintomas": this.dataInicioSintomas},
      {"pergunta_id": 12, "contato suspeito": suspeitoBoolean},
      {"pergunta_id": 13, "contato confirmado": confirmadoBoolean},
      {"pergunta_id": 14, "esteve em outro país": this.mostraCampo},
      {"pergunta_id": 15, "onde": this.onde},
      {"pergunta_id": 16, "cidade": this.cidade},
      {"pergunta_id": 17, "telefone contato": this.telefone}
    ];
  }
  
}
