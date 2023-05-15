import { AlertController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-provider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { stringify } from 'querystring';

@Component({
  selector: 'app-editarpessoas',
  templateUrl: './editarpessoas.page.html',
  styleUrls: ['./editarpessoas.page.scss'],
})
export class EditarpessoasPage implements OnInit {
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
  selecionado: string= "";

  constructor(private alertController: AlertController ,private actRoute: ActivatedRoute, private route: Router, private proviver: PostProvider) { }

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
      this.selecionado = data.tipo;
      console.log(data);
    });
  }

  salvarDados(){ 

    var correcao = this.curso.toLowerCase();
    correcao = this.retira_acentos(correcao);
    this.curso = correcao;
    console.log('this.curso tem ='+this.curso);    


    console.log('apertado = '+this.selecionado);

    
      return new Promise(resolve =>{
  let dados ={
     requisicao : 'editar',
     nome: this.nome,
      nMatricula: this.nMatricula,
      rg: this.rg,
      cpf: this.cpf,
      email: this.email,
      telefone: this.telefone,
      senha: this.senha,
      tipo: this.selecionado,
      id: this.id,
      curso: this.curso
  };
  this.proviver.acessarBanco(dados, 'sobrePessoas.php');
   this.presentAlert();
    this.route.navigate(['/pessoas']);
    console.log('ok');
      });
  
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'secondary',
     // header: 'Alerta',
      message: 'Salvo !!!',
      buttons: [{
      cssClass: 'primary',
        text: 'OK'
      }]
    });

    await alert.present();
  }
  cancelar(){
this.route.navigate(['/pessoas']);
  }

  retira_acentos(palavra) {
    var com_acento = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
    var sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
    var nova='';
    for(var i=0;i<palavra.length;i++) {
    if (com_acento.search(palavra.substr(i,1))>=0) {
    nova+=sem_acento.substr(com_acento.search(palavra.substr(i,1)),1);
    }
    else {
    nova+=palavra.substr(i,1);
    }
    }
    return nova;
    }

}