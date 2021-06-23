/**
 * Serviço responsável por executar as operações da calculadora.
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

// CONSTANTES NO TYPESCRIPT
//"readonly" = Este valor só pode ser lido e não alterado / isto define a cons
// Não é regra mais em TS as const e bom serem em letras MAIÚSCULAS
//"static" facilita chamar a const ex (CalculadoraService.SOMA)
// aqui vai definir as constantes utilizadas para identificar as operações de cálculo 
     static readonly SOMA: string = '+';
     static readonly SUBTRACAO: string = '-';
     static readonly DIVISAO: string = '/';
     static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  //@param num1 number
  //@param num2 number
  //@param operacao string Operação a ser executada
  //@return number Resultado da operação

  //este metodo recebe 3 parâmetros  e retorna um valor numerico ": number"
  //num1 que sera um numero e o num2 tbem e a "operacao" do tipo string que deve ser uma das const la de cima (+ - / *)
  calcular(num1: number, num2: number, operacao: string): number {
  	let resultado: number; // armazena o resultado da operação

    //switch recebe a "operacao" e efetua os cases com base na operação chamada
  	switch(operacao) {
      //caso operação seja SOMA, vai somar os dois parametros e assim vai
  	  case CalculadoraService.SOMA:
  	    resultado = num1 + num2;
  		break;
  	  case CalculadoraService.SUBTRACAO:
  	    resultado = num1 - num2;
  		break;
  	  case CalculadoraService.DIVISAO:
  	    resultado = num1 / num2;
  		break;
  	  case CalculadoraService.MULTIPLICACAO:
  	    resultado = num1 * num2;
  		break;
      //operação inválida ou desconhecida, vai retornar 0
  	  default:
  	    resultado = 0;
  	}

  	return resultado;
  }

}
