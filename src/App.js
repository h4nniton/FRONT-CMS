import Login from './Pages/Login.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Usuarios from './Pages/Usuarios.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Usuarios' element={<Usuarios/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
