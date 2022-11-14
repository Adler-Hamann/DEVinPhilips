async function media () {
    const recebe = await fetch ('https://api.agify.io/?country_id=BR&name=adler')
    const dados = await recebe.json()
    console.log(dados.age, dados.name)
}
media()