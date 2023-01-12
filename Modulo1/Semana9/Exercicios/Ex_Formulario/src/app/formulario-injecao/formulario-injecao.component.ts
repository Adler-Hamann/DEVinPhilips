import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-formulario-injecao',
  templateUrl: './formulario-injecao.component.html',
  styleUrls: ['./formulario-injecao.component.css']
})
export class FormularioInjecaoComponent {
  dados= { email: '', senha: '' }

  constructor (private utils: ServiceService) {

  }

  enviar (event: any) {
    event.preventDefault()
    this.utils.salvaDados(this.dados)
    console.log(this.utils.retornaDados(this.dados.email))
  }
}
