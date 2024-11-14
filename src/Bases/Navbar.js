import styles from '../Css/navbar.module.css'
import { useNavigate } from 'react-router-dom'
import usuario from '../img/usuario.png'
import pagamento from '../img/pagamento.png'
import disputa from '../img/disputa.png'
import premium from '../img/conteudo-premium.png'
import notificacao from '../img/notificacao.png'

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className={styles.navbar}>
            <div className={styles.icones}>
                <img src={usuario} onClick={() => navigate('/Usuarios')}></img>
                <p>Usuários</p>
                <img src={pagamento} onClick={() => navigate('/Pagamentos')}></img>
                <p>Pagamentos</p>
                <img src={disputa} onClick={() => navigate('/Disputas')}></img>
                <p>Disputas</p>
                <img src={premium} onClick={() => navigate('/Premium')}></img>
                <p>Premium</p>
                <img src={notificacao} onClick={() => navigate('/Notificacao')}></img>
                    < p > Notificação</p>
        </div>
            
        </div >
    )
}

export default Navbar