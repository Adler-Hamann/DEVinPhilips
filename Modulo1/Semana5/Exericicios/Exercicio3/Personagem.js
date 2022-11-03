export default class Personagem {
  constructor(nome) {
    this.nome = nome;
    this.percentualVida = 100;
  }

  usaKitMedico() {
    if (this.percentualVida < 100) {
      if (this.percentualVida > 90) {
        return (this.percentualVida = 100);
      } else {
        return this.percentualVida + 10;
      }
    } else {
      return this.percentualVida;
    }
  }

  sofreDano(dano) {
    if (this.percentualVida > 0) {
      if (this.percentualVida < dano) {
        return (this.percentualVida = 0);
      } else {
        return this.percentualVida - dano;
      }
    } else {
      return this.percentualVida;
    }
  }
}
