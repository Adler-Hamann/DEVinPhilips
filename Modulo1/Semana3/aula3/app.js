"use strict";

const procuraTermo = (objeto) => objeto.texto.includes(objeto.termo);

console.log(
  procuraTermo({
    texto: "O rato roeu a roupa do rei de roma",
    termo: "rato",
  })
);

console.log(
  procuraTermo({
    texto: "O rato roeu a roupa do rei de roma",
    termo: "batata",
  })
);
