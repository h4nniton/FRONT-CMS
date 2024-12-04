// Filtro2.js
import style from '../Css/filtro.module.css'
import React, { useState } from 'react';
import image from '../img/filtro.png';

function Filtro2({ onFilterChange }) {
    // Estado para controlar se o pop-up está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false);

    // Estado para controlar o estado das checkboxes
    const [checkbox1, setCheckbox1] = useState(false); // Pendentes
    const [checkbox2, setCheckbox2] = useState(false); // Realizados

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
        const newValue = !checkbox1;
        setCheckbox1(newValue);
        onFilterChange(newValue, checkbox2); // Passa o novo filtro para o pai
    };

    const handleCheckbox2Change = () => {
        const newValue = !checkbox2;
        setCheckbox2(newValue);
        onFilterChange(checkbox1, newValue); // Passa o novo filtro para o pai
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
                                <input
                                    className={style.caixinha}
                                    type="checkbox"
                                    checked={checkbox1}
                                    onChange={handleCheckbox1Change}
                                />
                                Pendentes
                            </label>

                            <label>
                                <input
                                    className={style.caixinha}
                                    type="checkbox"
                                    checked={checkbox2}
                                    onChange={handleCheckbox2Change}
                                />
                                Realizados
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Filtro2;
