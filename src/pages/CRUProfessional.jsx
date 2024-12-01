import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Pages/Form.css";
import { Input } from "../components/Input.jsx";
import Select from "../components/Select.jsx";
import ModalConfirmation from "../components/ModalConfirmation.jsx";
import ModalWarning from '../components/ModalWarning.jsx';
import axios from 'axios';

import { calculateAge } from "../Utils/calculateAge.js";
import { _crearProfesional, _obtenerProfesionalPorId, _actualizarProfesional } from '../Services/Profesional.js';
import { da } from 'date-fns/locale';

//TODO: falta mejorar la estetica con dias laborales


const paises = [
  "Argentina", "Brasil", "Chile", "Bolivia", "Colombia", "Ecuador", "Perú",
  "Uruguay", "Venezuela", "Paraguay", "España", "Estados Unidos", "Italia"
];
const codigosArea = ["+54", "+1"];
const diasLaborales = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

function CRUProfessional() {
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
  const [openModalWarning, setOpenModalWarning] = useState(false);
  const [messageWarning, setMessageWarning] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isEditableDays, setIsEditableDays] = useState({
    lunes: false,
    martes: false,
    miercoles: false,
    jueves: false,
    viernes: false,
    sabado: false,
    domingo: false,
  });

  const { idProfessional } = useParams();

  const [codigoArea, setCodigoArea] = useState("");
  const [edad, setEdad] = useState("");
  const [formData, setFormData] = useState({
    dniProfesional: "",
    nombre: "william",
    apellido: "rojas",
    email: "",
    telefono: "",
    nacionalidad: "",
    fechaNacimiento: "",
    //fechaRegistro: "",
    matricula: "",
    fechaVecimientoMatricula: "",
    fechaFinContrato: "",
   // idServicio: "",

    localidad: "",
    barrio: "",
    calle: "",
    numero: "",
  });

//-----------------------------

const crearProfesional = async (profesionalData) => {
  try {
    const data = await _crearProfesional(profesionalData);
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

const obtenerProfesionalPorId = async (idProfesional) => {
  try {
    const data = await _obtenerProfesionalPorId(idProfesional);
    setFormData({
      dniProfesional: data.dniProfesional || "",
      nombre: data.nombre || "",
      apellido: data.apellido || "",
      email: data.email || "",
      telefono: data.telefono || "",
      nacionalidad: data.nacionalidad || "",
      fechaNacimiento: data.fechaNacimiento || "",

      matricula: data.matricula || "",
      fechaVecimientoMatricula: data.fechaVecimientoMatricula || "",
      fechaFinContrato: data.fechaFinContrato || "",
     // idServicio: "",
      
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

const actualizarProfesional = async (profesionalDTO) => {
  let idProfesional = idProfessional;
  try {
    const data = await _actualizarProfesional(idProfesional, profesionalDTO);
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

  if (idProfessional === '0') {
    await crearProfesional(formData);
  } else {
    await actualizarProfesional(formData);
  }
  setOpenModalConfirmation(false);
  // console.log("XQ CARAJO NO SE CIERRA EL MODAL DE CONFIRMATION");
  // } catch (error) {
  //   setMessageWarning(error.response ? error.response.data : "Error desconocido");
  //   setOpenModalWarning(true);
  // }
};


useEffect(() => {
  if (idProfessional == '0') {
    console.log("nuevo profesional y formateado y formateado el formData");
    formatStates();
    setIsEditable(true);
  }
  else {
    obtenerProfesionalPorId(idProfessional);

  }
}, [idProfessional]);

useEffect(() => {//Calcular la edad
  if (formData.fechaNacimiento) {
    const age = calculateAge(formData.fechaNacimiento);
    setEdad(age);
  }
}, [formData.fechaNacimiento]);

//-----------------------------
  const handleDayClick = (day) => {
    setIsEditableDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day] // Cambia el estado de habilitado/deshabilitado
    }));
  };


  return (
    <div className="edit" id={isEditable ? "edit-active" : "show"}>
        {openModalConfirmation &&
        <ModalConfirmation
          tittleConfirmation={"Advertencia"}
          textConfirmation={idProfessional === '0' ? "¿Está seguro que desea guardar el profesional?" 
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
              navigate("/manageProfessionals");}
          }}
          textButton={"Aceptar"}
          color={colorWarning}
        />
      )}
      <form className="form">
        <h2>Datos del Profesional</h2>
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
            nombreGrupo="dniProfesional"  // Cambiado de 'documento' a 'dni' para que se pueda agregar valores en el input
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

        <h2>Datos profesionales</h2>

        <div className="container-4" >

          {/* <Select
            //TODO: A mejorar el funcionamiento del select para que pueda escribir
            nombreGrupo="servicio"
            label="Servicios:"
            placeholder="Ver"
            opciones={formData.servicios}
            value={formData.servicios}
            onChange={handleChange}
            disabled={!isEditable}
          /> */}
          <Input
            nombreGrupo="matricula"
            label="Matricula:"
            tipoInput="text"
            placeholder="1234"
            value={formData.matricula}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="fechaVencimientoMatricula"
            label="Vencimiento de la matricula:"
            tipoInput="date"
            placeholder=""
            value={formData.vecimientoMatricula}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="fechaFinContrato"
            label="Fin del Contrato:"
            tipoInput="date"
            placeholder=""
            value={formData.finContrato}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <h2 style={{ cursor: 'pointer' }} 
            onClick={() => setSeeMore(!seeMore) }
        > Dias laborales ▼ </h2>

        {diasLaborales.map((dia, index) => (
          <div key={index} className="container-5" 
          style={seeMore ? { display: 'grid'} : { display: 'none' }}>
            <div className='container-days-week'>
              <button 
                className={isEditableDays[dia] ? 'button-day_active' : 'button-day'} 
                disabled={!isEditable}
                onClick={() => handleDayClick(dia)}
                type="button"
              >
                  {dia}
              </button>
            </div>


            <Input
              nombreGrupo={`horaInicio${dia}`}
              label="Hora de inicio:"
              tipoInput="time"
              // value={formData.lunes}
              //  onChange={handleChange}
              require={!isEditableDays[dia] }
              disabled={!isEditableDays[dia]}
            />
            <Input
              nombreGrupo="horaFin"
              label="Hora de Fin:"
              tipoInput="time"
              // value={formData.lunes}
              //  onChange={handleChange}
              require={!isEditableDays[dia]}
              disabled={!isEditableDays[dia]}
            />
            <Input
              nombreGrupo="espacioReceso"
              label="Hora de inicio de receso:"
              tipoInput="time"
              // value={formData.lunes}
              //  onChange={handleChange}
              require={!isEditableDays[dia]}
              disabled={!isEditableDays[dia]}
            />
            <Input
              nombreGrupo="espacioReceso"
              label="Hora de fin de receso:"
              tipoInput="time"
              // value={formData.lunes}
              //  onChange={handleChange}
              require={!isEditableDays[dia]}
              disabled={!isEditableDays[dia]}
            />
          </div>

        ))}








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

export default CRUProfessional;
