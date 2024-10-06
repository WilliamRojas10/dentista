import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Pages/Form.css";

import { Input } from "../components/Input.jsx";
import Select from "../components/Select.jsx";
import ModalConfirmation from "../components/ModalConfirmation.jsx";
import ModalWarning from '../components/ModalWarning.jsx';
import axios from 'axios';

import { calculateAge } from "../Utils/calculateAge.js";


const paises = [
  "Argentina", "Brasil", "Chile", "Bolivia", "Colombia", "Ecuador", "Perú",
  "Uruguay", "Venezuela", "Paraguay", "España", "Estados Unidos", "Italia"
];
const codigosArea = ["+54", "+1"];


function CRUPatient() {
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
  const [openModalWarning, setOpenModalWarning] = useState(false);
  const [messageWarning, setMessageWarning] = useState("");
  const { idPaciente } = useParams();

  const [codigoArea, setCodigoArea] = useState("");
  const [edad, setEdad] = useState("");
  const [formData, setFormData] = useState({
    nombre: "william",
    apellido: "rojas",
    fechaNacimiento: "2000-03-24", //En este formato tiene que venir del back
    //edad: "",
    lugarTrabajo: "",
    jerarquia: "",
    actividad: "",
    titular: "",
    //codigoArea: "+549",
    telefono: "+54 3517477399",
    nacionalidad: "",
    dni: "",
    email: "",
    localidad: "",
    barrio: "",
    calle: "",
    numero: "",
  });
  const [isEditable, setIsEditable] = useState(false);


  useEffect(() => {
    obtenerPaciente();
    setEdad(calculateAge(formData.fechaNacimiento));
  }, []);



  const obtenerPaciente = async () => {
    try {
      const response = await axios.get(`http://localhost:5292/api/Paciente/ObtenerPacientePorId/${idPaciente}`);
      const data = await response.json();
    } catch (error) {
      console.error('Error al obtener los pacientes del backend:', error);
      setOpenModalWarning(true);
      setMessageWarning(error.message);
    }
  };

  const guardarCambios = async () => {
    const datos = {
      ...formData
    };

    try {
      const response = await axios.post('http://localhost:5292/api/Paciente/Guardar', datos);

    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      setOpenModalWarning(true);
      setMessageWarning(error.message);
    }
  };


  const handleFormat = () => {
    const resetData = { ...formData };
    Object.keys(resetData).forEach((key) => {
      resetData[key] = "";
    });
    setFormData(resetData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'fechaNacimiento') {
      const age = calculateAge(value);
      setEdad(age);
    }
    if (name === 'codigoArea') {
      setCodigoArea(value);
    }
    else if (name === 'telefono') {
      setFormData({ ...formData, [name]: value });
    }
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const imprimirPorConsola = () => {

    const updatedFormData = { ...formData };

    if (codigoArea && formData.telefono) {
      updatedFormData.telefono = `${codigoArea} ${formData.telefono}`;
    }

    Object.keys(updatedFormData).forEach((key) => {
      console.log(key, ": ", updatedFormData[key]);
    });

    setFormData(updatedFormData);

    setIsEditable(false);
    setOpenModalConfirmation(false);
  };

  return (
    <div className="edit" id={isEditable ? "edit-active" : "show"}>
      {openModalConfirmation && (
        <ModalConfirmation
          tittleConfirmation={"Advertencia"}
          textConfirmation={"¿Está seguro que sea guardar los cambios de edición del paciente?"}
          openModal={() => {
            setOpenModalConfirmation(false);
          }}
          confirmAction={() => {
            imprimirPorConsola();//llama al back para guardar los cambios
            guardarCambios()
          }}
          textButtonClose={"Cancelar"}
          textButtonConfirmation={"Aceptar"}
        />
      )}

      {openModalWarning && (
        <ModalWarning
          tittleWarning={"Error"}
          textWarning={messageWarning}
          openModal={() => {
            setOpenModalWarning(false);
          }}
          textButton={"Aceptar"}
        />
      )}

      <form className="form">
        <h2>Datos del Paciente</h2>
        <div className="container-4 ">
          <Input
            nombreGrupo="nombre"
            label="Nombre:"
            tipoInput="text"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            disabled={!isEditable}  // El campo está deshabilitado si no está en modo edición
          />
          <Input
            nombreGrupo="apellido"
            label="Apellido:"
            tipoInput="text"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            disabled={!isEditable} // Igual para este campo
          />
          <Input
            nombreGrupo="fechaNacimiento"
            label="Fecha de Nacimiento:"
            tipoInput="date"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="edad"
            label="Edad:"
            tipoInput="text"
            placeholder="Edad"
            value={edad}
            onChange={handleChange}
            disabled={true}
          />
        </div>

        <div className="container-4">
          <Input
            nombreGrupo="lugarTrabajo"
            label="Lugar de trabajo:"
            tipoInput="text"
            placeholder="Empresa Neps"
            value={formData.lugarTrabajo}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="jerarquia"
            label="Jerarquía:"
            tipoInput="text"
            placeholder="Scrum master"
            value={formData.jerarquia}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="actividad"
            label="Actividad:"
            tipoInput="text"
            placeholder="Programador"
            value={formData.actividad}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="titular"
            label="Titular:"
            tipoInput="text"
            placeholder="No se a que se refiere"
            value={formData.titular}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="container-4">
          <div className="container-1">
            <Select
              nombreGrupo="codigoArea"
              label="Teléfono:"
              placeholder="Área 🌐"
              opciones={codigosArea}
              value={codigoArea}
              onChange={handleChange}
              disabled={!isEditable}
            />
            <Input
              nombreGrupo="telefono"
              label="."
              tipoInput="text"
              placeholder="351 123 4567"
              value={formData.telefono}
              onChange={handleChange}
              disabled={!isEditable}
            />
          </div>
          <Select
            nombreGrupo="nacionalidad"
            label="Nacionalidad:"
            placeholder="Seleccionar"
            opciones={paises}
            value={formData.nacionalidad}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="dni"  // Cambiado de 'documento' a 'dni' para que se pueda agregar valores en el input
            label="Nº de documento:"
            tipoInput="text"
            placeholder="DNI: 12.345.987"
            value={formData.dni}
            onChange={handleChange}
            disabled={!isEditable}
          />

          <Input
            nombreGrupo="email"
            label="Email:"
            tipoInput="email"
            placeholder="nombre_usuario@gmail.com"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <h2>Datos de Domicilio</h2>
        <div className="container-4">
          <Input
            nombreGrupo="localidad"
            label="Localidad:"
            tipoInput="text"
            placeholder="Cordoba"
            value={formData.localidad}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="barrio"
            label="Barrio:"
            tipoInput="text"
            placeholder="Bº Nueva Cordoba📍"
            value={formData.barrio}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="calle"
            label="Calle:"
            tipoInput="text"
            placeholder="Hipolito Irigoyen"
            value={formData.calle}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="numero"
            label="Número:"
            tipoInput="text"
            placeholder="1234 o Lote 33 Mza c"
            value={formData.numero}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="container-btn">
          <button type="button" className="btn" onClick={() => setIsEditable(!isEditable)}>
            Editar
          </button>
          <button type="button" className="btn" disabled={!isEditable} onClick={() => { setOpenModalConfirmation(true); }}>
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
}

export default CRUPatient;
