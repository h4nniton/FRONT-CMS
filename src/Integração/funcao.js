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