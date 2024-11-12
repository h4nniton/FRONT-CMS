import style from '../../Css/tabelaUsuario.module.css'
import { Table  } from 'react-bootstrap';

function BasicExample() {
  return (

    <div className={style.tabela}>
    <Table striped bordered hover>
      <thead className={style.titulo}>
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
        
      </tbody>
    </Table>
    </div>
  );
}

export default BasicExample;