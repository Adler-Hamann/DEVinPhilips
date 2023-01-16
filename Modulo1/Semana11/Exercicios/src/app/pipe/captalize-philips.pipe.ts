import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizePhilips'
})
export class CaptalizePhilipsPipe implements PipeTransform {

  transform(value: string): string {
    let conteudo = ''
    let valor = value.split(' ')
    valor.forEach (palavra => {
      palavra.split('')
      conteudo += palavra[0].toUpperCase() + palavra.substring(1) + ' '
    })
    console.log(conteudo)
    return conteudo.substring(0, conteudo.length-1);
  }

}
