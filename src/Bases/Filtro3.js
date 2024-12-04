import style from '../Css/filtro.module.css'
import React, { useState } from 'react';
import image from '../img/filtro.png'

function Filtro2 () {

    // Estado para controlar se o pop-up está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false);

    // Estado para controlar o estado das checkboxes
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [checkbox4, setCheckbox4] = useState(false);
    const [checkbox5, setCheckbox5] = useState(false);

    // Função para abrir o pop-up
    const abrirPopUp = () => {
        setIsOpen(true);
    };

    // Função para fechar o pop-up
    const fecharPopUp = () => {
        setIsOpen(false);
    };

    // Função para lidar com a mudança de estado das checkboxes
    const handleCheckbox1Change = () => {
        setCheckbox1(prevState => !prevState);
    };

    const handleCheckbox2Change = () => {
        setCheckbox2(prevState => !prevState);
    };

    const handleCheckbox3Change = () => {
        setCheckbox3(prevState => !prevState);
    };

    const handleCheckbox4Change = () => {
        setCheckbox4(prevState => !prevState);
    };

    const handleCheckbox5Change = () => {
        setCheckbox5(prevState => !prevState);
    };

    return (
        <div>
            <div className={style.filtro} onClick={abrirPopUp}>
                <img className={style.filtrar} src={image} alt="Filtro" />
            </div>

            {isOpen && (
                <div className={style.popup}>
                    <div className={style.popupContent}>
                        <button onClick={fecharPopUp} className={style.closeButton}>
                            Fechar
                        </button>
                        <h2>Filtrar</h2>

                        <div className={style.checkboxContainer}>
                            <label>
                                <input className={style.caixinha}
                                    type="checkbox" 
                                    checked={checkbox1} 
                                    onChange={handleCheckbox1Change} 
                                />
                                Em andamento
                            </label>

                            <label>
                                <input className={style.caixinha} 
                                    type="checkbox" 
                                    checked={checkbox2} 
                                    onChange={handleCheckbox2Change} 
                                />
                               Resolvido
                            </label>

                            <label>
                                <input className={style.caixinha}
                                    type="checkbox" 
                                    checked={checkbox3} 
                                    onChange={handleCheckbox3Change} 
                                />
                                Pendente
                            </label>
                            
                        
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filtro2;