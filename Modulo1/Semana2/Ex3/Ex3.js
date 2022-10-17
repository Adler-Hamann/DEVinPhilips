const numero = Number(prompt("Digite um numero"))
let tabuada;
let popup = '';
for (let cont=0; cont < 11; cont++){
     tabuada = numero * cont
     popup += `${numero} x ${cont} = ${tabuada} \n`
}
alert(popup)