import { Injectable } from '@angular/core';

//Precisa instalar a biblioteca "npm install rxjs-compat --save" para funcionar corretamente o observable
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class DadosService {

  //dados estáticos "readonly" n podera ser alterados
  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ]

  constructor() { }

  //Retorna um observable contendo os dados a serem exibidos no gráfico
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados)
      observable.complete()
    })
  }


}
