import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Register } from './pages/Register';
import { Cuentas } from './pages/Cuentas';
import { Movimientos } from './pages/Movimientos';
import Home from './pages/Home';


const App = () => {
  
  return (
    <div className='App'>
      
          <HashRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/cuentas' element={<Cuentas/>}/>
              <Route path='/Register' element={<Register/>}/>
              <Route path='/Movimientos' element={<Movimientos/>}/>               
            </Routes>
          </HashRouter>
       

           
    </div>    
  )
}

export default App
