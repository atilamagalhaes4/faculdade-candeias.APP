import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { SairPage } from '../sair/sair.page';

@Component({
  selector: 'app-primeiratela',
  templateUrl: './primeiratela.page.html',
  styleUrls: ['./primeiratela.page.scss'],
})
export class PrimeiratelaPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private provider: PostProvider,
    private route: Router,
    private sair: SairPage
    ) { }

  dadosLogin: any =[];
  materia: any ="";
  turma: any ="";
  alunos: any =[];
  curso: any ="";
  email: any ="";
  rg: any ="";
  cpf: any ="";
  tipo: any ="";
  telefone: any ="";
  nMatricula: any ="";
  id: any ="";
  nome: any ="";
  
    retorno1: any ="";
    retorno2: any ="";

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
      this.id =this.dadosLogin.id;
      this.rg = this.dadosLogin.rg;
      this.cpf = this.dadosLogin.cpf;
      this.tipo = this.dadosLogin.tipo;
      this.telefone = this.dadosLogin.telefone;
      this.conferirLogo(this.email, this.nome, this.curso, this.nMatricula, this.id, this.rg, this.cpf, this.tipo, this.telefone);
      });*/

    };

conferirLogo(email, nome, curso, nMatricula, id, rg, cpf, tipo, telefone){
  this.email = email;
  this.nome = nome;
  this.curso = curso;
  this.nMatricula = nMatricula;
  this.id = id;
  this.rg = rg;
  this.cpf = cpf;
  this.tipo = tipo;
  this.telefone = telefone;
}

funcaoSair(){
  this.sair.fazerLogout();
}
Confirmar(){
  if(this.retorno1 ==""||this.retorno2 ==""){
    this.digitaTudo();
  }else if((this.retorno1!=this.retorno2)){
this.desigual();
  }else{
    let dados ={
      requisicao : 'editar',
      id: this.id,
      nome: this.nome,
      nMatricula: this.nMatricula,
      email: this.email,
      rg: this.rg,
      cpf: this.cpf,
      senha: this.retorno1,
      tipo: this.tipo,
      telefone: this.telefone,
      curso: this.curso
     };
     this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      this.route.navigate(['/inicio']);
    });
  }
}


async desigual() {
  const alert = await this.alertController.create({
//        header: 'Alert',
//        subHeader: 'As senhas não confere',
    message: 'A primeira senha não confere com a segunda.',
    buttons: ['OK']
  });

  await alert.present();
}

async digitaTudo() {
  const alert = await this.alertController.create({
//        header: 'Alert',
//        subHeader: 'As senhas não confere',
    message: 'Digite em todos os campos.',
    buttons: ['OK']
  });

  await alert.present();
}
}