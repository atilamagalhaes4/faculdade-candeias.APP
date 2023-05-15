import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.page.html',
  styleUrls: ['./recuperarsenha.page.scss'],
})
export class RecuperarsenhaPage implements OnInit {

  constructor(private provider: PostProvider, private route: Router, private alertController: AlertController) { }

  cpf: string ="";
  rg: string = "";
  email: string = "";
  dados: any = [];
  ngOnInit() {
  }
  procurar(){
    var saber = false;
    if(this.email==""||this.rg == ""|| this.cpf=="") this.mandarPreencher();
    var tam=0;
    return new Promise(resolve =>{
      let dados ={
       requisicao: 'recuperarDados',
       email: this.email
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
      
        for( let cliente of data['result']){
          this.dados.push(cliente);
          tam++;
        }
        for(var i=0;i<tam;i++){

          if(this.dados[i].email == this.email && this.dados[i].rg ==this.rg && this.dados[i].cpf == this.cpf){
            console.log('curso = '+this.dados[i].curso);
            saber = true;
            this.route.navigate(['/visualizartodos/'+this.dados[i].id+'/'+this.dados[i].nome+'/'+this.dados[i].cpf+'/'+this.dados[i].rg+'/'+this.dados[i].telefone+'/'+this.dados[i].nMatricula+'/'+this.dados[i].email+'/'+this.dados[i].tipo+'/'+this.dados[i].senha+'/'+this.dados[i].curso]);
            break;  
          }
   
        }
        if(saber == false){
          this.naoTem();
        }

        resolve(true);
      });
        });
      
      }
      async mandarPreencher() {
        const alert = await this.alertController.create({
          cssClass:  'primary',
          message: 'Preencha todos os campos.',
          buttons: ['OK']
        });
    
        await alert.present();
      }

      async naoTem() {
        const alert = await this.alertController.create({
          cssClass:  'primary',
          message: 'Nenhuma conta com esses dados.',
          buttons: ['OK']
        });
    
        await alert.present();
      }

  }

