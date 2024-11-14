import Header from "../Bases/Header"
import Navbar from "../Bases/Navbar"
import Styles from "../Css/user.module.css"
import TabelaPremium from "../Bases/Tabelas/tabelaPremium.js"

function usuarios() {

    return (
        <div className={Styles.tela}>
            <Header />
            <div className={Styles.config}>
                <Navbar/>
                <TabelaPremium/>
            </div>

        </div>
    )

}

export default usuarios