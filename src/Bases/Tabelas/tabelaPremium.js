import style from '../../Css/tabelaPremium.module.css'
import { Table } from 'react-bootstrap';
import React, { useState } from 'react';
import Filtro from '../Filtro.js';
import historico from '../../img/historico.png'
import conta from '../../img/conta.png'
import notificacao from '../../img/notificacao-azul.png'

const TabelaPremium = () => {
    const [popupAberto, setPopupAberto] = useState(null);

    const abrirPopUpHistorico = () => {
        setPopupAberto('historico');
    };

    const abrirPopUpNotificacao = () => {
        setPopupAberto('notificacao');
    };

    const fecharPopUp = () => {
        setPopupAberto(null);
    };

    return (
        <div className={style.tabela}>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Benefícios</th>
                        <th>Histórico</th>
                        <th>Perfil</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Jessica Pereira</td>
                        <td>jessica@gmail.com</td>
                        <td>Bla bla bla bla</td>
                        <td>Bla bla bla bla</td>
                        <td>
                            <img
                                src={historico}
                                alt="Historico"
                                className={style.imagemPopup}
                                onClick={abrirPopUpHistorico}
                                style={{ cursor: 'pointer' }}
                            />
                        </td>
                        <td>Freelancer</td>
                        <td>
                            <img src={notificacao} className={style.botaoNotificacao} onClick={abrirPopUpNotificacao}/>
                        </td>
                    </tr>

                    
                </tbody>
            </Table>
            <Filtro />

            {popupAberto === 'historico' && (
                <div className={style.popup}>
                    <div className={style.popupContent}>
                        <button onClick={fecharPopUp} className={style.closeButton}>Fechar</button>
                        <h2>Histórico de pagamento</h2>
                        <img src={conta} alt="Historico de pagamento" className={style.popupImagem} />
                    </div>
                </div>
            )}

            {popupAberto === 'notificacao' && (
                <div className={style.popup}>
                    <div className={style.popupContent}>
                        <button onClick={fecharPopUp} className={style.closeButton}>Fechar</button>
                        <h2>Deseja enviar uma notificação personalizada?</h2>
                        <img src={notificacao} alt="Notificacao" className={style.popupImagem2} />
                        <div className={style.botaoEscolha}> 
                            <button className={style.escolhas}>Sim</button>
                            <button className={style.escolhas}>Não</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabelaPremium;