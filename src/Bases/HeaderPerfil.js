import styles from '../Css/headerPerfil.module.css'
import { useNavigate } from 'react-router-dom'
import image from '../img/Logo.png'
import img from '../img/do-utilizador.png'

function HeaderPerfil() {
    const navigate = useNavigate();

    return (
        <div className={styles.tela}>
            <img className={styles.logo} src={image} onClick={() => navigate('')}></img>


            <div className={styles.user}>
                <p  onClick={() => navigate('/PerfilAdministrador')}>Emily Crepaldi</p>
                <div className={styles.usericon}>
                <img className={styles.usericonimg} src={img}  onClick={() => navigate('/PerfilAdministrador')} ></img>
                </div>
            </div>
        </div>

    )

}

export default HeaderPerfil;