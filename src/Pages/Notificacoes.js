import { FaTools } from 'react-icons/fa'; // Ícone de ferramentas (ou qualquer outro ícone)
import Styles from '../Css/notificacoes.module.css';
import Header from '../Bases/Header';
import Navbar from '../Bases/Navbar';

function Notificacoes() {
    return (
        <div className={Styles.tela}>
            <Header />
            <div className={Styles.config}>
                <Navbar />

                <div className={Styles.notificacoes}>
                    <div className={Styles.titulo}>
                        
                    </div>
                    <div className={Styles.emConstrucao}>
                        <FaTools size={50} className={Styles.iconConstrucao} />
                        <h3>Tela de notificação está em construção</h3>
                        <p>Estamos trabalhando nisso, em breve estará disponível!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notificacoes;
