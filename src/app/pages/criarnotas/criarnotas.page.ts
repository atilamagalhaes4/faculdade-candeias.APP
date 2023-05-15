import { ContaPage } from './../conta/conta.page';
import { PostProvider } from './../../../providers/post-provider';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criarnotas',
  templateUrl: './criarnotas.page.html',
  styleUrls: ['./criarnotas.page.scss'],
})
export class CriarnotasPage implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private alertController : AlertController,
    private provider: PostProvider,
    private route: Router,
    private conta: ContaPage
      ) { }

  nomeMateria: any ="";
  nomealuno: any ="";
  nomeProfessor: any ="";
  nMatricula: any ="";
  /////////
  nota1: any ="0";
  nota2: any ="0";
  nota3: any ="0";
  nota4: any ="0";
  media:number =0;
  curso :any ="";
  ajuda: any =0;
  pessoa: any =[];
  alunoCadastrado: boolean = false;
  idAluno: any ="";
  turma: any ="";
  dadosLogin: any =[];
  email: any ="";
  notaOld ="0";
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.actRoute.params.subscribe((data:any)=>{
      this.nomeMateria = data.nomeMateria;
      this.nomealuno = data.nomealuno;
      this.nomeProfessor = data.nomeProfessor;
      this.nMatricula = data.nMatricula;
      this.turma = data.turma;
    });
/*    this.storage.getItem('session_storage').then((res)=>{
//      this.dadosLogin = res;
//      this.curso = res.curso;
      this.procurarDados(res.curso); // depois coloco aqui this.dadosLogin.curso
    });*/

    this.calcMedia();
    console.log('turma = '+this.turma);
  }


  carregaRapido(){ // converte os numeros para float e tira a media
    var aux ="";
    var qtd =0;

    if(parseFloat(this.nota1) >0) qtd ++;
    if(parseFloat(this.nota2) >0) qtd ++;
    if(parseFloat(this.nota3) >0) qtd ++;
    if(parseFloat(this.nota4) >0) qtd ++;
    if(qtd ==0) qtd =1;

    this.media = (parseFloat(this.nota1)+parseFloat(this.nota2)+parseFloat(this.nota3)+parseFloat(this.nota4))/qtd;
    aux =this.media.toFixed(1);
    this.media =parseFloat(aux);
    console.log('media deu = '+this.media);
  }

  permissao(){
    if (this.nota1.indexOf(",") >= 0||this.nota2.indexOf(",") >= 0||this.nota3.indexOf(",") >= 0||this.nota4.indexOf(",") >= 0) 
    this.presentAlert();    
    else
    this.calcMedia();
  }
  calcMedia(){
    var aux ="";
    var qtd =0;


    if(parseFloat(this.nota1) >0) qtd ++;
    if(parseFloat(this.nota2) >0) qtd ++;
    if(parseFloat(this.nota3) >0) qtd ++;
    if(parseFloat(this.nota4) >0) qtd ++;
    if(qtd ==0) qtd =1;

    this.media = (parseFloat(this.nota1)+parseFloat(this.nota2)+parseFloat(this.nota3)+parseFloat(this.nota4))/qtd;
    aux =this.media.toFixed(1);
    this.media =parseFloat(aux);

    if(Number.isNaN(this.media)){
      this.preencheTudo();
    }else if(this.ajuda ==1){
      this.presentAlertConfirm();
    }
    this.ajuda =1;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Por favor substitua ( , ) por ( . ).',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }
  async preencheTudo() {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Por favor preencha todos os campos corretamente.',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }


  async salvo() {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Salvo!!!',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }

   presentAlertConfirm() {
    const alert = document.createElement('ion-alert');
    alert.message = 'O aluno terá media igual a '+this.media+' !';
    alert.buttons = [
      {
        text: 'Cancelar',
        role: 'cancelar',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      },
      {
        text: 'Confirmar',
        handler: () => {
//          this.olhar_curso(this.alunoCadastrado);

//          console.log('se tem ou nao =' +);
          if(parseInt(this.notaOld)==0){ // sem coesao, this.nota1 muda quando o ususario digitar.
//            this.nota1 = this.notaOld;
            this.CriarNotaNoBanco();
            console.log('deveria salvar');
}
          else{
            this.UpdateNotaNoBanco();
            console.log('deveria dar update')
          }
        }
      }
    ];
  
    document.body.appendChild(alert);
    return alert.present();
  }

  procurarDados(curso){
    var aux ="";
    this.curso = curso;
      if(curso == "administracao") aux= "VerSeTemAdministracao";
      if(curso == "enfermagem") aux=  "VerSeTemEnfermagem";
      if(curso == "pedagogia") aux=  "VerSeTemPedagogia";
  
        return new Promise(resolve =>{
        let dados ={
        requisicao: aux,
        materia: this.nomeMateria,
        turma: this.turma,
        aluno: this.nomealuno
        };
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          this.pessoa =[];

          if(data['success']){

              this.pessoa= data['result'];
            
            this.alunoCadastrado = true;

            this.notaOld=  this.pessoa[0].nota1;
            this.nota1=  this.pessoa[0].nota1;
            this.nota2=  this.pessoa[0].nota2;
            this.nota3=  this.pessoa[0].nota3;
            this.nota4=  this.pessoa[0].nota4;
            this.idAluno = this.pessoa[0].id;
            this.carregaRapido();
          }
          resolve(true);
        });
          });
        
  
  }
  CriarNotaNoBanco(){
    var aux ="";
    console.log('agora salvando');
      if(this.curso == "administracao") aux= "CriarNotaAdministracao";
      if(this.curso == "enfermagem") aux=  "CriarNotaEnfermagem";
      if(this.curso == "pedagogia") aux=  "CriarNotaPedagogia";
  
        return new Promise(resolve =>{
        let dados ={
        requisicao: aux,
        materia: this.nomeMateria,
        turma: this.turma,
        aluno: this.nomealuno,
        professor: this.nomeProfessor,
        media: this.media,
        nota1: this.nota1,
        nota2: this.nota2,
        nota3: this.nota3,
        nota4: this.nota4,
        matricula: this.nMatricula

      };
        this.provider.acessarBanco(dados, 'sobrePessoas.php');
        this.route.navigate(['/publicarnota/'+this.nomeMateria+'/'+this.turma]);

          });
        
  }
  UpdateNotaNoBanco(){
    var aux ="";
    console.log('agora salvando');
      if(this.curso == "administracao") aux= "DarUpdateNotaAdministracao";
      if(this.curso == "enfermagem") aux=  "DarUpdateNotaEnfermagem";
      if(this.curso == "pedagogia") aux=  "DarUpdateNotaPedagogia";
        return new Promise(resolve =>{
        let dados ={
        requisicao: aux,
        materia: this.nomeMateria,
        turma: this.turma,
        aluno: this.nomealuno,
        professor: this.nomeProfessor,
        media: this.media,
        nota1: this.nota1,
        nota2: this.nota2,
        nota3: this.nota3,
        nota4: this.nota4,
        matricula: this.nMatricula,
        id: this.idAluno

      };
        this.provider.acessarBanco(dados, 'sobrePessoas.php');
        this.route.navigate(['/publicarnota/'+this.nomeMateria+'/'+this.turma]);
      this.salvo();
          });
        
  }
}
