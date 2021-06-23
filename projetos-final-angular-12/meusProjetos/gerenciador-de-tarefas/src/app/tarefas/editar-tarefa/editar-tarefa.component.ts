import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm
  tarefa: Tarefa

  constructor(
    private tarefaService: TarefaService,
    //"ActivatedRoute" para obter o parametro da tarefa a ser carregado "id"
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //aqui vai conseguir pegar os parametro "id" da rota de tarefa usando o "snapshot"
    const id = +this.route.snapshot.params['id']
    //com o id em mãos podemos carregar a tarefa
    this.tarefa = this.tarefaService.buscarPorId(id)
  }

  atualizar(): void {
    //aqui verifica se o form esta valido para prosseguir
    if (this.formTarefa.form.valid) {
      //chama o metodo "atualizar" passando a tarefa
        this.tarefaService.atualizar(this.tarefa)
        //e direciona para a rota "tarefas" dps
        this.router.navigate(['/tarefas'])
    }
  }

}
