import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
//import { EmailComposer } from '@ionic-native/email-composer/ngx';
//import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {


  constructor(
    public navCtrl: NavController,
    private alertController: AlertController,
/*    private emailComposer: EmailComposer,
    private callNumber: CallNumber
*/      ) { }

      nome: any ="Amilton Magalhaes dos Santos";
      curso :any ="";
      matricula: any ="";
      email: any ="";
      id: any ="";
      rg: any ="";
      cpf: any ="";
      senha: any ="";
      tipo: any ="";
      telefone: any ="";
      dadosLogin: any =[];
     modoEditar: boolean = false;
     
       ngOnInit() {
       }
       ionViewWillEnter(){/*
         this.storage.getItem('session_storage').then(res=>{
           this.dadosLogin = res;
           this.email = this.dadosLogin.email;
           this.nome = this.dadosLogin.nome;
           this.curso = this.dadosLogin.curso;
           this.matricula = this.dadosLogin.nMatricula;
           this.rg = this.dadosLogin.rg;
           this.cpf = this.dadosLogin.cpf;
           this.senha = this.dadosLogin.senha;
           this.tipo= this.dadosLogin.tipo;
           this.telefone= this.dadosLogin.telefone;
           this.id =this.dadosLogin.id;
          });
//          this.buscar(this.nome);
*/
  }

  async breve() {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Ainda não migramos para essa rede social.',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });
  
    await alert.present();
  }

  envairEmailVestibular(){
    let email = {
      to: 'vestibular@iescfac.edu.br',

      subject: ' ',
      body: ' ',
      isHtml: true
    }
//    this.emailComposer.open(email);
  }

  envairEmailSobreAll(){
    let email = {
      to: 'info@iescfac.edu.br',

      subject: ' ',
      body: ' ',
      isHtml: true
    }
//    this.emailComposer.open(email);
  }



  ligarFixo(){
/*    this.callNumber.callNumber("7136029283", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));*/
  }


  ligarCelular(){
    /*
    this.callNumber.callNumber("7199335-9340", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  */
  }
}
