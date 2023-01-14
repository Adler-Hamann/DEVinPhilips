import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {
  entrada: string = ''
  @Output() actionOutput:EventEmitter<any> = new EventEmitter();

  executarFuncao() {
    this.actionOutput.emit(this.entrada)
  }

}
