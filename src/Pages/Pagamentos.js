import Header from "../Bases/Header"
import Navbar from "../Bases/Navbar"
import Styles from "../Css/pagamentos.module.css"
import TabelaPagamento from "../Bases/Tabelas/tabelaPagamentos.js"

function usuarios() {

    return (
        <div className={Styles.tela}>
            <Header />
            <div className={Styles.config}>
                <Navbar/>
                <TabelaPagamento/>
            </div>

        </div>
    )

}

export default usuarios