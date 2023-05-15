import { AlertController } from '@ionic/angular';
import { ContaPage } from './../conta/conta.page';
import { PostProvider } from './../../../providers/post-provider';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarpresenca',
  templateUrl: './editarpresenca.page.html',
  styleUrls: ['./editarpresenca.page.scss'],
})
export class EditarpresencaPage implements OnInit {

  materia: any ="";
  turma: any ="";
  data: any="";
  alunos: any = [];
  curso: any ="";
  nome: any =""
  dadosLogin: any =[];
  email: any ="";
  constructor(
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private alertController: AlertController
     ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
/*    this.storage.getItem('session_storage').then((res)=>{
    this.dadosLogin = res;
    this.email = this.dadosLogin.email;
    this.nome = this.dadosLogin.nome;
    this.curso = this.dadosLogin.curso;
    });*/
    this.actRoute.params.subscribe((data:any)=>{
      this.materia = data.disciplina;
      this.turma = data.turma;
      this.data = data.data;
    });
    this.alunos =[];
    this.arrumarData(this.data);
    this.CarregarAlunos();
    }

    arrumarData(data){
      //dd-mm-yyyy // yyyy-mm-dd
      var ano = data[0]+data[1]+data[2]+data[3];
      var mes = data[5]+data[6];
      var dia =  data[8]+data[9];
      this.data =dia+'-'+mes+'-'+ano;
    }

    presente(id,materia,aluno,matricula,professor,turma,situacao,data){
      this.alunos =[];
      var aux ="";

      if(this.curso == "administracao") aux= "PresencaAdministracao";
      if(this.curso == "enfermagem") aux=  "PresencaEnfermagem";
      if(this.curso == "pedagogia") aux=  "PresencaPedagogia";
      this.alunos =[];
      return new Promise(resolve =>{
      let dados ={
       requisicao : aux,
       situacao: 'presente',
       id: id,
       materia: materia,
       aluno: aluno,
       matricula: matricula,
       professor: professor,
       turma: turma,
       data: data
      };
      this.provider.acessarBanco(dados, 'sobrePessoas.php');
      this.alunos =[];
      this.ionViewWillEnter();
      this.salvoSucesso();

        });
    }
    doRefresh(event) { // dar refresh puxando pra cima
      setTimeout(() => {
        this.alunos =[];
        this.ionViewWillEnter();
        event.target.complete();
      }, 1000);
    }
    
    ausente(id,materia,aluno,matricula,professor,turma,situacao,data){
      var aux ="";
      this.alunos =[];
      if(this.curso == "administracao") aux= "AusenciafrequenciaAdministracao";
      if(this.curso == "enfermagem") aux=  "AusenciafrequenciaEnfermagem";
      if(this.curso == "pedagogia") aux=  "AusenciafrequenciaPedagogia";
      console.log('aux ='+aux);

      this.alunos =[];
      return new Promise(resolve =>{
      let dados ={
       requisicao : aux,
       situacao: 'ausente',
       id: id,
       materia: materia,
       aluno: aluno,
       matricula: matricula,
       professor: professor,
       turma: turma,
       data: data
      };
      this.provider.acessarBanco(dados, 'sobrePessoas.php');
      this.alunos =[];
      this.ionViewWillEnter();
      this.salvoSucesso();
    
          });
    }
    CarregarAlunos(){
      var aux ="";
      if(this.curso == "administracao") aux= "deEditarfrequenciaAdministracao";
      if(this.curso == "enfermagem") aux=  "deEditarfrequenciaEnfermagem";
      if(this.curso == "pedagogia") aux=  "deEditarfrequenciaPedagogia";
  
      return new Promise(resolve =>{
      let dados ={
       requisicao : aux,
       materia: this.materia,
       turma: this.turma,
      data: this.data
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        for( let cliente of data['result']){
          this.alunos.push(cliente);
        }
    
          });
        });
    }
    excluir(id){
      var aux ="";

      if(this.curso == "administracao") aux= "deletarfrequenciaAdministracao";
      if(this.curso == "enfermagem") aux=  "deletarfrequenciaEnfermagem";
      if(this.curso == "pedagogia") aux=  "deletarfrequenciaPedagogia";
  
      return new Promise(resolve =>{
      let dados ={
       requisicao : aux,
      id: id
      };
      this.provider.acessarBanco(dados, 'sobrePessoas.php');
      this.alunos =[];
      this.ionViewWillEnter();  
        });

    }

    async salvoSucesso() {
      const alert = await this.alertController.create({
        cssClass:  'primary',
        message: 'Salvo !!!',
        buttons: ['OK']
      });
    
      await alert.present();
    }
    
}
