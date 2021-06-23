import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardRoutes } from './dashboard';
import { CalculadoraRoutes } from './calculadora';
import { ConversorRoutes } from './conversor';
import { TarefaRoutes } from './tarefas';
import { JogoDaVelhaRoutes } from './jogo-da-velha';;

const routes: Routes = [
     {
       path: '',
       redirectTo: '/dashboard',
       pathMatch: 'full'
     },
     ...DashboardRoutes,
     ...CalculadoraRoutes,
     ...ConversorRoutes,
     ...TarefaRoutes,
     ...JogoDaVelhaRoutes
];

@NgModule({
  //"forRoot" significa que essa e a entrada principal de rota da minha app
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
