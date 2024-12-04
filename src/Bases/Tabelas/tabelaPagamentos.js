// TabelaPagamento.js
import style from '../../Css/tabelaPagamentos.module.css';
import { Table, Modal, Button } from 'react-bootstrap';
import Filtro2 from '../Filtro2.js';
import { useEffect, useState } from 'react';
import { getFreelancers, getSolicitacaoPagamento, putPagamentoFreelancer } from '../../Integração/funcao.js';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ícones de olho

function TabelaPagamento() {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [freelancers, setFreelancers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSolicitacao, setSelectedSolicitacao] = useState(null);
  const [visibleData, setVisibleData] = useState({});
  const [filtro, setFiltro] = useState({ pendentes: false, realizados: false });

  useEffect(() => {
    // Carregar dados dos freelancers e das solicitações de pagamento
    async function loadData() {
      try {
        const freelancersData = await getFreelancers();
        setFreelancers(freelancersData.freelancers);

        const solicitacoesData = await getSolicitacaoPagamento();
        setSolicitacoes(solicitacoesData.solicitacoesPagamentos);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    loadData();
  }, []); // Executa apenas uma vez ao montar o componente

  // Função para obter o email do freelancer com base no id
  const getEmailFreelancer = (id) => {
    const freelancer = freelancers.find(f => f.id === id);
    return freelancer ? freelancer.email_freelancer : 'Email não encontrado';
  };

  // Função para aplicar o filtro nas solicitações
  const aplicarFiltro = (solicitacoes) => {
    if (!filtro.pendentes && !filtro.realizados) {
      return solicitacoes;
    }

    return solicitacoes.filter(solicitacao => {
      if (filtro.pendentes && solicitacao.status_pago === 0) {
        return true; // Pendentes
      }
      if (filtro.realizados && solicitacao.status_pago === 1) {
        return true; // Realizados
      }
      return false;
    });
  };

  // Função para abrir o modal e selecionar a solicitação
  const handleRowClick = (solicitacao) => {
    setSelectedSolicitacao(solicitacao);
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Função para atualizar o status no backend
  const handleUpdateStatus = async () => {
    if (selectedSolicitacao) {
      const updatedSolicitacao = {
        ...selectedSolicitacao,
        status_pago: 1, // Atualizando para 'Realizado'
      };

      const success = await putPagamentoFreelancer(updatedSolicitacao);
      if (success) {
        // Atualizar a tabela após sucesso
        setSolicitacoes(solicitacoes.map(s =>
          s.id === selectedSolicitacao.id ? { ...s, status_pago: 1 } : s
        ));
        setShowModal(false); // Fechar o modal após sucesso
      } else {
        alert("Falha ao atualizar o status");
      }
    }
  };

  // Função para alternar a visibilidade dos dados em uma linha específica
  const toggleVisibility = (id) => {
    setVisibleData(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Alterna a visibilidade (se estava oculta, mostra os dados e vice-versa)
    }));
  };

  // Função para lidar com o filtro
  const handleFilterChange = (pendentes, realizados) => {
    setFiltro({ pendentes, realizados });
  };

  const solicitacoesFiltradas = aplicarFiltro(solicitacoes);

  return (
    <div className={style.tabela}>
     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Freelancer</th>
            <th>E-mail</th>
            <th>Valor Solicitado</th>
            <th>Banco</th>
            <th>Número da conta</th>
            <th>Tipo de Conta</th>
            <th>Nome Completo do Titular</th>
            <th>CPF</th>
            <th>Status Pagamento</th>
            <th>Visualizar</th>
          </tr>
        </thead>
        <tbody>
          {solicitacoesFiltradas.map(solicitacao => {
            const email = getEmailFreelancer(solicitacao.id_freelancer);
            const isDataVisible = visibleData[solicitacao.id];

            return (
              <tr key={solicitacao.id} onClick={() => handleRowClick(solicitacao)}>
                <td>{solicitacao.id_freelancer}</td>
                <td>{email}</td>
                <td>{isDataVisible ? `R$${solicitacao.valor_solicitado}` : '******'}</td>
                <td>{isDataVisible ? solicitacao.banco : '******'}</td>
                <td>{isDataVisible ? solicitacao.numero_conta : '******'}</td>
                <td>{isDataVisible ? solicitacao.tipo_conta : '******'}</td>
                <td>{isDataVisible ? solicitacao.nome_completo_titular : '******'}</td>
                <td>{isDataVisible ? solicitacao.cpf : '******'}</td>
                <td>{solicitacao.status_pago === 1 ? 'Realizado' : 'Pendente'}</td>
                <td>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    toggleVisibility(solicitacao.id);
                  }} style={{ background: 'transparent', border: 'none' }}>
                    {isDataVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Filtro2 onFilterChange={handleFilterChange} />

      {/* Modal de confirmação */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="modal-custom"
      >
        <Modal.Header closeButton style={{ background: 'linear-gradient(39deg, rgba(1,31,75,1) 0%, rgba(3,57,108,1) 77%)' }}>
          <Modal.Title style={{ color: 'white' }}>Atualizar Status de Pagamento</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'linear-gradient(39deg, rgba(1,31,75,1) 0%, rgba(3,57,108,1) 77%)', color: 'white' }}>
          Deseja atualizar a situação do pagamento para "Realizado"?
        </Modal.Body>
        <Modal.Footer style={{ background: 'linear-gradient(39deg, rgba(1,31,75,1) 0%, rgba(3,57,108,1) 77%)' }}>
          <Button variant="secondary" onClick={handleCloseModal} style={{ background: 'red', border: 'none' }}>Cancelar</Button>
          <Button variant="primary" onClick={handleUpdateStatus} style={{ background: 'rgb(1,31,75)', border: 'none' }}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TabelaPagamento;
