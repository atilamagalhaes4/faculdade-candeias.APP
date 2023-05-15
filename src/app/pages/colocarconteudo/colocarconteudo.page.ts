import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostProvider } from './../../../providers/post-provider';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-colocarconteudo',
  templateUrl: './colocarconteudo.page.html',
  styleUrls: ['./colocarconteudo.page.scss'],
})
export class ColocarconteudoPage implements OnInit {

  ajuda: Number =0;
  base64Image: string ="";
  loop: boolean = false;
  materias:any = "";
  titulo: any ="";
  retorno: any = "";
  mensagem: any ="";
  endereco1: any ="";
  endereco2: any ="";
  endereco3: any ="";
  turma: any ="";
  help: any = "Direcao";
  dadosLogin: any =[];
  dados: any =[];
  TodosOsDados: any =[];

  constructor(
    private provider: PostProvider,
    private alertController: AlertController,
    private router: Router,
    ) {

     }

      nome: any ="";
      curso :any ="administracao";
      matricula: any ="";
      email: any ="";
      id: any ="";
      rg: any ="";
      cpf: any ="";
      senha: any ="";
      tipo: any ="";
      telefone: any ="";
     modoEditar: boolean = false;
     
       ngOnInit() {

       }
       ionViewWillEnter(){

/*         this.storage.getItem('session_storage').then(res=>{
        //   this.dadosLogin = res;
           this.email = res.email;
           this.nome = res.nome;
           this.curso = res.curso;
           this.matricula = res.nMatricula;
           this.rg = res.rg;
           this.cpf = res.cpf;
           this.senha = res.senha;
           this.tipo= res.tipo;
           this.telefone= res.telefone;
           this.id =res.id;

           this.carregar(this.nome);
          });*/
          this.presentAlert();
          this.loop = false;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Cuidado, links não seguros não poderão ser aberto pelos alunos.',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }

  carregar(veioNome){
    

      return new Promise(resolve =>{
      let dados ={
       requisicao: 'novaPedidaMinhasMaterias2',
       nome: veioNome
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        for( let cliente of data['result']){
          this.dados.push(cliente);
        }

        resolve(true);
      });
        });
      }

  publicar(){

    var tam=0;
    if(this.titulo =="" ||this.retorno =="" ||this.mensagem =="" ||this.turma ==""){
      this.presentAlert2();

      this.titulo =="";
      this.retorno =="";
      this.mensagem =="";
      this.turma =="";
    }else{

      var aux ="";

      if(this.retorno == "Administrador") aux ="Direcao"; 
      else aux = this.retorno

      if(this.endereco1.includes('https://') == false && this.endereco1.length>8){
      this.endereco1 = 'https://'+this.endereco1;
      }
      if(this.endereco2.includes('https://') == false && this.endereco2.length>8){
      this.endereco2 = 'https://'+this.endereco2;
      }

     return new Promise(resolve =>{
        let dados = {
          requisicao: "postarMateriais",
          professor: this.nome,
          titulo: this.titulo,
          disciplina: aux,
          turma: this.turma,
          endereco1: this.endereco1,
          endereco2: this.endereco2,
          endereco3: this.base64Image,
          mensagem: this.mensagem
          }
          this.provider.acessarBanco(dados, 'sobrePessoas.php');
            this.router.navigate(['/inicio']);
          
          });
          
  }
  }
  async presentAlert2(){
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Por favor digite em todos os campos não opcionais.',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }

    tirarFoto(){
       /*
      this.loop = true;
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
       this.loop = false
       this.ajuda = this.base64Image.length;
      }, (err) => {
        this.erroRecebido(err);
        this.loop = false;
      });
      this.ajuda = this.base64Image.length;
      */
    }

    abrirGaleria(){
      /*
      this.loop = true;
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
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
       this.loop = false;
       this.ajuda = this.base64Image.length;
      }, (err) => {
  this.erroRecebido(err);
  this.loop = false;
      });
      this.ajuda = this.base64Image.length;
      */
    }

    async erroRecebido(errp) {
      const alert = await this.alertController.create({
        cssClass: 'secondary',
       // header: 'Alerta',
        message: 'Não foi possível adcionar essa imagem, tente novamente.',
        buttons: [{
        cssClass: 'primary',
          text: 'OK'
        }]
      });
  
      await alert.present();
    }
}
