import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Pages/Form.css";
import { Input } from "../components/Input.jsx";
import Select from "../components/Select.jsx";
import ModalConfirmation from "../components/ModalConfirmation.jsx";
import ModalWarning from '../components/ModalWarning.jsx';
import axios from 'axios';

import { calculateAge } from "../Utils/calculateAge.js";
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

  const { idProfesional } = useParams();

  const [codigoArea, setCodigoArea] = useState("");
  const [edad, setEdad] = useState("");
  const [formData, setFormData] = useState({
    nombre: "william",
    apellido: "rojas",
    fechaNacimiento: "2000-03-24", //En este formato tiene que venir del back
    //edad: "",
    servicios: ["Odontologo", "Nutricionista"],
    matricula: "",
    vecimientoMatricula: "",
    finContrato: "",
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


  useEffect(() => {
    obtenerPaciente();
    setEdad(calculateAge(formData.fechaNacimiento));
  }, []);



  const obtenerPaciente = async () => {
    try {
      const response = await axios.get(`http://localhost:5292/api/Paciente/ObtenerPacientePorId/${idProfesional}`);
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

  const handleDayClick = (day) => {
    setIsEditableDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day] // Cambia el estado de habilitado/deshabilitado
    }));
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

        <h2>Datos profesionales</h2>

        <div className="container-4">

          <Select
            //TODO: A mejorar el funcionamiento del select para que pueda escribir
            nombreGrupo="servicio"
            label="Servicios:"
            placeholder="Ver"
            opciones={formData.servicios}
            value={formData.servicios}
            onChange={handleChange}
            disabled={!isEditable}
          />
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
            nombreGrupo="vencimientoMatricula"
            label="Vencimiento de la matricula:"
            tipoInput="date"
            placeholder=""
            value={formData.vecimientoMatricula}
            onChange={handleChange}
            disabled={!isEditable}
          />
          <Input
            nombreGrupo="finContrato"
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
          <div key={index} className="container-5" style={seeMore ? { display: 'grid' } : { display: 'none' }}>
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
