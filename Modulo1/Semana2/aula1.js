var convidado = 'Ana';
var noivo1 = 'João';
var noivo2 = 'Maria';
var data = '05/12/2022';
var hora = '16:30';

var texto = `Caro(a) ${convidado}!

VocÊ está convidado(a) para o casamento de ${noivo1} e ${noivo2}, a ser realizado no dia ${data}, às ${hora}.

Contamos com a sua presença!

Anteciosasmente,
Os noivo(a)s`;
//debugger;

//var paragrafo = document.getElementById('paragrafo');
//paragrafo.innerText = texto;

console.log(texto);

//typeof
console.log(typeof convidado);
//resultado tem que ser "String"

//Null
var semValor = null;
console.log(typeof semValor);
//resultado tem que ser "Object"

//Undefined
var indefinida;
console.log(typeof indefinida);
//resultado tem que ser "Undefined"

//Soma
Math.ceil
console.log(Number('23.3')+ 12);
console.log(parseInt('23')+12);
console.log(parseFloat('23')+12);

//Subtração
console.log(1 - 2);

//Resto
console.log(10%2);

//Atribuição
/*var atribuicao = 0
console.log(atribuicao);
atribuicao += 100;
console.log(atribuicao);
atribuicao -= 20;
console.log(atribuicao);
atribuicao *=2;
console.log(atribuicao);
atribuicao = atribuicao * 2;
console.log(atribuicao);

var numero1 = "10"
var numero2 = 10

console.log(numero1 == numero2)
console.log(numero1 === numero2)*/

// Operadores lógicos
var verdadeiro = true
var falso = false

console.log(verdadeiro || falso)
console.log(verdadeiro && falso)

console.log('' || 0)

console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean('teste'))
console.log(Boolean(null))
console.log(Boolean(undefined))

console.log(Boolean('teste'))
console.log(Boolean(1))

console.log(Boolean(null))
console.log(!Boolean(null))
console.log(!!Boolean(null))


