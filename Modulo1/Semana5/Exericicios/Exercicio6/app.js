import Juros from "./Juros.js";

const entrada1 = new Juros(10000, 7, 24);
const entrada2 = new Juros(10000, 15, 10);

console.log(entrada1.calcularJurosSimples());
console.log(entrada1.calcularJurosCompostos());
console.log(entrada2.calcularJurosSimples());
console.log(entrada2.calcularJurosCompostos());
