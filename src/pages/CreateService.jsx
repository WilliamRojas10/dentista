import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Pages/CreateService.css";

import { Input } from "../components/Input.jsx";
import Select from "../components/Select.jsx";
import ModalConfirmation from "../components/ModalConfirmation.jsx";
import ModalWarning from '../components/ModalWarning.jsx';
import axios from 'axios';





function CreateService() {
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
  const [openModalWarning, setOpenModalWarning] = useState(false);
  const [messageWarning, setMessageWarning] = useState("");


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

  }, []);





  const guardar = async () => {
    const datos = {
      ...formData
    };

    try {
      const response = await axios.post('http://localhost:5292/api/Servicio/Guardar', datos);

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
    <div className="create-service" >
      {openModalConfirmation && (
        <ModalConfirmation
          tittleConfirmation={"Advertencia"}
          textConfirmation={"¿Está seguro que sea guardar a este servicio?"}
          openModal={() => {
            setOpenModalConfirmation(false);
          }}
          confirmAction={() => {
         
            guardar()
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

      <form className="form" style={{ width: "50%"}}>
        <h2>Crear nuevo servicio</h2>
   
          <Input
            nombreGrupo="sevicio"
            label="Servicio:"
            tipoInput="text"
            placeholder="Odontologia"
            //value={formData.nombre}
            //onChange={handleChange}
            //disabled={!isEditable}  // El campo está deshabilitado si no está en modo edición
          />
         
       

        
          <button type="button" className="btn" disabled={!isEditable} onClick={() => { setOpenModalConfirmation(true); }}>
            Guardar
          </button>
        
      </form>
    </div>
  );
}

export default CreateService;
