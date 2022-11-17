import { ChangeEvent, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import { Person } from "../interfaces/person";
import { Alert } from "../interfaces/alert";
import "../assets/css/register.css";



const initialPerson: Person = {
  clientId: 0,
  typeId: "...",
  mail: "",
  address: "",
  statusClient: "...",
  birthday: "",
  numberId: 0,
  firstLastName: "",
  firstName: "",
  secondLastName: "",
  secondName: "",
  phone: "",
  typeClient: "...",
  userCreation: "",
};
export const Register = () => {
  const [person, setPerson] = useState<Person>(initialPerson);
  const handleChange = (e: ChangeEvent) => {    
    const { name, value } = e.target as HTMLInputElement;
    setPerson({
      ...person,
      [name]: value,
    });
  };
  const handleClickRegister = (e:any) => {
    e.preventDefault();
    helpHttp<Alert>()
      .post("http://localhost:8080/api/client", {
        body: person,
      })
      .then(async (newPerson) => {
        console.log(newPerson);
        await loadClientes();
        if(newPerson.message) alert(newPerson.message);
        else {  
        setPerson(initialPerson);
        
        }});
  };

  const handleClickGetPerson = () => {
    helpHttp<Person>()
      .get("http://localhost:8080/api/client/" + person.clientId)
      .then((viewPerson) => {
        console.log(viewPerson);
        setPerson(viewPerson);
      });
  };

  const handleClickDelPerson = () => {
    helpHttp<Person | Alert>()
      .del("http://localhost:8080/api/client/" + person.clientId)
      .then((delPerson) => {console.log(delPerson);
        if ((delPerson as Alert).message) alert((delPerson as Alert).message);
        else setPerson(initialPerson);        
      });
  };

  const handleClickPutPerson = () => {
    helpHttp<Person>()
      .put("http://localhost:8080/api/client/" + person.clientId, {
        body: person,
      })
      .then((newPerson) => {
        console.log(newPerson);
      });
  };

  const [clients, setClientes] = useState <Person[]>([])

  useEffect(() => {
    loadClientes();

  },[]);

  const loadClientes= async () =>{
      const result = await helpHttp<[]>().get("http://localhost:8080/api/clients");
      setClientes(result);
      
  }


  return (
    <>
      <div className="container-form">
        <h1 className="title">BANCO VAJU</h1><br /> 
        <h3> Bienvenidos al banco de tu gente</h3><br /> 
        <h4>En esta sección usted podra crear, consultar y/o eliminar su
          informacion de nuestro Sistema</h4><br />
        <p className="p-cliente">Para consultar o eliminar un cliente inserte el número ID</p>
        <input className="inp-id" value={person.clientId} type="number" name="clientId"  placeholder="Cliente ID" onChange={handleChange}/>&ensp;
        <button onClick={handleClickGetPerson}>Buscar </button>&ensp;
        <button onClick={handleClickDelPerson}>Eliminar</button><br/><br/>
        <p className="p-cliente">Si deseas verificar la informacion de sus cuentas: <br />
        <b>¡Presione Aqui!</b> <button> <Link  to={"/Cuentas"}>Ir a Cuentas</Link></button> </p>
        <p className="p-cliente">Para ir a los movimientos de su cuenta: <b> <br />
        ¡Presione Aqui!</b> <button><Link to={"/Movimientos"}> Ir a tus Movimientos </Link> </button> </p>
        <p className="p-cliente">Para regresar a la página principal :<br />
        <b>¡Presione Aqui!</b> <button> <Link to={"/Home"}> Regresar al home </Link></button> </p>
        <div className="container-form">
        <h2>Formulario Clientes </h2>
          <form action="" className="form-cliente" id="form">
           <div className="input-text-cliente">
              <label className = "lb-cliente" htmlFor="typeId">Tipo Documento:</label>&ensp;
              <select value={person.typeId} name="typeId" id="typeId" onChange={handleChange} >
                <option value="...">...</option>
                <option value="CC">CC</option>
                <option value="CE">CE</option>
                <option value="NIT">NIT</option>
              </select>
              <br />
              <label  className = "lb-cliente" htmlFor="numeroDocumento">Número de Documento:</label> &ensp;
              <input value={person.numberId} type="number" name="numberId" placeholder="Documento de Identidad" onChange={handleChange}/>
              <br />
              <label  className = "lb-cliente" htmlFor="typeClient">Tipo Cliente:</label>&nbsp;
              <select value={person.typeClient} name="typeClient" id="typeClient" onChange={handleChange}>
                <option value="...">...</option>
                <option value="Natural">Natural</option>
                <option value="Juridica">Juridica</option>
              </select>
              <br />
              <label  className = "lb-cliente" htmlFor="statusClient">Estado del Cliente:</label>&ensp;
              <select  value={person.statusClient} name="statusClient" id="statusClient" onChange={handleChange}>
                <option value="...">...</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
              <br />
              <label className = "lb-cliente" htmlFor="address">Dirección:</label>&ensp;
              <input value={person.address} type="text" name="address" placeholder="Ingrese su Direccion" onChange={handleChange} />
               <br />
              <label  className = "lb-cliente" htmlFor="phone">Teléfono:</label>&ensp;
              <input
                value={person.phone}
                type="number"
                name="phone"
                id=""
                placeholder="Ingrese su Telefono"
                onChange={handleChange}
              />{" "}
              <br />
              <label className = "lb-cliente" htmlFor="mail">E-mail:</label>&ensp;
              <input
                value={person.mail}
                type="email"
                name="correo"
                id=""
                placeholder="Ingrese su Correo"
                onChange={handleChange}
              />
              <br />
              <label className = "lb-cliente" htmlFor="firstName">Primer Nombre:</label>&ensp;
              <input
                value={person.firstName}
                type="text"
                name="firstName"
                placeholder="Ingrese Primer Nombre"
                onChange={handleChange}
              />
              <br />
              <label className = "lb-cliente" htmlFor="secondName">Segundo Nombre:</label>&ensp;
              <input
                value={person.secondName}
                type="text"
                name="secondName"
                placeholder="Ingrese Segundo Nombre"
                onChange={handleChange}
              />
              <br />
              <label  className = "lb-cliente" htmlFor="firstLastName">Primer Apellido:</label>&ensp;
              <input
                value={person.firstLastName}
                type="text"
                name="firstLastName"
                placeholder="Ingrese Primer Apelldo"
                onChange={handleChange}
              />
              <br />
              <label  className = "lb-cliente" htmlFor="secondLastName">Segundo Apellido:</label>&ensp;
              <input
                value={person.secondLastName}
                type="text"
                name="secondLastName"
                placeholder="Ingrese Segundo Apelldo"
                onChange={handleChange}
              />
              <br />
              <label  className = "lb-cliente" htmlFor="">Fecha de Nacimiento:</label>&ensp;
              <input
                value={person.birthday}
                type="date"
                name="birthday"
                onChange={handleChange}
              />
              <br />
              <label className = "lb-cliente" htmlFor="userCreation">Creación de Usuario:</label>
              &ensp;
              <input
                value={person.userCreation}
                type="text"
                name="userCreation"
                id=""
                placeholder="Ingrese su usuario"
                onChange={handleChange}
              />
              <br />
              <button onClick={handleClickRegister}>Registrar</button>&ensp;
              <button onClick={handleClickPutPerson}>Actualizar</button>
              <br />
              <br />
            </div>
          </form>
        </div>
      </div>
      <div className="container-table">
        <table className="table-cliente">
          <thead>
            <tr>
              <th scope="Col-1">#</th>
              <th scope="col-2">Cliente Id</th>
              <th scope="col-3">Tipo de Documento</th>
              <th scope="col-4">Número de Documento</th>
              <th scope="col-5">Tipo de Cliente</th>
              <th scope="col-6">Estado de Cliente</th>
              <th scope="col-7">Dirección</th>
              <th scope="col-8">Teléfono</th>
              <th scope="col-9">E-mail</th>
              <th scope="col-10">Primer Nombre</th>
              <th scope="col-11">Segundo Nombre</th>
              <th scope="col-12">Primer Apellido</th>
              <th scope="col-13">Segundo Apellido</th>
              <th scope="col-14">Fecha de Nacimiento</th>
              <th scope="col-15">Usuario</th>
              </tr>
          </thead>
          <tbody>
            {
                clients.map((client, index) => (

                  <tr key={index}> 
                  <th scope="row" >{index + 1}</th>

                  <td>{client.clientId}</td>
                  <td>{client.typeId}</td>
                  <td>{client.numberId}</td>
                  <td>{client.typeClient}</td>
                  <td>{client.statusClient}</td>
                  <td>{client.address}</td>
                  <td>{client.phone}</td>
                  <td>{client.mail}</td>
                  <td>{client.firstName}</td>
                  <td>{client.secondName}</td>
                  <td>{client.firstLastName}</td>
                  <td>{client.secondLastName}</td>
                  <td>{`${new Date(client.birthday).toLocaleDateString("es-CO")}`}</td>
                  <td>{client.userCreation}</td>
                </tr> 
                  ))
            }
            
          </tbody>
        </table>
      </div>
    </>
  );
};