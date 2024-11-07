import styles from '../Css/footer.module.css';
import { useNavigate } from 'react-router-dom'


function EventoLogin() {

    const navigate = useNavigate();

    
    // async function meuEvento() {
    //     const emailCampo = document.getElementById('email').value;
    //     const senhaCampo = document.getElementById('senha').value;

    //     let logado = false;

    //     // Validar se os campos estão preenchidos
    //     if (emailCampo === '' || senhaCampo === '') {
    //         alert('Dados necessários não preenchidos!');
    //     } else {
    //         try {
    //             const listaAdministradores = await getAdministradores.json(); // pega os adm da api

    //             console.log(listaAdministradores);

    //             if (listaAdministradores.administradores) {
    //                 listaAdministradores.administradores.forEach((usuario) => {
    //                     if (emailCampo === usuario.email_admin && senhaCampo === usuario.senha_admin) {
    //                         logado = true;
    //                         console.log('Administrador logado com sucesso');
    //                     }
    //                 });
    //             }
    //             if (!logado) {
    //                 alert('Login inválido. Usuário não encontrado ou dados incorretos.');
    //             }

    //         } catch (error) {
    //             console.error('Erro ao consultar os administradores:', error);
    //             alert('Erro na validação do login. Tente novamente mais tarde.');
    //         }
    //     }
    // }

    return (
        <div>
            <button className={styles.button} onClick={() =>{
                navigate('/Usuarios')
            }}>Continuar</button>
        </div>
    );
}

export default EventoLogin;