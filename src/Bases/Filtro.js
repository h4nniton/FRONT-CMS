import style from '../Css/filtro.module.css';
import React, { useState } from 'react';
import image from '../img/filtro.png';

function Filtro({ setIsFreelancer, setIsCliente }) {
  // Estado para controlar se o pop-up está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Funções para abrir e fechar o pop-up
  const abrirPopUp = () => {
    setIsOpen(true);
  };

  const fecharPopUp = () => {
    setIsOpen(false);
  };

  // Funções para lidar com a mudança das checkboxes
  const handleFreelancerChange = () => {
    setIsFreelancer(prevState => !prevState);
  };

  const handleClienteChange = () => {
    setIsCliente(prevState => !prevState);
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
                  onChange={handleFreelancerChange}
                />
                Freelancer
              </label>

              <label>
                <input
                  className={style.caixinha}
                  type="checkbox"
                  onChange={handleClienteChange}
                />
                Cliente
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filtro;
