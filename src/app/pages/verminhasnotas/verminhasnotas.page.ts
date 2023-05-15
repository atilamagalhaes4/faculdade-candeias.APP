import { ContaPage } from './../conta/conta.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-provider';

@Component({
  selector: 'app-verminhasnotas',
  templateUrl: './verminhasnotas.page.html',
  styleUrls: ['./verminhasnotas.page.scss'],
})
export class VerminhasnotasPage implements OnInit {
  
  constructor(private actRoute: ActivatedRoute,
    private alertController : AlertController,
    private provider: PostProvider,
    private route: Router,
    private conta: ContaPage
     ) { }

 materia: any ="";
 nome: any ="";
 dadosLogin: any =[];
 nota1: any ="0";
 nota2: any ="0";
 nota3: any ="0";
 nota4: any ="0";
 media:number =0;
 curso :any ="";
 ajuda: any =0;
 pessoa: any =[];
 alunoCadastrado: boolean = false;
 idAluno: any ="";
 turma: any ="";
 matricula: any ="";
 dados: any =[];
 email: any ="";

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.actRoute.params.subscribe((data:any)=>{
      this.materia = data.retorno1;
      this.turma = data.retorno2;
    });
    /*
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.email = this.dadosLogin.email;
      this.nome = this.dadosLogin.nome;
      this.curso = this.dadosLogin.curso;
      this.matricula = this.dadosLogin.nMatricula;
      this.soccorroNotas(this.curso, this.nome);

      });*/


    console.log('materia = '+this.materia);
  }

  voltar(){
    this.route.navigate(['/paranota']);
  }


soccorroNotas(curso, nome){

  var aux ="";

  if(curso == "administracao") aux= "NotasAgoraAdministracao";
  if(curso == "enfermagem") aux=  "NotasAgoraEnfermagem";
  if(curso == "pedagogia") aux=  "NotasAgoraPedagogia";


  var tam: number =0;
     new Promise(resolve =>{
    let dados ={
     requisicao : aux,
     materia: this.materia,
     turma: this.turma,
     aluno: nome
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.dados.push(cliente);
      }
      this.nota1 = this.dados[0].nota1;
      this.nota2 = this.dados[0].nota2;
      this.nota3 = this.dados[0].nota3;
      this.nota4 = this.dados[0].nota4;
      this.media = this.dados[0].media;
//      this.carregaRapido();
      resolve(true);
    });
      }); 
//      this.verNotas(aux, this.turma, this.nome, this.materia);

}

}
