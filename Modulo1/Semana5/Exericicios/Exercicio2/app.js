import Fatura from "./Fatura.js";

const melao = new Fatura(29, "Melão", 4, 5);

console.log(melao.obterValorTotal());
console.log(melao.valorTotal);
