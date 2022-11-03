import { CalculadoraDeArea } from "./CalculadoreDeArea.js";

const triangA = new CalculadoraDeArea("triangulo", 6, 8);
const retangB = new CalculadoraDeArea("retangulo", 4, 6);
const quadC = new CalculadoraDeArea("quadrado", 4, 4);

console.log(triangA.calcular());
console.log(retangB.calcular());
console.log(quadC.calcular());
