export default class Juros {
  constructor(a, b, c) {
    this.capitalInicial = a;
    this.taxaAplicada = b / 100;
    this.tempo = c;
  }

  calcularJurosSimples() {
    return this.capitalInicial * this.taxaAplicada * this.tempo;
  }

  calcularJurosCompostos() {
    return this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
  }
}
