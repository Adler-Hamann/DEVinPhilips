const data = new Date();
const dia = data.getDate();
const mes = (data.getMonth())+1;

if (mes == 12) {
    if (dia > 21){
        alert("A estação atual é Verão!")
    }else{
        alert ("A estação atual é Primavera!")
    }
}else if (mes < 3){
    alert ("A estação atual é Verão!")
}else if (mes == 3){
    if (dia > 21){
        alert("A estação atual é Outono!")
    }else{
        alert("A estação atual é Verão!")
    }
}else if (mes < 6){
    alert ("A estação atual é Outono!")
}else if (mes == 6){
    if (dia > 21){
        alert ("A estação atual é Inverno!")
    }else{
        alert ("A estação atual é Outono!")
    }
}else if (mes < 9){
    alert ("A estação atual é Inverno!")
}else if (mes == 9){
    if (dia > 21){
        alert ("A estação atual é Primavera")
    }else{
        alert ("A estação atual é Inverno!")
    }
}else{
    alert ("A estação atual é Primavera!")
}