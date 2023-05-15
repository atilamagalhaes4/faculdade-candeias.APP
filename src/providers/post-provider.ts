import { HttpClient, HttpHeaders, HttpRequest, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class PostProvider {
  server: string = "http://iesc-magalhaes4-com-br.umbler.net/";
  //server: string = "http://localhost/api/";

  constructor(private http: HttpClient) {

  }


  acessarBanco(dados: any, api: string) {
    return new Promise((resolve, reject) => {
      let url = this.server + api;
      this.http.post(url, dados)
        .subscribe((result: any) => {
          //          resolve(result.json);
          console.log('aparentemente conseguiu');
        },
          (error) => {
            //          reject(error.json);
            console.log('deu algum erro');
          });
    });
  }

  inserirApi(dados: any, api: string) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let url = this.server + api;
    return this.http.post(url, JSON.stringify(dados), httpOptions).pipe(
      map(res => res)
    )
      
  }

}