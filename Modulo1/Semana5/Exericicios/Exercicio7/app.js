import { Time } from "./Time.js";
import { Partida } from "./Partida.js";

const timeA = new Time("TimeA", "TEA");
const timeB = new Time("TimeB", "TEB");

const partida1 = new Partida("TEA", 2, "TEB", 1);
const partida2 = new Partida("TEB", 3, "TEA", 0);
const partida3 = new Partida("TEA", 2, "TEB", 2);

timeA.computarPartida(partida1);
timeB.computarPartida(partida1);
timeA.computarPartida(partida2);
timeB.computarPartida(partida2);
timeA.computarPartida(partida3);
timeB.computarPartida(partida3);

console.log(timeA.exibirSituacao());
console.log(timeB.exibirSituacao());
