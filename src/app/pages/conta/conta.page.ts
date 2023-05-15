import { AppComponent } from './../../app.component';
import { PostProvider } from 'src/providers/post-provider';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  nome: any ="";
  curso: any ="";
  matricula: any ="";
  rg: any ="";
  cpf: any ="";
  senha: any ="";
  tipo: any ="";
  telefone: any ="";
  dadosLogin: any =[];
  verSenha ="password";
  olho= "eye-outline";
  constructor(
    private alertController: AlertController,
    private route: Router,
    private provider: PostProvider,
    private app: AppComponent,
    private Platform: Platform,
    )
    {    }


  ngOnInit() {
  }
  ver(){
    if(this.verSenha == "text"){
      this.verSenha = "password";
      this.olho ="eye-outline";
      return true;
    }
    if(this.verSenha == "password"){
      this.verSenha = "text";
      this.olho ="eye-off-outline";

      return true;
    }
    }
    ionViewWillEnter(){
      this.dadosLogin =[];
    }

  fazerLogin(): void {

    if(this.cpf != "" && this.senha != "") {
console.log('cpf = '+this.cpf+' senha = '+this.senha);
      let dados = {
        requisicao: "LoginAlternativo",
        email: this.cpf,
        senha: this.senha
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe( async data=>{
    
        
        if(data['sucess'] == true){
          this.nome = data['result'].nome;
          for( let cliente of data['result']){
            this.dadosLogin.push(cliente);
          }
/*          this.storage.setItem('session_storage',this.dadosLogin[0]).then(
            () =>    this.Exito(),
            error => this.Fail(error)
          );*/
        if(this.dadosLogin[0].tipo =="aluno")this.app.setAluno();
        if(this.dadosLogin[0].tipo =="professor")this.app.setProf();
        if(this.dadosLogin[0].tipo =="administrador")this.app.setAdmin();

        if(this.dadosLogin[0].senha =="abc123" && this.dadosLogin[0].tipo == "professor"){
          this.route.navigate(['/primeiratela']);
          
        }else        this.route.navigate(['/inicio']);

        }
        if(data['sucess'] == false) {
            this.presentAlert();
        }

       });


        }else{
          this.presentAlert2();
        } 

//        if(aux == false) this.presentAlert();

  }
  


  async Fail(error: string) {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Não foi possivel fazer login',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }
  
  async Exito() {
    var resultado = this.nome.split(" ");
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Bem vindo de volta, '+resultado[0]+'.',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }
  async presentAlert() {

    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Email e/ou senha incorreta.',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Por favor digite em todos os campos.',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }

}
  /*
      if(this.dadosLogin[0].tipo =="aluno")this.app.setAluno();
      if(this.dadosLogin[0].tipo =="professor")this.app.setProf();
      if(this.dadosLogin[0].tipo =="administrador")this.app.setAdmin();
      this.tipo =this.dadosLogin[0].tipo;
      this.email =this.dadosLogin[0].email;
      this.nome =this.dadosLogin[0].nome;
      this.curso =this.dadosLogin[0].curso;
      this.matricula =this.dadosLogin[0].nMatricula;
      this.rg =this.dadosLogin[0].rg;
      this.cpf =this.dadosLogin[0].cpf;
      this.senha =this.dadosLogin[0].senha;
      this.telefone =this.dadosLogin[0].telefone;

      this.route.navigate(['/inicio']);
*/

