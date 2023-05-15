import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  minhaConta: boolean = true;
  dadosAluno: boolean = false;
  dadosProfessor: boolean = false;
  dadosAdmin: boolean = false;


  setAluno(){
    this.dadosAluno = true;
    this.minhaConta = false;
    this.dadosProfessor = false;
    this.dadosAdmin = false;
  }

  setAdmin(){
    this.dadosAluno = false;
    this.minhaConta = false;
    this.dadosProfessor = false;
    this.dadosAdmin = true;
  }
  setProf(){
    this.dadosAluno = false;
    this.minhaConta = false;
    this.dadosProfessor = true;
    this.dadosAdmin = false;
  }
  setSair(){
    this.dadosAluno = false;
    this.minhaConta = true;
    this.dadosProfessor = false;
    this.dadosAdmin = false;
  }

  constructor(
    private platform: Platform,
//    private splashScreen: SplashScreen,
//    private statusBar: StatusBar,
    private alertController: AlertController,
  ) {
    this.initializeApp();
    platform.ready().then(() => { //adcionei isso
//      statusBar.styleDefault();
//      splashScreen.hide(); // <-- aqui
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
//      this.statusBar.styleDefault();
//this.statusBar.overlaysWebView (false);
//  this.statusBar.backgroundColorByHexString('#ffffff');
//  this.splashScreen.hide();
//  window['plugins'].PushbotsPlugin.initialize("5e5669caeba79a47bf256a93", {"android":{"sender_id":"402460340079"}});

});
  }

}
