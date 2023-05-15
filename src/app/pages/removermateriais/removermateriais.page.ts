import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-provider';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removermateriais',
  templateUrl: './removermateriais.page.html',
  styleUrls: ['./removermateriais.page.scss'],
})
export class RemovermateriaisPage implements OnInit {


  materiais: any =[];
  retorno1: any = "";
  frequenciaGeral =[];
  nome: any ="";
  turmas: any =[];
  dadosLogin: any =[];
  curso: any ="";
  email: any ="";
  constructor(
    private provider: PostProvider,
    private alertController: AlertController,
    private route: Router,
    ) { }
    
  ngOnInit() {
  }

  doRefresh(event) { // dar refresh puxando pra cima
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 1000);
  }

  ionViewWillEnter(){
/*    this.storage.getItem('session_storage').then((res)=>{
    this.dadosLogin = res;
    this.nome = this.dadosLogin.nome;
    this.buscarMateriais(this.nome);
  });*/
  }


  buscarMateriais( nome){
    this.materiais =[];
    this.turmas =[];
    var tam=0;

    return new Promise(resolve =>{
    let dados ={
     requisicao : 'pegarAllMateriais2',
     nome: nome
    };

    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.materiais.push(cliente);
        tam++;
      }
      for(var i=0;i<tam;i++){
        this.AlterarData(this.materiais[i].data+'', i);
      }
  
        });
      });
    }
    async apagar(id) {
      const alert = await this.alertController.create({
//        header: 'Confirm!',
        message: 'Tem certeza que deseja apagar?<br> Após a exclusão não será possivel trazer de volta.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Apagar',
            handler: () => {
              let dados ={
                requisicao : 'apagarMaterialVuh',
                id: id
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
  

    AlterarData(data: string, pos){
      var aux ="";
      aux= aux+data[8];
      aux= aux+data[9];
      aux= aux+data[7];
      aux= aux+data[5];
      aux= aux+data[6];
      aux= aux+data[4];
      aux= aux+data[0];
      aux= aux+data[1];
      aux= aux+data[2];
      aux= aux+data[3];
      this.materiais[pos].data = aux;
    return true;
    }
    
}
