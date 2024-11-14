import style from '../../Css/tabelaPagamentos.module.css'
import { Table } from 'react-bootstrap';
import Filtro2 from '../Filtro2.js';

function tabelaPagamento() {
  return (

    <div className={style.tabela}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Valor</th>
            <th>Situação</th>
            <th>Aprovada</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>R$250,00</td>
            <td>Realizado</td>
            <td>Sim</td>
            <td>Freelancer</td>
          </tr>

        </tbody>
      </Table>
      <Filtro2/>
    </div>
  );
}

export default tabelaPagamento;