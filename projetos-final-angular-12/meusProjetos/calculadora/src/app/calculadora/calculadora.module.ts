import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components/calculadora.component';
import { CalculadoraService } from './services/calculadora.service';


@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //exportando a calculadora para esse component ser visivel em td app
    CalculadoraComponent 
  ],
  //aqui ficam os services importados
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
