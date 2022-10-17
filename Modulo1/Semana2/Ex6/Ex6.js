let opera = prompt("Digite a operação que desejas fazer")
let pvalor = Number(prompt("Digite o primeiro valor"))
let svalor = Number(prompt("Digite o segundo valor"))

switch(opera){
    case "+": alert(`O resultado do seu cálculo é: ${pvalor + svalor}`)
    break;
    case "-": alert(`O resultado do seu cálculo é: ${pvalor - svalor}`)
    break;
    case "*": alert(`O resultado do seu cálculo é: ${pvalor * svalor}`)
    break;
    case "/": alert(`O resultado do seu cálculo é: ${pvalor / svalor}`)
    break;
    default: alert ("Não foi possivel fazer o cálculo, operador inválido")
}