import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { Component, OnInit, Provider } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adcionarmaterias',
  templateUrl: './adcionarmaterias.page.html',
  styleUrls: ['./adcionarmaterias.page.scss'],
})
export class AdcionarmateriasPage implements OnInit {

  constructor(private provider: PostProvider, public alertController: AlertController, private route: Router) { }
  professores: any = [];
  prof: string ="";
  materia: string ="";
  turma: string ="";
  retorno: string ="";
  nada: string ="";
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.professores= [];
    this.prof="";
    this.materia="";
    this.turma="";
  
    this.buscar();
    this.inicial();
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
criar(){ 

  if(this.turma == ""|| this.materia == "" || this.prof ==""|| this.retorno == ""){
    this.aviso();
  }else{
  return new Promise(resolve =>{
    let dados = {
      requisicao: "addMateria",
      turma: this.turma,
      materia: this.materia,
      professor: this.prof,
      curso: this.retorno
      }
      this.provider.acessarBanco(dados, 'sobrePessoas.php');
        this.salvo();
        this.professores= [];
        this.prof="";
        this.materia="";
        this.turma="";
        this.retorno ="";
        this.route.navigate(['/adcionarmaterias']);
        });
      }
}
async inicial() {
  const alert = await this.alertController.create({
    cssClass:  "primary",
    message: 'Antes de adcionar qualquer materia tenha em mente se a turma existe ou não para nao termos duas turmas com o mesmo nome.',
    buttons: ['OK']
  });

  await alert.present();
}
async salvo() {
  const alert = await this.alertController.create({
    cssClass:  "primary",
    message: 'Salvo',
    buttons: ['OK']
  });

  await alert.present();
}
async aviso() {
  const alert = await this.alertController.create({
    cssClass:  "primary",
    message: 'Preencha todos os campos.',
    buttons: ['OK']
  });

  await alert.present();
}
}
