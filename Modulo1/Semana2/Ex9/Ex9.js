let valor = Number(prompt("Digite o valor inicial de sua Progresão Aritmética"))
let valori = valor
let raiz = Number(prompt("Agora digite a raiz de sua Progressão Aritmética"))
let popup = ''
for (let i = 1; i < 11; i++){
    if (i == 1){
        popup += `${valor}`
    }else{
        popup += ` ,${valor += raiz}`
    }
}
alert(`Valor Inicial = ${valori}; Raiz = ${raiz}; P.A. = ${popup}`)