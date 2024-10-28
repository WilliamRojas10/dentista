import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Pages/Form.css";

import { Input } from "../components/Input.jsx";
import Select from "../components/Select.jsx";
import ModalConfirmation from "../components/ModalConfirmation.jsx";
import ModalWarning from '../components/ModalWarning.jsx';
import axios from 'axios';




function CRUBenefit() {
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
  const [openModalWarning, setOpenModalWarning] = useState(false);
  const [messageWarning, setMessageWarning] = useState("");
  const { idPrestacion } = useParams();

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






  const obtenerPrestacion = async () => {
    try {
      const response = await axios.get(`http://localhost:5292/api/Prestacion/ObtenerPrestacionPorId/${idPrestacion}`);
      const data = await response.json();
    } catch (error) {
      console.error('Error al obtener la prestacion del backend:', error);
      setOpenModalWarning(true);
      setMessageWarning(error.message);
    }
  };

  const guardarCambios = async () => {
    const datos = {
      ...formData
    };

    try {
      const response = await axios.post('http://localhost:5292/api/Prestacion/Guardar', datos);

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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'fechaNacimiento') {
//       const age = calculateAge(value);
//       setEdad(age);
//     }
//     if (name === 'codigoArea') {
//       setCodigoArea(value);
//     }
//     else if (name === 'telefono') {
//       setFormData({ ...formData, [name]: value });
//     }
//     else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const imprimirPorConsola = () => {

//     const updatedFormData = { ...formData };

//     if (codigoArea && formData.telefono) {
//       updatedFormData.telefono = `${codigoArea} ${formData.telefono}`;
//     }

//     Object.keys(updatedFormData).forEach((key) => {
//       console.log(key, ": ", updatedFormData[key]);
//     });

//     setFormData(updatedFormData);

//     setIsEditable(false);
//     setOpenModalConfirmation(false);
//   };

  return (
    <div 
        style={{height:'100vh'}}
        className="edit" 
        id={isEditable ? "edit-active" : "show"}>
      {openModalConfirmation && (
        <ModalConfirmation
          tittleConfirmation={"Advertencia"}
          textConfirmation={"¿Está seguro que sea guardar los cambios de edición de la prestacion?"}
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
        <h2>Datos de Prestación</h2>
        <div className="container-3 ">
          <Input
            nombreGrupo="prestacion"
            label="Prestacion:"
            tipoInput="text"
            placeholder="Extraccion dental"
            //value={formData.nombre}
            //onChange={handleChange}
            disabled={!isEditable} 
          />
          <Input
            nombreGrupo="duracion"
            label="Tiempo de duracion:"
            tipoInput="number"
            placeholder="15"
            //value={formData.apellido}
            //onChange={handleChange}
            disabled={!isEditable} 
          />
          <Input
            nombreGrupo="precio"
            label="Precio:"
            tipoInput="text"
            placeholder="$"

            //value={formData.fechaNacimiento}
            //onChange={handleChange}
            disabled={!isEditable}
          />
        
        </div>



        <div className="container-2">

            <Select
              nombreGrupo="tipoPrestacion"
              label="Tipo de prestación:"
              placeholder=""
              opciones={["Consulta","Practica"]}
              //value={codigoArea}
              //onChange={handleChange}
              disabled={!isEditable}
            />
    
          <Select
            nombreGrupo="especialidad"
            label="Especialidad:"
            placeholder="Ortodoncia"
            opciones={["Ortodoncia","Ortopedia"]}
            //value={formData.nacionalidad}
            //onChange={handleChange}
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

export default CRUBenefit;
