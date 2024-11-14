import HeaderPerfil from '../Bases/HeaderPerfil';
import Navbar from '../Bases/Navbar.js'
import Styles from '../Css/perfilAdministrador.module.css'

function PerfilAdministrador () {

    return (
        <div className={Styles.tela}>
            <HeaderPerfil />
            <div className={Styles.config}>
                <Navbar/>
            </div>

        </div>
    )
}

export default PerfilAdministrador;