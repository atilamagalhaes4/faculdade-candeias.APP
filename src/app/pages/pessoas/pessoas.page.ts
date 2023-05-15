import { AlertController } from '@ionic/angular';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
})
export class PessoasPage implements OnInit {

  alunos: any =[];
  limit: number =10;
  start: number =0;
  pesquisar: string = "";
  nome: any = "";
  nMatricula: any = "";
  rg: any = "";
  id: any = "";
  cpf: any ="";
  senha: any = "";
  tipo: any = "";
  email: any = "";
  telefone: any ="";
  constructor(private router: Router, private provider: PostProvider,private alertCtrl: AlertController) { }

ionViewWillEnter(){
  this.start =0;
this.alunos =[];
  this.carregar();
}

  ngOnInit() {
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 1000);
  }



  chamarEditar(id, nome, cpf, rg, telefone, nMatricula, email, tipo, senha, curso){
    this.router.navigate(['/editarpessoas/'+id+'/'+nome+'/'+cpf+'/'+rg+'/'+telefone+'/'+nMatricula+'/'+email+'/'+tipo+'/'+senha+'/'+curso]);
  
  }


  visualizar(id, nome, cpf, rg, telefone, nMatricula, email, tipo, senha, curso){
    console.log('entrou aqui');
    this.router.navigate(['/visualizartodos/'+id+'/'+nome+'/'+cpf+'/'+rg+'/'+telefone+'/'+nMatricula+'/'+email+'/'+tipo+'/'+senha+'/'+curso]);
  }


  async  presentConfirm(id) { // metodo excluir
    let alert = this.alertCtrl.create({
      cssClass: 'secondary',
      message: 'Tem certeza que você quer apagar esse usuario ?',
      buttons: [
        {
          text: 'Nao',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            let dados ={
              requisicao : 'excluir',
              id: id,
             };
             this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
              this.ionViewWillEnter();
            });
          }
        }
      ]
    });
    (await alert).present();
  }
  
  buscar(){
      return new Promise(resolve =>{
      let dados ={
       requisicao : 'buscarNome',
       nome: this.pesquisar
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        this.alunos =[];
        for( let cliente of data['result']){
          this.alunos.push(cliente);
        }
        resolve(true);
      });
        });
      }
  

      carregar(){
      console.log('carregando ...');
        return new Promise(resolve =>{
        let dados ={
         requisicao: 'Pegar'
        };
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          for( let cliente of data['result']){
            this.alunos.push(cliente);
          }
          resolve(true);
        });
          });
        }
  
}
