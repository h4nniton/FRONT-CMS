export async function getFreelancers() {
    const url = 'http://localhost:8080/v1/jinni/freelancers'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getClientes() {
    const url = 'http://localhost:8080/v1/jinni/clientes'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getSolicitacaoPagamento() {
    const url = 'http://localhost:8080/v1/jinni/solicitacoes/pagamento'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function putPagamentoFreelancer(solicitacao) {
    const url = `http://localhost:8080/v1/jinni/solicitacao/pagamento/${solicitacao.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(solicitacao),
    }

    const response = await fetch(url, options)

    return response.ok

}