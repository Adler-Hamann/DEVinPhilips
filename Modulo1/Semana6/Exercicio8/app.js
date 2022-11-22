async function pegaDados () {
    const recebe = await fetch ('https://randomuser.me/api/?results=4')
    const dados = await recebe.json()
    console.log(dados.results)
    return dados.results
}

async function chamarAPI () {
    const dados = await pegaDados()
    console.log(dados)
    dados.forEach(usuario => {
        const novouser = document.createElement("li")
        novouser.innerHTML = `
            <img src='${usuario.picture.large}'>
            <p>${usuario.name.title} ${usuario.name.first} ${usuario.name.last}<br>
            ${usuario.email}<br>
            ${usuario.location.street.name} ${usuario.location.street.number}, ${usuario.location.city}, ${usuario.location.state}, ${usuario.location.country}</p>`
            document.getElementById("lista").appendChild(novouser)

    })
}
chamarAPI();
 //document.getElementById("submit").addEventListener("submit", chamaAPI())
