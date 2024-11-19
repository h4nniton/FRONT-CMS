import React, { useState, useEffect } from 'react';
import style from '../../Css/tabelaUsuario.module.css';
import { Table } from 'react-bootstrap';
import Filtro from '../Filtro';
import { getFreelancers, getClientes } from '../../Integração/funcao';

const Usuarios = () => {
  const [clientes, setClientes] = useState([]);
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado para controle de carregamento
  const [error, setError] = useState(null);      // Estado para mensagens de erro

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const usuarios = await getClientes();
        if (usuarios && Array.isArray(usuarios.clientes)) {
          setClientes(usuarios.clientes);
        } else {
          throw new Error("Dados de clientes inválidos.");
        }
      } catch (err) {
        setError("Erro ao carregar clientes.");
        console.error(err);
      }
    };

    const fetchFreelancers = async () => {
      try {
        const usuarios = await getFreelancers();
        if (usuarios && Array.isArray(usuarios.freelancers)) {
          setFreelancers(usuarios.freelancers);
        } else {
          throw new Error("Dados de freelancers inválidos.");
        }
      } catch (err) {
        setError("Erro ao carregar freelancers.");
        console.error(err);
      }
    };

    // Inicia o carregamento dos dados
    setLoading(true);
    fetchClientes();
    fetchFreelancers();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Carregando...</div>; // Exibe uma mensagem enquanto os dados estão sendo carregados
  }

  if (error) {
    return <div>{error}</div>; // Exibe mensagem de erro, se ocorrer
  }

  return (
    <div className={style.tabela} id="usuarios">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Descrição</th>
            <th>CPF / CNPJ</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          {clientes.length > 0 ? (
            clientes.map((cliente, index) => (
              <tr key={index}>
                <td>{cliente.nome_cliente}</td>
                <td>{cliente.email_cliente}</td>
                <td>{cliente.descricao_cliente}</td>
                <td>{cliente.cnpj_cliente}</td>
                <td>Cliente</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhum cliente encontrado.</td>
            </tr>
          )}

          {freelancers.length > 0 ? (
            freelancers.map((freelancers, index) => (
              <tr key={index}>
                <td>{freelancers.nome_freelancer}</td>
                <td>{freelancers.email_freelancer}</td>
                <td>{freelancers.descricao_freelancer}</td>
                <td>{freelancers.cpf_freelancer}</td>
                <td>Freelancer</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhum freelancer encontrado.</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Filtro/>
    </div>
  );
};

export default Usuarios;
