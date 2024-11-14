import Header from "../Bases/Header"
import Navbar from "../Bases/Navbar"
import Styles from "../Css/disputas.module.css"
import TabelaDisputa from "../Bases/Tabelas/tabelaDisputas"

function Disputas() {

    return (
        <div className={Styles.tela}>
            <Header />
            <div className={Styles.config}>
                <Navbar />
                <TabelaDisputa/>
            </div>
        </div>
    )

}

export default Disputas;