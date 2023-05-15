import { AlertController } from '@ionic/angular';
import { ContaPage } from './../conta/conta.page';
import { AppComponent } from './../../app.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.page.html',
  styleUrls: ['./sair.page.scss'],
})
export class SairPage implements OnInit {

  dadosLogin: any =[];
  email:any ="";
  nome: any =null;

  constructor( 
    private route: Router,
    private app: AppComponent,
    private alertController: AlertController
    ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.nome = null;
    /*this.storage.getItem('session_storage').then((res)=>{
    this.dadosLogin = res;
    this.email = this.dadosLogin.email;
    this.nome = this.dadosLogin.nome;
    });*/
    }

    sairGeral(){
    navigator['app'].exitApp();
  }



    async fazerLogout(){
      const alert = await this.alertController.create({
//        header: 'Confirm!',
        message: 'Tem certeza que deseja sair ?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Sair',
            handler: () => {
              this.nome = null;

//              this.storage.clear();
            this.app.setSair();
              this.route.navigate(['/inicio']);
            
            }
          }
        ]
      });
  
      await alert.present();
    }


  }
