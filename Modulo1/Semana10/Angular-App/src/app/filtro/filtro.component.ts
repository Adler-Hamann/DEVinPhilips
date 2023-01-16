import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  botoes: any = [
    'Todos',
   'Não Lidos',
   'Lidos'
]


  @Output() actionOutput:EventEmitter<string> = new EventEmitter();

  executarFuncao(titulo: string) {
    this.actionOutput.emit(titulo)
  }

  ngOnInit(): void {
    
  }
}
