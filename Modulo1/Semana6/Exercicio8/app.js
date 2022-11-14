async function pegaDados () {
    const recebe = await fetch ('https://randomuser.me/api/?results=4')
    const dados = await recebe.json()
}

