import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  nome: String = "";
  telefone: String = "";
  nMatricula: String = "";
  rg: String = "";
  cpf: String = "";
  email: String = "";
  senha: String = "";
  senha1: String = "";
  curso: string ="";
  dadosLogin: any =[];
  constructor(
    private router: Router,
    private provider: PostProvider,
    private alertController: AlertController,
    private route: Router,
    private app: AppComponent
      ) { }
contas: any =[];

  ngOnInit() {

  }

  criarConta() {


    return new Promise(resolve =>{
let dados ={
   requisicao: 'add',
   nome: this.nome,
    nMatricula: this.nMatricula,
    rg: this.rg,
    cpf: this.cpf,
    email: this.email,
    telefone: this.telefone,
    senha: this.senha,
    tipo: "aluno",
    curso: this.curso
};
this.provider.acessarBanco(dados, 'sobrePessoas.php');


let Novodados = {
  requisicao: "LoginAlternativo",
  email: this.email,
  senha: this.senha
};
this.provider.inserirApi(Novodados, 'sobrePessoas.php').subscribe( async data=>{

  for( let cliente of data['result']){
    this.dadosLogin.push(cliente);
    console.log(this.dadosLogin[0]);          
  }

  if(this.dadosLogin[0].tipo =="aluno")this.app.setAluno();
  if(this.dadosLogin[0].tipo =="professor")this.app.setProf();
  if(this.dadosLogin[0].tipo =="administrador")this.app.setAdmin();

//  this.storage.setItem('session_storage',this.dadosLogin[0]);

  this.route.navigate(['/inicio']);

  
    });


  });
}

  pegarDados(){

    var correcao = this.curso.toLowerCase();
    correcao = this.retira_acentos(correcao);
    this.curso = correcao;
    console.log('this.curso tem ='+this.curso);    

    var tam: number =0;
     new Promise(resolve =>{
      let dados = {
        requisicao: "TodasAsContas"
        }
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        
          for( let cliente of data['result']){
            this.contas.push(cliente);
            tam++;
          }
          resolve(true);
           this.verificar(tam);
        });
          });
  }
  verificar(tam){
    var valicadao = true;
    console.log('tamanho = '+ tam);
    console.log('antes validacao = ' +valicadao);
    var arroba = false;

    if(!(this.email.indexOf('@') > -1)){
      arroba = true;
    }
// se algum campo estiver vazio ele chama uma funcao que mostra na tela q tem q preencher tudo
    if(this.nome ==""||this.email ==""||this.cpf ==""||this.rg ==""||this.telefone ==""||this.nMatricula ==""|| this.senha1 =="" || this.senha==""||this.curso ==""){
      this.sobreVazio();
      valicadao = false;
    }
    if(valicadao == true)
    for(var i =0; i<tam;i++){
      if(this.contas[i].nMatricula ==this.nMatricula){
        this.sobreMatricula();
        valicadao = false;
        break;
      } 
      if(this.contas[i].email ==this.email|| arroba == true){
        this.sobreEmail();
        valicadao = false;
        break;
      }
      if(this.contas[i].rg ==this.rg){
      this.sobreRg();
      valicadao = false;
      break;
    }  
      if(this.contas[i].cpf ==this.cpf){
        this.sobreCpf();
        valicadao = false;
        break;
      } 
    
      if(this.senha != this.senha1){
        this.sobreSenha();
        valicadao = false;
      break;
      }
    }

    if(valicadao == true){
      this.criarConta();
      this.sucesso();
    }
    console.log('depois da validacao = '+valicadao);
  }

  async sucesso(){
    const alert = await this.alertController.create({
      cssClass:  'primary',
      message: 'Conta criada!',
      buttons: ['OK']
    });

    await alert.present();
  }


  async sobreEmail() {
    const alert = await this.alertController.create({
      cssClass:  'primary',
      message: 'Esse email já foi cadastrado, ou está fora do padrão.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async sobreVazio() {
    const alert = await this.alertController.create({
      cssClass:  'primary',
      message: 'Preencha todos os campos.',
      buttons: ['OK']
    });

    await alert.present();
  }


  async sobreSenha() {
    const alert = await this.alertController.create({
      cssClass:  'primary',
      message: 'As senhas não coincidem.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async sobreCpf() {
    const alert = await this.alertController.create({
      cssClass:  'primary',
      message: 'CPF já consta no sistema, tente recuperar.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async sobreRg() {
    const alert = await this.alertController.create({
      cssClass:  'primary',
      message: 'RG já consta no sistema, tente recuperar.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async sobreMatricula() {
    const alert = await this.alertController.create({
      cssClass:  'primary',
      message: 'Esse numero de matricula já consta no sistema, tente recuperar.',

      buttons: ['OK']
    });

    await alert.present();
  }

   retira_acentos(palavra) {
    var com_acento = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
    var sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
    var nova='';
    for(var i=0;i<palavra.length;i++) {
    if (com_acento.search(palavra.substr(i,1))>=0) {
    nova+=sem_acento.substr(com_acento.search(palavra.substr(i,1)),1);
    }
    else {
    nova+=palavra.substr(i,1);
    }
    }
    return nova;
    }
}
