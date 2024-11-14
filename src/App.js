import Login from './Pages/Login.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Usuarios from './Pages/Usuarios.js'
import Pagamentos from './Pages/Pagamentos.js'
import Disputas from './Pages/Disputas.js'
import Premium from './Pages/Premium.js'
import Notificacoes from './Pages/Notificacoes.js'
import PerfilAdministrador from './Pages/PerfilAdministrador.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Usuarios' element={<Usuarios/>}></Route>
        <Route path='/Pagamentos' element={<Pagamentos/>}></Route>
        <Route path='/Disputas' element={<Disputas/>}></Route>
        <Route path='/Premium' element={<Premium/>}></Route>
        <Route path='/Notificacao' element={<Notificacoes/>}></Route>
        <Route path='/Perfil-Administrador' element={<PerfilAdministrador/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
