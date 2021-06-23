import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
//pois havera navegação da tela de cadastro
import { Router, RouterModule } from '@angular/router'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  /* "@ViewChild()" Decorador de propriedade que configura uma consulta de visualização. O detector de alterações procura o primeiro elemento ou a diretiva que corresponde ao seletor no DOM da visualização. Se o DOM da visualização mudar e um novo filho corresponder ao seletor, a propriedade será atualizada. 
  Torna possível acessar elementos DOM nativos que possuem uma variável de referência modelo / "formTarefa" e o nome do formulario que ele ira pegar */
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm
  tarefa: Tarefa

  constructor(
    private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa()
  }

  cadastrar(): void {
    //fazendo a validação
    if (this.formTarefa.form.valid) {
      //fazendo cadastro
      this.tarefaService.cadastrar(this.tarefa)
      //voltando tela de tarefas
      this.router.navigate(["/tarefas"])
    }
  }

}
