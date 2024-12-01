import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/Pages/Form.css";

import { Input } from "../components/Input.jsx";
import Select from "../components/Select.jsx";
import ModalConfirmation from "../components/ModalConfirmation.jsx";
import ModalWarning from '../components/ModalWarning.jsx';
import axios from 'axios';

import { _crearPaciente, _obtenerPacientePorId, _actualizarPaciente } from '../Services/Paciente.js';
import { calculateAge } from "../Utils/calculateAge.js";
import { id } from 'date-fns/locale';


const paises = [
  "Argentina", "Brasil", "Chile", "Bolivia", "Colombia", "Ecuador", "Perú",
  "Uruguay", "Venezuela", "Paraguay", "España", "Estados Unidos", "Italia"
];
const codigosArea = ["+54", "+1"];


function CRUPatient() {
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [openModalWarning, setOpenModalWarning] = useState(false);
  const [tittleWarning, setTittleWarning] = useState("");
  const [messageWarning, setMessageWarning] = useState("");
  const [colorWarning, setColorWarning] = useState("");
  const [patientCrated, setPatientCreated] = useState(false);
  const { idPatient } = useParams();
  const navigate = useNavigate();

  const [codigoArea, setCodigoArea] = useState("");
  const [edad, setEdad] = useState("");
  const [formData, setFormData] = useState({
    dniPaciente: "",
    nombre: "",
    apellido: "",
    email: "",
    // contrasenia: "",
    nacionalidad: "",
    telefono: "",
    fechaNacimiento: "", //En este formato tiene que venir del back
    //edad: "",

    actividad: "",
    titular: "",
    lugarTrabajo: "",
    jerarquia: "",
    //codigoArea: "+549",

    localidad: "",
    barrio: "",
    calle: "",
    numero: "",
  });

  const crearPaciente = async (pacienteData) => {
    try {
      const data = await _crearPaciente(pacienteData);
      setTittleWarning('Aviso');
      setMessageWarning(data.mensaje);
      setPatientCreated(data.suceso);
      setColorWarning('var(--verde)');
      setOpenModalWarning(true);
    } catch (error) {
      //console.error(error);
      const errorMessage = error.response?.data?.mensaje || error.message;
      setTittleWarning('Error');
      setMessageWarning(errorMessage);
      setColorWarning('var(--rojo)');
      setOpenModalWarning(true);
    }
  };

  const obtenerPacientePorId = async (idPaciente) => {
    try {
      const data = await _obtenerPacientePorId(idPaciente);
      setFormData({
        dniPaciente: data.dniPaciente || "",
        nombre: data.nombre || "",
        apellido: data.apellido || "",
        email: data.email || "",
        nacionalidad: data.nacionalidad || "",
        telefono: data.telefono || "",
        fechaNacimiento: data.fechaNacimiento || "",
        actividad: data.actividad || "",
        titular: data.titular || "",
        lugarTrabajo: data.lugarTrabajo || "",
        jerarquia: data.jerarquia || "",
        localidad: data.localidad || "",
        barrio: data.barrio || "",
        calle: data.calle || "",
        numero: data.numero || "",
      });
    } 
    catch (error) {
      const errorMessage = error.response?.data?.mensaje || error.message;
      setTittleWarning('Error');
      setMessageWarning(errorMessage);
      setColorWarning('var(--rojo)');
      setOpenModalWarning(true);
    }
  };

  const actualizarPaciente = async (pacienteDTO) => {
    let idPaciente = idPatient;
    try {
      const data = await _actualizarPaciente(idPaciente, pacienteDTO);
      setTittleWarning('Aviso');
      setMessageWarning(data.mensaje);
      setColorWarning('var(--verde)');
      setOpenModalWarning(true);
    } catch (error) {
      const errorMessage = error.response?.data?.mensaje || error.message;      
      setTittleWarning('Error');
      setMessageWarning(errorMessage);
      setColorWarning('var(--rojo)');
      setOpenModalWarning(true);
    }
  };


  const formatStates = () => { // limpia los estados
    const resetData = { ...formData };
    Object.keys(resetData).forEach((key) => {
      resetData[key] = "";
    });
    setFormData(resetData);
  };

  const handleChange = (e) => { // actualiza los estados en base a lo que se escribe en el input
    const { name, value } = e.target;
    // if (name === 'fechaNacimiento') {
    //   const age = calculateAge(value);//TODO:
    //   setEdad(age);
    // }
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

  const confirmSaved = async () => {
    // try {

    if (idPatient === '0') {
      await crearPaciente(formData);
    } else {
      await actualizarPaciente(formData);
    }
    setOpenModalConfirmation(false);
    // console.log("XQ CARAJO NO SE CIERRA EL MODAL DE CONFIRMATION");
    // } catch (error) {
    //   setMessageWarning(error.response ? error.response.data : "Error desconocido");
    //   setOpenModalWarning(true);
    // }
  };


  useEffect(() => {
    if (idPatient == '0') {
      console.log("nuevo paciente y formateado y formateado el formData");
      formatStates();
      setIsEditable(true);
      // crearPaciente(formData);
    }
    else {
      obtenerPacientePorId(idPatient);

    }
  }, [idPatient]);

  useEffect(() => {//Calcular la edad
    if (formData.fechaNacimiento) {
      const age = calculateAge(formData.fechaNacimiento);
      setEdad(age);
    }
  }, [formData.fechaNacimiento]);

  return (
    <div className="edit" id={isEditable ? "edit-active" : "show"}>
      {openModalConfirmation &&
        <ModalConfirmation
          tittleConfirmation={"Advertencia"}
          textConfirmation={idPatient === '0' ? "¿Está seguro que desea guardar el paciente?" 
            : "¿Está seguro que desea guardar los cambios realizados?"}
          openModal={() => {
            setOpenModalConfirmation(false);
          }}
          confirmAction={() => {
            confirmSaved()
          }}
          cancelAction={() => {
            setOpenModalConfirmation(false);
          }}
          textButtonClose={"Cancelar"}
          textButtonConfirmation={"Guardar"}
        />
      }

      {openModalWarning && (
        <ModalWarning
          tittleWarning={tittleWarning}
          textWarning={messageWarning}
          openModal={() => {
            setOpenModalWarning(false);
            if (patientCrated){
              navigate("/managePatients");}
          }}
          textButton={"Aceptar"}
          color={colorWarning}
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
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="apellido"
            label="Apellido:"
            tipoInput="text"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            disabled={!isEditable}
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
            nombreGrupo="dniPaciente"  // Esto debe coincidir con el nombre de la propiedad en formData
            label="Nº de documento:"
            tipoInput="text"
            placeholder="DNI: 12.345.987"
            value={formData.dniPaciente}
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
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CRUPatient;
