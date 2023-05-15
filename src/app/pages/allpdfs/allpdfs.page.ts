import { AlertController } from '@ionic/angular';
import { PostProvider } from './../../../providers/post-provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allpdfs',
  templateUrl: './allpdfs.page.html',
  styleUrls: ['./allpdfs.page.scss'],
})
export class AllpdfsPage implements OnInit {

  dados: any =[];

  constructor(
    private provider: PostProvider,
    private alertController: AlertController
    ) { }

  ngOnInit() {
  }

  async  excluirDados(id){
    const alert = await this.alertController.create({
//      header: 'Confirm!',
      message: 'Deseja apagar esse registro ?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {

            let dados ={
              requisicao : 'excluirBoleto',
              id: id,
             };
             this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
              this.ionViewWillEnter();
            });

          }
        }
      ]
    });

    await alert.present();
  }
  ionViewWillEnter(){
  this.pegarBoletos();
  
  }
pegarBoletos(){
  this.dados =[];
  return new Promise(resolve =>{
    let dados ={
     requisicao : 'pegarTodosOsPdf',
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.dados.push(cliente);
      }
    
        });
      });
      }
    
}

