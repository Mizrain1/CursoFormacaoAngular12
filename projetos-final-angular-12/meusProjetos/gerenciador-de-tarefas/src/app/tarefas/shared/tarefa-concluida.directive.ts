import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  @Input() tarefaConcluida: boolean

  constructor(private el: ElementRef) { }

  ngOnInit() {
    //se a tarefa estiver concluida vai aplicar o estilo tachado no texto
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through"
    }
  }

}
