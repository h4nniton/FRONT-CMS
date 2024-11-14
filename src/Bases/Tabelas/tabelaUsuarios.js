import style from '../../Css/tabelaUsuario.module.css'
import { Table } from 'react-bootstrap';
import Filtro from '../Filtro';
import { getFreelancers, getClientes } from '../../Integração/funcao';

function tabelaClienteFuncional(clientes) {
  const linha = document.createElement('tr')
  const nome = document.createElement('td')
  const email = document.createElement('td')
  const cnpj = document.createElement('td')
  const perfil = document.createElement('td')

  nome.textContent = clientes.nome_cliente
  email.textContent = clientes.email_cliente
  cnpj.textContent = clientes.cnpj_cliente
  perfil.textContent = "Cliente"

  linha.append (nome,email,cnpj, perfil)
  return linha
}

const linhaUser = document.getElementById("usuarios")
  const usuarios = await getClientes()
  usuarios.clientes.forEach(clientes => {
    const linha = tabelaClienteFuncional(clientes)
    linhaUser.appendChild(linha)
  });

// function tabelaFreelasFuncional(freelancer) {
//   const linha = document.createElement('tr')
//   const nome = document.createElement('td')
//   const email = document.createElement('td')
//   const cpf = document.createElement('td')
//   const perfil = document.createElement('td')


//   nome.textContent = freelancer.nome_freelancer
//   email.textContent = freelancer.email_freelancer
//   cpf.textContent = freelancer.cpf_freelancer

// } 

function tabelaUsuario() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody id='usuarios'></tbody>
      </Table>
    </div>
  );
}


export default tabelaUsuario;