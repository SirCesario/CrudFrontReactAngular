import { ChangeEvent, useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { Link } from "react-router-dom";
import { Movimiento } from "../interfaces/movimiento";
import "../assets/css/movimientos.css";
import { Alert } from "../interfaces/alert";



const initialMovimiento: Movimiento = {

    transactionId:0,
    accountId:0,
    type:"...",
    value:0,
    period:"...",
    status:"...",
    transactionDate:"",
    transactionCreation:"",
    userCreation:"",
    modificationDate:"",
    userModification:""

}

export const Movimientos = () => {
    const [movimiento,setMovimiento] = useState<Movimiento>(initialMovimiento);
    const handleChange = (e:ChangeEvent) =>{
        const{name,value} = (e.target as HTMLInputElement);
        setMovimiento({
            ...movimiento,
             [name]:value
            });
    }

    const handleClickMovimiento = () => {
        helpHttp<Movimiento | Alert>().post('http://localhost:8080/api/transaction/',{
            body:movimiento
        })
        .then((newMovimiento) => {
            console.log(newMovimiento);
            if((newMovimiento as Alert).message) alert ((newMovimiento as Alert).message);
            else setMovimiento(initialMovimiento);
            
        })
    }

    const handleClickGetMovimimiento = () => {
        helpHttp<Movimiento>().get("http://localhost:8080/api/transaction/" + movimiento.transactionId)
        .then((viewMovimiento) => {
            console.log(viewMovimiento);
            setMovimiento(viewMovimiento);            
        } )
    }

    const handleClickDelMovimimiento = () => {
        helpHttp<Movimiento | Alert >().del("http://localhost:8080/api/transaction/" + movimiento.transactionId)
        .then((delMovimiento) => {
            if ((delMovimiento as Alert).message) alert((delMovimiento as Alert).message);
            else setMovimiento(initialMovimiento);            
        } );
    }


    const handleClickPutMovimimiento = () => {
        helpHttp<Movimiento>().put("http://localhost:8080/api/transaction/" + movimiento.transactionId,{
            body:movimiento
        })
        .then((newMovimiento) => {
            console.log(newMovimiento);         
        } )
    }

    const [movimientos, setMovimientos] = useState<Movimiento[]>([])

    useEffect(() => {
      loadMovimientos();
  
    },[]);
  
    const loadMovimientos= async () =>{
        const result = await helpHttp<[]> ().get("http://localhost:8080/api/transactions");
        setMovimientos(result);
        
    }

    return (

        <>  
            <div className="container-form-movimiento">
            <h1 className="title">BANCO VAJU</h1><br />
            <h3 className="slogan"> Bienvenidos al banco de tu gente</h3><br /> <br />          
            <h4> En esta seccion usted podra crear , ver, actualizar y/o eliminar sus movimientos Bancarios</h4><br/>                       
            <p>Para consultar o eliminar un movimiento inserte el Código ID</p>
            <input value={movimiento.transactionId} type="number" name="transactionId" placeholder="Movimiento ID" onChange={handleChange}/>&ensp;
            <button onClick={handleClickGetMovimimiento}>Buscar  </button>&ensp;
            <button onClick={handleClickDelMovimimiento}>Eliminar</button>
            <form action="" className="form-movimiento" id="form"> 
            <div className="input-text-movimiento">
            <h2>Formulario de Movimientos</h2><br />
            <label htmlFor="accountId">Id de Cuenta:</label>&ensp;
            <input value={movimiento.accountId} type="number" name='accountId' placeholder="Id de Cuenta" onChange={handleChange}/><br />
            <label htmlFor="type">Tipo de Movimiento:</label>&nbsp;
            <select value = {movimiento.type}  name="type" id="type" onChange={handleChange}>
                <option value="...">...</option>
                <option value="Consignacion">Consignación</option>
                <option value="Retiro">Retiro</option>
                <option value="Otros">Otros</option>
            </select><br />
            <label htmlFor="value">Valor:</label>&ensp;
            <input value={movimiento.value} type="number" name="value" placeholder="Ingrese el Valor" onChange={handleChange}/><br />
            <label htmlFor="period">Periodo de Pago :</label>&nbsp;
            <select value = {movimiento.period} name="period" id="period" onChange={handleChange}>
                <option value="...">...</option>
                <option value="Quincenal">Quincenal</option>
                <option value="Mensual">Mensual</option>
                <option value="Semestral">Semestral</option>
            </select><br />
            <label htmlFor="status">Estado de Movimiento: </label>&nbsp;
            <select value = {movimiento.status} name="status" id="status" onChange={handleChange}>
                <option value="...">...</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
            </select><br />
            <label htmlFor="userCreation">Ingrese su Usuario:</label>&ensp;
            <input value={movimiento.userCreation} type="text" name="userCreation" id="" placeholder="Ingrese su usuario" onChange={handleChange}/><br />
            <label htmlFor="userModification">Confirme su Usuario: </label>&ensp;
            <input value={movimiento.userModification} type="text" name="userModification" id="" placeholder="Confirme su Usuario" onChange={handleChange}/><br />
            <button onClick={handleClickMovimiento}>Crear  </button>&ensp;<button onClick={handleClickPutMovimimiento}>Actualizar </button><br /><br />
            </div>
            </form>
            <p>Para regresar al Menu de  cuentas :<br />
            <b>¡Presione Aqui!</b><button> <Link  to={"/Cuentas"}>Ir a Cuentas</Link> </button></p>  
            <p>Para regresar al menu de clientes:<br />
            <b>¡Presione Aqui!</b><button><Link to={"/Register"}>Ir a Clientes</Link> </button></p> 
            <p>Para regresar a la página principal :<br />
            <b>¡Presione Aqui!</b><button> <Link  to={"/Home"}>Regresar al home </Link></button></p>
        </div>
        <div className="container-table-movimiento">
        <table className="table-movimiento">
          <thead>
            <tr>
              <th>N°</th>
              <th scope="col-2">Movimiento Id </th>
              <th scope="col-3">Cuenta Id</th>
              <th scope="col-4">Tipo de Movimiento</th>
              <th scope="col-5">Valor</th>
              <th scope="col-6">Periodo de Pago</th>
              <th scope="col-7">Estado</th>
              <th scope="col-8">Fecha de Movimiento</th>
              <th scope="col-9">Fecha de Creación</th>
              <th scope="col-10">Usuario de Creación</th>
              <th scope="col-11">Fecha de Modificación</th>
              <th scope="col-12">Usuario de Modificación</th>
            </tr>
          </thead>
          <tbody>
            {
                movimientos.map((transaction, index) =>(

                  <tr key={index}>
                    <th scope="row">{index + 1}</th>               
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.accountId}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.value}</td>
                  <td>{transaction.period}</td>
                  <td>{transaction.status}</td>
                  <td>{`${new Date(transaction.transactionDate).toLocaleDateString("es-CO")}`}</td>
                  <td>{`${new Date(transaction.transactionCreation).toLocaleDateString("es-CO")}`}</td>
                  <td>{transaction.userCreation}</td>
                  <td>{`${new Date(transaction.modificationDate).toLocaleDateString("es-CO")}`}</td>
                  <td>{transaction.userModification}</td>
                </tr> 

                  ))
            }
            
          </tbody>
        </table>
      </div>

        </>


    )





}