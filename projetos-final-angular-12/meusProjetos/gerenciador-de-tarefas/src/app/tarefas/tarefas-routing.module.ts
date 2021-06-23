import { Routes } from "@angular/router";

import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        //aqui vai ser o id da tarefa que esta editando
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
]