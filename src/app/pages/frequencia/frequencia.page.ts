import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-provider';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
})
export class FrequenciaPage implements OnInit {

  disciplina: any =[];
  retorno1: any = "";
  frequenciaGeral: any =[];
  nome: any ="";
  turmas: any =[];
  dadosLogin: any =[];
  curso: any ="";
  email: any ="";
  constructor(
    private provider: PostProvider,
    private alertController: AlertController,
    private route: Router,
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
/*    this.storage.getItem('session_storage').then((res)=>{
    this.dadosLogin = res;
    this.nome = this.dadosLogin.nome;
    this.curso = this.dadosLogin.curso;
    this.email = this.dadosLogin.email;
    this.buscarMinhasMaterias(this.email,this.curso, this.nome);
  });*/

  this.frequenciaGeral =[];
    this.retorno1 ="";
  }


    buscarMinhasMaterias(email, curso, nome){
      this.disciplina =[];
      this.turmas =[];
      this.curso = curso;
      this.email = email;

      this.nome = nome;
      console.log('email = ' +this.email);
      return new Promise(resolve =>{
      let dados ={
       requisicao : 'pegarMinhasMaterias24',
       email: email
      };

      this.curso = curso;
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        for( let cliente of data['result']){
          this.disciplina.push(cliente);
        }
    
          });
        });
      }
      
      async presentAlert() {
        const alert = await this.alertController.create({
          cssClass: 'secondary',
         // header: 'Alerta',
          message: 'Entre com o nome da disciplína.',
          buttons: [{
          cssClass: 'primary',
            text: 'OK'
          }]
        });
    
        await alert.present();
      }

      verificar(){
        var aux ="";

        if(this.curso =="administracao"){
          aux ="frequenciaAdm";
        }
        if(this.curso =="pedagogia"){
          aux ="frequenciaPedagogia2";
          
        }
        if(this.curso =="enfermagem"){
          aux ="frequenciaEnfermagem2";
        }

        if(this.retorno1 ==""){
          this.presentAlert();
        }else{
          var i=0, tam=0;
        let dados ={
         requisicao : aux,
         materia: this.retorno1,
         aluno: this.nome
        };
        console.log('aux = ' +aux);
        console.log('materia = ' +this.retorno1);
        console.log('matricula = ' +this.nome);


        this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
          for( let cliente of data['result']){
            this.frequenciaGeral.push(cliente);
            tam++;
          }
          for(var j=0; j<tam;j++){
            if(this.frequenciaGeral[j].situacao =="ausente"){
              i++;
            }
          }


          this.resultado(tam,i);
          
          });

        }
  
      }
      async teste(veio) {
        const alert = await this.alertController.create({
          cssClass: 'secondary',
         // header: 'Alerta',
          message: 'tam = '+veio,
          buttons: [{
          cssClass: 'primary',
            text: 'OK'
          }]
        });
    
        await alert.present();
      }


      async resultado(total, faltas) {
        const alert = await this.alertController.create({
          cssClass: 'secondary',
         // header: 'Alerta',
          message: '<b>Disciplína:</b> '+this.retorno1+'.<br> <b>Faltas:</b> '+faltas+'.<br> <b>Total de chamadas:</b> '+total,
          buttons: [{
          cssClass: 'primary',
            text: 'OK'
          }]
        });
    
        await alert.present();
      }

}
