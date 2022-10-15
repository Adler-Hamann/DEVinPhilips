let valor = Number(prompt("Digite um valor"))

if (valor < 0) {
    valor = valor * -1
}

if (valor%2){
    alert(`${(valor/2) + 0.5} pares, contando o 0; ${(valor/2) + 0.5} impares`)
}else{
    alert(`${(valor/2)+1} pares, contando o 0; ${valor/2} impares`)
}