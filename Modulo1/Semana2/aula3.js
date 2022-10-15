/*function votacao(){
    let idade = prompt("insira sua idade");

    if (idade < 16) {
        alert("não pode votar");
    }else if (idade < 18 || idade >= 70){
        alert("Voto opcional");
    }else if (idade < 70){
        alert("Votação obrigatória");
    }else{
        alert("Entrada inválida");
    }
}

votacao();*/

/*Deve ser solicitado via prompt o mês em forma de número;
O resultado deve ser exibido em um alert;
Caso seja informado um mês entre 1 e 12 deve ser exibido o nome do mês correspondente. Ex: informou 1 deve exibir janeiro;
Caso seja informado um valor diferente de 1 e 12 deve ser exibido mês inválido;
Deve ser usado switch.
*/
function meses(){
    let mes = prompt("Insira um número (de 1 a 12) do mês")
    
    switch (mes){
        case '1':
            alert("Janeiro");
            break;
        case '2':
            alert("Fevereiro");
            break; 
        case '3':
            alert("Março");
            break; 
        case '4':
            alert("Abril");
            break; 
        case '5':
            alert("Maio");
            break; 
        case '6':
            alert("Junho");
            break; 
        case '7':
            alert("Julho");
            break; 
        case '8':
            alert("Agosto");
            break; 
        case '9':
            alert("Setembro");
            break; 
        case '10':
            alert("Outubro");
            break; 
        case '11':
            alert("Novembro");
            break; 
        case '12':
            alert("Dezembro");
            break; 
        default:
            alert("mês invalido");

    }
}
meses ();