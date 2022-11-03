export default class Funcionario {
  constructor(cpf, nome, salario) {
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
  }

  porcentagem(porcentagem) {
    porcentagem /= 100;
    return (this.salario *= 1 + porcentagem);
  }
}
