import { ContaPage } from './../conta/conta.page';
import { AlertController } from '@ionic/angular';
import { PostProvider } from './../../../providers/post-provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceitarourejeitar',
  templateUrl: './aceitarourejeitar.page.html',
  styleUrls: ['./aceitarourejeitar.page.scss'],
})
export class AceitarourejeitarPage implements OnInit {

  dadosAlunos: any =[];
  disciplinas: any =[];
  dados: any =[];
  nome: any ="";
  adcionados: any =[];
  pendentes: any =[];
  dadosLogin: any =[];
  email: any ="";
  opc1: boolean = false;
  opc2: boolean = false;
  opc3: boolean = false;

  constructor(
    private provider: PostProvider,
     private alertCtrl: AlertController,
    private conta: ContaPage
     ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){

    this.opc1 = false;
    this.opc2 = false;
    this.opc3 = false;
    this.adcionados =[];
    this.pendentes =[];
    this.dados =[];
    this.disciplinas =[];
    this.dadosAlunos =[];

/*    this.storage.getItem('session_storage').then((res)=>{
//    this.dadosLogin = res;
    this.email = res.email;
    this.nome = res.nome;
    this.pegarMinhasMaterias(this.nome);
  });*/


  }    

  aceitarAluno(id, aluno,nomeProfessor, nomeMateria, turma, email,situacao,nMatricula){
    


    return new Promise(resolve =>{
      let dados = {
        requisicao: "upgDecisao",
        id: id,
        aluno: aluno,
        nomeProfessor: this.nome,
        nomeMateria: nomeMateria,
        turma: turma,
        email: email,
        situacao: 'aceito',
        nMatricula: nMatricula
        };
        this.provider.acessarBanco(dados, 'sobrePessoas.php');
        this.ionViewWillEnter();
          });
        
  }

  pegarMinhasMaterias(nomeVeio){
    var tam=0;
    return new Promise(resolve =>{
      let dados ={
       requisicao : 'MateriasDoProf',
       professor: nomeVeio
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        for( let cliente of data['result']){
          this.disciplinas.push(cliente);
          console.log('pegou as disciplinas do professor');
          tam++;
        }
        this.alunosSerelepe(tam, nomeVeio);


        });
        });
  }

  alunosSerelepe(tam: any, nomeVeio){
    
    var n=0;
    
    for(var t=0;t<tam;t++){

      return new Promise(resolve =>{
        let dados ={
         requisicao : 'pedidosAlunos',
         professor: nomeVeio
        };
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          for( let cliente of data['result']){
            this.dadosAlunos.push(cliente);
            console.log('pegou as disciplinas do aluno');
            n++;
          }
          this.separarDados(n);
          });
          });
    }
  }

  doRefresh(event) { // dar refresh puxando pra cima
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 1000);
  }

  separarDados(tam: any){

    var n=0, i=0, k=0;

    for(var t =0; t<tam;t++){

      if(this.dadosAlunos[t].situacao =="aceito"){
        this.opc1 = true;

        this.adcionados[n] = {
          id: this.dadosAlunos[t].id,
          nomeProfessor: this.dadosAlunos[t].nomeProfessor,
          nomeMateria: this.dadosAlunos[t].nomeMateria,
          turma: this.dadosAlunos[t].turma,
          situacao: this.dadosAlunos[t].situacao,
          aluno: this.dadosAlunos[t].nomealuno,
          email: this.dadosAlunos[t].email,
          nMatricula: this.dadosAlunos[t].nMatricula
        }
        n++;

      }else{
        this.opc2 = true;

        this.pendentes[i] = {
          id: this.dadosAlunos[t].id,
          nomeProfessor: this.dadosAlunos[t].nomeProfessor,
          nomeMateria: this.dadosAlunos[t].nomeMateria,
          turma: this.dadosAlunos[t].turma,
          situacao: this.dadosAlunos[t].situacao,
          aluno: this.dadosAlunos[t].nomealuno,
          email: this.dadosAlunos[t].email,
          nMatricula: this.dadosAlunos[t].nMatricula
        }
        i++;

      }

    }

    }
    async  excluir(id) { // metodo excluir
      let alert = this.alertCtrl.create({
        cssClass: 'secondary',
        message: 'Tem certeza que você quer remover o aluno ?',
        buttons: [
          {
            text: 'Nao',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Sim',
            handler: () => {
              let dados ={
                requisicao : 'excluirPedido',
                id: id
               };
               this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
                this.ionViewWillEnter();
              });
            }
          }
        ]
      });
      (await alert).present();
      this.ionViewWillEnter();
    }
    

    async  excluir2(id) { // metodo excluir
      let alert = this.alertCtrl.create({
        cssClass: 'secondary',
        message: 'Tem certeza que você quer rejeitar essa solicitação ?',
        buttons: [
          {
            text: 'Nao',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Sim',
            handler: () => {
              let dados ={
                requisicao : 'excluirPedido',
                id: id
               };
               this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
                this.ionViewWillEnter();
              });
            }
          }
        ]
      });
      (await alert).present();
      this.ionViewWillEnter();
    }
  }

