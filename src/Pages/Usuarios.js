import Header from "../Bases/Header"
import Navbar from "../Bases/Navbar"
import Styles from "../Css/user.module.css"
import tabelaUsuario from "../Bases/Tabelas/tabelaUsuarios"

function usuarios() {

    return (
        <div className={Styles.tela}>
            <Header />
            <div className={Styles.config}>
                <Navbar />
                <tabelaUsuario />
            </div>

        </div>
    )

}

export default usuarios