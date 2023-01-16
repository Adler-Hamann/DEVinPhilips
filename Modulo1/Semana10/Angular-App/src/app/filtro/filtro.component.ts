import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  botoes: any = [{
    titulo: 'Todos',
    route: '/home/Todos'
  },
  {
    titulo: 'Não Lidos',
    route: '/home/NaoLidos'
  },
  {
    titulo: 'Lidos',
    route: '/home/Lidos'
  }
]
  @Output() actionOutput:EventEmitter<string> = new EventEmitter();

  executarFuncao() {
    this.actionOutput.emit()
  }

  ngOnInit(): void {
    
  }
}
