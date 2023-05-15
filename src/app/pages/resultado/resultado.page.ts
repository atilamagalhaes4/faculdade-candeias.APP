import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-provider';
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {


  id: any = "";
  dados: any =[];
  ajuda: Number =0;
  materia: any ="";
  titulo: any ="";
  turma: any= "";
  corpoMensagem: any ="";
  professor:any ="";
  anexo: any;
  data: any ="";
  endereco1: string = "";
  endereco2: string ="";
  endereco3: string ="" ;
  aux: any ="";


  constructor(private actRoute: ActivatedRoute,
    private provider: PostProvider,
//    private iab: InAppBrowser
     ) { }
    

     openBrowser(url: any){

//         this.iab.create(url);
     }

  ngOnInit(){

  }

  ionViewWillEnter(){
    this.actRoute.params.subscribe((data:any)=>{
      this.id = data.id;
      console.log('em resultados id = '+this.id);
      this.carregarOpcao(data.id);
  
    });
  
  }

  carregarOpcao(id: any){
console.log('id dentro de pegar =' +id);


    return new Promise(resolve =>{
      let dados ={
       requisicao : 'pegarSelecionado',
       id: id
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        for( let cliente of data['result']){
          this.dados.push(cliente);
          console.log('entrei no for');
        }

        this.materia = this.dados[0].materia;
        this.titulo = this.dados[0].titulo;
        this.turma = this.dados[0].turma;
        this.corpoMensagem = this.dados[0].corpoMensagem;
        this.professor = this.dados[0].professor;
        this.endereco1 = this.dados[0].endereco1;
        this.endereco2 = this.dados[0].endereco2;
        this.endereco3 = this.dados[0].endereco3;
        this.data = this.dados[0].data;
        this.data =this.AlterarData(this.data);
        console.log('data = '+this.data);

          });
        });
  }

AlterarData(data: string){
  this.ajuda = this.dados[0].endereco3.length;
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
  console.log(this.endereco3);
return aux;
}
}
