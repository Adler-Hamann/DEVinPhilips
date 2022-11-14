async function media () {
    const recebe = await fetch ('https://api.coincap.io/v2/assets/bitcoin')
    const dados = await recebe.json()
    console.log(dados)
    console.log(`O preço do Bitcoin ${dados.data.symbol} em dólares hoje é ${dados.data.priceUsd}`)
}
media()