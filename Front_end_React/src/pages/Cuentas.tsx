import { ChangeEvent,useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import { Cuenta } from "../interfaces/cuenta";
import "../assets/css/cuentas.css";
import { Alert } from "../interfaces/alert";



const initialCuenta:Cuenta = {

    accountId:0,
    clientId:0,
    product:"...",
    statusAccount:"...",
    creditValue:"",
    openDate: "",
    creationDate:"",
    userCreation:"",
    modificationDate:"",
    userModification:""
}

export const Cuentas = () =>{
    const [cuenta,setCuentas] = useState<Cuenta>(initialCuenta);
    const handleChange = (e:ChangeEvent) =>{
        const {name,value} = (e.target as HTMLInputElement);
        setCuentas({
            ...cuenta,
            [name]:value
        });
    }

    const handleClickCuentas = () =>{
        helpHttp<Cuenta | Alert>().post("http://localhost:8080/api/account",{
            body:cuenta
        })
        .then((newCuenta) => {
            console.log(newCuenta);
         if((newCuenta as Alert).message) alert ((newCuenta as Alert).message);
         else setCuentas(initialCuenta);          
        })

    }

    const handleClickGetCuentas = ()=>{
        helpHttp<Cuenta>().get('http://localhost:8080/api/account/'+ cuenta.accountId)
        .then((viewCuenta) => {
            console.log(viewCuenta);
            setCuentas(viewCuenta);
        })
    }

    const handleClickDelCuentas = ()=>{
        helpHttp<Cuenta | Alert >().del('http://localhost:8080/api/account/'+ cuenta.accountId)
        .then((delCuenta) => {
            console.log(delCuenta);
            if((delCuenta as Alert).message) alert((delCuenta as Alert).message);
            setCuentas(initialCuenta);
        })
    }

    const handleClickPutCuentas = ()=>{
        helpHttp<Cuenta>().put('http://localhost:8080/api/account/'+ cuenta.accountId,{
            body:cuenta
        })
        .then((newCuenta) => {
            console.log(newCuenta);
        
        })
    }


    const [cuentas, setTableCuentas] = useState <Cuenta[]> ([])

    useEffect(() => {
      loadCuentas();
  
    },[]);
  
    const loadCuentas= async () =>{
        const result = await helpHttp<[]> ().get("http://localhost:8080/api/accounts");
        setTableCuentas(result);
        
    }
  


    return(
        <>
            <div className="container-form-cuenta">
            <h1 className="title">BANCO VAJU</h1><br />
            <h3 className="slogan"> Bienvenidos al banco de tu gente</h3><br /> <br />          
            <h4> En esta sección podras crear , consultar ver y/o eliminar una cuenta en nuestro Sistema</h4><br/>            
            <p>Para consultar o eliminar una Cuenta inserte el número de la Cuenta ID</p>
            <input value={cuenta.accountId} type= "number" name="accountId" placeholder="Cuenta ID" onChange={handleChange}/>&ensp;
            <button onClick={handleClickGetCuentas}>Buscar </button>&ensp;
            <button onClick={handleClickDelCuentas}>Eliminar </button>
            <div className="container-form-cuenta">
            <form action="" className="form-cuenta" id="form"> 
            <div className="input-text-cuenta">
            <h2 className="form-title">Formulario Cuentas</h2><br/><br/>
            <label htmlFor="clientId">Ingrese el ID del Cliente al Cual desea asociar la Cuenta:</label>&ensp;
            <input value={cuenta.clientId} type="number" name='clientId' placeholder="Id de Cliente" onChange={handleChange}/><br />
            <label htmlFor="statusAccount" > Estado de Cuenta: </label>&nbsp;
            <select value = {cuenta.statusAccount} name="statusAccount" id="statusAccount" onChange={handleChange}>
                <option value="...">...</option>
                <option value="Activa">Activa</option>
                <option value="Inactiva">Inactiva</option>
            </select><br/>
            <label htmlFor="product">Producto:</label>&ensp;
            <select value={cuenta.product} name="product" id="product" onChange={handleChange}>
                <option value="...">...</option>
                <option value="Credito">Credito</option>
                <option value="Prestamo">Prestamo</option>
                <option value="Ahorro">Ahorro</option>
            </select><br/>
            <label htmlFor="creditValue">Valor del Credito:</label>&ensp;
            <input value={cuenta.creditValue} type="string" name="creditValue" id="" placeholder="Ingrese el Valor del Credito" onChange={handleChange}/> <br />
            <label htmlFor="userCreation">Ingrese su Usuario:</label>&ensp;
            <input value={cuenta.userCreation} type="text" name="userCreation" id="" placeholder="Ingrese su usuario" onChange={handleChange}/><br/>
            <label htmlFor="userModification">Confirme su Usuario:</label>&ensp;
            <input value={cuenta.userModification} type="text" name="userModification" id="" placeholder="Confirmacion de Usuario" onChange={handleChange}/><br/>
            <button onClick={handleClickCuentas}>Crear </button>&ensp;<button onClick={handleClickPutCuentas}>Actualizar </button><br/><br/>            
        </div>
    </form>
            <p>Para regresar al menu principal : <br/>
            <b>¡Presione Aqui!</b> <button> <Link to={"/Register"}>Ir a Clientes</Link></button></p>
            <p>Para ir a los movimientos de su cuenta: <br/>
            <b>¡Presione Aqui!</b></p><button><Link to={"/Movimientos"}>Ir a tus Movimientos </Link></button>
            <p>Para regresar a la página principal: <br/>
            <b>¡Presione Aqui!</b></p> <button><Link to={"/Home"}>Regresar al home </Link> </button>
        </div>
    </div>

        <div className="container-table-cuenta">
        <table className="table-cuenta">
          <thead>
            <tr>  
                <th>N°</th>            
              <th>Cuenta Id</th>
              <th>Cliente Id</th>
              <th>Producto</th>
              <th>Estado de Cuenta</th>
              <th>Valor del Crédito</th>
              <th>Fecha de Apertura</th>
              <th>Fecha de Creación</th>
              <th>Usuario de Creación</th>
              <th>Fecha de Modificación</th>
              <th>Usuario de Modificacion</th>
    </tr>
          </thead>
          <tbody>
            {
                cuentas.map((account, index) =>(
                  <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{account.accountId}</td>
                  <td>{account.clientId}</td>
                  <td>{account.product}</td>
                  <td>{account.statusAccount}</td>
                  <td>{account.creditValue}</td>
                  <td>{`${new Date(account.openDate).toLocaleDateString("es-CO")}`}</td>
                  <td>{`${new Date(account.creationDate).toLocaleDateString("es-CO")}`}</td>
                  <td>{account.userCreation}</td>
                  <td>{`${new Date(account.modificationDate).toLocaleDateString("es-CO")}`}</td>
                  <td>{account.userModification}</td>
                 
                </tr> 

                  ))
            }
            
          </tbody>
        </table>
      </div>  
</>
        

    );

};