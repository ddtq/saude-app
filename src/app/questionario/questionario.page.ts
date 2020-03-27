import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiService } from './api.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss'],
})

export class QuestionarioPage implements OnInit {

  @ViewChild('slideQuest', {static: false}) slideQuest: any
  
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

  dataParaEnvio: any = {
    "policial": {
      "rg": "",
      "data_nascimento": "",
      "telefone": ""
    },
    "respostas": []
  }

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

    this.storage.get('rg').then((rg) => {
      if(rg == null){
        this.router.navigateByUrl('/home');
      } else {
        this.setRgEmDataParaEnvio(rg);
        console.log('rg',rg);
      }
    });

    this.storage.get('dataNascimento').then((dataNascimento) => {
      this.setDataNascimentoEmDataParaEnvio(dataNascimento);
    });

  }

  visitouSimNao():void{

    if (this.visitouPais == "true") {
      this.mostraCampo = true;
    } else {
      this.mostraCampo = false;
    }
  }

  slideNext(){
    this.slideQuest.slideNext();
  }

  slidePrev(){
    this.slideQuest.slidePrev();
  }

  getDataParaEnvio() {
    return this.dataParaEnvio;
  }

  setRgEmDataParaEnvio(rg) {
    this.dataParaEnvio.policial.rg = rg;
  }

  setDataNascimentoEmDataParaEnvio(data_nascimento) {
    this.dataParaEnvio.policial.data_nascimento = data_nascimento;
  }

  setTelefoneEmDataParaEnvio(telefone) {
    this.dataParaEnvio.policial.telefone = telefone;
  }

  setRespostasEmDataParaEnvio(respostas) {
    this.dataParaEnvio.respostas = JSON.parse(JSON.stringify(respostas));
  }

  addRespostaEmDataParaEnvio(resposta) {
    this.dataParaEnvio.respostas.push(resposta);
  }

  salvarEstadoSaude(){

    this.preparaParaEnvioRespostas();

    this.apiService.sendRespostas(this.getDataParaEnvio()).subscribe(async (dataReturnFromService) => {
  
      this.retornoRespostas = dataReturnFromService;
      this.msgTitulo = JSON.stringify(this.retornoRespostas.result);
      this.msgMensagem = JSON.stringify(this.retornoRespostas.mensagem);
  
      // console.log("retorno respostas titulo ", this.msgTitulo + " retorno msg" + this.msgMensagem);
      // console.log("rg buscado no storage", this.storage.get('rg'));
      //console.log(this.retornoRespostas);
  
      this.storage.set('titulo', this.msgTitulo);
      this.storage.set('msg', this.msgMensagem);
      this.router.navigateByUrl('/resultado');

    }); 

  }   

  preparaParaEnvioRespostas(){
    var confirmadoBoolean: boolean = false;
    var suspeitoBoolean: boolean = false;

    if (this.confirmado == "true") {
      confirmadoBoolean = true;
    }

    if (this.suspeito == "true") {
      suspeitoBoolean = true;
    }

    this.setRespostasEmDataParaEnvio(this.perguntas);

    this.addRespostaEmDataParaEnvio({"pergunta_id": 11, "pergunta": "inicio sintomas", "text": this.dataInicioSintomas});
    this.addRespostaEmDataParaEnvio({"pergunta_id": 12, "pergunta": "contato suspeito", "selected": suspeitoBoolean});
    this.addRespostaEmDataParaEnvio({"pergunta_id": 13, "pergunta": "contato confirmado", "selected": confirmadoBoolean});
    this.addRespostaEmDataParaEnvio({"pergunta_id": 14, "pergunta": "esteve em outro país", "selected": this.mostraCampo});
    this.addRespostaEmDataParaEnvio({"pergunta_id": 15, "pergunta": "onde", "text": this.onde});
    this.addRespostaEmDataParaEnvio({"pergunta_id": 16, "pergunta": "cidade", "text": this.cidade});
    this.setTelefoneEmDataParaEnvio(this.telefone);
  }
  
}
