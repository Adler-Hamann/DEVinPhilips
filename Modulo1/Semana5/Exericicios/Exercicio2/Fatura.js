export default class Fatura {
  constructor(id, descricao, qtde, preco) {
    this.id = id;
    this.descricao = descricao;
    this.qtde = qtde;
    this.preco = preco;
  }

  obterValorTotal() {
    return this.preco * this.qtde;
  }

  get valorTotal() {
    return this.preco * this.qtde;
  }
}
