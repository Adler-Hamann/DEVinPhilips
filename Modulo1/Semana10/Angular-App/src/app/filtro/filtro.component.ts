import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  botoes: any = [{
    titulo: 'Todos'
  },
  {
    titulo: 'Não Lidos'
  },
  {
    titulo: 'Lidos'
  }
]
  @Output() actionOutput:EventEmitter<string> = new EventEmitter();

  executarFuncao() {
    this.actionOutput.emit()
  }

}
