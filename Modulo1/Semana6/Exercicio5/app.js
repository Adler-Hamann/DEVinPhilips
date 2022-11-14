async function  obterClienteNoBancoDeDados(idCliente) {
            const cliente = await { nome: 'bruce wayne', id: idCliente };
            return cliente;
    }

async function processar() {
    console.log(await obterClienteNoBancoDeDados(7))
}

processar();