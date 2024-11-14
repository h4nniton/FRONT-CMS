import style from '../../Css/tabelaUsuario.module.css'
import { Table } from 'react-bootstrap';
import Filtro from '../Filtro';

function tabelaUsuario() {
  return (

    <div className={style.tabela}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th>Feito</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

          <tr>
            <td>Jessica Pereira</td>
            <td>jessica@gmail.com</td>
            <td>64257104031</td>
            <td>Sim</td>
            <td>Cliente</td>
          </tr>

        </tbody>
      </Table>
      <Filtro/>
    </div>
  );
}

export default tabelaUsuario;