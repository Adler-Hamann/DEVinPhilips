function criarLista(participantes) {
  participantes.forEach((participante) => {
    const elemento = document.createElement("li");
    elemento.innerHTML = `<img src="${participante.img}" style="width:20%"></br>
        Nome: ${participante.nome} </br>
        Frase: ${participante.frase}`;
    document.getElementById("lista").appendChild(elemento);
  });
}

const participantes = [];
