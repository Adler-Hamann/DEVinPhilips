export class CalculadoraDeArea {
  constructor(nome, base, altura) {
    this.nome = nome;
    this.base = base;
    this.altura = altura;
  }

  calcular() {
    if (this.nome == "triangulo") {
      return (this.base * this.altura) / 2;
    } else if (this.nome == "quadrado" || this.nome == "retangulo") {
      return this.base * this.altura;
    } else {
      return "operação inválida";
    }
  }
}
