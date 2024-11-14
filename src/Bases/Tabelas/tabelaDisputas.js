import style from '../../Css/tabelaDisputas.module.css'
import { Table } from 'react-bootstrap';
import React, { useState } from 'react';
import Filtro3 from '../Filtro3.js';
import arquivo from '../../img/imagem.png'
import vazio from '../../img/empty-box.png'

const TabelaDisputa = () => {
    // Estado para controlar se o pop-up está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false);

    // Função para abrir o pop-up
    const abrirPopUp = () => {
        setIsOpen(true);
    };

    // Função para fechar o pop-up
    const fecharPopUp = () => {
        setIsOpen(false);
    };

    return (
        <div className={style.tabela}>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Comentário</th>
                        <th>Arquivo</th>
                        <th>Status</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Não efetuou meu pagamento.</td>
                        <td>
                            <img
                                src={arquivo}
                                alt="Arquivo"
                                className={style.imagemPopup}
                                onClick={abrirPopUp}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Em andamento</td>
                        <td>Freelancer</td>
                    </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>

                <tr>
                    <td>Jessica Pereira</td>
                    <td>jessica@gmail.com</td>
                    <td>Não efetuou meu pagamento.</td>
                    <td>
                        <img
                            src={arquivo}
                            alt="Arquivo"
                            className={style.imagemPopup}
                            onClick={abrirPopUp}
                            style={{ cursor: 'pointer' }}
                        />
                    </td>
                    <td>Em andamento</td>
                    <td>Freelancer</td>
                </tr>
                </tbody>

            </Table>
            <Filtro3/>

            {isOpen && (
                <div className={style.popup}>
                    <div className={style.popupContent}>
                        <button onClick={fecharPopUp} className={style.closeButton}>Fechar</button>
                        <h2>Detalhes do Arquivo</h2>
                        <img src={vazio} alt="Detalhes do arquivo" className={style.popupImagem} />
                    </div>
                </div>
            )}



        </div>




    );
};


export default TabelaDisputa;