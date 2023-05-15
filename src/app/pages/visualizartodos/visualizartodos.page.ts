import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizartodos',
  templateUrl: './visualizartodos.page.html',
  styleUrls: ['./visualizartodos.page.scss'],
})
export class VisualizartodosPage implements OnInit {

  nome: any = "";
  nMatricula: any = "";
  rg: any = "";
  id: any = "";
  cpf: any ="";
  senha: any = "";
  tipo: any = "";
  email: any = "";
  telefone: any ="";
  curso: any ="";
  constructor(private actRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.nMatricula = data.nMatricula;
      this.rg = data.rg;
      this.cpf = data.cpf;
      this.senha = data.senha;
      this.tipo = data.tipo;
      this.email = data.email;
      this.telefone = data.telefone;
      this.curso = data.curso;
      console.log(data);
    });

  }


}
