import { PostProvider } from 'src/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
*/
@Component({
  selector: 'app-pagarpdf',
  templateUrl: './pagarpdf.page.html',
  styleUrls: ['./pagarpdf.page.scss'],
})
export class PagarpdfPage implements OnInit {

  dadosLogin: any =[];
  email: any ="";
  nome: any ="";
  matricula: any ="";
  contas: any =[];
  qtdBoleto: any =0;
  aux: boolean =false;


  constructor(
    private provider: PostProvider,
    private file: File,
    private plataform: Platform,
    private route: Router,
    /*
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private document: DocumentViewer,
    private fileOpener: FileOpener,
    private fileTransfer: FileTransfer,
    private base64: Base64,
    private alertController: AlertController,
    private opener: FileOpener,
    private storage: NativeStorage
*/
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
/*  
  this.storage.getItem('session_storage').then((res)=>{
  this.dadosLogin = res;
  this.email = this.dadosLogin.email;
  this.nome = this.dadosLogin.nome;
  this.matricula = this.dadosLogin.nMatricula;
  this.pegarDados(this.matricula);
  });*/
  }

  pegarDados(matricula){
    var tam =0;
    this.contas =[];
    return new Promise(resolve =>{
      let dados ={
       requisicao : 'meusBoletosEmQuestao',
       matricula: matricula,
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data =>{
        for( let cliente of data['result']){
          this.contas.push(cliente);
          tam++;
        }
        this.qtdBoleto=tam;
          });
        });
      
  }

  baixar(id){
    this.aux = true;
    for(var i=0; i<this.qtdBoleto;i++){
      if(this.contas[i].id == id){
        this.  openPDF (this.contas[i].pdf);
      }
    }
    this.aux = false;
  }

  doRefresh(event) { // dar refresh puxando pra cima
    setTimeout(() => {
      this.contas =[];
      this.ionViewWillEnter();
      event.target.complete();
    }, 1000);
  }

  openPDF (b64) {
    /*
    fetch('data:application/pdf;base64,' + b64, {
        method: "GET"
    })
    .then(res => res.blob()).then(blob => {
      console.log("created blob");
      this.file.createFile(this.file.dataDirectory, 'boleto.pdf', true)
      .then(() => {
        console.log("file created");
        this.file.writeFile(this.file.dataDirectory, 'boleto.pdf', blob, { replace: true })
        .then(res => {
          console.log("file writed");
          this.opener.open(res.toInternalURL(), 'application/pdf')
          .then((res) => {
            console.log('file opened')
          }).catch(err => {
            console.log('open error')
          });
        }).catch(err => {
          console.log('write error')     
        });
      }).catch(() => {
        console.log("create error");
      })
      
    }).catch(err => {
      console.log('blob error')
    });*/
  }
}
