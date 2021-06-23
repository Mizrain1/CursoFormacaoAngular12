import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaRoutes } from './tarefas/tarefas-routing.module';

//chamando aqui as rotas de tarefa
const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
    ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
