import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
/*import { Base64 } from '@ionic-native/base64/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
*/

@Component({
  selector: 'app-pagarboleto',
  templateUrl: './pagarboleto.page.html',
  styleUrls: ['./pagarboleto.page.scss'],
})
export class PagarboletoPage implements OnInit {

  meuPdf: any = "";
  tamanho: Number = 0;
  nativepath: any = "";
  email: any = "";
  oCurso: any = "";
  alunos: any = "";
  nome: any = "";
  nMatricula: any = "";
  aux: any = "";
  data: any = "";
  aux2: string = "";

  constructor(
    private file: File,
    private plataform: Platform,
    private provider: PostProvider,
    private alertController: AlertController,
    private route: Router,
    /*    private fileTransfer: FileTransfer,
        private base64: Base64,
        private opener: FileOpener,
        private fileChooser: FileChooser,
        private filePath: FilePath,
        private document: DocumentViewer,
        private fileOpener: FileOpener,*/
  ) { }

  ngOnInit() {
  }

  passo1() {
    this.alunos = [];
    return new Promise(resolve => {
      let dados = {
        requisicao: 'verTodosParaPagarem',
        curso: this.oCurso,
      };
      this.provider.inserirApi(dados, 'sobrePessoas.php').subscribe(data => {
        for (let cliente of data['result']) {
          this.alunos.push(cliente);
        }

      });
    });
  }
  passo2(nome, nMatricula, curso) {
    this.nome = nome;
    this.nMatricula = nMatricula;
  }


  verAgora() {
    if (this.aux != "") { // aux tem q ter o numero de matricula
      for (var i = 0; i < this.alunos.length; i++) {
        if (this.alunos[i].nMatricula == this.aux) {
          this.nome = this.alunos[i].nome;
          this.nMatricula = this.alunos[i].nMatricula;
          this.email = this.alunos[i].email;
        }
      }
    }
  }

  alistarTodos() {
    this.route.navigate(['/allpdfs']);
  }

  FileConverterBase64() {/* // cpnvertera arquivos para base64
    this.fileChooser.open().then((data) => {
      //    alert("chooser = " + data);
      this.filePath.resolveNativePath(data).then(filePath => {
        //        alert("Caminho do arquivo = " + filePath);
        this.base64.encodeFile(filePath).then((base) => {
          console.log(base);
          //           alert(base);
          //           this.meuPdf = base;
          var aux = base.replace("data:image/*;charset=utf-8;base64,", "");
          this.meuPdf = aux;
        }).catch(erro => {
          this.qualErro('Não foi possivel ler o arquivo.');
          this.meuPdf = "";
          //          alert("erro ao converter = "+erro);
        });
      }).catch(err => {
        //      alert("Erro no caminho = " + err);
        this.qualErro('O arquivo não existe nesse caminho.');
        this.meuPdf = "";

      });
    }).catch((error) => {
      //      alert("Erro no arquivo escolhido = " + error);
      this.qualErro('Nenhum arquivo encontrado.');
      this.meuPdf = "";
    });
*/
  }

  enviar() {
    this.ajeitarData();

    if (this.nome == "" || this.email == "" || this.nMatricula == "" || this.data == "") {
      this.preencherTudo();
      return false;
    } else if (this.meuPdf == "") {
      this.colocarPdf();
      return false;
    } else {
      console.log('pode salvar');
      return new Promise(resolve => {
        let dados = {
          requisicao: 'salvarProCaloteiro',
          email: this.email,
          data: this.data,
          aluno: this.nome,
          matricula: this.nMatricula,
          pdf: this.meuPdf
        };
        this.provider.acessarBanco(dados, 'sobrePessoas.php');
        this.Salvo();
        this.alunos = [];
        this.nome = "";
        this.nMatricula = "";
        this.oCurso = "";
        this.email = "";
        this.meuPdf = "";

      });
    }
  }


  ajeitarData() {
    var aux;
    aux = this.data[5] + this.data[6] + this.data[4] + this.data[0] + this.data[1] + this.data[2] + this.data[3];
    console.log(aux);
    this.data = aux;
    //    alert('data = '+this.data);
  }
  async colocarPdf() {
    const alert = await this.alertController.create({
      //      subHeader: 'Salvo !!!',
      cssClass: 'primary',
      message: 'Selecione o boleto.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async preencherTudo() {
    const alert = await this.alertController.create({
      //      subHeader: 'Salvo !!!',
      cssClass: 'primary',
      message: 'Entre com todos os dados.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async qualErro(err) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: '' + err,
      buttons: ['OK']
    });

    await alert.present();
  }

  async Salvo() {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: 'Salvo !!!',
      buttons: ['OK']
    });

    await alert.present();
  }
  GetAndShow() {/* //Funcao para pegar um pdf de um link da internet
    const options: DocumentViewerOptions = {
      title: 'MeuPdf'
    };

    let path = null;

    if (this.plataform.is('ios')) { //pegando caminho ios
      path = this.file.documentsDirectory;
    } else { // caminho android
      path = this.file.dataDirectory;
    }

    const aux = this.fileTransfer.create(); // objeto de transferencia de arquivo
    aux.download('https://www.google.com/arquivo.pdf', path + 'boleto.pdf').then((res) => {
      let url = res.toURL();
      this.document.viewDocument(url, 'application /pdf', options);
    }, (error) => {

    })*/
  }

  openPDF() {
/*
    fetch('data:application/pdf;base64,' + this.meuPdf, {
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
      });
  }*/
}

/*
  async pegarPdfDoCelular() {
    this.fileChooser.open().then((data) => {
      alert("chooser = " + data);
      this.filePath.resolveNativePath(data).then(filePath => {
        alert("Caminho do arquivo = " + filePath);



      }).catch(err => {
        alert("erreur filepath => " + err);
      });
    }).catch((error) => {
      alert("erreur chooser => " + error);
    });*/
  }
