export class Time {
  constructor(nome, sigla) {
    this.nome = nome;
    this.sigla = sigla;
    this.vitorias = 0;
    this.derrotas = 0;
    this.empates = 0;
    this.golsMarcados = 0;
    this.golsSofridos = 0;
    this.pontos = 0;
    this.jogos = 0;
  }

  get numeroDeJogos() {
    return (this.jogos = this.vitorias + this.derrotas + this.empates);
  }

  get numeroDePontos() {
    return (this.pontos = this.vitorias * 3 + this.derrotas * 0 + this.empates);
  }

  computarPartida(partida) {
    let gols1 = partida.golsA;
    let gols2 = partida.golsB;
    let time1 = partida.siglaA;
    let time2 = partida.siglaB;
    if (time1 == this.sigla) {
      if (gols1 > gols2) {
        this.vitorias++;
      } else if (gols1 == gols2) {
        this.empates++;
      } else {
        this.derrotas++;
      }
      this.golsMarcados += gols1;
      this.golsSofridos += gols2;
      return this;
    } else if (time2 == this.sigla) {
      if (gols2 > gols1) {
        this.vitorias++;
      } else if (gols1 == gols2) {
        this.empates++;
      } else {
        this.derrotas++;
      }
      this.golsMarcados += gols2;
      this.golsSofridos += gols1;
      return this;
    }
  }

  exibirSituacao() {
    return `Time: ${this.nome}, ${this.sigla}
    Numero de jogos: ${this.numeroDeJogos}
    vitórias: ${this.vitorias}, derrotas: ${this.derrotas}, empates: ${this.empates}
    Pontuação: ${this.numeroDePontos}
    Gols Marcados: ${this.golsMarcados}, Gols Sofridos: ${this.golsSofridos}`;
  }
}
