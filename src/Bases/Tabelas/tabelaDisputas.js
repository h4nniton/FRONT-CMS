import style from '../../Css/tabelaDisputas.module.css'
import { Table } from 'react-bootstrap';
import React, { useState } from 'react';
import Filtro3 from '../Filtro3.js';
import arquivo from '../../img/imagem.png'
import vazio from '../../img/empty-box.png'

const TabelaDisputa = () => {
    // Estado para controlar se o pop-up está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false);

    // Função para abrir o pop-up
    const abrirPopUp = () => {
        setIsOpen(true);
    };

    // Função para fechar o pop-up
    const fecharPopUp = () => {
        setIsOpen(false);
    };

    return (
        <div className={style.tabela}>
           <Table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Comentário</th>
            <th>Arquivo</th>
            <th>Status</th>
            <th>Perfil</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Lucas Almeida</td>
            <td>lucas.almeida@gmail.com</td>
            <td>Solicitação de reembolso não atendida.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Em andamento</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Ana Costa</td>
            <td>ana.costa@gmail.com</td>
            <td>Não recebi o produto conforme prometido.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Pendente</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Gabriel Silva</td>
            <td>gabriel.silva@gmail.com</td>
            <td>Meu pedido está atrasado.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Resolvido</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Maria Oliveira</td>
            <td>maria.oliveira@gmail.com</td>
            <td>Problemas com a qualidade do serviço.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Em andamento</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>João Souza</td>
            <td>joao.souza@gmail.com</td>
            <td>Produto não funciona como esperado.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Pendente</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Carla Lima</td>
            <td>carla.lima@gmail.com</td>
            <td>Solicitação de troca de item não respondida.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Em andamento</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Felipe Martins</td>
            <td>felipe.martins@gmail.com</td>
            <td>Atraso na entrega do meu pedido.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Resolvido</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Luciana Pereira</td>
            <td>luciana.pereira@gmail.com</td>
            <td>Não consigo acessar meu perfil.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Pendente</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Ricardo Santos</td>
            <td>ricardo.santos@gmail.com</td>
            <td>Falta de resposta do suporte técnico.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Em andamento</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Fernanda Rocha</td>
            <td>fernanda.rocha@gmail.com</td>
            <td>Produto danificado na entrega.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Resolvido</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Bruna Souza</td>
            <td>bruna.souza@gmail.com</td>
            <td>Pedido não chegou no prazo estabelecido.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Pendente</td>
            <td>Cliente</td>
        </tr>

        <tr>
            <td>Marcelo Costa</td>
            <td>marcelo.costa@gmail.com</td>
            <td>Erro na cobrança do meu pedido.</td>
            <td>
                <img
                    src={arquivo}
                    alt="Arquivo"
                    className={style.imagemPopup}
                    onClick={abrirPopUp}
                    style={{ cursor: 'pointer' }}
                />
            </td>
            <td>Em andamento</td>
            <td>Cliente</td>
        </tr>
    </tbody>
</Table>

            <Filtro3/>

            {isOpen && (
                <div className={style.popup}>
                    <div className={style.popupContent}>
                        <button onClick={fecharPopUp} className={style.closeButton}>Fechar</button>
                        <h2>Detalhes do Arquivo</h2>
                        <img src={vazio} alt="Detalhes do arquivo" className={style.popupImagem} />
                    </div>
                </div>
            )}



        </div>




    );
};


export default TabelaDisputa;