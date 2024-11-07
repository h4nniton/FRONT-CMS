import styles from '../Css/formulario.module.css'
import { MdWavingHand } from 'react-icons/md'
import Coluna from '../Bases/Coluna.js'
import EventoLogin from '../Eventos/EventoLogin'


function Login() {
    return (
        <div className={styles.tela}>
            <Coluna />
            <div className={styles.formulario}>
                <h1>Boas vindas ao Jinni administrator < MdWavingHand style={{ color: "#011F4B" }}/> </h1>
                <input className={styles.input} type="email" id="email" placeholder="Email"></input>
                <input className={styles.input} type="password" id="senha" placeholder="Senha"></input>
                <EventoLogin />
            </div>
            
            
        </div>
        
    )
}

export default Login