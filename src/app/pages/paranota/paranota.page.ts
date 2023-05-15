import { ContaPage } from './../conta/conta.page';
import { AlertController } from '@ionic/angular';
import { PostProvider } from './../../../providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paranota',
  templateUrl: './paranota.page.html',
  styleUrls: ['./paranota.page.scss'],
})
export class ParanotaPage implements OnInit {

  retorno1: any =null;
  retorno2: any =null;
  disciplina: any =[];
  turmas: any =[];
  nome: any="";
  nomeProfessor: any ="";
  nMatricula: any ="";
  curso: any ="";
  matricula: any ="";
  dadosLogin: any =[];
  email: any ="";
  constructor(private actRoute: ActivatedRoute,
     private provider: PostProvider,
      private alertController: AlertController,
      private route: Router,
      private conta: ContaPage
      ) { }
  ionViewWillEnter(){/*
    this.storage.getItem('session_storage').then((res)=>{
//      this.dadosLogin = res;
      this.email = res.email;
      this.nome = res.nome;
      this.curso = res.curso;
      this.matricula = res.nMatricula;
      this.carregar(this.matricula, this.nome, this.curso);

    });*/
    this.turmas =[];
    this.disciplina =[];
      this.retorno1 =null;
      this.retorno1 =null;
    }

  ngOnInit() {
  }
  pegarTurma(){

    var aux ="";

      if(this.curso == "administracao") aux= "VerTurmaAdministracao";
      if(this.curso == "enfermagem") aux=  "VerTurmaEnfermagem";
      if(this.curso == "pedagogia") aux=  "VerTurmaPedagogia";
  

      var tam: number =0;
         new Promise(resolve =>{
        let dados ={
         requisicao : aux,
         materia: this.retorno1,
         aluno: this.nome
        };
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          for( let cliente of data['result']){
            this.turmas.push(cliente);
          }
  
          resolve(true);
        });
          }); 
    
  }



  ver(){

    if(this.retorno1 == null || this.retorno2 == null){
      this.presentAlert();
    }else {
      this.route.navigate(['/verminhasnotas/'+this.retorno1+'/'+this.retorno2]);
    }

  }


  carregar(minhaMatricula, meuNome, meuCurso){

    var aux ="";

    this.curso = meuCurso;
      if(this.curso == "administracao") aux= "VerNotaAdministracao";
      if(this.curso == "enfermagem") aux=  "VerNotaEnfermagem";
      if(this.curso == "pedagogia") aux=  "VerNotaPedagogia";


      var tam: number =0;
         new Promise(resolve =>{
        let dados ={
         requisicao : aux,
         matricula: minhaMatricula,
        };
        this.nome = meuNome;
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          for( let cliente of data['result']){
            this.disciplina.push(cliente);
          }
  
          resolve(true);
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
}
