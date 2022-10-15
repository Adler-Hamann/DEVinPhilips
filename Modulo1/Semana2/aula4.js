/*let num = prompt("Digite um valor positivo maior que 0")
var popup = 0
for (let cont = 1; cont <= num; cont++){
    popup += cont
}
alert (popup)*/

/*let num = 0;
let soma = 0;
let div = -1;
while (num != -1){
    soma += num
    div++
    num = parseInt(prompt("Digite os valores na qual você quer fazer a média (digite -1 para calcular"))
}
alert (`${soma/div}`)*/

function idades() {
  let idade = 0;
  let idademed = 0;
  let idademax = 0;
  let idademin = 0;
  let media = 0;
  let cont = 0;
  do {
    idade = paserInt(prompt("insira uma idade"));
    if (idade > idademax) {
      idademax = idade;
    }
    if (cont == 0) {
      idademin = idademax;
    } else {
      if (idade < idademin) {
        idademin = idade;
      }
    }
    media += idade;
    cont++;
  } while (isNaN(idade) || idade < 0);
}
idades();
