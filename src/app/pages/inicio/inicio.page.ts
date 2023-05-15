import { ContaPage } from './../conta/conta.page';
import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-provider';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  Verificacao = "Direcao";
  pegarBusca: any = [];
  dadosLogin: any = [];
  email: string ="";
  senha: string = "";
  tipo: any ="";
  assuntos:any =[];
  nome: string = "";
  Minhasdisciplinas: any=[];
  usuarioLogado: boolean = false;
  tam: number = 0;
  pesquisar: string = "";
  dadosIniciais: any =[];
  limit: number =10;
  start: number =0;
  aux: any =[];

  constructor(
    private alertController: AlertController,
    private route: Router,
    private provider: PostProvider,
    private conta : ContaPage
  ) { }

  ngOnInit() {
  }

ionViewWillEnter(){
  this.assuntos = [];
this.Minhasdisciplinas = [];
this.pegardaDirecaoInicial();

/*this.storage.getItem('session_storage').then((res)=>{
this.dadosLogin = res;
this.email = this.dadosLogin.email;
this.nome = this.dadosLogin.nome;
this.assuntos = this.aux;
this.usuarioLogado = true;
if(this.dadosLogin.tipo =="administrador"){
  //this.presentAlert('administrador');
  this.dadosAdministrador(this.tipo);
}
else if(this.dadosLogin.tipo =="professor"){
  //this.presentAlert('professor');
  this.profMateriais(this.nome,this.tipo);
//  this.pegardaDirecao();
}
else if(this.dadosLogin.tipo =="aluno"){
//  this.presentAlert('aluno');
  this.buscarMinhasMaterias(this.email, this.tipo);
  this.pegardaDirecao();
}
});*/
this.ordenarMaterias();

}

ordenarMaterias(){

  this.assuntos.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

}

  profMateriais(nome, Veiotipo){
    console.log('tipo antes = '+Veiotipo);
    this.tipo = Veiotipo;
    console.log('tipo depois = '+this.tipo);
    this.assuntos =[];
    return new Promise(resolve =>{
      let dados ={
       requisicao : 'materiaDosProfessores',
       professor: nome
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        for( let cliente of data['result']){
          this.assuntos.push(cliente);
          console.log('pegou direcao');
        }
  
    
          });
        });
}

pegardaDirecao(){
  return new Promise(resolve =>{
    let dados ={
     requisicao : 'pegarDirecao',
     nomeMateria: 'Direcao'
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.assuntos.push(cliente);
        console.log('pegou direcao');
      }

  
        });
      });

}

pegardaDirecaoInicial(){
  this.dadosIniciais =[];
  return new Promise(resolve =>{
    let dados ={
     requisicao : 'pegarDirecao',
     nomeMateria: 'Direcao'
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.dadosIniciais.push(cliente);
        console.log('pegou direcao');
      }

  
        });
      });

}

dadosAdministrador(tipoAdm){

  console.log('antes = '+tipoAdm);
  this.tipo = tipoAdm;
  console.log('depois = '+this.tipo);
  return new Promise(resolve =>{
    this.assuntos =[];
    let dados ={
     requisicao : 'pegarTodosMateriais',
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
        this.assuntos.push(cliente);

      }

        });
      });

}

loadData(event) { // carrega mais dados
  console.log('entrei pra tentar carregar');
    this.start += this.limit;

    setTimeout(() => {
      this.ionViewWillEnter();

    }, 1000);

}

doRefresh(event) { // dar refresh puxando pra cima
  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 1000);
}
testando(){
  this.route.navigate(['/adcionarpagamento']);
}

buscarMinhasMaterias(talEmail, qualTipo){
  this.assuntos =[];
  var tam=0;
  console.log('tipo antes ='+qualTipo);
  this.tipo = qualTipo;
  console.log('tipo depois ='+this.tipo);
  return new Promise(resolve =>{
  let dados ={
   requisicao : 'minhasMaterias2',
   email: talEmail
  };
  this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
    for( let cliente of data['result']){
      this.Minhasdisciplinas.push(cliente);
      tam++;
    }
    this.tam = tam;
    console.log('ainda dentro de minhas materias tam ='+tam);
    console.log('tam geral ='+ tam);
    this.MostrarMateriais(tam);

      });
    });
  }

  MostrarMateriais(tam: any){
    this.tam = tam;
    console.log(' entrou em pegar materiais tam:' +tam);
    
    for(var _i=0; _i<tam;_i++){ // fazer um for para cada numero de matérias
    
       new Promise(resolve =>{
      let dados ={
       requisicao : 'meusMateriais',
       materia: this.Minhasdisciplinas[_i].nomeMateria,
       turma: this.Minhasdisciplinas[_i].turma
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        for( let cliente of data['result']){
        this.assuntos.push(cliente);
        }
        resolve(true);
      });
        });
      }
  }
  verDados(materia, id, professor, turma, titulo, corpoMensagem, data){
      this.route.navigate(['/resultado/'+id]);
  }
  buscar(){ // aquele seachbar 
    console.log('tamanho geral =' +this.tam);
    var qtd =0;
    this.assuntos =[];


    if(this.pesquisar == ""){
      console.log('ta zerado');
      this.ionViewWillEnter();
      return;
    }else{ // se o usuario digitar algo entra aqui pra pesquisar
    if(this.tipo =="aluno"){
      console.log('antes de procurar vc digitou = '+this.pesquisar);
    this.pegarBusca =[];
    return new Promise(resolve =>{
    let dados ={
     requisicao : 'buscarMateria',
     nome: this.pesquisar
    };
    this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      for( let cliente of data['result']){
          this.pegarBusca.push(cliente);
        qtd++;
        }
        var l=0;
        for( var t =0; t<qtd;t++){
          for( var n =0; n<this.tam;n++){
          if(this.pegarBusca[t].turma == this.Minhasdisciplinas[n].turma &&this.pegarBusca[t].materia == this.Minhasdisciplinas[n].nomeMateria ||this.pegarBusca[t].materia == 'Direcao'){
            this.assuntos[l] = this.pegarBusca[t];
            console.log('dados ='+this.assuntos[0]);
            l++;
          }
      
        }
      }
      resolve(true);
    });
      });
    } // agora outro if para administrador
    if(this.tipo == "administrador"){
      this.assuntos =[];
      return new Promise(resolve =>{
        let dados ={
         requisicao : 'buscarMateriaComoAdm',
         nome: this.pesquisar
        };
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          for( let cliente of data['result']){
              this.pegarBusca.push(cliente);
            }

          resolve(true);
        });
          });
    } //agora procurar como professor
    if(this.tipo == "professor"){
      this.assuntos =[];
      return new Promise(resolve =>{
        let dados ={
         requisicao : 'buscarMateriaComoProf',
         pesquisa: this.pesquisar,
         professor: this.nome
        };
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          for( let cliente of data['result']){
              this.pegarBusca.push(cliente);
            }

          resolve(true);
        });
          });
    }


    }
  }

}
