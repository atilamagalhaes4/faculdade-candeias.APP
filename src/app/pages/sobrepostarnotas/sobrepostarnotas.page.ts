import { ContaPage } from './../conta/conta.page';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobrepostarnotas',
  templateUrl: './sobrepostarnotas.page.html',
  styleUrls: ['./sobrepostarnotas.page.scss'],
})
export class SobrepostarnotasPage implements OnInit {

  disciplina: any =[];
  retorno1: any = null;
  retorno2: any =null;
  nome: any ="";
  turmas: any =[];
  retorno3: any ="";
  datas: any =[];
  email: any ="";
  dadosLogin: any =[];

  constructor(
    private provider: PostProvider,
    private alertController: AlertController,
    private route: Router,
    private conta: ContaPage
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    /*
    this.storage.getItem('session_storage').then((res)=>{
    this.dadosLogin = res;
    this.email = this.dadosLogin.email;
    this.nome = this.dadosLogin.nome;
    this.buscarMinhasMaterias(this.nome);
  });*/

    this.retorno1 =null;
    this.retorno2 =null;

  }


    buscarMinhasMaterias(meuNome){
      this.disciplina =[];
      this.turmas =[];
      return new Promise(resolve =>{
      let dados ={
       requisicao : 'listarMaterias',
       professor: meuNome
      };
      this.nome = meuNome;
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        for( let cliente of data['result']){
          this.disciplina.push(cliente);
        }
    
    
          });
        });
      }
      pegarTurma(){
        this.turmas =[];
        return new Promise(resolve =>{
        let dados ={
         requisicao : 'verTalTurma',
         materia: this.retorno1,
         professor: this.nome
        };
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          for( let cliente of data['result']){
            this.turmas.push(cliente);
          }
      
      
            });
          });
      }
      async presentAlert() {
        const alert = await this.alertController.create({
          cssClass: 'secondary',
         // header: 'Alerta',
          message: 'Entre com todos os dados.',
          buttons: [{
          cssClass: 'primary',
            text: 'OK'
          }]
        });
    
        await alert.present();
      }
      
      criarNotas(){
        if(this.retorno1 ==null|| this.retorno2 ==null){
          this.presentAlert();
        }else   this.route.navigate(['/publicarnota/'+this.retorno1+'/'+this.retorno2]);
      }
  }
