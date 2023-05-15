import { AppComponent } from './../../app.component';
import { PostProvider } from './../../../providers/post-provider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-meusdadosaqui',
  templateUrl: './meusdadosaqui.page.html',
  styleUrls: ['./meusdadosaqui.page.scss'],
})
export class MeusdadosaquiPage implements OnInit {

  constructor(private actRoute: ActivatedRoute,
    private alertController : AlertController,
    private route: Router,
    private provider: PostProvider,
    private app: AppComponent,
     ) { }

 dadosLogin: any;
 nome: any ="";
 curso :any ="";
 matricula: any ="";
 email: any ="";
 id: any ="";
 rg: any ="";
 cpf: any ="";
 senha: any ="";
 tipo: any ="";
 telefone: any ="";
 fotoPerfil: any ="assets/icon/0013.png";
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
      this.modoEditar = false;
      this.id =this.dadosLogin.id;
      this.fotoPerfil = this.dadosLogin.fotoPerfil;
      this.colocarAvatar(this.fotoPerfil, this.id);
//      alert(this.fotoPerfil);
    });*/
  }

  colocarAvatar(foto,id){
    this.id = id;
  if(foto == null || foto ==""){
    this.fotoPerfil ="assets/icon/0013.png";

  }else{
    this.fotoPerfil = foto;
  }
//  this.testeGeral(this.fotoPerfil);
  }

    async alternarEditar() {
      const alert = await this.alertController.create({
        message: 'Mudando nome e/ou matricula podem ser  gerados cancelamento de turmas.'+' Deseja continuar ?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            cssClass: 'secondary',
            text: 'Continuar',
            handler: () => {
              this.modoEditar = true;
            }
          }
        ]
      });
  
      await alert.present();
    }
    vouBack(){
      this.ionViewWillEnter();
    }
    confirmAlteracao(){

      let dados ={
        requisicao: 'editeimeusDados',
        nome: this.nome,
         nMatricula: this.matricula,
         rg: this.rg,
         cpf: this.cpf,
         email: this.email,
         telefone: this.telefone,
         senha: this.senha,
         tipo: this.tipo,
         curso: this.curso,
        id: this.id
     };
     this.provider.acessarBanco(dados, 'sobrePessoas.php');
    this.SoDepoisPai();
    }

    async  DeletarConta(){
      const alert = await this.alertController.create({
        message: 'Tem certeza que deseja apagar? Todos os dados (não pessoais) serão mantido.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            cssClass: 'secondary',
            text: 'Continuar',
            handler: () => {


              let dados ={
                requisicao: 'excluir',
                id: this.id
             };
             this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe( async data=>{
              this.app.setSair();
              this.route.navigate(['/inicio']);
                });
        
            }
          }
        ]
      });
  
      await alert.present();
    }
  async SoDepoisPai() {
    const alert = await this.alertController.create({
//      subHeader: 'Salvo !!!',
      cssClass: 'primary',
      message: 'As alterações terão efeito no proximo login.',
      buttons: ['OK']
    });

    await alert.present();
  }
  abrirGaleria(){
/*
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     var aux = 'data:image/jpeg;base64,' + imageData;
     this.salvarFoto(aux);
    }, (err) => {
this.erroRecebido(err);

    });*/
  }
  async erroRecebido(errp) {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Não foi possível adcionar essa foto, tente novamente.',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }

  salvarFoto(foto){
    return new Promise(resolve =>{
      let dados = {
        requisicao: "salvarFotoDoPerfil",
        fotoPerfil: foto,
        id: this.id
        }
        this.provider.acessarBanco(dados, 'sobrePessoas.php');
        this.fotoPerfil = foto;
        this.Salvo(this.fotoPerfil);
        });
  }
  async Salvo(foto) {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Salvo !!!',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }
  async testeGeral(texto) {
    const alert = await this.alertController.create({
//      subHeader: 'Salvo !!!',
      cssClass: 'primary',
      message: texto+'.',
      buttons: ['OK']
    });

    await alert.present();
  }
}