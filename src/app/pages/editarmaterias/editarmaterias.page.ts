import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-provider';

@Component({
  selector: 'app-editarmaterias',
  templateUrl: './editarmaterias.page.html',
  styleUrls: ['./editarmaterias.page.scss'],
})
export class EditarmateriasPage implements OnInit {

  professores:any =[];
  pesquisar: string = "";


  constructor( private provider: PostProvider, private route: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.carregar();
  }

  carregar(){
    console.log('carregando ...');
      return new Promise(resolve =>{
      let dados ={
       requisicao: 'pegarTodosProf',

      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        this.professores =[];
        for( let cliente of data['result']){
          this.professores.push(cliente);
        }
        resolve(true);
      });
        });
      }

      visualizar(id, nomeMateria, nomeProfessor, turma, curso){
        this.route.navigate(['/exibirpeditar/'+id+'/'+nomeMateria+'/'+nomeProfessor+'/'+turma+'/visualizar'+'/'+curso]);
      }

      chamarEditar(id, nomeMateria, nomeProfessor, turma, curso){
        this.route.navigate(['/exibirpeditar/'+id+'/'+nomeMateria+'/'+nomeProfessor+'/'+turma+'/editar'+'/'+curso]);
      }


      buscar(){
        console.log('digitado =' +this.pesquisar);
        return new Promise(resolve =>{
        let dados ={
         requisicao : 'buscarNomeProf',
         nome: this.pesquisar
        };
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          this.professores =[];
          for( let cliente of data['result']){
            this.professores.push(cliente);
          }
          resolve(true);
        });
          });
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
                    requisicao : 'excluirMateria',
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
}
