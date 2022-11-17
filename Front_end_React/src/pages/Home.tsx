import { Link } from "react-router-dom";
import "../assets/css/Home.css"


export default function Home()  {
  return (

    <div className="fondo">
      <h1 className="title">BANCO VAJU</h1>
      <h3 className="slogan"> Bienvenidos al banco de tu gente</h3><br /> <br /> 
    <div className="bloque-home">
        <div>
          <img src="/src/assets/clientes.jpg" />
          <Link className="btn-cliente" to={"/Register"}> Ir a Clientes</Link>
        </div>

        <div>
          <img src="/src/assets/Cuentas.jpg" />          
          <Link className="btn-cuenta" to={"/Cuentas"}> Ir a  Cuentas</Link>
        </div>

        <div>
          <img src="/src/assets/Movimientos.jpg" />
          <Link className="btn-movimiento" to={"/Movimientos"}> Ir a Movimientos</Link>
        </div>
      </div>   
      <footer className="pie-pagina">
      <div className="contenedor-piepagina">
        <ul>
          <li>
            <a href="#">
              <h3>CONTACTENOS</h3>
            </a>
          </li>
          <li>
            <a href="#">
             Bogotá D.C. 3042055905
            </a>
          </li>
          <li>
            <a href="#">
              Calle 80 N° 102 - 64
            </a>
          </li>
          <li>
            <a href="#">
              julio.cuevas@sophossolution.com
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <h3>SERVICIO AL CLIENTE</h3>
            </a>
          </li>
          <li>
            <a href="#">
              Buzón de Sugerencias
            </a>
          </li>
          <li>
            <a href="#">
              Preguntas Frecuentes
            </a>
          </li>
          <li>
            <a href="#">
              Cliente Frecuente
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <h3>LEGAL</h3>
            </a>
          </li>
          <li>
            <a href="#">
              Politica de Privacidad
            </a>
          </li>
          <li>
            <a href="#">
             Aviso de Privacidad
            </a>
          </li>
          <li>
            <a href="#">
              Terminos y Condiciones
            </a>
          </li>
        </ul>

      </div>
    </footer>
      

    </div>
    
  )
}


