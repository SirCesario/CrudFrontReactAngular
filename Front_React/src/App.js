/* eslint-disable eqeqeq */
import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {  Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Swal from "sweetalert2";

const url = "http://localhost:8080/api/cliente/";
const UrlGet = "http://localhost:8080/api/clientes";

class App extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      clienteId: 0,
      tipoId: "...",
      correo: "",
      direccion:" ",
      estadoCliente: "...",
      fechaNacimiento: " ",
      numeroId: 0,
      primerApellido: " ",
      primerNombre:"",
      segundoApellido:"",
      segundoNombre:"",
      telefono:"",
      tipoCliente: "...",
      usuarioCreacion: "",
      tipoModal: "",
    }
  };

  peticionGet = () => {
    axios.get(UrlGet)
      .then((response) => {
        this.setState({ data: response.data});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    delete this.state.form.clienteId;
    await axios.post(url, this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
        Swal.fire("Cliente Creado con Exito")
      })
      .catch((error) => {
        console.log(error.message);        
      });
  };

  peticionPut = async () => {
   await axios.put(url + this.state.form.clienteId, this.state.form).then((response) => {
      this.modalInsertar();
      this.peticionGet();
    });
  };

  peticionDelete = () => {
    axios.delete(url + this.state.form.clienteId).then((response) => {
      this.setState({ modalEliminar: false });
      this.peticionGet();
    });
  };

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  seleccionarCliente = (clienteId) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        clienteId: clienteId.clienteId,
        tipoId: clienteId.tipoId,
        correo: clienteId.correo,
        direccion: clienteId.direccion,
        estadoCliente: clienteId.estadoCliente,
        fechaNacimiento: clienteId.fechaNacimiento,
        numeroId: clienteId.numeroId,
        primerApellido: clienteId.primerApellido,
        primerNombre: clienteId.primerNombre,
        segundoApellido: clienteId.segundoApellido,
        segundoNombre: clienteId.segundoNombre,
        telefono: clienteId.telefono,
        tipoCliente: clienteId.tipoCliente,
        usuarioCreacion: clienteId.usuarioCreacion
      },
    });
  };

  handleChange = async (e) => {
    e.persist();
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    const { form } = this.state;
    return (

      <><header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div><a href="https://www.sophossolutions.com/es/" className="navbar-brand">Gestion de Clientes</a></div>
        </nav>
      </header><div className="App">
          <br />
          <br />
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              this.setState({ form: null, tipoModal: "insertar" });
              this.modalInsertar();
            } }
          >
            Crear Cliente
          </button>
          <br />
          <br />
          <table className="table ">
            <thead>
              <tr>

                <th>Cliente Id</th>
                <th>Tipo de Documento</th>
                <th>Número de Documento</th>
                <th>Tipo de Cliente</th>
                <th>Estado de Cliente</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>E-mail</th>
                <th>Primer Nombre</th>
                <th>Segundo Nombre</th>
                <th>Primer Apellido</th>
                <th>Segundo Apellido</th>
                <th>Fecha de Nacimiento</th>
                <th>Usuario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((cliente) => {
                return (
                  <tr>

                    <td>{cliente.clienteId}</td>
                    <td>{cliente.tipoId}</td>
                    <td>{cliente.numeroId}</td>
                    <td>{cliente.tipoCliente}</td>
                    <td>{cliente.estadoCliente}</td>
                    <td>{cliente.direccion}</td>
                    <td>{cliente.telefono}</td>
                    <td>{cliente.correo}</td>
                    <td>{cliente.primerNombre}</td>
                    <td>{cliente.segundoNombre}</td>
                    <td>{cliente.primerApellido}</td>
                    <td>{cliente.segundoApellido}</td>
                    <td>{`${new Date(cliente.fechaNacimiento).toLocaleDateString("es-CO")}`}</td>
                    <td>{cliente.usuarioCreacion}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.seleccionarCliente(cliente);
                          this.modalInsertar();
                        } }
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      {"   "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.seleccionarCliente(cliente);
                          this.setState({ modalEliminar: true });
                        } }
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader style={{ display: "block" }}>
              <span
                style={{ float: "right" }}
                onClick={() => this.modalInsertar()}
              >
                x
              </span>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="clienteId">Cliente ID</label>
                <input
                  className="form-control"
                  type="number"
                  name="clienteId"
                  id="clienteId"
                  readOnly
                  onChange={this.handleChange}
                  value={form ? form.clienteId : this.state.data.length + 1} />
                <br />
                <label htmlFor="tipoId">Tipo de Documento</label>
                <input
                  className="form-control"
                  type="tex"
                  name="tipoId"
                  id="tipoId"
                  onChange={this.handleChange}
                  value={form ? form.tipoId : ""} />
                <label htmlFor="numeroId">Numero de Documento</label>
                <input
                  className="form-control"
                  type="number"
                  name="numeroId"
                  id="numeroId"
                  onChange={this.handleChange}
                  value={form ? form.numeroId : ""} />
                <br />
                <label htmlFor="tipoCliente">Tipo de Cliente</label>
                <input
                  className="form-control"
                  type="text"
                  name="tipoCliente"
                  id="tipoCliente"
                  onChange={this.handleChange}
                  value={form ? form.tipoCliente : ""} />
                <br />
                <label htmlFor="estadoCliente">Estado del Cliente</label>
                <input
                  className="form-control"
                  type="text"
                  name="estadoCliente"
                  id="estadoCliente"
                  onChange={this.handleChange}
                  value={form ? form.estadoCliente : ""} />
                <label htmlFor="direccion">Dirección</label>
                <input
                  className="form-control"
                  type="text"
                  name="direccion"
                  id="direccion"
                  onChange={this.handleChange}
                  value={form ? form.direccion : ""} />
                <label htmlFor="telefono">Telefono</label>
                <input
                  className="form-control"
                  type="number"
                  name="telefono"
                  id="telefono"
                  onChange={this.handleChange}
                  value={form ? form.telefono : ""} />
                <label htmlFor="e-mail">E-mail</label>
                <input
                  className="form-control"
                  type="text"
                  name="correo"
                  id="correo"
                  onChange={this.handleChange}
                  value={form ? form.correo : ""} />
                <label htmlFor="primerNombre">Primer Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="primerNombre"
                  id="primerNombre"
                  onChange={this.handleChange}
                  value={form ? form.primerNombre : ""} />
                <label htmlFor="segundoNombre">Segundo Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="segundoNombre"
                  id="segundoNombre"
                  onChange={this.handleChange}
                  value={form ? form.segundoNombre : ""} />
                <label htmlFor="primerApellido">Primer Apellido</label>
                <input
                  className="form-control"
                  type="text"
                  name="primerApellido"
                  id="primerApellido"
                  onChange={this.handleChange}
                  value={form ? form.primerApellido : ""} />
                <label htmlFor="segundoApellido">Segundo Apellido</label>
                <input
                  className="form-control"
                  type="text"
                  name="segundoApellido"
                  id="segundoApellido"
                  onChange={this.handleChange}
                  value={form ? form.segundoApellido : ""} />
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input
                  className="form-control"
                  type="date"
                  name="fechaNacimiento"
                  id="fechaNacimiento"
                  onChange={this.handleChange}
                  value={form ? form.fechaNacimiento : ""} />
                <label htmlFor="usuarioCreacion">Usuario de Creario</label>
                <input
                  className="form-control"
                  type="text"
                  name="usuarioCreacion"
                  id="usuarioCreacion"
                  onChange={this.handleChange}
                  value={form ? form.usuarioCreacion : ""} />

              </div>
            </ModalBody>

            <ModalFooter>
              {this.state.tipoModal == "insertar" ? (
                <button
                  className="btn btn-success"
                  onClick={() => this.peticionPost()}
                >
                  Crear
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => this.peticionPut()}
                >
                  Actualizar
                </button>
              )}
              <button
                className="btn btn-danger"
                onClick={() => this.modalInsertar()}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
              Estás seguro que deseas eliminar el cliente {form && form.clienteId}
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-danger"
                onClick={() => this.peticionDelete()}
              >
                Sí
              </button>
              <button
                className="btn btn-success"
                onClick={() => this.setState({ modalEliminar: false })}
              >
                No
              </button>
            </ModalFooter>
          </Modal>
        </div>
                
            <footer className="footer">
                   <span className="text-muted">Todos los derechos reservados 2022 @Cesario</span>                    
            </footer> 

        </>
    );
  }
}
export default App;
