import { ContaPage } from './../conta/conta.page';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PostProvider } from './../../../providers/post-provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listachamadas',
  templateUrl: './listachamadas.page.html',
  styleUrls: ['./listachamadas.page.scss'],
})
export class ListachamadasPage implements OnInit {

  disciplina: any =[];
  retorno1: any = null;
  retorno2: any =null;
  nome: any ="";
  turmas: any =[];
  teste1: boolean = false;
  teste2: boolean = false;
  retorno3: any ="";
  datas: any =[];
  oks1: string = "outline";
  oks2: string = "outline";
  dadosLogin: any =[];
  email: any ="";

  constructor(
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController,
    private conta: ContaPage
      ) { }

  ngOnInit() {
    this.teste();
  }

  ionViewWillEnter(){
/*    this.storage.getItem('session_storage').then((res)=>{
    this.dadosLogin = res;
    this.email = this.dadosLogin.email;
    this.nome = this.dadosLogin.nome;
    this.buscarMinhasMaterias(this.nome);
  });*/


    }

    testando1(){
      this.teste1 = true;
      this.teste2 = false;
      this.retorno1=null;
      this.retorno2=null;
      this.retorno3=null;
      this.oks1 ="solid";
      this.oks2 ="outline";
    }

    testando2(){
      this.teste1 = false;
      this.teste2 = true;
      this.retorno1=null;
      this.retorno2=null;
      this.retorno3=null;
      this.oks1 ="outline";
      this.oks2 ="solid";
    }

teste(){

  var meudia =""; //comeca vazia
  var meumes ="";
  var opc1 = false;  //dia
  var opc2 = false;  // mes

  var data ="";
  var now = new Date();
  var dia = now.getDate(); // a logica
  var mes = now.getMonth();
  var ano = now.getFullYear();

  mes = mes+1;
  data = ano+'-'+mes+'-'+dia;

  if(dia <10){
    opc1 = true;
    meudia = "0"+dia;
  }
  if(mes <10){
    opc2 = true;
      meumes = "0"+mes;
  }


  if(opc1 == false && opc2 == true){
    data = ano+'-'+meumes+'-'+dia;
  }

  if(opc1 == true && opc2 == false){
    data = ano+'-'+mes+'-'+meudia;
  }

  if(opc1 == true && opc2 == true){
    data = ano+'-'+meumes+'-'+meudia;
  }



  console.log('a data atual eh =' +data); // se a data for menor q 10 eu coloco o 0 e se for maior
}

examinar(){
  if(this.retorno1 ==null|| this.retorno2 ==null){
    this.presentAlert();
  }else   this.route.navigate(['/simsenhor/'+this.retorno1+'/'+this.retorno2]);
}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Entre com todos os dados.',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }

  pegarTurma(){
    this.turmas =[];
    return new Promise(resolve =>{
    let dados ={
     requisicao : 'verTalTurma',
     materia: this.retorno1,
     professor: this.nome
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.turmas.push(cliente);
      }
  
  
        });
      });
  }

buscarMinhasMaterias(meuNome){
  this.disciplina =[];
  this.turmas =[];
  return new Promise(resolve =>{
  let dados ={
   requisicao : 'listarMaterias',
   professor: meuNome
  };
  this.nome = meuNome
  this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
    for( let cliente of data['result']){
      this.disciplina.push(cliente);
    }


      });
    });
  }
  editarPresenca(){
    if(this.retorno1 == null||this.retorno2 ==null ||this.retorno3 ==null){
      this.presentAlert();
    }else{
      var disciplina = this.retorno1;
      var turma = this.retorno2;
      var data =  this.retorno3.substring(0,10);
      this.route.navigate(['/editarpresenca/'+disciplina+'/'+turma+'/'+data]);
      console.log('dados =' +data);
  
    }
  }

  pegarData(){
    this.datas =[];
    return new Promise(resolve =>{
    let dados ={
     requisicao : 'verTalTurma',
     materia: this.retorno1,
     professor: this.nome
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.turmas.push(cliente);
      }
  
  
        });
      });
  }
}
