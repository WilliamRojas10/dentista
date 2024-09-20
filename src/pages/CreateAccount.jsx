import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CreateAccount.css"; // TODO CAMBIAR A FETCH
import { Input } from "../components/Input.jsx";
import Select from "../components/Select.jsx";
import Warning from "../components/Warning.jsx";

function CreateAccount() {
  const navigate = useNavigate();
  const paises = [
    "Argentina", "Brasil", "Chile", "Bolivia", "Colombia", "Ecuador", "Perú",
    "Uruguay", "Venezuela", "Paraguay", "España", "Estados Unidos", "Italia"
  ];
  const codigoArea = ["+54", "+1"];

  const [formData, setFormData] = useState({
    nombre: "", apellido: "", fechaNacimiento: "", localidad: "", barrio: "",
    calle: "", numero: "", nacionalidad: "", telefono: "", email: "", dni: "", contrasenia: "",
  });

  const [codigo, setCodigo] = useState("");
  const [openWarning, setOpenWarning] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCodigoChange = (e) => {
    setCodigo(e.target.value);
  };

  const dataSend = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.apellido || !formData.dni || !formData.contrasenia) {
      alert("Por favor, complete los campos obligatorios.");
      return;
    }

    const dataToSend = {
      ...formData,
      telefono: `${codigo} ${formData.telefono}`
    };

    try {
      const response = await axios.post("http://localhost:5292/api/Paciente", dataToSend, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      navigate("/login");
    } catch (error) {
      console.error("Error al enviar los datos al backend en CreateAccount:", error);
      setOpenWarning(true); // Mostrar el modal de advertencia
    }
  };

  const closeWarningModal = () => {
    setOpenWarning(false); // Solo cierra el modal sin modificar otros estados
  };

  return (
    <div className="create-account">
      {openWarning && (
        <Warning
          textWarning={"Error al cargar los datos al servidor, intente de nuevo o comuníquese con el administrador del servicio"}
          closeWarning={closeWarningModal}
        />
      )}
      <form className="form" onSubmit={dataSend}>
        <h2>Registro de Usuario</h2>
        <div className="container-3">
          <Input
            nombreGrupo="nombre"
            label="Nombre:"
            tipoInput="text"
            placeholder="Nombre"
            require={true}
            value={formData.nombre}
            onChange={handleChange}
          />
          <Input
            nombreGrupo="apellido"
            label="Apellido:"
            tipoInput="text"
            placeholder="Apellido"
            require={true}
            value={formData.apellido}
            onChange={handleChange}
          />
          <Input
            nombreGrupo="fechaNacimiento"
            label="Fecha de Nacimiento:"
            tipoInput="date"
            require={true}
            value={formData.fechaNacimiento}
            onChange={handleChange}
          />
        </div>

        <div className="container-4">
          <Input
            nombreGrupo="localidad"
            label="Localidad:"
            tipoInput="text"
            placeholder="Cordoba"
            value={formData.localidad}
            onChange={handleChange}
          />
          <Input
            nombreGrupo="barrio"
            label="Barrio:"
            tipoInput="text"
            placeholder="Bº Nueva Cordoba📍"
            value={formData.barrio}
            onChange={handleChange}
          />
          <Input
            nombreGrupo="calle"
            label="Calle:"
            tipoInput="text"
            placeholder="Hipolito Irigoyen"
            value={formData.calle}
            onChange={handleChange}
          />
          <Input
            nombreGrupo="numero"
            label="Número:"
            tipoInput="text"
            placeholder="1234 o Lote 33 Mza c"
            value={formData.numero}
            onChange={handleChange}
          />
        </div>

        <div className="container-3">
          <Select
            nombreGrupo="nacionalidad"
            label="Nacionalidad:"
            placeholder="Seleccionar"
            opciones={paises}
            value={formData.nacionalidad}
            onChange={handleChange}
            require={true}
          />
          <div className="container-1">
            <Select
              nombreGrupo="codigoArea"
              label="Teléfono:"
              placeholder="Área 🌐"
              opciones={codigoArea}
              value={codigo}
              onChange={handleCodigoChange}
              require={true}
            />
            <Input
              nombreGrupo="telefono"
              label="."
              tipoInput="text"
              placeholder="351 123 4567"
              value={formData.telefono}
              onChange={handleChange}
              require={true}  
            />
          </div>
          <Input
            nombreGrupo="email"
            label="Correo electrónico:"
            tipoInput="text"
            placeholder="nombre_usuario@gmail.com"
            value={formData.email}
            onChange={handleChange}
            require={false}
          />
        </div>

        <div className="container-2">
          <Input
            nombreGrupo="dni"
            label="DNI (Número de Documento)"
            tipoInput="text"
            placeholder="DNI: 12.345.987"
            require={true}
            value={formData.dni}
            onChange={handleChange}
          />
          <Input
            nombreGrupo="contrasenia"
            label="Contraseña:"
            tipoInput="password"
            require={true}
            value={formData.contrasenia}
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit">
          Crear Cuenta
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
