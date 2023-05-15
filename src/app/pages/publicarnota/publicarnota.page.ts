import { ContaPage } from './../conta/conta.page';
import { PostProvider } from 'src/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicarnota',
  templateUrl: './publicarnota.page.html',
  styleUrls: ['./publicarnota.page.scss'],
})
export class PublicarnotaPage implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private route: Router,
    private conta: ContaPage
    ) { }

  dadosLogin: any =[];
  materia: any ="";
  turma: any ="";
  alunos: any =[];
  curso: any ="";
  email: any ="";
  nMatricula: any =[];
  nome: any ="";
  ngOnInit() {
  }

  ionViewWillEnter(){
    /*
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.email = this.dadosLogin.email;
      this.nome = this.dadosLogin.nome;
      this.curso = this.dadosLogin.curso;
      this.nMatricula = this.dadosLogin.nMatricula;
      });*/

    this.actRoute.params.subscribe((data:any)=>{
      this.materia = data.retorno1;
      this.turma = data.retorno2;
    });
    
    this.todosOsAlunos();
    this.alunos =[];
};



postarNotas(nomeMateria,nomealuno,id,turma,nomeProfessor,email,situacao, nMatricula){

  this.route.navigate(['/criarnotas/'+nomeMateria+'/'+nomealuno+'/'+nomeProfessor+'/'+nMatricula+'/'+turma]);

}

todosOsAlunos(){
  return new Promise(resolve =>{
    let dados ={
     requisicao : 'alunosSerelepe',
     turma: this.turma,
     materia: this.materia
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.alunos.push(cliente);
        console.log('entrei no for');
      }


        });
      });
}
doRefresh(event) {
  setTimeout(() => {
    this.alunos =[];
    this.ionViewWillEnter();
    event.target.complete();
  }, 1000);
}

}
