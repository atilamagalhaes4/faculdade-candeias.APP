import { PostProvider } from './../../../providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exibirpeditar',
  templateUrl: './exibirpeditar.page.html',
  styleUrls: ['./exibirpeditar.page.scss'],
})
export class ExibirpeditarPage implements OnInit {

  id: any ="";
  nomeMateria: any ="";
  nomeProfessor:any ="";
  turma: any ="";
  professores: any =[];
  opc: any ="";
  curso: any = "";
  verificacao:string ="editar";

  constructor(private actRoute: ActivatedRoute, private provider: PostProvider, private route: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nomeMateria = data.nomeMateria;
      this.nomeProfessor = data.nomeProfessor;
      this.turma = data.turma;
      this.opc = data.editar;
      this.curso = data.curso;
      console.log(data);
    });
    this.buscar();
  }

  buscar(){
    return new Promise(resolve =>{
    let dados = {
      requisicao: "todosProfessores",
      tipo: 'professor'
      }
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      
        for( let cliente of data['result']){
          this.professores.push(cliente);
        }
        resolve(true);
      });
        });
  }
  goBack(){
    this.route.navigate(['/editarmaterias']);
  }

  salvarMateria(){

    return new Promise(resolve =>{
      let dados = {
        requisicao: "UpdateDasMaterias",
        nomeMateria: this.nomeMateria,
        nomeProfessor: this.nomeProfessor,
        turma: this.turma,
        id: this.id
        }
        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        
          resolve(true);
          this.route.navigate(['/editarmaterias']);

        });
          });
  }
}
