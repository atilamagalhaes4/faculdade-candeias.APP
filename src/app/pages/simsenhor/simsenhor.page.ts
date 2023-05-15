import { ContaPage } from './../conta/conta.page';
import { AlertController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';


@Component({
  selector: 'app-simsenhor',
  templateUrl: './simsenhor.page.html',
  styleUrls: ['./simsenhor.page.scss'],
})
export class SimsenhorPage implements OnInit {

  materia: any ="";
  turma: any ="";
  data: any ="";
  alunos: any =[];
  ajuda: any =[];
  todos: any =[];
  tam: number=0;
  curso: any ="";
  nMatricula: any ="";
  dadosLogin: any =[];
  email: any ="";
  nome: any ="";
  dados: any =[]
  aux: number =0;
  constructor(
    private alertController: AlertController,
    private actRoute: ActivatedRoute, 
    private provider: PostProvider,
    private route: Router,
    public modalController: ModalController
    ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    /*
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.email = this.dadosLogin.email;
      this.nome = this.dadosLogin.nome;
      this.curso = this.dadosLogin.curso;
      this.nMatricula = this.dadosLogin.nMatricula;
      });*/
    this.actRoute.params.subscribe((data:any)=>{
      this.materia = data.retorno1;
      this.turma = data.retorno2;
    });
    this.materia ="Teoria Geral da Administracao I";
    this.turma ="1";
    this.AntesDeTudo();
  this.dataAtual();
  this.todosOsAlunos();
  console.log('entrou com '+this.materia+' e '+this.turma);
};

colocarFoto(tam){
this.tam = tam;

  for(var i=0; i<this.tam;i++){
    console.log('i = '+i);
    let dados ={
      requisicao : 'pegasAsFotosPiva',
      matricula: this.alunos[i].nMatricula,
     };
     console.log('matricula = '+this.alunos[i].nMatricula);
     this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{

       for( let cliente of data['result']){
        this.todos.push(cliente);
        }


        this.organizarDados(this.todos[this.aux].fotoPerfil, this.todos[this.aux].nome);
         });
  }

}

doRefresh(event) { // dar refresh puxando pra cima
  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 1000);
}
organizarDados(img, aluno){
  console.log('pos = '+this.aux);

//alert(aluno+' '+img);

for(var i=0; i<this.tam;i++){
  if(this.alunos[i].nomealuno == aluno)
  if(img == null){
    this.dados[i] = {
      nomeMateria: this.alunos[i].nomeMateria,
      nomealuno: this.alunos[i].nomealuno,
      id: this.alunos[i].id,
      turma: this.alunos[i].turma,
      nMatricula: this.alunos[i].nMatricula,
      nomeProfessor: this.alunos[i].nomeProfessor,
      email: this.alunos[i].email,
      situacao: this.alunos[i].situacao,
      fotoPerfil: "assets/icon/0013.png"
    }

  }else{

    this.dados[i] = {
      nomeMateria: this.alunos[i].nomeMateria,
      nomealuno: this.alunos[i].nomealuno,
      id: this.alunos[i].id,
      turma: this.alunos[i].turma,
      nomeProfessor: this.alunos[i].nomeProfessor,
      email: this.alunos[i].email,
      nMatricula: this.alunos[i].nMatricula,
      situacao: this.alunos[i].situacao,
      fotoPerfil: img
    }
}

}
    this.aux++;
  
}

async AntesDeTudo() {
  const alert = await this.alertController.create({
    cssClass:  'primary',
    message: 'Ao clicar em uma opção e querer voltar atrás o mesmo não poderá ser modificado nessa tela.',
    buttons: ['OK']
  });

  await alert.present();
}



dataAtual(){

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
  data = dia+'-'+mes+'-'+ano;

  if(dia <10){
    opc1 = true;
    meudia = "0"+dia;
  }
  if(mes <10){
    opc2 = true;
      meumes = "0"+mes;
  }


  if(opc1 == false && opc2 == true){
    data = dia+'-'+meumes+'-'+ano;
  }

  if(opc1 == true && opc2 == false){
    data = meudia+'-'+mes+'-'+ano;
  }

  if(opc1 == true && opc2 == true){
    data = meudia+'-'+meumes+'-'+ano;
  }

this.data = data;

  console.log('a data atual eh =' +data); // se a data for menor q 10 eu coloco o 0 e se for maior
}

ausente(nomeMateria,nomealuno,id,turma,nomeProfessor,email,situacao){

  var aux ="";
  var j=0;
  this.ajuda =[];
  if(this.curso == "administracao") aux= "frequenciaAdministracao";
  if(this.curso == "enfermagem") aux=  "frequenciaEnfermagem";
  if(this.curso == "pedagogia") aux=  "frequenciaPedagogia";

   new Promise(resolve =>{
    let dados ={
     requisicao : aux,
     turma: turma,
     materia: nomeMateria,
     aluno: nomealuno,
     id:id,
     professor: nomeProfessor,
     matricula: this.nMatricula,
     situacao: "ausente",
     data: this.data
    };
    this.provider.acessarBanco(dados, 'sobrePessoas.php');

    for(var i=0; i<this.tam;i++){
      if( this.alunos[i].nomealuno != nomealuno){
        this.ajuda[j] = this.alunos[i];
        j++;
      }
     }
     this.tam =-1;
 
     this.alunos = this.ajuda;
 
      });
}

presente(nomeMateria,nomealuno,id,turma,nomeProfessor,email,situacao){
  var aux ="";
  var j=0;
  this.ajuda =[];
  if(this.curso == "administracao") aux= "frequenciaAdministracao";
  if(this.curso == "enfermagem") aux=  "frequenciaEnfermagem";
  if(this.curso == "pedagogia") aux=  "frequenciaPedagogia";

   new Promise(resolve =>{
    let dados ={
     requisicao : aux,
     turma: turma,
     materia: nomeMateria,
     aluno: nomealuno,
     id:id,
     professor: nomeProfessor,
     matricula: this.nMatricula,
     situacao: "presente",
     data: this.data
    };
    this.provider.acessarBanco(dados, 'sobrePessoas.php');

    for(var i=0; i<this.tam;i++){
     if( this.alunos[i].nomealuno != nomealuno){
       this.ajuda[j] = this.alunos[i];
       j++;
     }
    }
    this.tam =-1;
    this.alunos = this.ajuda;
      });
}

todosOsAlunos(){
 var aux =0;
  return new Promise(resolve =>{
    let dados ={
     requisicao : 'alunosSerelepe',
     turma: this.turma,
     materia: this.materia
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.alunos.push(cliente);
      aux++;
      }
      this.colocarFoto(aux);
    });
      });
  }
}
