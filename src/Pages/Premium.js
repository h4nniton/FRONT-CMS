import { FaTools } from 'react-icons/fa';
import Header from "../Bases/Header"
import Navbar from "../Bases/Navbar"
import Styles from '../Css/notificacoes.module.css';

function usuarios() {

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
                        <h3>Tela Premium está em construção</h3>
                        <p>Estamos trabalhando nisso, em breve estará disponível!</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default usuarios